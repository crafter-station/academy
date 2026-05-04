import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing ${name}`);
  }

  return value;
}

function getSiteUrl(request: Request) {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin
  ).replace(/\/$/, "");
}

export async function GET(request: Request) {
  try {
    const siteUrl = getSiteUrl(request);
    const priceId = getRequiredEnv("STRIPE_PRICE_ID");
    const stripe = new Stripe(getRequiredEnv("STRIPE_SECRET_KEY"));

    const session = await stripe.checkout.sessions.create({
      allow_promotion_codes: true,
      cancel_url: `${siteUrl}/`,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      metadata: {
        cohort: "1",
        priceId,
        product: "crafter-academy",
      },
      mode: "payment",
      payment_intent_data: {
        metadata: {
          cohort: "1",
          priceId,
          product: "crafter-academy",
        },
      },
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    });

    if (!session.url) {
      throw new Error("Stripe did not return a checkout URL");
    }

    return NextResponse.redirect(session.url, 303);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to create checkout";

    return new Response(`Stripe checkout configuration error: ${message}`, {
      status: 500,
    });
  }
}
