import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="academy-grid flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <p className="font-mono text-[11px] font-medium tracking-[0.24em] text-[rgb(var(--content-subtle))] uppercase">
            Crafter Academy
          </p>
          <h1 className="mt-3 font-heading text-3xl text-[rgb(var(--content-emphasis))]">
            Sign in with your checkout email
          </h1>
        </div>
        <SignIn
          fallbackRedirectUrl="/enrolled"
          forceRedirectUrl="/enrolled"
          signUpUrl={undefined}
        />
      </div>
    </main>
  );
}
