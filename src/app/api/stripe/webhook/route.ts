import { clerkClient } from "@clerk/nextjs/server";
import { Resend } from "resend";
import Stripe from "stripe";

export const runtime = "nodejs";

const PRODUCT_METADATA = "crafter-academy";
const COHORT_METADATA = "1";

type EnrollmentMetadata = {
  enrollment?: {
    status?: string;
    welcomeEmailSentAt?: string;
  };
};

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing ${name}`);
  }

  return value;
}

function createStripe() {
  return new Stripe(getRequiredEnv("STRIPE_SECRET_KEY"));
}

function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://academy.crafter.run"
  ).replace(/\/$/, "");
}

function getStripeObjectId(value: string | { id?: string } | null) {
  return typeof value === "string" ? value : value?.id;
}

async function sendWelcomeEmail(email: string) {
  const siteUrl = getSiteUrl();
  const resend = new Resend(getRequiredEnv("RESEND_API_KEY"));

  await resend.emails.send({
    from: getRequiredEnv("RESEND_FROM_EMAIL"),
    to: email,
    subject: "Welcome to Crafter Academy",
    text: `Welcome to the program.

Your academy access is ready. Open ${siteUrl}/enrolled and sign in with this email address: ${email}

Ready to ship some cool shit?`,
  });
}

async function sessionHasExpectedPrice(
  stripe: Stripe,
  sessionId: string,
  priceId: string,
) {
  const lineItems = await stripe.checkout.sessions.listLineItems(sessionId, {
    limit: 100,
  });

  return lineItems.data.some((lineItem) => lineItem.price?.id === priceId);
}

async function fulfillCheckoutSession(
  stripe: Stripe,
  session: Stripe.Checkout.Session,
  paidAt: string,
) {
  const expectedPriceId = getRequiredEnv("STRIPE_PRICE_ID");

  if (
    session.mode !== "payment" ||
    session.payment_status !== "paid" ||
    session.metadata?.product !== PRODUCT_METADATA ||
    session.metadata.cohort !== COHORT_METADATA ||
    session.metadata.priceId !== expectedPriceId
  ) {
    return;
  }

  const hasExpectedPrice = await sessionHasExpectedPrice(
    stripe,
    session.id,
    expectedPriceId,
  );

  if (!hasExpectedPrice) {
    return;
  }

  const email = (session.customer_details?.email ?? session.customer_email)
    ?.trim()
    .toLowerCase();

  if (!email) {
    throw new Error(`Missing customer email for Stripe session ${session.id}`);
  }

  const client = await clerkClient();
  const existingUsers = await client.users.getUserList({
    emailAddress: [email],
    limit: 1,
  });
  const user =
    existingUsers.data[0] ??
    (await client.users.createUser({
      emailAddress: [email],
      skipPasswordRequirement: true,
      privateMetadata: {
        enrollment: {
          cohort: COHORT_METADATA,
          paidAt,
          product: PRODUCT_METADATA,
          provider: "stripe",
          status: "paid",
          stripeCheckoutSessionId: session.id,
          stripeCustomerId: getStripeObjectId(session.customer),
          stripePaymentIntentId: getStripeObjectId(session.payment_intent),
          stripePriceId: expectedPriceId,
        },
      },
    }));

  const metadata = user.privateMetadata as EnrollmentMetadata;
  const welcomeEmailSentAt = metadata.enrollment?.welcomeEmailSentAt;

  await client.users.updateUserMetadata(user.id, {
    privateMetadata: {
      ...user.privateMetadata,
      enrollment: {
        ...metadata.enrollment,
        cohort: COHORT_METADATA,
        paidAt,
        product: PRODUCT_METADATA,
        provider: "stripe",
        status: "paid",
        stripeCheckoutSessionId: session.id,
        stripeCustomerId: getStripeObjectId(session.customer),
        stripePaymentIntentId: getStripeObjectId(session.payment_intent),
        stripePriceId: expectedPriceId,
      },
    },
  });

  if (!welcomeEmailSentAt) {
    await sendWelcomeEmail(email);

    const updatedUser = await client.users.getUser(user.id);
    const updatedMetadata = updatedUser.privateMetadata as EnrollmentMetadata;

    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        ...updatedUser.privateMetadata,
        enrollment: {
          ...updatedMetadata.enrollment,
          welcomeEmailSentAt: new Date().toISOString(),
        },
      },
    });
  }
}

export async function POST(request: Request) {
  const stripe = createStripe();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return new Response("Missing Stripe signature", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      await request.text(),
      signature,
      getRequiredEnv("STRIPE_WEBHOOK_SECRET"),
    );
  } catch {
    return new Response("Invalid Stripe signature", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    await fulfillCheckoutSession(
      stripe,
      event.data.object,
      new Date(event.created * 1000).toISOString(),
    );
  }

  return Response.json({ received: true });
}
