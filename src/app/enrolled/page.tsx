import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

type EnrollmentMetadata = {
  enrollment?: {
    status?: string;
  };
};

export default async function EnrolledPage() {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) {
    return redirectToSignIn({ returnBackUrl: "/enrolled" });
  }

  const user = await currentUser();
  const metadata = user?.privateMetadata as EnrollmentMetadata;
  const isEnrolled = metadata.enrollment?.status === "paid";

  if (!isEnrolled) {
    return (
      <main className="academy-grid flex min-h-screen items-center justify-center px-6 py-16">
        <section className="soft-panel max-w-xl rounded-[2rem] p-8 text-center sm:p-10">
          <p className="font-mono text-[11px] font-medium tracking-[0.24em] text-[rgb(var(--content-subtle))] uppercase">
            Access pending
          </p>
          <h1 className="mt-4 font-heading text-3xl text-[rgb(var(--content-emphasis))] sm:text-4xl">
            We could not find your enrollment yet.
          </h1>
          <p className="mt-4 text-[rgb(var(--content-default))]">
            Make sure you signed in with the same email you used at checkout. If
            you just paid, give the confirmation email a minute to arrive.
          </p>
          <Link
            className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-[rgb(var(--content-emphasis))] px-5 text-sm font-semibold text-white transition hover:bg-black/80"
            href="/sign-in?redirect_url=/enrolled"
          >
            Sign in with another email
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="academy-grid flex min-h-screen items-center justify-center px-6 py-16">
      <section className="soft-panel max-w-2xl rounded-[2rem] p-8 text-center sm:p-12">
        <p className="font-mono text-[11px] font-medium tracking-[0.24em] text-[rgb(var(--content-subtle))] uppercase">
          Cohort 01 enrolled
        </p>
        <h1 className="mt-5 font-heading text-4xl text-[rgb(var(--content-emphasis))] sm:text-6xl sm:leading-[0.95]">
          Hello, you are enrolled in the program.
        </h1>
        <p className="mt-6 text-xl text-[rgb(var(--content-default))] sm:text-2xl">
          Ready to ship some cool shit?
        </p>
      </section>
    </main>
  );
}
