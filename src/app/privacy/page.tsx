import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Crafter Academy",
  description: "How Crafter Academy handles personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <a className="text-sm text-[#737373] hover:text-[#171717]" href="/">
        Back to Crafter Academy
      </a>
      <h1 className="mt-8 font-heading text-4xl font-medium tracking-normal text-[#171717] sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm leading-7 text-[#737373]">
        Last updated: May 3, 2026
      </p>
      <div className="mt-10 space-y-8 text-base leading-8 text-[#525252]">
        <section>
          <h2 className="font-heading text-2xl text-[#171717]">
            Information we collect
          </h2>
          <p className="mt-3">
            We may collect information you provide when you contact us, apply
            for a scholarship, reserve a seat, or participate in the program.
            This can include your name, email address, payment status, and
            messages you send to the team.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl text-[#171717]">
            How we use it
          </h2>
          <p className="mt-3">
            We use this information to respond to questions, manage
            applications, process reservations, operate the cohort, send program
            updates, and improve the academy experience.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl text-[#171717]">
            Third-party services
          </h2>
          <p className="mt-3">
            Payments and checkout may be handled by third-party providers. Those
            services process information according to their own privacy and
            security practices.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl text-[#171717]">Retention</h2>
          <p className="mt-3">
            We keep information only as long as needed to operate the program,
            satisfy legal or accounting requirements, and maintain useful
            records for support.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl text-[#171717]">Contact</h2>
          <p className="mt-3">
            For privacy questions, contact us at{" "}
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
