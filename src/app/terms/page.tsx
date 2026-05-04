import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Crafter Academy",
  description: "Terms for using Crafter Academy and related program materials.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <a className="text-sm text-[#737373] hover:text-[#171717]" href="/">
        Back to Crafter Academy
      </a>
      <h1 className="mt-8 font-heading text-4xl font-medium tracking-normal text-[#171717] sm:text-5xl">
        Terms and Conditions
      </h1>
      <p className="mt-4 text-sm leading-7 text-[#737373]">
        Last updated: May 3, 2026
      </p>
      <div className="mt-10 space-y-8 text-base leading-8 text-[#525252]">
        <section>
          <h2 className="font-heading text-2xl text-[#171717]">
            Use of the program
          </h2>
          <p className="mt-3">
            Crafter Academy is a live educational program for programmers who
            want to build and launch software products. By reserving a seat or
            using related materials, you agree to participate respectfully and
            avoid sharing private cohort materials without permission.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl text-[#171717]">Payments</h2>
          <p className="mt-3">
            Checkout is processed by a third-party payment provider. Prices,
            seat availability, and program dates may change before purchase, but
            confirmed purchases will be handled according to the details shown
            at checkout and any written agreement with the team.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl text-[#171717]">Refunds</h2>
          <p className="mt-3">
            Refund and cancellation questions are handled case by case. Review
            the refund policy or contact us before purchasing if you need a
            specific commitment in writing.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl text-[#171717]">
            No guarantees
          </h2>
          <p className="mt-3">
            We teach product, engineering, launch, and distribution practices,
            but we do not guarantee business outcomes, revenue, funding,
            employment, or audience growth.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl text-[#171717]">Contact</h2>
          <p className="mt-3">
            For questions about these terms, contact us at{" "}
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
