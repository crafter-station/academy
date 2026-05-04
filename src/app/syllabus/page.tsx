import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Syllabus | Crafter Academy",
  description:
    "A 10-week operating system for building, shipping, and launching real AI products.",
};

type LiveSession = {
  title: string;
  instructor?: string;
  details: string[];
};

type SyllabusWeek = {
  week: number;
  theme: string;
  asyncPrep: string[];
  liveOne: LiveSession;
  liveTwo: LiveSession;
  privateChallenge: string;
  publicChallenge: string;
};

const defaultPrep = ["No extra setup prerequisite. Come ready to build."];

const syllabusWeeks: SyllabusWeek[] = [
  {
    week: 0,
    theme: "Problems and first deploy",
    asyncPrep: [
      "Claude Code or another coding agent/editor installed.",
      "git, gh, node, npm, and bun installed.",
    ],
    liveOne: {
      title: "How to find (good) problems",
      instructor: "Shiara",
      details: [
        "Product research and trend analysis.",
        "Why copying existing products can be a valid starting point.",
        "Product Hunt winners and other signal sources.",
      ],
    },
    liveTwo: {
      title: "Build and deploy a fullstack app",
      instructor: "Anthony",
      details: [
        "Go from zero to deployed app using Claude Code.",
        "Build a basic todo app with Next.js, shadcn/ui, Drizzle, and Neon.",
        "Use GitHub and Vercel to ship it.",
      ],
    },
    privateChallenge:
      "Come up with 5 product ideas that went viral. Analyze why in writing.",
    publicChallenge:
      "Build and deploy a CRUD application. Record a ~1 minute demo and publish it on LinkedIn and X.",
  },
  {
    week: 1,
    theme: "LLMs and protected apps",
    asyncPrep: defaultPrep,
    liveOne: {
      title: "LLMs Hello World",
      instructor: "Cris",
      details: [
        "What LLMs are, how they work, and how to use them.",
        "OpenAI API, tools, temperature, OCR, and practical use cases.",
        "Intro to AI SDK with examples.",
      ],
    },
    liveTwo: {
      title: "Protect your app",
      instructor: "Railly",
      details: [
        "Authentication with Clerk for B2C and B2B apps.",
        "Rate limits and protected AI surfaces.",
        "Build a basic chat app and limit messages to 10 per user/day.",
      ],
    },
    privateChallenge:
      "Research 3 products that were ChatGPT wrappers and died or had to pivot. Write down what changed.",
    publicChallenge:
      "Add auth and an agentic chatbot mode to a CRUD app so the bot can perform CRUD actions. Record a ~1 minute demo and publish it on LinkedIn and X.",
  },
  {
    week: 2,
    theme: "Taste and agent orchestration",
    asyncPrep: defaultPrep,
    liveOne: {
      title: "Taste",
      instructor: "Cris",
      details: [
        "Build something people will actually love using.",
        "Prompting, visual references, and Claude Design workflows.",
        "Use taste as a product constraint, not decoration.",
      ],
    },
    liveTwo: {
      title: "Orchestrating agents",
      instructor: "Jibaru",
      details: [
        "Trigger.dev foundations for durable agent workflows.",
        "Build a deep research agent.",
        "Use Firecrawl and Exa as research inputs.",
      ],
    },
    privateChallenge:
      "Research Trigger.dev queues and write an article explaining how they work.",
    publicChallenge:
      "Build an agent that does code reviews in PRs. Record a ~1 minute demo and publish it on LinkedIn and X.",
  },
  {
    week: 3,
    theme: "Demos and voice AI",
    asyncPrep: defaultPrep,
    liveOne: {
      title: "How to ship great product demos",
      instructor: "Anthony",
      details: [
        "Demo hacks that make product value obvious.",
        "Screencasting workflows for stronger launch assets.",
        "Turn a feature into a story people understand quickly.",
      ],
    },
    liveTwo: {
      title: "Voice AI",
      instructor: "Shiara",
      details: [
        "Voice AI product patterns.",
        "ElevenLabs implementation basics.",
        "Where voice input creates product leverage.",
      ],
    },
    privateChallenge: "Research and compare other major voice AI providers.",
    publicChallenge: "Build and publish an app with voice input.",
  },
  {
    week: 4,
    theme: "Demo Day",
    asyncPrep: defaultPrep,
    liveOne: {
      title: "Demo Day",
      instructor: "Crafter mentors",
      details: [
        "Each crafter presents their product.",
        "Use live critique to expose what is clear, risky, or missing.",
      ],
    },
    liveTwo: {
      title: "Demo Day",
      instructor: "Crafter mentors",
      details: [
        "Continue product presentations and feedback.",
        "Convert signal into the next product plan.",
      ],
    },
    privateChallenge:
      "Submit a mentor-reviewed product plan: target user, core promise, scope, risks, and launch plan.",
    publicChallenge:
      "Publicly share your Demo Day progress: what you built, what you learned, and what comes next.",
  },
  {
    week: 5,
    theme: "Pricing and billing",
    asyncPrep: defaultPrep,
    liveOne: {
      title: "How to charge people",
      instructor: "Ignacio",
      details: [
        "Pricing models, free trials, credits, and subscriptions.",
        "One-time payments and usage-based pricing.",
        "How to decide what belongs in free vs paid.",
      ],
    },
    liveTwo: {
      title: "Billing implementation",
      instructor: "Anthony",
      details: [
        "Stripe checkout flows.",
        "Webhooks, entitlements, plans, limits, and invoices.",
        "Connect billing choices to product packaging.",
      ],
    },
    privateChallenge:
      "Create pricing for your product. Define free vs paid, limits, and why someone would pay.",
    publicChallenge:
      "Add a pricing page or payment flow mock/implementation. Share your pricing logic publicly.",
  },
  {
    week: 6,
    theme: "Public profile and WhatsApp agents",
    asyncPrep: defaultPrep,
    liveOne: {
      title: "Building a public profile",
      instructor: "Juan and Emmy",
      details: [
        "Why building in public matters.",
        "How to publish work without sounding performative.",
        "Turn weekly product progress into credibility.",
      ],
    },
    liveTwo: {
      title: "WhatsApp agents",
      instructor: "Emmy",
      details: [
        "Kapso foundations.",
        "Build WhatsApp automation surfaces.",
        "Ship agents where users already communicate.",
      ],
    },
    privateChallenge:
      "Research Langfuse and write an article explaining how you would use it and why.",
    publicChallenge: "Create a WhatsApp bot and ship it.",
  },
  {
    week: 7,
    theme: "Launch and growth experiments",
    asyncPrep: defaultPrep,
    liveOne: {
      title: "Launch playbook",
      instructor: "Ignacio",
      details: [
        "Product Hunt, Hacker News, Reddit, LinkedIn, X, and communities.",
        "Newsletters, timing, assets, and launch sequencing.",
        "Choose channels based on the product, not ego.",
      ],
    },
    liveTwo: {
      title: "Ads and growth experiments",
      instructor: "Juan",
      details: [
        "Google Ads basics.",
        "Meta and TikTok creative testing.",
        "Landing page conversion and analytics loops.",
      ],
    },
    privateChallenge:
      "Create a launch checklist with channels, copy, assets, and success metrics.",
    publicChallenge:
      "Run a small distribution experiment: post, DM, waitlist, ad test, community post, or landing page traffic push.",
  },
  {
    week: 8,
    theme: "Production polish and mentor review",
    asyncPrep: defaultPrep,
    liveOne: {
      title: "Production polish",
      instructor: "Cris",
      details: [
        "Observability, logging, analytics, and error tracking.",
        "Performance and security basics.",
        "Onboarding polish before launch.",
      ],
    },
    liveTwo: {
      title: "Mentor product reviews",
      instructor: "Crafter mentors",
      details: [
        "UX, technical risks, positioning, pricing, and launch readiness.",
        "No central live class: each crafter reviews with their mentor.",
      ],
    },
    privateChallenge:
      "Fix the top 5 issues from mentor review. Submit the final launch checklist.",
    publicChallenge:
      "Post a shipping soon update with final demo, waitlist, or launch date.",
  },
  {
    week: 9,
    theme: "Launch Day",
    asyncPrep: defaultPrep,
    liveOne: {
      title: "Launch Day",
      instructor: "Crafter mentors",
      details: [
        "Open session for final product presentations.",
        "Each crafter shares what they achieved and the next steps.",
      ],
    },
    liveTwo: {
      title: "Launch Day",
      instructor: "Crafter mentors",
      details: [
        "Launch retrospectives and next iteration planning.",
        "Turn launch day into a durable product loop.",
      ],
    },
    privateChallenge:
      "Submit a final report: what you built, metrics, learnings, and next iteration.",
    publicChallenge:
      "Launch publicly through Product Hunt, Hacker News, LinkedIn, X, or the community channel that fits the product.",
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
                "Problem signal",
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

      <div className="mt-6 grid gap-4 rounded-[1.75rem] border border-[#dfd8ce] bg-[#f7f4ee] p-5 sm:grid-cols-[0.75fr_1.25fr] sm:p-6 lg:p-8">
        <div>
          <SectionLabel>Live time rule</SectionLabel>
          <h3 className="mt-3 font-heading text-2xl font-medium tracking-normal text-[#171717]">
            Do the setup before the room opens.
          </h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#e5dccf] bg-white/70 p-4">
            <p className="text-sm font-semibold text-[#171717]">Do</p>
            <p className="mt-2 text-sm leading-6 text-[#525252]">
              Record setup processes crafters can follow async, then use class
              for product judgment and live execution.
            </p>
          </div>
          <div className="rounded-2xl border border-[#e5dccf] bg-white/70 p-4">
            <p className="text-sm font-semibold text-[#171717]">Do not</p>
            <p className="mt-2 text-sm leading-6 text-[#525252]">
              Spend live classes installing tools, configuring local machines,
              or walking through prerequisite setup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContentList({
  fallback = "No extra prerequisite.",
  items,
}: {
  fallback?: string;
  items: string[];
}) {
  if (items.length === 0) {
    return <p className="text-sm leading-6 text-[#737373]">{fallback}</p>;
  }

  return (
    <ul className="mt-3 space-y-2 text-sm leading-6 text-[#525252]">
      {items.map((item) => (
        <li className="flex gap-2" key={item}>
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b97044]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function LiveSessionBlock({ session }: { session: LiveSession }) {
  return (
    <div>
      <p className="font-heading text-lg font-medium leading-6 tracking-normal text-[#171717]">
        {session.title}
      </p>
      {session.instructor ? (
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-[#737373]">
          Led by {session.instructor}
        </p>
      ) : null}
      <ContentList items={session.details} />
    </div>
  );
}

function ChallengeBlock({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "ship";
}) {
  return (
    <div
      className={`rounded-2xl border p-3 text-sm leading-6 ${
        tone === "ship"
          ? "border-[#d8b89d] bg-[#fbf4ee] text-[#4f3422]"
          : "border-[#e5e5e5] bg-[#fafafa] text-[#525252]"
      }`}
    >
      {children}
    </div>
  );
}

function SyllabusTable() {
  const cellClass = "border-[#e5e5e5] border-t p-4 align-top";
  const headerClass =
    "px-4 py-3 text-left font-mono text-[0.66rem] font-medium uppercase tracking-[0.16em] text-[#737373]";

  return (
    <div className="hidden overflow-hidden rounded-[1.75rem] border border-[#d4d4d4] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)] lg:block">
      <table className="w-full table-fixed border-collapse">
        <colgroup>
          <col className="w-[12%]" />
          <col className="w-[14%]" />
          <col className="w-[19%]" />
          <col className="w-[19%]" />
          <col className="w-[18%]" />
          <col className="w-[18%]" />
        </colgroup>
        <thead className="bg-[#fafafa]">
          <tr>
            <th className={headerClass} scope="col">
              Week
            </th>
            <th className={headerClass} scope="col">
              Async prep
            </th>
            <th className={headerClass} scope="col">
              Live 1
            </th>
            <th className={headerClass} scope="col">
              Live 2
            </th>
            <th className={headerClass} scope="col">
              Private challenge
            </th>
            <th className={headerClass} scope="col">
              Public challenge
            </th>
          </tr>
        </thead>
        <tbody>
          {syllabusWeeks.map((week) => (
            <tr className="group" key={week.week}>
              <th className={`${cellClass} bg-white`} scope="row">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d4d4d4] bg-[#fafafa] text-xs font-semibold text-[#404040]">
                  {week.week}
                </span>
                <p className="mt-4 font-heading text-lg font-medium leading-6 tracking-normal text-[#171717]">
                  {week.theme}
                </p>
              </th>
              <td className={cellClass}>
                <ContentList items={week.asyncPrep} />
              </td>
              <td className={cellClass}>
                <LiveSessionBlock session={week.liveOne} />
              </td>
              <td className={cellClass}>
                <LiveSessionBlock session={week.liveTwo} />
              </td>
              <td className={cellClass}>
                <ChallengeBlock>{week.privateChallenge}</ChallengeBlock>
              </td>
              <td className={cellClass}>
                <ChallengeBlock tone="ship">
                  {week.publicChallenge}
                </ChallengeBlock>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MobileField({
  children,
  label,
  ship = false,
}: {
  children: ReactNode;
  label: string;
  ship?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        ship ? "border-[#d8b89d] bg-[#fbf4ee]" : "border-[#e5e5e5] bg-[#fafafa]"
      }`}
    >
      <p className="mb-3 font-mono text-[0.66rem] font-medium uppercase tracking-[0.16em] text-[#737373]">
        {label}
      </p>
      {children}
    </div>
  );
}

function MobileSyllabusCards() {
  return (
    <div className="grid gap-4 lg:hidden">
      {syllabusWeeks.map((week) => (
        <article
          className="overflow-hidden rounded-[1.75rem] border border-[#d4d4d4] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
          key={week.week}
        >
          <div className="flex items-start gap-4 border-[#e5e5e5] border-b bg-[#fafafa] p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4d4d4] bg-white text-sm font-semibold text-[#404040]">
              {week.week}
            </span>
            <div>
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[#737373]">
                Week {week.week}
              </p>
              <h3 className="mt-2 font-heading text-2xl font-medium tracking-normal text-[#171717]">
                {week.theme}
              </h3>
            </div>
          </div>
          <div className="grid gap-3 p-4 sm:p-5">
            <MobileField label="Async prep">
              <ContentList items={week.asyncPrep} />
            </MobileField>
            <MobileField label="Live 1">
              <LiveSessionBlock session={week.liveOne} />
            </MobileField>
            <MobileField label="Live 2">
              <LiveSessionBlock session={week.liveTwo} />
            </MobileField>
            <MobileField label="Private challenge">
              <p className="text-sm leading-6 text-[#525252]">
                {week.privateChallenge}
              </p>
            </MobileField>
            <MobileField label="Public challenge" ship>
              <p className="text-sm leading-6 text-[#4f3422]">
                {week.publicChallenge}
              </p>
            </MobileField>
          </div>
        </article>
      ))}
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
            has a technical/product focus, a private thinking rep, and a public
            shipping rep.
          </p>
        </div>

        <SyllabusTable />
        <MobileSyllabusCards />
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
    </main>
  );
}
