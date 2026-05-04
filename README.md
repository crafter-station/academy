# Crafter Academy

Crafter Academy is a Next.js landing page for Cohort 01, a 10-week live program by Crafter Station for programmers who want to build, package, and launch real products.

The app includes the public landing page, Stripe Checkout for a one-time USD 999 cohort seat, Clerk sign-in, and webhook-driven enrollment fulfillment.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui primitives
- Biome for linting and formatting
- Bun for package management and scripts
- Stripe Checkout for hosted payments
- Clerk for email-code sign-in
- Resend for transactional email

## Project Structure

- `src/app/page.tsx`: main landing page
- `src/app/layout.tsx`: metadata, fonts, and root layout
- `src/app/globals.css`: Tailwind imports, theme tokens, and global styles
- `src/app/checkout/route.ts`: Stripe checkout session route
- `src/app/api/stripe/webhook/route.ts`: Stripe webhook fulfillment route
- `src/app/enrolled/page.tsx`: protected paid enrollment page
- `src/components/landing-atmosphere.tsx`: landing page visual background
- `src/components/ui/*`: shared UI primitives
- `src/lib/utils.ts`: shared utility helpers

## Getting Started

Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a local environment file with the variables documented in `.env.example`:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
STRIPE_SECRET_KEY=
STRIPE_PRICE_ID=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
RESEND_API_KEY=
RESEND_FROM_EMAIL=
```

Notes:

- `STRIPE_PRICE_ID` should point to a manually configured one-time USD 999 Stripe Price.
- `STRIPE_WEBHOOK_SECRET` comes from the Stripe webhook endpoint or `stripe listen` during local testing.
- `NEXT_PUBLIC_SITE_URL` is used for Stripe success and cancel URLs and welcome email links.
- If required Stripe variables are missing, `/checkout` returns a clear 500 configuration error.

## Commands

```bash
bun run dev          # Start the local Next.js dev server
bun run lint         # Run Biome checks
bun run format       # Format files with Biome
bunx tsc --noEmit    # Typecheck the project
bun run build        # Build for production
bun run start        # Serve the production build
```

## Checkout Flow

The landing page links to `GET /checkout`. That route creates a hosted Stripe Checkout Session and redirects the user to Stripe with:

- Price: `STRIPE_PRICE_ID`
- Success URL: `${NEXT_PUBLIC_SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`
- Cancel URL: `NEXT_PUBLIC_SITE_URL`
- Metadata: `cohort=1`, `product=crafter-academy`

Fulfillment happens only from the verified Stripe webhook at `POST /api/stripe/webhook`. Subscribe the endpoint to `checkout.session.completed`. The webhook creates or updates the Clerk user, marks `privateMetadata.enrollment.status` as `paid`, and sends the Resend welcome email.

For local webhook testing:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

## Deployment

Deploy as a standard Next.js app. Set the same environment variables in the deployment platform and ensure `NEXT_PUBLIC_SITE_URL` matches the production domain.

Before handing off code changes, run:

```bash
bun run lint
bunx tsc --noEmit
bun run build
```
