import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "../footer";

export const metadata: Metadata = {
  title: "Syllabus | Crafter Academy",
  description:
    "A 10-week operating system for building, shipping, and launching real AI products.",
};

type LiveSession = {
  title: string;
  description: string;
};

type SyllabusWeek = {
  week: number;
  theme: string;
  liveOne: LiveSession;
  liveTwo: LiveSession;
};

const syllabusWeeks: SyllabusWeek[] = [
  {
    week: 1,
    theme: "Problems and first deploy",
    liveOne: {
      title: "Problem Radar",
      description:
        "Find promising problems, validate product ideas, study early adopters, and read market signals without waiting for permission.",
    },
    liveTwo: {
      title: "Zero to URL",
      description:
        "Use an AI coding workflow to take a simple full-stack app from blank repo to deployed product surface.",
    },
  },
  {
    week: 2,
    theme: "Public profile and LLM foundations",
    liveOne: {
      title: "Surface Area",
      description:
        "Build the mindset and operating rhythm for publishing in public, growing trust, and making your work easier to discover.",
    },
    liveTwo: {
      title: "The LLM Workbench",
      description:
        "Understand how LLMs work, when to use AI SDK versus raw APIs, and how tools, temperature, OCR, and agentic UX fit together.",
    },
  },
  {
    week: 3,
    theme: "Taste and protected apps",
    liveOne: {
      title: "Taste Under Constraints",
      description:
        "Use prompting, visual references, and Claude Design to build interfaces people actually want to use.",
    },
    liveTwo: {
      title: "The Guarded Chatbot",
      description:
        "Add authentication, rate limits, and product boundaries so AI features survive real users instead of demo-only conditions.",
    },
  },
  {
    week: 4,
    theme: "Demos and agent orchestration",
    liveOne: {
      title: "Demo Theater",
      description:
        "Shape hooks, screencasts, decks, and narrative flow so a product demo lands fast and makes the value obvious.",
    },
    liveTwo: {
      title: "The Agent Assembly Line",
      description:
        "Orchestrate async workflows with Trigger.dev, research agents, Firecrawl, Exa, queues, realtime updates, tags, and subscriptions.",
    },
  },
  {
    week: 5,
    theme: "Demo Day",
    liveOne: {
      title: "Demo Day: The Room Reacts",
      description:
        "Present the product as it exists at week five and collect direct signal on what is clear, confusing, or missing.",
    },
    liveTwo: {
      title: "From Feedback to Flight Plan",
      description:
        "Convert demo feedback into a mentor-reviewed product plan, launch scope, risk list, and next build priorities.",
    },
  },
  {
    week: 6,
    theme: "Pricing and billing",
    liveOne: {
      title: "The Price Is the Product",
      description:
        "Design pricing models, free trials, credits, subscriptions, one-time payments, and usage limits around the value users feel.",
    },
    liveTwo: {
      title: "Checkout Without Guesswork",
      description:
        "Implement billing flows with Stripe or Polar patterns: checkout, webhooks, entitlements, plans, limits, and invoices.",
    },
  },
  {
    week: 7,
    theme: "Growth experiments and WhatsApp agents",
    liveOne: {
      title: "Tiny Bets, Real Traffic",
      description:
        "Run practical growth experiments with ads, creative testing, landing-page conversion, analytics, ICP discovery, and competitor strategy.",
    },
    liveTwo: {
      title: "Agents in the Group Chat",
      description:
        "Use WhatsApp automation patterns to create customer-success bots and product workflows where users already communicate.",
    },
  },
  {
    week: 8,
    theme: "Launch channels and multimodal AI",
    liveOne: {
      title: "Launch Like a Campaign",
      description:
        "Build a launch checklist across Product Hunt, Hacker News, Reddit, LinkedIn, X, communities, newsletters, timing, and assets.",
    },
    liveTwo: {
      title: "Multimodal Magic",
      description:
        "Explore voice, image, and video AI with tools like ElevenLabs, Fal.ai, AI SDK, and other APIs for richer product experiences.",
    },
  },
  {
    week: 9,
    theme: "Production polish and mentor review",
    liveOne: {
      title: "The Last 10% That Converts",
      description:
        "Tighten observability, logging, PostHog analytics, error tracking, performance, security basics, and onboarding polish.",
    },
    liveTwo: {
      title: "Mentor War Room",
      description:
        "Review UX, technical risks, positioning, pricing, and launch readiness directly with mentors before the final push.",
    },
  },
  {
    week: 10,
    theme: "Launch Day",
    liveOne: {
      title: "Launch Day: Go Public",
      description:
        "Present what you built, your go-to-market strategy, pricing, results, lessons, and the next product step.",
    },
    liveTwo: {
      title: "After the Spike",
      description:
        "Turn launch feedback, metrics, and attention into the next iteration instead of letting momentum disappear.",
    },
  },
];

const stats = [
  { label: "Duration", value: "10 weeks" },
  { label: "Live sessions", value: "20" },
  { label: "Core loop", value: "Build - demo - ship" },
  { label: "Outcome", value: "Public launch" },
];

const rhythmCards = [
  {
    label: "01",
    title: "Async prep",
    text: "Setup, tools, and prerequisite walkthroughs happen before class so live time stays focused.",
  },
  {
    label: "02",
    title: "Live 1",
    text: "Product judgment, technical concepts, and examples that shape the week's shipping target.",
  },
  {
    label: "03",
    title: "Live 2",
    text: "Implementation sessions, reviews, or mentor pressure that turn ideas into working artifacts.",
  },
  {
    label: "04",
    title: "Private reps",
    text: "Written research, pricing, launch plans, and product decisions that sharpen the work in private.",
  },
  {
    label: "05",
    title: "Public shipping",
    text: "Every week ends with proof in public: a demo, article, bot, launch asset, or distribution push.",
  },
];

const outcomes = [
  {
    title: "A shipped product loop",
    text: "You practice the full path from problem selection to product demo, billing, launch, and iteration.",
  },
  {
    title: "Public proof-of-work",
    text: "Weekly public challenges create visible momentum across LinkedIn, X, communities, and launch channels.",
  },
  {
    title: "Production judgment",
    text: "Auth, AI, agents, billing, observability, and polish are taught as product decisions, not isolated tutorials.",
  },
  {
    title: "A launch-ready story",
    text: "By Launch Day, your product has a promise, price, demo, distribution plan, and next iteration path.",
  },
];

function ButtonLink({
  children,
  href,
  variant = "primary",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "dark" | "darkSecondary";
}) {
  const variants = {
    primary:
      "border-black bg-black text-white hover:bg-[rgb(var(--bg-inverted))] hover:ring-4 hover:ring-[rgb(var(--border-subtle))]",
    secondary:
      "border-[rgb(var(--border-subtle))] bg-white text-[rgb(var(--content-emphasis))] hover:border-[rgb(var(--border-emphasis))] hover:bg-[rgb(var(--bg-subtle))] hover:ring-4 hover:ring-[rgb(var(--border-muted))]",
    dark: "border-white bg-white text-black hover:bg-[rgb(var(--bg-subtle))]",
    darkSecondary:
      "border-white/15 bg-white/[0.06] text-white hover:border-white/30 hover:bg-white/[0.1]",
  } as const;

  return (
    <a
      className={`inline-flex h-8 w-fit items-center justify-center whitespace-nowrap rounded-lg border px-3 text-center text-[13px] leading-[19.5px] transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] focus:ring-offset-2 active:scale-[0.98] ${variants[variant]}`}
      href={href}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#737373]">
      {children}
    </p>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-[rgb(var(--border-subtle))] border-b bg-[rgb(var(--bg-muted))]/88 backdrop-blur-xl">
      <div className="mx-auto grid h-16 w-full max-w-6xl grid-cols-[1fr_auto] items-center gap-4 px-4 sm:px-6 md:grid-cols-[1fr_auto_1fr] lg:px-8">
        <a className="flex min-w-0 items-center gap-2.5" href="/">
          {/* biome-ignore lint/performance/noImgElement: Local SVG brand mark is already optimized. */}
          <img
            alt=""
            aria-hidden="true"
            className="h-7 w-7 shrink-0"
            src="/brand/icon-black.svg"
          />
          <span className="truncate font-heading text-base font-medium tracking-normal text-[rgb(var(--content-emphasis))]">
            Crafter Academy
          </span>
        </a>

        <nav
          aria-label="Syllabus navigation"
          className="hidden items-center gap-1 rounded-full border border-[rgb(var(--border-subtle))] bg-white px-1.5 py-1 shadow-[0_1px_2px_rgba(0,0,0,0.03)] md:flex"
        >
          {[
            ["Rhythm", "#rhythm"],
            ["Weeks", "#weeks"],
            ["Outcomes", "#outcomes"],
          ].map(([label, href]) => (
            <a
              className="rounded-full px-3 py-1.5 text-sm font-medium text-[rgb(var(--content-default))] transition hover:bg-[rgb(var(--bg-subtle))] hover:text-[rgb(var(--content-emphasis))]"
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="justify-self-end">
          <ButtonLink href="/checkout">Reserve seat</ButtonLink>
        </div>
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[38rem] lg:mr-0">
      <div className="absolute -top-10 right-8 h-36 w-36 rounded-full bg-[#22c55e]/15 blur-3xl" />
      <div className="absolute -bottom-10 left-4 h-40 w-40 rounded-full bg-[#fb923c]/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-[#d4d4d4] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
        <div className="flex items-center justify-between border-[#e5e5e5] border-b px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
          </div>
          <span className="rounded-full border border-[#e5e5e5] px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[#737373]">
            Syllabus OS
          </span>
        </div>

        <div className="grid gap-4 p-4 sm:p-5">
          <div className="rounded-2xl border border-[#e5e5e5] bg-[#171717] p-5 text-white">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-white/45">
              Launch arc
            </p>
            <h2 className="mt-5 max-w-sm font-heading text-3xl font-medium leading-none tracking-normal">
              Find the problem, build the system, launch the story.
            </h2>
            <div className="mt-8 grid gap-2">
              {[
                "Problem radar",
                "AI product system",
                "Demo Day critique",
                "Pricing and billing",
                "Launch Day",
              ].map((item, index) => (
                <div
                  className="flex items-center justify-between rounded-xl bg-white/[0.08] px-3 py-2 text-sm text-white/72"
                  key={item}
                >
                  <span>{item}</span>
                  <span className="font-mono text-[0.65rem] text-white/42">
                    W{index === 0 ? "00" : String(index * 2).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Private", "research"],
              ["Live", "pressure"],
              ["Public", "proof"],
            ].map(([label, text]) => (
              <div
                className="rounded-2xl border border-[#e5e5e5] bg-[#fafafa] p-4"
                key={label}
              >
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[#a3a3a3]">
                  {label}
                </p>
                <p className="mt-6 text-sm font-semibold text-[#171717]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="academy-grid relative overflow-hidden border-[rgb(var(--border-subtle))] border-b">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(250,250,250,0.94))]" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 pt-20 pb-16 sm:px-6 sm:pt-24 sm:pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:pt-28 lg:pb-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border-default))] bg-[rgb(var(--bg-default))] px-3 py-1.5 text-sm text-[#525252] shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
            <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
            Full syllabus - Cohort 01
          </div>
          <h1 className="max-w-3xl text-balance font-heading text-[40px] font-medium leading-[44px] tracking-normal text-[rgb(var(--content-emphasis))] md:text-6xl md:leading-[64px]">
            Building is cool. Shipping is everything.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-[#525252] md:text-xl md:leading-8">
            A 10-week operating system for engineers who can build and want the
            pressure, taste, product judgment, and public cadence to launch
            something real.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/checkout">Join the program</ButtonLink>
            <ButtonLink href="/" variant="secondary">
              Back to overview
            </ButtonLink>
          </div>
          <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                className="rounded-2xl border border-[#e5e5e5] bg-white px-4 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                key={stat.label}
              >
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[#737373]">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-[#171717]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function RhythmSection() {
  return (
    <section
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      id="rhythm"
    >
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <SectionLabel>Course rhythm</SectionLabel>
        <h2 className="mt-3 text-balance font-heading text-[36px] font-medium leading-10 tracking-normal text-[rgb(var(--content-emphasis))] md:text-5xl md:leading-none">
          Every week turns class time into shipped evidence.
        </h2>
        <p className="mt-5 text-base leading-6 text-[#525252] sm:text-lg sm:leading-7">
          Setup belongs in recorded prep. Live sessions are for judgment,
          implementation pressure, critique, and the decisions that move a
          product toward launch.
        </p>
      </div>

      <div className="overflow-hidden rounded-[1.75rem] border border-[rgb(var(--border-subtle))] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
        <div className="grid md:grid-cols-2 lg:grid-cols-5">
          {rhythmCards.map((card, index) => (
            <article
              className={`border-[rgb(var(--border-subtle))] p-6 transition-colors duration-200 ease-out hover:bg-[#fbfaf8] ${
                index < rhythmCards.length - 1
                  ? "border-b lg:border-r lg:border-b-0"
                  : ""
              }`}
              key={card.title}
            >
              <span className="rounded-full border border-[rgb(var(--border-subtle))] bg-[rgb(var(--bg-muted))] px-2.5 py-1 font-mono text-[11px] leading-none tracking-[0.12em] text-[rgb(var(--content-subtle))]">
                {card.label}
              </span>
              <h3 className="mt-10 font-heading text-xl font-medium tracking-normal text-[#171717]">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#525252]">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SessionCard({
  label,
  session,
}: {
  label: "Live 1" | "Live 2";
  session: LiveSession;
}) {
  return (
    <div className="rounded-2xl border border-[#e5e5e5] bg-[#fafafa] p-4 transition-colors duration-200 ease-out hover:border-[#d4d4d4] hover:bg-white">
      <p className="font-mono text-[0.66rem] font-medium uppercase tracking-[0.16em] text-[#737373]">
        {label}
      </p>
      <p className="mt-5 font-heading text-2xl font-medium leading-7 tracking-normal text-[#171717]">
        {session.title}
      </p>
      <p className="mt-3 text-sm leading-6 text-[#525252]">
        {session.description}
      </p>
    </div>
  );
}

function SyllabusRoadmap() {
  return (
    <div className="relative">
      <div className="absolute top-8 bottom-8 left-5 hidden w-px bg-[#e5e5e5] lg:block" />
      <div className="grid gap-4">
        {syllabusWeeks.map((week) => (
          <article
            className="relative overflow-hidden rounded-[1.75rem] border border-[#d4d4d4] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)] lg:grid lg:grid-cols-[15rem_1fr] lg:items-stretch"
            key={week.week}
          >
            <div className="flex gap-4 border-[#e5e5e5] border-b bg-[#fafafa] p-5 lg:border-r lg:border-b-0">
              <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4d4d4] bg-white text-sm font-semibold text-[#404040]">
                {week.week}
              </span>
              <div>
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[#737373]">
                  Week {week.week}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-medium leading-7 tracking-normal text-[#171717]">
                  {week.theme}
                </h3>
              </div>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
              <SessionCard label="Live 1" session={week.liveOne} />
              <SessionCard label="Live 2" session={week.liveTwo} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function SyllabusSection() {
  return (
    <section
      className="border-[rgb(var(--border-subtle))] border-y bg-white"
      id="weeks"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.74fr_1fr] lg:items-end">
          <div>
            <SectionLabel>Full syllabus</SectionLabel>
            <h2 className="mt-3 max-w-2xl text-balance font-heading text-[36px] font-medium leading-10 tracking-normal text-[rgb(var(--content-emphasis))] md:text-5xl md:leading-none">
              The week-by-week path from idea to launch.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#525252] lg:justify-self-end">
            The curriculum is intentionally paced around one product. Each week
            gives you two live rooms: one for product judgment, one for shipping
            the next proof point.
          </p>
        </div>

        <SyllabusRoadmap />
      </div>
    </section>
  );
}

function OutcomeSection() {
  return (
    <section
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      id="outcomes"
    >
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <SectionLabel>What you leave with</SectionLabel>
        <h2 className="mt-3 text-balance font-heading text-[36px] font-medium leading-10 tracking-normal text-[rgb(var(--content-emphasis))] md:text-5xl md:leading-none">
          Not a folder of exercises. A launch surface.
        </h2>
        <p className="mt-5 text-base leading-6 text-[#525252] sm:text-lg sm:leading-7">
          The syllabus is built to compound. Research becomes product scope,
          product scope becomes demos, demos become launch assets, and launch
          assets become market signal.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {outcomes.map((outcome, index) => (
          <article
            className="rounded-[1.5rem] border border-[#e5e5e5] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-colors duration-200 ease-out hover:bg-[#fbfaf8]"
            key={outcome.title}
          >
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#a3a3a3]">
              O{index + 1}
            </p>
            <h3 className="mt-8 font-heading text-2xl font-medium leading-7 tracking-normal text-[#171717]">
              {outcome.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-[#525252]">
              {outcome.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-4 pb-4 sm:px-6 lg:px-8">
      <div className="dark-grid relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#171717] px-6 py-16 text-center text-white shadow-[0_24px_80px_rgba(0,0,0,0.16)] sm:px-10 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(34,197,94,0.18),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(251,146,60,0.14),transparent_28%)]" />
        <div className="relative mx-auto max-w-4xl">
          {/* biome-ignore lint/performance/noImgElement: Local SVG brand mark is already optimized. */}
          <img
            alt="Crafter Station"
            className="mx-auto h-8 w-auto"
            src="/brand/logo-white.svg"
          />
          <h2 className="mt-8 text-balance font-heading text-[36px] font-medium leading-10 tracking-normal md:text-5xl md:leading-none">
            Stop polishing in private. Start shipping in public.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/62 sm:text-lg">
            If you can already build, this is the 10-week pressure system for
            turning that ability into product evidence.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/checkout" variant="dark">
              Join the program
            </ButtonLink>
            <ButtonLink href="/" variant="darkSecondary">
              Back to overview
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SyllabusPage() {
  return (
    <main
      className="min-h-screen bg-[rgb(var(--bg-muted))] text-[#0a0a0a]"
      id="top"
    >
      <Header />
      <HeroSection />
      <RhythmSection />
      <SyllabusSection />
      <OutcomeSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
