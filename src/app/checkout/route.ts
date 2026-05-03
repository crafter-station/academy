import { Polar } from "@polar-sh/sdk";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing ${name}`);
  }

  return value;
}

function getPolarServer() {
  const server = process.env.POLAR_SERVER ?? "production";

  if (server !== "production" && server !== "sandbox") {
    throw new Error("POLAR_SERVER must be production or sandbox");
  }

  return server;
}

function getSiteUrl(request: Request) {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin
  ).replace(/\/$/, "");
}

export async function GET(request: Request) {
  try {
    const siteUrl = getSiteUrl(request);
    const polar = new Polar({
      accessToken: getRequiredEnv("POLAR_ACCESS_TOKEN"),
      server: getPolarServer(),
    });

    const checkout = await polar.checkouts.create({
      products: [getRequiredEnv("POLAR_PRODUCT_ID")],
      successUrl: `${siteUrl}/?checkout=success&checkout_id={CHECKOUT_ID}`,
      returnUrl: siteUrl,
      metadata: {
        cohort: "1",
        product: "crafter-academy",
      },
    });

    return NextResponse.redirect(checkout.url, 303);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to create checkout";

    return new Response(`Polar checkout configuration error: ${message}`, {
      status: 500,
    });
  }
}
