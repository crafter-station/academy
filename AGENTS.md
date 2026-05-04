# Repository Instructions

## Project Facts

- Single-package Next.js 16.2.4 App Router app; real routes live in `src/app`, not `app/` as the boilerplate README says.
- Main landing page is `src/app/page.tsx`; metadata and fonts are in `src/app/layout.tsx`; global Tailwind/theme tokens are in `src/app/globals.css`.
- `CLAUDE.md` only delegates to this file, so keep `AGENTS.md` as the source of truth for agent guidance.
- Stripe checkout is `GET /checkout` in `src/app/checkout/route.ts`; the app creates a hosted one-time Checkout Session for a manually configured Stripe Price.
- Paid enrollment fulfillment is `POST /api/stripe/webhook` in `src/app/api/stripe/webhook/route.ts`; verified `checkout.session.completed` events create/update Clerk users, mark enrollment metadata, and send the Resend welcome email.

## Commands

- Use Bun; `bun.lock` is the lockfile.
- Dev server: `bun run dev`.
- Lint and format check: `bun run lint` (`biome check`).
- Write formatting fixes: `bun run format` or focused `bunx biome check --write <files>`.
- Typecheck: `bunx tsc --noEmit` (there is no package script for this).
- Production build: `bun run build`.
- Before handoff after code changes, run `bun run lint`, `bunx tsc --noEmit`, and `bun run build` unless the change is docs-only.

## Toolchain Gotchas

- Next 16 APIs and route-handler typings may differ from older Next versions; verify against current docs or installed types before adding new App Router APIs. This install has no `node_modules/next/dist/docs/` directory.
- Tailwind is v4 through `@tailwindcss/postcss`; there is no `tailwind.config.*`. Add tokens and theme wiring in `src/app/globals.css`.
- Biome organizes imports and formats with semicolons; do not fight its output.
- `next-env.d.ts`, `.next/`, and real `.env*` files are ignored. `.env.example` is intentionally tracked.

## Environment

- Required Stripe vars are documented in `.env.example`: `STRIPE_SECRET_KEY`, `STRIPE_PRICE_ID`, `STRIPE_WEBHOOK_SECRET`, and `NEXT_PUBLIC_SITE_URL`.
- `STRIPE_PRICE_ID` must point to a manually configured one-time USD 999 Stripe Price; do not create or mutate Stripe products/prices from app code unless explicitly requested.

## Verification Notes

- No test runner or CI workflow is currently configured; use lint, typecheck, and build as the default verification path.
- With missing Stripe env vars, `/checkout` should return a clear 500 configuration error; with valid vars, it should redirect to Stripe Checkout.
