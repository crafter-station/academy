import Image from "next/image";
import type { ReactNode } from "react";

const syllabusHref = "/syllabus";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
  disabled?: boolean;
};

const footerLinkGroups: { title: string; links: FooterLink[] }[] = [
  {
    title: "Program",
    links: [
      { label: "Curriculum", href: "/syllabus" },
      { label: "Team", href: "#team" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      {
        label: "Crafter Station",
        href: "https://crafterstation.com",
        external: true,
      },
      {
        label: "Crafter Research",
        href: "https://research.crafter.ing/",
        external: true,
      },
      { label: "Kebo", href: "#", disabled: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
];

const stats = [
  { label: "Duration", value: "10 weeks" },
  { label: "Classes", value: "20 live" },
  { label: "Cohort", value: "20 seats" },
  { label: "Investment", value: "USD 999" },
];

const companyLogos = [
  { name: "Crafter Station", src: "/brand/wordmark-black.svg" },
  { name: "Nubank", src: "/logos/nubank.svg" },
  { name: "Clerk", src: "/logos/clerk.svg" },
  { name: "Rappi" },
  { name: "Scotiabank" },
  { name: "Midudev" },
  { name: "30x" },
  { name: "Zabio" },
];

const projectProof = [
  ["tinte", "500+ stars", "Theme generator for VSCode and shadcn/ui."],
  ["elements", "200+ stars", "Fullstack shadcn/ui components."],
  ["text0", "Winner", "Smart autocomplete built in a hackathon sprint."],
  ["lupa", "New", "Knowledge platform for AI agents."],
];

const programCards = [
  {
    label: "01",
    stage: "Product",
    title: "Find a product people understand",
    text: "Narrow the user, promise, market argument, and first product surface before writing another loose feature.",
    outcome: "User, problem, promise",
  },
  {
    label: "02",
    stage: "System",
    title: "Build with production constraints",
    text: "Ship AI workflows, auth, data, demos, billing-ready surfaces, and the connective tissue that turns code into product.",
    outcome: "AI, auth, data, demo",
  },
  {
    label: "03",
    stage: "Signal",
    title: "Demo under real pressure",
    text: "Use Demo Day to expose what works, what is confusing, and what needs to be sharpened before launch.",
    outcome: "Public critique loop",
  },
  {
    label: "04",
    stage: "Launch",
    title: "Launch with a complete story",
    text: "Package the product, landing page, demo, pricing, and public narrative so people can use, share, and buy it.",
    outcome: "Market-ready release",
  },
];

const builderFit = [
  "You are an engineer who wants sharper product judgment.",
  "You want live pressure, direct critique, and weekly execution rhythm.",
  "You are ready to invest time and money into a serious launch outcome.",
];

const notFor = [
  "You want passive content without live work or accountability.",
  "You are not ready to make and defend product decisions.",
  "You are looking for a free or low-commitment experience.",
];

const milestones = [
  {
    week: "Weeks 1-2",
    title: "Find the product",
    text: "Problem, audience, promise, product wedge, and technical base.",
  },
  {
    week: "Weeks 3-4",
    title: "Build the system",
    text: "AI apps, auth, data, agents, demos, and product UI proof.",
  },
  {
    week: "Week 5",
    title: "Demo Day",
    text: "Show what exists, collect signal, and sharpen the launch plan.",
  },
  {
    week: "Weeks 6-10",
    title: "Launch",
    text: "Pricing, growth, polish, metrics, public story, and Launch Day.",
  },
];

const artifacts = [
  "Working AI product",
  "Product landing page",
  "Demo Day pitch",
  "Checkout-ready offer",
  "Launch story",
  "Public release plan",
];

const team = [
  {
    name: "Anthony Cueva",
    role: "Product Engineer",
    image: "/team/cueva.png",
  },
  { name: "Shiara Arauzo", role: "Design Engineer", image: "/team/shiara.png" },
  {
    name: "Cristian Correa",
    role: "Data & Software Engineer",
    image: "/team/cris.png",
  },
  { name: "Railly Hugo", role: "Design Engineer", image: "/team/railly.png" },
  {
    name: "Nicolas Vargas",
    role: "Backend Developer",
    image: "/team/nicolas.png",
  },
  {
    name: "Gabriel Antunes",
    role: "AI Engineer & Full-Stack Developer",
    image: "/team/gabriel.png",
  },
];

const faqs = [
  {
    question: "Who is this program for?",
    answer:
      "Crafter Academy is for engineers who can already build and want stronger product judgment, launch discipline, and feedback on work that has to survive outside a repo.",
  },
  {
    question: "What will I build?",
    answer:
      "One real product. You will shape it through the cohort, demo it in week 5, and prepare it for public launch by week 10.",
  },
  {
    question: "How technical is it?",
    answer:
      "Technical enough to cover AI, auth, databases, agents, billing-ready flows, deployment, and polish. Every technical choice connects back to product and launch.",
  },
  {
    question: "What does it cost?",
    answer:
      "A Cohort 01 seat is USD 999. It covers the 10-week live program, 20 classes, feedback cycles, materials, Demo Day, and Launch Day.",
  },
  {
    question: "Are scholarships available?",
    answer:
      "A limited number may be available. The main program is a paid USD 999 program for engineers ready to invest in their growth. Email academy@crafterstation.com with what you have built and what you want to ship next.",
  },
];

function ButtonLink({
  children,
  href,
  target,
  variant = "primary",
}: {
  children: ReactNode;
  href: string;
  target?: "_blank";
  variant?: "primary" | "secondary" | "dark" | "darkSecondary";
}) {
  const variants = {
    primary:
      "border-black bg-black text-white hover:bg-[rgb(var(--bg-inverted))] hover:ring-4 hover:ring-[rgb(var(--border-subtle))]",
    secondary:
      "border-[rgb(var(--border-subtle))] bg-[rgb(var(--bg-default))] text-[rgb(var(--content-emphasis))] hover:border-[rgb(var(--border-emphasis))] hover:bg-[rgb(var(--bg-subtle))] hover:ring-4 hover:ring-[rgb(var(--border-muted))]",
    dark: "border-white bg-white text-black hover:bg-[rgb(var(--bg-subtle))]",
    darkSecondary:
      "border-white/15 bg-white/[0.06] text-white hover:border-white/30 hover:bg-white/[0.1]",
  } as const;

  return (
    <a
      className={`inline-flex h-8 w-fit items-center justify-center whitespace-nowrap rounded-lg border px-3 text-center text-[13px] leading-[19.5px] transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] focus:ring-offset-2 active:scale-[0.98] ${variants[variant]}`}
      href={href}
      rel={target === "_blank" ? "noreferrer" : undefined}
      target={target}
    >
      {children}
    </a>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[13px] font-semibold leading-[19.5px] text-[rgb(var(--content-subtle))]">
      {children}
    </p>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  text: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`mb-12 ${
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"
      }`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-balance font-heading text-[36px] font-medium leading-10 tracking-normal text-[rgb(var(--content-emphasis))] md:text-5xl md:leading-none">
        {title}
      </h2>
      <p className="mt-5 text-base leading-6 text-[#525252] sm:text-lg sm:leading-7">
        {text}
      </p>
    </div>
  );
}

function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#e5e5e5] bg-white px-4 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[#737373]">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-[#171717]">{value}</p>
    </div>
  );
}

function HeroProof() {
  return (
    <div className="relative mx-auto w-full max-w-[38rem] lg:mr-0">
      <div className="absolute -top-8 right-8 h-32 w-32 rounded-full bg-[#22c55e]/15 blur-3xl" />
      <div className="absolute -bottom-8 left-4 h-40 w-40 rounded-full bg-[#fb923c]/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-[#d4d4d4] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
        <div className="flex items-center justify-between border-[#e5e5e5] border-b px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
          </div>
          <span className="rounded-full border border-[#e5e5e5] px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[#737373]">
            Cohort OS
          </span>
        </div>

        <div className="grid gap-4 p-4 sm:p-5">
          <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-[#e5e5e5] bg-[#fafafa] p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-[#171717]">
                    Launch readiness
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#737373]">
                    Demo Day signal is converted into launch tasks.
                  </p>
                </div>
                <span className="rounded-full bg-[#dcfce7] px-2.5 py-1 text-xs font-medium text-[#166534]">
                  Week 05
                </span>
              </div>
              <div className="mt-6 grid grid-cols-5 gap-2">
                {[72, 88, 64, 92, 78].map((height, index) => (
                  <div
                    className="flex h-24 items-end rounded-xl bg-white p-1.5"
                    key={String(index)}
                  >
                    <span
                      className="w-full rounded-lg bg-[linear-gradient(180deg,#22c55e,#3b82f6)]"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#e5e5e5] bg-[#171717] p-4 text-white">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-white/50">
                Next live class
              </p>
              <p className="mt-4 font-heading text-2xl font-medium tracking-normal">
                AI product systems
              </p>
              <div className="mt-6 flex items-center justify-between rounded-xl bg-white/[0.08] px-3 py-2 text-sm text-white/72">
                <span>20:00 PET</span>
                <span>Live</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#e5e5e5] bg-white p-4">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-[#171717]">
                Launch checklist
              </p>
              <span className="text-xs text-[#737373]">6 artifacts</span>
            </div>
            <div className="grid gap-2">
              {artifacts.slice(0, 4).map((artifact, index) => (
                <div
                  className="flex items-center justify-between rounded-xl border border-[#e5e5e5] bg-[#fafafa] px-3 py-2.5"
                  key={artifact}
                >
                  <span className="text-sm text-[#404040]">{artifact}</span>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      index < 2 ? "bg-[#22c55e]" : "bg-[#d4d4d4]"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {["Demo", "Price", "Launch"].map((item, index) => (
              <div
                className="rounded-2xl border border-[#e5e5e5] bg-[#fafafa] p-4"
                key={item}
              >
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[#a3a3a3]">
                  0{index + 1}
                </p>
                <p className="mt-5 text-sm font-semibold text-[#171717]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoCell({ name, src }: { name: string; src?: string }) {
  return (
    <div className="flex min-h-24 items-center justify-center rounded-2xl border border-[#e5e5e5] bg-white px-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      {src ? (
        <Image
          alt={`${name} logo`}
          className="object-contain"
          height={32}
          src={src}
          unoptimized
          width={144}
        />
      ) : (
        <span className="text-lg font-medium tracking-normal text-[#404040]">
          {name}
        </span>
      )}
    </div>
  );
}

function ProgramCard({
  index,
  label,
  outcome,
  stage,
  title,
  text,
}: {
  index: number;
  label: string;
  outcome: string;
  stage: string;
  title: string;
  text: string;
}) {
  const dividers = [
    "border-b md:border-r lg:border-b-0",
    "border-b lg:border-r lg:border-b-0",
    "border-b md:border-r md:border-b-0 lg:border-r",
    "md:border-b-0",
  ];

  return (
    <article
      className={`border-[rgb(var(--border-subtle))] p-6 transition-colors duration-200 ease-out hover:bg-[#fbfaf8] ${dividers[index]}`}
    >
      <div className="mb-10 flex items-center justify-between gap-4">
        <span className="rounded-full border border-[rgb(var(--border-subtle))] bg-[rgb(var(--bg-muted))] px-2.5 py-1 font-mono text-[11px] leading-none tracking-[0.12em] text-[rgb(var(--content-subtle))]">
          {label}
        </span>
        <span className="inline-flex items-center gap-2 text-[13px] font-medium leading-[19.5px] text-[rgb(var(--content-default))]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#b97044]" />
          {stage}
        </span>
      </div>
      <h3 className="font-heading text-xl font-medium tracking-normal text-[#171717]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-[#525252]">{text}</p>
      <div className="mt-8 border-[rgb(var(--border-subtle))] border-t pt-4">
        <p className="text-[13px] font-medium leading-[19.5px] text-[rgb(var(--content-default))]">
          {outcome}
        </p>
      </div>
    </article>
  );
}

function FitRows({ items, tone }: { items: string[]; tone: "yes" | "no" }) {
  const positive = tone === "yes";

  return (
    <ul className="divide-y divide-[rgb(var(--border-muted))]">
      {items.map((item) => (
        <li
          className="flex gap-3 px-5 py-4 text-sm leading-6 text-[#404040]"
          key={item}
        >
          <span
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs ${
              positive
                ? "border-[#d8b89d] bg-[#fbf4ee] text-[#8a4f2a]"
                : "border-[rgb(var(--border-default))] bg-[rgb(var(--bg-subtle))] text-[rgb(var(--content-subtle))]"
            }`}
          >
            {positive ? "+" : "-"}
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function FitDiagnostic() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[rgb(var(--border-default))] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
      <div className="flex flex-wrap items-start justify-between gap-4 border-[rgb(var(--border-subtle))] border-b px-5 py-4">
        <div>
          <p className="text-sm font-semibold text-[rgb(var(--content-emphasis))]">
            Builder fit signal
          </p>
          <p className="mt-1 text-xs text-[rgb(var(--content-subtle))]">
            What Cohort 01 is calibrated for.
          </p>
        </div>
        <span className="rounded-full border border-[rgb(var(--border-subtle))] bg-[rgb(var(--bg-muted))] px-3 py-1 text-xs font-medium text-[rgb(var(--content-default))]">
          Selective cohort
        </span>
      </div>

      <div className="grid gap-4 p-4">
        <section className="overflow-hidden rounded-2xl border border-[rgb(var(--border-subtle))] bg-white">
          <div className="border-[rgb(var(--border-muted))] border-b px-5 py-3">
            <p className="text-sm font-semibold text-[rgb(var(--content-emphasis))]">
              Strong fit
            </p>
          </div>
          <FitRows items={builderFit} tone="yes" />
        </section>

        <section className="overflow-hidden rounded-2xl border border-[rgb(var(--border-subtle))] bg-[rgb(var(--bg-subtle))]">
          <div className="border-[rgb(var(--border-subtle))] border-b px-5 py-3">
            <p className="text-sm font-semibold text-[rgb(var(--content-default))]">
              Not calibrated for
            </p>
          </div>
          <FitRows items={notFor} tone="no" />
        </section>
      </div>
    </div>
  );
}

function CurriculumVisual() {
  return (
    <div className="relative rounded-[1.75rem] border border-[#e5e5e5] bg-white p-5 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
      <div className="absolute top-8 bottom-8 left-[2.55rem] w-px bg-[#e5e5e5]" />
      <div className="grid gap-4">
        {milestones.map((milestone, index) => (
          <article
            className="relative grid gap-4 rounded-2xl border border-[#e5e5e5] bg-[#fafafa] p-4 sm:grid-cols-[8.5rem_1fr] sm:items-start"
            key={milestone.week}
          >
            <div className="relative flex items-center gap-3">
              <span className="z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#d4d4d4] bg-white text-xs font-semibold text-[#404040]">
                {index + 1}
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#737373]">
                {milestone.week}
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-medium tracking-normal text-[#171717]">
                {milestone.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#525252]">
                {milestone.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ArtifactBoard() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[#d4d4d4] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-[#e5e5e5] border-b px-5 py-4">
        <div>
          <p className="text-sm font-semibold text-[#171717]">Launch room</p>
          <p className="mt-1 text-xs text-[#737373]">
            One product, six proof assets.
          </p>
        </div>
        <span className="rounded-full bg-[#dbeafe] px-3 py-1.5 text-xs font-medium text-[#1d4ed8]">
          Cohort 01
        </span>
      </div>
      <div className="grid gap-4 p-5 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-2xl border border-[#e5e5e5] bg-[#171717] p-5 text-white">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/45">
            Public story
          </p>
          <h3 className="mt-8 max-w-sm font-heading text-3xl font-medium leading-none tracking-normal">
            Make the work obvious enough for strangers to care.
          </h3>
          <div className="mt-10 grid gap-2">
            {["Problem", "Promise", "Proof", "Price"].map((item) => (
              <div
                className="flex items-center justify-between rounded-xl bg-white/[0.08] px-3 py-2 text-sm text-white/72"
                key={item}
              >
                <span>{item}</span>
                <span className="h-1.5 w-12 rounded-full bg-white/30" />
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {artifacts.map((artifact, index) => (
            <div
              className="rounded-2xl border border-[#e5e5e5] bg-[#fafafa] p-4"
              key={artifact}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="rounded-lg bg-white px-2 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[#737373]">
                  A{index + 1}
                </span>
                <span
                  className={`h-2 w-2 rounded-full ${
                    index < 3 ? "bg-[#22c55e]" : "bg-[#d4d4d4]"
                  }`}
                />
              </div>
              <p className="text-sm font-semibold text-[#171717]">{artifact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamCard({
  image,
  name,
  role,
}: {
  image: string;
  name: string;
  role: string;
}) {
  return (
    <article className="rounded-2xl border border-[#e5e5e5] bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <Image
        alt={`${name}, ${role}`}
        className="aspect-square w-full rounded-xl object-cover grayscale transition duration-200 ease-out hover:grayscale-0"
        height={320}
        src={image}
        width={320}
      />
      <div className="p-2 pt-3">
        <h3 className="text-sm font-semibold text-[#171717]">{name}</h3>
        <p className="mt-1 text-xs leading-5 text-[#737373]">{role}</p>
      </div>
    </article>
  );
}

function PricingCard() {
  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] border border-[#d4d4d4] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
      <div className="grid gap-0 lg:grid-cols-[1fr_0.82fr]">
        <div className="p-6 sm:p-8 lg:p-10">
          <Eyebrow>Reserve Cohort 01</Eyebrow>
          <h2 className="mt-3 font-heading text-[36px] font-medium leading-10 tracking-normal text-[rgb(var(--content-emphasis))] md:text-5xl md:leading-none">
            USD 999
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#525252] sm:text-lg">
            One-time investment for a 10-week live program: product strategy, AI
            build, launch pressure, feedback cycles, materials, Demo Day, and
            Launch Day.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/checkout">Join the program</ButtonLink>
          </div>
        </div>
        <div className="border-[#e5e5e5] border-t bg-[#fafafa] p-6 sm:p-8 lg:border-t-0 lg:border-l lg:p-10">
          <div className="grid gap-3">
            {[
              ["Seats", "20"],
              ["Live classes", "20"],
              ["Duration", "10 weeks"],
              ["Investment", "USD 999"],
              ["Milestones", "Demo Day + Launch Day"],
            ].map(([label, value]) => (
              <div
                className="flex items-center justify-between gap-4 rounded-2xl border border-[#e5e5e5] bg-white px-4 py-3 text-sm"
                key={label}
              >
                <span className="text-[#737373]">{label}</span>
                <span className="font-semibold text-[#171717]">{value}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-[#525252]">
            Built for engineers who want structure, feedback, and pressure
            around one product they can launch.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main
      className="min-h-screen bg-[rgb(var(--bg-muted))] text-[rgb(10_10_10)]"
      id="top"
    >
      <header className="sticky top-0 z-50 border-[rgb(var(--border-subtle))] border-b bg-[rgb(var(--bg-muted))]/88 backdrop-blur-xl">
        <div className="mx-auto grid h-16 w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:px-8">
          <a className="flex min-w-0 items-center gap-2.5" href="#top">
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
            aria-label="Main navigation"
            className="hidden items-center gap-1 rounded-full border border-[rgb(var(--border-subtle))] bg-white px-1.5 py-1 shadow-[0_1px_2px_rgba(0,0,0,0.03)] md:flex"
          >
            <a
              className="rounded-full px-3 py-1.5 text-sm font-medium text-[rgb(var(--content-default))] transition hover:bg-[rgb(var(--bg-subtle))] hover:text-[rgb(var(--content-emphasis))]"
              href="#program"
            >
              Program
            </a>
            <a
              className="rounded-full px-3 py-1.5 text-sm font-medium text-[rgb(var(--content-default))] transition hover:bg-[rgb(var(--bg-subtle))] hover:text-[rgb(var(--content-emphasis))]"
              href="#outcomes"
            >
              Outcomes
            </a>
            <a
              className="rounded-full px-3 py-1.5 text-sm font-medium text-[rgb(var(--content-default))] transition hover:bg-[rgb(var(--bg-subtle))] hover:text-[rgb(var(--content-emphasis))]"
              href="#syllabus"
            >
              Syllabus
            </a>
            <a
              className="rounded-full px-3 py-1.5 text-sm font-medium text-[rgb(var(--content-default))] transition hover:bg-[rgb(var(--bg-subtle))] hover:text-[rgb(var(--content-emphasis))]"
              href="#pricing"
            >
              Pricing
            </a>
            <a
              className="rounded-full px-3 py-1.5 text-sm font-medium text-[rgb(var(--content-default))] transition hover:bg-[rgb(var(--bg-subtle))] hover:text-[rgb(var(--content-emphasis))]"
              href="#faq"
            >
              FAQ
            </a>
          </nav>
          <a
            className="justify-self-end inline-flex h-8 w-fit items-center justify-center whitespace-nowrap rounded-lg border border-black bg-black px-3 text-[13px] leading-[19.5px] text-white transition-all duration-200 ease-out hover:bg-[rgb(var(--bg-inverted))] hover:ring-4 hover:ring-[rgb(var(--border-subtle))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] focus:ring-offset-2 active:scale-[0.98]"
            href="/checkout"
          >
            Reserve seat
          </a>
        </div>
      </header>

      <section className="academy-grid relative overflow-hidden border-[rgb(var(--border-subtle))] border-b">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(250,250,250,0.94))]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 pt-20 pb-16 sm:px-6 sm:pt-24 sm:pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:pt-28 lg:pb-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border-default))] bg-[rgb(var(--bg-default))] px-3 py-1.5 text-sm text-[#525252] shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
              <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
              Cohort 01 · 20 seats · Live in LATAM
            </div>
            <h1 className="max-w-2xl text-balance font-heading text-[36px] font-medium leading-10 tracking-normal text-[rgb(var(--content-emphasis))] md:text-5xl md:leading-[55.2px]">
              Ship a real AI product in 10 weeks.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-7 text-[#525252] md:text-xl md:leading-7">
              Crafter Academy is a live program by Crafter Station for engineers
              who already build and now want the product judgment, feedback, and
              launch discipline to make something people can use, share, and
              buy.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/checkout">Join the program</ButtonLink>
              <ButtonLink href={syllabusHref} variant="secondary">
                View syllabus
              </ButtonLink>
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <MetricPill key={stat.label} {...stat} />
              ))}
            </div>
          </div>

          <HeroProof />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-[#e5e5e5] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Eyebrow>Built from a shipping community</Eyebrow>
              <p className="mt-3 max-w-xl font-heading text-3xl font-medium leading-9 tracking-normal text-[rgb(var(--content-emphasis))]">
                Crafter Station has grown a 600+ builder community across LATAM.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {companyLogos.map((logo) => (
                <LogoCell key={logo.name} {...logo} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
        id="program"
      >
        <SectionHeader
          eyebrow="Program"
          text="The program is built around one product and the real decisions needed to launch it. Every week turns engineering effort into artifacts that survive contact with users."
          title="The shortest path from code to market is a product loop."
        />
        <div className="overflow-hidden rounded-[1.75rem] border border-[rgb(var(--border-subtle))] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {programCards.map((card, index) => (
              <ProgramCard index={index} key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-[rgb(var(--border-subtle))] border-y bg-[#f7f4ee]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8">
          <div>
            <Eyebrow>Designed for serious builders</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-heading text-[36px] font-medium leading-10 tracking-normal text-[rgb(var(--content-emphasis))] md:text-5xl md:leading-none">
              Built for engineers who want launch pressure.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-7 text-[#525252]">
              This is for engineers who can build, but want the rhythm,
              pressure, and product judgment that turns technical ability into a
              product people understand.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#dfd8ce] bg-white/60 px-3 py-1.5 text-[13px] font-medium leading-[19.5px] text-[rgb(var(--content-default))]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b97044]" />
              Calibrated for engineers with technical base
            </div>
          </div>
          <FitDiagnostic />
        </div>
      </section>

      <section
        className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8"
        id="syllabus"
      >
        <div>
          <SectionHeader
            align="left"
            eyebrow="10 weeks, one launch"
            text="The sequence is simple: find the product, build the system, demo in public, and turn the signal into a launch."
            title="A compressed path from idea to Launch Day."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={syllabusHref} variant="secondary">
              View full syllabus
            </ButtonLink>
            <ButtonLink href="/checkout">Join the program</ButtonLink>
          </div>
        </div>
        <CurriculumVisual />
      </section>

      <section
        className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
        id="outcomes"
      >
        <SectionHeader
          eyebrow="Outcomes"
          text="The program should leave you with product evidence, not a folder of disconnected exercises. Every week moves the launch room forward."
          title="Build the product and the proof around it."
        />
        <ArtifactBoard />
      </section>

      <section className="border-[#e5e5e5] border-y bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-8">
          <div>
            <Eyebrow>Crafter Station team</Eyebrow>
            <h2 className="mt-3 max-w-xl font-heading text-[36px] font-medium leading-10 tracking-normal text-[rgb(var(--content-emphasis))] md:text-5xl md:leading-none">
              Led by people who ship in public.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#525252] sm:text-lg">
              Crafter Academy comes from the builders behind community events,
              open-source projects, and shipped products across LATAM.
            </p>
            <div className="mt-8 grid max-w-lg grid-cols-3 gap-3">
              {[
                ["600+", "builders"],
                ["50+", "events"],
                ["25+", "products"],
              ].map(([value, label]) => (
                <div
                  className="rounded-2xl border border-[#e5e5e5] bg-[#fafafa] p-4"
                  key={label}
                >
                  <p className="font-heading text-2xl font-medium tracking-normal text-[rgb(var(--content-emphasis))]">
                    {value}
                  </p>
                  <p className="mt-1 text-xs text-[#737373]">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {team.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {projectProof.map(([name, metric, text]) => (
            <article
              className="rounded-[1.5rem] border border-[#e5e5e5] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
              key={name}
            >
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#a3a3a3]">
                Fig.
              </p>
              <h3 className="mt-6 font-heading text-2xl font-medium tracking-normal text-[rgb(var(--content-emphasis))]">
                {name}
              </h3>
              <p className="mt-2 text-sm font-medium text-[#262626]">
                {metric}
              </p>
              <p className="mt-4 text-sm leading-6 text-[#525252]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
        id="pricing"
      >
        <PricingCard />
      </section>

      <section
        className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
        id="faq"
      >
        <SectionHeader
          eyebrow="FAQ"
          text="Short answers for the practical questions before you reserve a seat."
          title="Know before you join."
        />
        <div className="grid gap-3">
          {faqs.map((faq) => (
            <details
              className="group rounded-2xl border border-[#e5e5e5] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] open:border-[#d4d4d4]"
              key={faq.question}
            >
              <summary className="cursor-pointer list-none text-lg font-medium tracking-normal text-[#171717] marker:hidden">
                <span className="flex items-center justify-between gap-5">
                  {faq.question}
                  <span className="text-[#737373] transition-transform duration-200 ease-out group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#525252]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

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
              Build, demo, and launch with Cohort 01.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/62 sm:text-lg">
              Twenty seats for engineers ready to turn code into a product
              people can use, share, and buy.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/checkout" variant="dark">
                Join the program
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 border-t border-[#e5e5e5] pt-12 sm:grid-cols-[1.15fr_2fr] sm:gap-16 lg:pt-16">
          <div className="flex flex-col justify-between gap-10">
            <div>
              {/* biome-ignore lint/performance/noImgElement: Local SVG brand mark is already optimized. */}
              <img
                alt="Crafter Academy"
                className="h-8 w-auto"
                src="/brand/logo-black.svg"
              />
              <p className="mt-6 max-w-sm text-base leading-7 text-[#737373]">
                A live Crafter Station program for engineers building real AI
                products.
              </p>
            </div>
            <p className="text-sm text-[#737373]">
              © 2026 Crafter Station. All rights reserved.
            </p>
          </div>
          <nav
            aria-label="Footer links"
            className="grid gap-10 sm:grid-cols-3 sm:gap-8"
          >
            {footerLinkGroups.map((group) => (
              <div key={group.title}>
                <h2 className="font-heading text-lg font-medium text-[#171717]">
                  {group.title}
                </h2>
                <ul className="mt-5 space-y-4">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {link.disabled ? (
                        <span className="text-sm text-[#a3a3a3]">
                          {link.label}
                        </span>
                      ) : (
                        <a
                          className="text-sm text-[#737373] transition-colors hover:text-[#171717]"
                          href={link.href}
                          rel={link.external ? "noreferrer" : undefined}
                          target={link.external ? "_blank" : undefined}
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </footer>
    </main>
  );
}
