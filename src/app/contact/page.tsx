import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Crafter Academy",
  description: "Contact the Crafter Academy team.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <a className="text-sm text-[#737373] hover:text-[#171717]" href="/">
        Back to Crafter Academy
      </a>
      <h1 className="mt-8 font-heading text-4xl font-medium tracking-normal text-[#171717] sm:text-5xl">
        Contact
      </h1>
      <p className="mt-5 text-lg leading-8 text-[#525252]">
        Questions about Crafter Academy, scholarships, checkout, or cohort fit?
        Email the team and we will follow up.
      </p>
      <div className="mt-10 rounded-[1.75rem] border border-[#e5e5e5] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#737373]">
          Email
        </p>
        <a
          className="mt-3 block text-xl font-medium text-[#171717] underline decoration-[#d4d4d4] underline-offset-4 hover:decoration-[#171717]"
          href="mailto:academy@crafterstation.com"
        >
          academy@crafterstation.com
        </a>
      </div>
    </main>
  );
}
