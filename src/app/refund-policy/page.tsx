import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Crafter Academy",
  description: "Refund and cancellation information for Crafter Academy.",
};

export default function RefundPolicyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <a className="text-sm text-[#737373] hover:text-[#171717]" href="/">
        Back to Crafter Academy
      </a>
      <h1 className="mt-8 font-heading text-4xl font-medium tracking-normal text-[#171717] sm:text-5xl">
        Refund Policy
      </h1>
      <p className="mt-4 text-sm leading-7 text-[#737373]">
        Last updated: May 3, 2026
      </p>
      <div className="mt-10 space-y-8 text-base leading-8 text-[#525252]">
        <section>
          <h2 className="font-heading text-2xl text-[#171717]">
            Before you purchase
          </h2>
          <p className="mt-3">
            Crafter Academy has limited seats and live cohort planning depends
            on confirmed reservations. Please review the program details and
            contact us before purchase if you have timing, eligibility, or
            cancellation concerns.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl text-[#171717]">
            Refund requests
          </h2>
          <p className="mt-3">
            Refund requests are reviewed case by case. Approval may depend on
            the request date, cohort status, payment processing constraints, and
            any written terms shared with you before purchase.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl text-[#171717]">
            Cancellations
          </h2>
          <p className="mt-3">
            If you can no longer attend, contact us as soon as possible so we
            can review your options and determine whether your seat can be
            reassigned.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl text-[#171717]">Contact</h2>
          <p className="mt-3">
            For refund or cancellation questions, email{" "}
            <a
              className="text-[#171717] underline"
              href="mailto:academy@crafterstation.com"
            >
              academy@crafterstation.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
