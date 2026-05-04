import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <main className="academy-grid flex min-h-screen items-center justify-center px-6 py-16">
      <section className="soft-panel max-w-2xl rounded-[2rem] p-8 text-center sm:p-12">
        <p className="font-mono text-[11px] font-medium tracking-[0.24em] text-[rgb(var(--content-subtle))] uppercase">
          Payment received
        </p>
        <h1 className="mt-5 font-heading text-4xl text-[rgb(var(--content-emphasis))] sm:text-5xl sm:leading-tight">
          Your enrollment is being confirmed.
        </h1>
        <p className="mt-5 text-lg text-[rgb(var(--content-default))]">
          We are setting up your academy access now. Check your email for the
          welcome note, then sign in with the same email you used at checkout.
        </p>
        <Link
          className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-[rgb(var(--content-emphasis))] px-5 text-sm font-semibold text-white transition hover:bg-black/80"
          href="/enrolled"
        >
          Go to enrolled page
        </Link>
      </section>
    </main>
  );
}
