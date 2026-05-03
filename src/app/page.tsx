const scholarshipHref =
  "mailto:academy@crafterstation.com?subject=Crafter%20Academy%20Scholarship";

const stats = [
  { label: "Crafters", value: "20", detail: "Small first cohort" },
  { label: "Weeks", value: "10", detail: "From idea to launch" },
  { label: "Live classes", value: "20", detail: "2 sessions per week" },
  { label: "Mentors", value: "5", detail: "4 mentees each" },
  { label: "Scholarships", value: "10", detail: "For promising builders" },
  { label: "Price", value: "$999", detail: "One-time cohort seat" },
];

const companies = [
  "Rappi",
  "Nubank",
  "Scotiabank",
  "Kebo",
  "Midudev",
  "30x",
  "Clerk",
  "Zabio",
];

const curriculum = [
  {
    title: "Product Thinking",
    eyebrow: "Find the right problem",
    items: [
      "Come up with ideas by studying real markets, trends, and products people already want.",
      "Think of products as craft, not just software, with taste, positioning, and constraints.",
      "Build the mindset to validate early adopters before polishing the wrong thing.",
    ],
  },
  {
    title: "Building",
    eyebrow: "Use code and AI as leverage",
    items: [
      "Create production-grade full-stack apps with databases, auth, AI, queues, billing, and deployment.",
      "Use world-class tools without drowning in setup or burning unnecessary tokens.",
      "Practice with templates, snippets, prompts, and guides that help you follow along live.",
    ],
  },
  {
    title: "Shipping",
    eyebrow: "Distribution turns projects into products",
    items: [
      "Learn distribution, launch timing, content creation, demos, personal brand, and ad campaigns.",
      "Launch on Product Hunt, Hacker News, LinkedIn, X, communities, newsletters, or the channel that fits.",
      "Charge real customers with pricing, checkout, webhooks, plans, limits, and invoices.",
    ],
  },
];

const operatingSystem = [
  "Select a project in week 1 and use the cohort to keep shaping it.",
  "Submit one private task each week for mentor review.",
  "Publish one public build-in-public task each week with demos or lessons.",
  "Work in WhatsApp mentor groups with 4 crafters per mentor.",
  "Use up to 3 weekly 1-1 mentoring hours across each mentor group.",
  "Demo in week 5, then launch publicly in week 10.",
];

const weekPlan = [
  ["01", "Problems and full-stack foundations"],
  ["02", "Public profile and LLM fundamentals"],
  ["03", "Taste, prompting, auth, and protected AI apps"],
  ["04", "Product demos, decks, and agent orchestration"],
  ["05", "Demo Day and mentor-reviewed product plan"],
  ["06", "Pricing, Polar, checkout, webhooks, and entitlements"],
  ["07", "Marketing, ads, growth experiments, and WhatsApp agents"],
  ["08", "Launch playbook plus voice, image, and video AI"],
  ["09", "Production polish and mentor product reviews"],
  ["10", "Launch Day, metrics, learnings, and next iteration"],
];

const included = [
  "10-week cohort with 20 builders",
  "2 live classes every week",
  "5 mentors with small WhatsApp groups",
  "Private mentor-reviewed challenges",
  "Public build-in-public challenges",
  "Week 5 and week 10 demo days",
  "Guides, snippets, prompts, and curated prep material",
  "A shipping rhythm built around one real product",
];

const faqs = [
  {
    question: "Who is Crafter Academy for?",
    answer:
      "It is for people with programming knowledge who want to turn coding into product leverage. If you can read a recursive Fibonacci function and understand what is happening, you have enough technical base to apply.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "Yes. This is not a first programming course. We will move fast through full-stack apps, AI features, auth, databases, billing, launches, and production polish.",
  },
  {
    question: "What will I build?",
    answer:
      "You will pick a project from week 1, improve it through the program, demo it in week 5, and launch it in week 10. You can pivot if the evidence tells you to, but the goal is to ship something real.",
  },
  {
    question: "What is taught?",
    answer:
      "The full stack from zero to product: product thinking, AI-assisted building, production tools, databases, auth, queues, billing, distribution, demos, marketing, ads, pricing, and launch strategy.",
  },
  {
    question: "How do the private and public challenges work?",
    answer:
      "Every week has one private challenge reviewed by mentors and one public challenge where you share a demo, lesson, or progress update. The private task improves craft. The public task builds distribution muscle.",
  },
  {
    question: "How does mentorship work?",
    answer:
      "There are 5 mentors. Each mentor works with 4 crafters in a WhatsApp group and can offer up to 3 weekly 1-1 mentoring hours to that group, plus connections to other Crafter Station members when useful.",
  },
  {
    question: "What happens on demo days?",
    answer:
      "Week 5 is a mid-cohort demo where you show the product as it is and receive pressure-tested feedback. Week 10 is launch day, focused on product, go-to-market strategy, pricing, metrics, and next steps.",
  },
  {
    question: "How much does it cost?",
    answer:
      "The first cohort seat is USD 999. It covers 20 live classes, mentorship, program operations, review cycles, and the cohort infrastructure around shipping.",
  },
  {
    question: "Are scholarships available?",
    answer:
      "Yes. We will give 10 scholarships to students with promising talent who align with the program mindset: curious, consistent, generous with progress, and serious about shipping.",
  },
  {
    question: "How do I apply for a scholarship?",
    answer:
      "Email academy@crafterstation.com with a short note about what you have built, why you want to join, and what you want to ship during the cohort.",
  },
  {
    question: "Is this only for LATAM?",
    answer:
      "Crafter Station is rooted in LATAM and the cohort is designed around that community, but the mindset is global: build well, distribute deliberately, and charge for value.",
  },
  {
    question: "What if I miss a live class?",
    answer:
      "The program is designed around live momentum, but prerequisites and support material should be available outside the live sessions. Setup-heavy topics are better as recorded prep, not live-class time.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#9b431f]">
      {children}
    </p>
  );
}

function PrimaryLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      className="inline-flex min-h-12 items-center justify-center border border-[#17130d] bg-[#17130d] px-5 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#f9f1df] transition hover:-translate-y-0.5 hover:bg-[#2d2417] focus:outline-none focus:ring-2 focus:ring-[#9b431f] focus:ring-offset-2 focus:ring-offset-[#f5efe2]"
      href={href}
    >
      {children}
    </a>
  );
}

function SecondaryLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      className="inline-flex min-h-12 items-center justify-center border border-[#17130d]/25 px-5 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#17130d] transition hover:-translate-y-0.5 hover:border-[#17130d] hover:bg-[#fff8e9] focus:outline-none focus:ring-2 focus:ring-[#9b431f] focus:ring-offset-2 focus:ring-offset-[#f5efe2]"
      href={href}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5efe2] text-[#17130d]">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-[#17130d]/20 border-b pb-5 text-xs uppercase tracking-[0.22em] sm:flex-row sm:items-center sm:justify-between">
          <a className="font-semibold" href="#top">
            Crafter Academy
          </a>
          <nav
            aria-label="Main navigation"
            className="flex flex-wrap gap-4 text-[#17130d]/65"
          >
            <a className="transition hover:text-[#17130d]" href="#curriculum">
              Curriculum
            </a>
            <a className="transition hover:text-[#17130d]" href="#scholarships">
              Scholarships
            </a>
            <a className="transition hover:text-[#17130d]" href="#pricing">
              Pricing
            </a>
            <a className="transition hover:text-[#17130d]" href="#faq">
              FAQ
            </a>
          </nav>
        </header>

        <section
          className="grid min-h-[calc(100vh-5rem)] gap-10 border-[#17130d]/20 border-b py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24"
          id="top"
        >
          <div className="flex flex-col justify-between gap-12">
            <div>
              <div className="mb-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-[#17130d]/70">
                <span className="border border-[#17130d]/20 px-3 py-2">
                  By Crafter Station
                </span>
                <span className="border border-[#17130d]/20 px-3 py-2">
                  Cohort 01
                </span>
                <span className="border border-[#17130d]/20 px-3 py-2">
                  LATAM builders
                </span>
              </div>

              <h1 className="max-w-5xl text-balance font-heading text-6xl leading-[0.9] tracking-[-0.08em] sm:text-7xl md:text-8xl lg:text-[8.5rem]">
                Building is cool. Shipping is everything.
              </h1>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.78fr_1fr]">
              <p className="font-heading text-2xl italic leading-snug text-[#9b431f] sm:text-3xl">
                A 10-week program for programmers who want to build products
                people can actually use, love, share, and buy.
              </p>
              <div className="space-y-6 text-base leading-8 text-[#17130d]/75 sm:text-lg">
                <p>
                  Crafter Station is a community with more than 600 builders
                  across LATAM. We are creating Crafter Academy to share what we
                  have learned in 5 years of building and shipping products
                  people love.
                </p>
                <p>
                  Some of us come from engineering backgrounds. We still believe
                  engineering is a superpower. But engineering alone is not the
                  finish line. Distribution is everything.
                </p>
                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <PrimaryLink href="/checkout">Reserve your seat</PrimaryLink>
                  <SecondaryLink href={scholarshipHref}>
                    Ask about scholarships
                  </SecondaryLink>
                </div>
              </div>
            </div>
          </div>

          <aside className="grid content-between border border-[#17130d]/20 bg-[#fff8e9] p-5 shadow-[12px_12px_0_#17130d] sm:p-8 lg:shadow-[18px_18px_0_#17130d]">
            <div className="flex items-start justify-between gap-6 border-[#17130d]/20 border-b pb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#17130d]/55">
                  First cohort
                </p>
                <p className="mt-4 font-heading text-5xl leading-none tracking-[-0.08em] sm:text-7xl">
                  $999
                </p>
              </div>
              <div className="rounded-full border border-[#9b431f] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#9b431f]">
                20 seats
              </div>
            </div>

            <div className="grid grid-cols-2 border-[#17130d]/20 border-b py-8 text-sm uppercase tracking-[0.16em] text-[#17130d]/70">
              <p>10 weeks</p>
              <p>2 live classes/week</p>
              <p>5 mentors</p>
              <p>2 challenges/week</p>
            </div>

            <blockquote className="py-8 font-heading text-3xl leading-tight tracking-[-0.04em] sm:text-4xl">
              "Coding gives you leverage. Shipping teaches you where to aim it."
            </blockquote>

            <div className="border-[#17130d]/20 border-t pt-6 text-sm leading-7 text-[#17130d]/70">
              Team members come from world-class startups, companies, and
              builder communities, including Rappi, Nubank, Scotiabank, Kebo,
              Midudev, 30x, Clerk, Zabio, and more.
            </div>
          </aside>
        </section>

        <section className="grid gap-10 border-[#17130d]/20 border-b py-16 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
          <div>
            <SectionLabel>Why this exists</SectionLabel>
            <h2 className="text-balance font-heading text-4xl leading-none tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              The gap is not code. The gap is turning code into momentum.
            </h2>
          </div>
          <div className="grid gap-8 text-lg leading-9 text-[#17130d]/75 sm:text-xl sm:leading-10">
            <p>
              You already know how to code. That is rare, valuable, and still
              not enough. Crafter Academy is built for the next step: using code
              and AI to build real products, package them clearly, distribute
              them deliberately, and charge for the value you create.
            </p>
            <p>
              We will not spend live sessions watching someone install tools.
              Setup, prerequisites, and mechanical prep should happen before
              class. Live time is for thinking, building, feedback, taste,
              launch pressure, and decisions that compound.
            </p>
          </div>
        </section>

        <section className="border-[#17130d]/20 border-b py-10">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#17130d]/55">
            People in the team have worked around
          </p>
          <div className="grid grid-cols-2 border-[#17130d]/20 border-t sm:grid-cols-4 lg:grid-cols-8">
            {companies.map((company) => (
              <div
                className="border-[#17130d]/20 border-b border-l px-3 py-5 text-center text-sm font-semibold uppercase tracking-[0.14em] first:border-l-0 sm:px-4"
                key={company}
              >
                {company}
              </div>
            ))}
          </div>
        </section>

        <section className="border-[#17130d]/20 border-b py-16 lg:py-24">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Program snapshot</SectionLabel>
              <h2 className="font-heading text-4xl leading-none tracking-[-0.06em] sm:text-5xl">
                Small, intense, public.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#17130d]/70">
              A cohort designed to make builders choose, finish, publish, and
              learn from the market every week.
            </p>
          </div>

          <div className="grid border-[#17130d]/20 border-t sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <article
                className="min-h-48 border-[#17130d]/20 border-b p-5 sm:p-7 lg:border-r lg:nth-[3n]:border-r-0"
                key={stat.label}
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[#17130d]/55">
                  {stat.label}
                </p>
                <p className="mt-8 font-heading text-6xl leading-none tracking-[-0.08em] text-[#9b431f]">
                  {stat.value}
                </p>
                <p className="mt-4 text-sm leading-6 text-[#17130d]/65">
                  {stat.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-[#17130d]/20 border-b py-16 lg:grid-cols-[0.7fr_1.3fr] lg:py-24">
          <div>
            <SectionLabel>Who should apply</SectionLabel>
            <h2 className="font-heading text-4xl leading-none tracking-[-0.06em] sm:text-5xl">
              For programmers ready to become product builders.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              "You can read a recursive Fibonacci function and understand it.",
              "You are tired of tutorials that end before launch pressure begins.",
              "You want mentors, peers, and a weekly rhythm that makes shipping public.",
            ].map((item, index) => (
              <article
                className="border border-[#17130d]/20 bg-[#fff8e9] p-6"
                key={item}
              >
                <span className="text-xs uppercase tracking-[0.24em] text-[#9b431f]">
                  0{index + 1}
                </span>
                <p className="mt-8 text-base leading-7 text-[#17130d]/75">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="border-[#17130d]/20 border-b py-16 lg:py-24"
          id="curriculum"
        >
          <SectionLabel>What is taught</SectionLabel>
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <h2 className="text-balance font-heading text-4xl leading-none tracking-[-0.06em] sm:text-6xl">
              The full stack from zero to product.
            </h2>
            <p className="text-lg leading-9 text-[#17130d]/72">
              Not only frameworks. Not only AI. Not only marketing. The program
              connects product judgment, technical execution, distribution, and
              monetization in one repeated loop.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {curriculum.map((pillar, index) => (
              <article
                className="flex min-h-[30rem] flex-col justify-between border border-[#17130d]/20 bg-[#fff8e9] p-6"
                key={pillar.title}
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#9b431f]">
                    0{index + 1} / {pillar.eyebrow}
                  </p>
                  <h3 className="mt-8 font-heading text-4xl leading-none tracking-[-0.05em]">
                    {pillar.title}
                  </h3>
                </div>
                <ul className="mt-10 space-y-5 text-sm leading-7 text-[#17130d]/72">
                  {pillar.items.map((item) => (
                    <li
                      className="border-[#17130d]/15 border-t pt-5"
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-[#17130d]/20 border-b py-16 lg:grid-cols-[0.82fr_1.18fr] lg:py-24">
          <div>
            <SectionLabel>How it works</SectionLabel>
            <h2 className="font-heading text-4xl leading-none tracking-[-0.06em] sm:text-5xl">
              A weekly operating system for shipping.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#17130d]/70">
              The cohort creates just enough structure to make progress visible:
              private review for quality, public demos for distribution, and
              mentor groups for accountability.
            </p>
          </div>

          <ol className="grid gap-3">
            {operatingSystem.map((item, index) => (
              <li
                className="grid gap-4 border border-[#17130d]/20 bg-[#fff8e9] p-5 sm:grid-cols-[5rem_1fr] sm:items-center"
                key={item}
              >
                <span className="font-heading text-4xl leading-none tracking-[-0.06em] text-[#9b431f]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-7 text-[#17130d]/75">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-[#17130d]/20 border-b py-16 lg:py-24">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionLabel>Syllabus preview</SectionLabel>
              <h2 className="font-heading text-4xl leading-none tracking-[-0.06em] sm:text-5xl">
                Ten weeks, one product, increasing pressure.
              </h2>
            </div>
            <a
              className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9b431f] underline underline-offset-8 transition hover:text-[#17130d]"
              href="https://www.notion.so/Syllabus-15a9864d081f8217822d01e1aa0be8ea?pvs=21"
              rel="noreferrer"
              target="_blank"
            >
              Read the full syllabus
            </a>
          </div>

          <div className="grid border-[#17130d]/20 border-t lg:grid-cols-2">
            {weekPlan.map(([week, title]) => (
              <article
                className="grid gap-5 border-[#17130d]/20 border-b p-5 sm:grid-cols-[5rem_1fr] sm:p-6 lg:odd:border-r"
                key={week}
              >
                <span className="text-xs uppercase tracking-[0.24em] text-[#17130d]/50">
                  Week {week}
                </span>
                <h3 className="font-heading text-2xl leading-tight tracking-[-0.04em]">
                  {title}
                </h3>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-[#17130d]/20 border-b py-16 lg:grid-cols-[1fr_1fr] lg:py-24">
          <div className="border border-[#17130d]/20 bg-[#17130d] p-6 text-[#f9f1df] sm:p-8">
            <SectionLabel>Mentorship</SectionLabel>
            <h2 className="font-heading text-4xl leading-none tracking-[-0.06em] sm:text-5xl">
              Small groups with operators, not spectators.
            </h2>
            <p className="mt-8 text-base leading-8 text-[#f9f1df]/75">
              Five mentors work with four crafters each. The goal is not to sit
              in lectures and collect notes. The goal is to make product
              decisions, review work, improve taste, remove blockers, and keep
              the shipping rhythm alive.
            </p>
          </div>

          <div className="grid gap-5">
            <article className="border border-[#17130d]/20 bg-[#fff8e9] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[#9b431f]">
                Week 5
              </p>
              <h3 className="mt-6 font-heading text-4xl leading-none tracking-[-0.05em]">
                Demo Day
              </h3>
              <p className="mt-5 text-base leading-7 text-[#17130d]/70">
                Show the product as it exists, explain what you learned, and
                leave with a sharper product plan for the second half.
              </p>
            </article>
            <article className="border border-[#17130d]/20 bg-[#fff8e9] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[#9b431f]">
                Week 10
              </p>
              <h3 className="mt-6 font-heading text-4xl leading-none tracking-[-0.05em]">
                Launch Day
              </h3>
              <p className="mt-5 text-base leading-7 text-[#17130d]/70">
                Present what you built, your go-to-market strategy, pricing,
                metrics, learnings, and the next iteration after public launch.
              </p>
            </article>
          </div>
        </section>

        <section
          className="grid gap-10 border-[#17130d]/20 border-b py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-24"
          id="scholarships"
        >
          <div>
            <SectionLabel>Scholarships</SectionLabel>
            <h2 className="text-balance font-heading text-5xl leading-none tracking-[-0.07em] sm:text-6xl">
              10 scholarships for promising builders.
            </h2>
          </div>
          <div className="border border-[#9b431f] bg-[#fff8e9] p-6 sm:p-8">
            <p className="font-heading text-3xl italic leading-tight text-[#9b431f] sm:text-4xl">
              Talent is distributed. Access should move faster.
            </p>
            <div className="mt-8 space-y-5 text-base leading-8 text-[#17130d]/72">
              <p>
                We will give 10 scholarships to students with promising talent
                who align with the Crafter mindset: curious, consistent,
                shipping-oriented, and willing to share progress in public.
              </p>
              <p>
                Send a short note with what you have built, what you want to
                build next, and why this cohort is the right environment for
                you.
              </p>
            </div>
            <div className="mt-8">
              <SecondaryLink href={scholarshipHref}>
                Email academy@crafterstation.com
              </SecondaryLink>
            </div>
          </div>
        </section>

        <section
          className="grid gap-10 border-[#17130d]/20 border-b py-16 lg:grid-cols-[0.85fr_1.15fr] lg:py-24"
          id="pricing"
        >
          <div>
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="font-heading text-6xl leading-none tracking-[-0.08em] sm:text-8xl">
              USD 999
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-[#17130d]/70">
              $40 per class across 20 live classes, plus program operations,
              mentor support, review cycles, materials, and cohort
              infrastructure.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/checkout">Reserve with Polar</PrimaryLink>
              <SecondaryLink href={scholarshipHref}>
                Scholarship route
              </SecondaryLink>
            </div>
          </div>

          <div className="border border-[#17130d]/20 bg-[#fff8e9]">
            <div className="border-[#17130d]/20 border-b p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[#17130d]/55">
                Included in the seat
              </p>
            </div>
            <ul className="grid sm:grid-cols-2">
              {included.map((item) => (
                <li
                  className="border-[#17130d]/20 border-b p-5 text-sm leading-7 text-[#17130d]/75 sm:odd:border-r"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="border-[#17130d]/20 border-b py-16 lg:py-24"
          id="faq"
        >
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="font-heading text-4xl leading-none tracking-[-0.06em] sm:text-5xl">
                The practical questions.
              </h2>
            </div>
            <p className="text-base leading-8 text-[#17130d]/70">
              The program is intentionally selective and hands-on. If you are
              deciding whether this is the right amount of pressure, start here.
            </p>
          </div>

          <div className="grid gap-3 lg:grid-cols-2">
            {faqs.map((faq) => (
              <details
                className="group border border-[#17130d]/20 bg-[#fff8e9] p-5 open:bg-[#fff4d8]"
                key={faq.question}
              >
                <summary className="cursor-pointer list-none text-base font-semibold leading-7 tracking-[-0.02em] marker:hidden">
                  <span className="flex items-start justify-between gap-5">
                    {faq.question}
                    <span className="text-[#9b431f] transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-5 text-sm leading-7 text-[#17130d]/70">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="grid gap-10 border border-[#17130d]/20 bg-[#17130d] p-6 text-[#f9f1df] sm:p-10 lg:grid-cols-[1fr_0.7fr] lg:p-12">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#d18b47]">
                Cohort 01
              </p>
              <h2 className="text-balance font-heading text-5xl leading-none tracking-[-0.07em] sm:text-7xl">
                20 crafters. 10 weeks. Ship something real.
              </h2>
            </div>
            <div className="flex flex-col justify-end gap-6">
              <p className="text-base leading-8 text-[#f9f1df]/72">
                If you already know how to code, use the next 10 weeks to learn
                how to make that code matter outside your editor.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  className="inline-flex min-h-12 items-center justify-center border border-[#f9f1df] bg-[#f9f1df] px-5 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#17130d] transition hover:-translate-y-0.5 hover:bg-[#fff8e9] focus:outline-none focus:ring-2 focus:ring-[#d18b47]"
                  href="/checkout"
                >
                  Reserve your seat
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center border border-[#f9f1df]/35 px-5 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#f9f1df] transition hover:-translate-y-0.5 hover:border-[#f9f1df] focus:outline-none focus:ring-2 focus:ring-[#d18b47]"
                  href={scholarshipHref}
                >
                  Ask for scholarship info
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
