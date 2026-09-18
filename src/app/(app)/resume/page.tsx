import type { Metadata } from "next"

import { ResumeActions } from "./resume-actions"

export const metadata: Metadata = {
  title: "Resume — Pradnyesh | Product Engineer",
  description:
    "Engineering resume of Pradnyesh — Product Engineer based in Mumbai & Pune, India.",
  alternates: {
    canonical: "/resume",
  },
}

export default function ResumePage() {
  return (
    <div className="mx-auto my-6 max-w-3xl overflow-hidden rounded-xl border border-border/80 bg-card text-card-foreground shadow-sm sm:my-10 print:my-0 print:max-w-none print:border-none print:bg-white print:p-0 print:text-black print:shadow-none">
      <style>{`
        @media print {
          @page {
            margin: 0.4in 0.5in;
            size: letter portrait;
          }
          header, footer, nav, aside, [role="navigation"] {
            display: none !important;
          }
          body {
            background: white !important;
            color: black !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          main {
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
          }
        }
      `}</style>
      <ResumeActions />

      {/* Resume Document Canvas */}
      <article className="px-6 py-8 sm:px-10 sm:py-10 print:p-0 print:text-[11px] print:leading-snug">
        {/* HEADER */}
        <header className="border-b border-border/70 pb-4 text-center sm:pb-5 print:border-black print:pb-2.5">
          <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl print:text-xl print:text-black">
            PRADNYESH
          </h1>
          <p className="mt-1 font-mono text-xs font-medium text-foreground/85 sm:text-sm print:text-xs print:text-black">
            Product Engineer · Mumbai · Pune, India
          </p>

          <div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground sm:gap-x-4 print:text-[10px] print:text-black">
            <a
              href="mailto:workspace.pradnyesh@gmail.com"
              className="transition-colors hover:text-foreground print:text-black"
            >
              workspace.pradnyesh@gmail.com
            </a>
            <span aria-hidden className="text-border print:text-gray-400">
              |
            </span>
            <a
              href="https://github.com/25Pradnyesh"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground print:text-black"
            >
              github.com/25Pradnyesh
            </a>
            <span aria-hidden className="text-border print:text-gray-400">
              |
            </span>
            <a
              href="https://www.linkedin.com/in/pradnyesh-s/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground print:text-black"
            >
              linkedin.com/in/pradnyesh-s
            </a>
            <span aria-hidden className="text-border print:text-gray-400">
              |
            </span>
            <a
              href="https://x.com/Pradnyesh_25"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground print:text-black"
            >
              x.com/Pradnyesh_25
            </a>
          </div>
        </header>

        <div className="mt-5 space-y-5 print:mt-3 print:space-y-3">
          {/* EDUCATION */}
          <section>
            <h2 className="border-b border-border/70 pb-1 font-heading text-xs font-bold tracking-wider text-foreground uppercase sm:text-sm print:border-black print:pb-0.5 print:text-xs print:text-black">
              Education
            </h2>

            <div className="mt-2.5 space-y-2.5 print:mt-1.5 print:space-y-1.5">
              {/* SPPU */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-semibold text-foreground print:text-black">
                    Savitribai Phule Pune University (SPPU)
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground print:text-[10px] print:text-black">
                    Pune, India
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-foreground/80 sm:text-sm print:text-[11px] print:text-black">
                  <p className="italic">
                    Bachelor of Engineering (B.E.) in Electronics &amp; Computer
                    Engineering
                  </p>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[10px] print:text-black">
                    2023 — 2027
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground print:text-[10px] print:text-black">
                  <span className="font-medium text-foreground/90 print:text-black">
                    Core Technical Focus:
                  </span>{" "}
                  Machine Learning, Generative AI, Autonomous Agents, Full-Stack
                  Systems, Algorithms
                </p>
              </div>

              {/* 12th */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-medium text-foreground/95 print:text-black">
                    B.K. Birla College of Arts, Science &amp; Commerce
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground print:text-[10px] print:text-black">
                    Maharashtra, India
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-foreground/80 sm:text-sm print:text-[11px] print:text-black">
                  <p className="italic">12th Grade · Science Stream</p>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[10px] print:text-black">
                    2022 — 2023
                  </span>
                </div>
              </div>

              {/* 10th */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-medium text-foreground/95 print:text-black">
                    Smt. Kantaben Chandulal Gandhi English School
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground print:text-[10px] print:text-black">
                    Maharashtra, India
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-foreground/80 sm:text-sm print:text-[11px] print:text-black">
                  <p className="italic">10th Grade</p>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[10px] print:text-black">
                    2020 — 2021
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* PROFESSIONAL EXPERIENCE */}
          <section>
            <h2 className="border-b border-border/70 pb-1 font-heading text-xs font-bold tracking-wider text-foreground uppercase sm:text-sm print:border-black print:pb-0.5 print:text-xs print:text-black">
              Professional Experience
            </h2>

            <div className="mt-2.5 space-y-3 print:mt-1.5 print:space-y-2">
              {/* Independent Builder */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-semibold text-foreground print:text-black">
                    Independent Builder &amp; Product Development
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground print:text-[10px] print:text-black">
                    Remote
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-foreground/80 sm:text-sm print:text-[11px] print:text-black">
                  <p className="italic">
                    AI Engineer &amp; Full-Stack Developer
                  </p>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[10px] print:text-black">
                    2024 — Present
                  </span>
                </div>
                <ul className="mt-1 list-disc space-y-1 pl-4 text-xs/relaxed text-muted-foreground print:mt-0.5 print:space-y-0.5 print:text-[10.5px] print:text-black">
                  <li>
                    Architecting and shipping end-to-end applications from zero
                    to working product with Next.js, React, Node.js, and
                    TypeScript.
                  </li>
                  <li>
                    Building intelligent systems with autonomous agent workflows
                    and multimodal extraction pipelines.
                  </li>
                  <li>
                    Designing clean server-client architectures, RESTful API
                    routes, and database schemas with PostgreSQL and Supabase.
                  </li>
                </ul>
              </div>

              {/* AI & ML Engineering */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-semibold text-foreground print:text-black">
                    AI &amp; Machine Learning Engineering
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground print:text-[10px] print:text-black">
                    Remote
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-foreground/80 sm:text-sm print:text-[11px] print:text-black">
                  <p className="italic">AI / ML Developer</p>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[10px] print:text-black">
                    2024
                  </span>
                </div>
                <ul className="mt-1 list-disc space-y-1 pl-4 text-xs/relaxed text-muted-foreground print:mt-0.5 print:space-y-0.5 print:text-[10.5px] print:text-black">
                  <li>
                    Built intelligent systems using LLMs, computer vision, and
                    NLP extraction pipelines in Python and FastAPI.
                  </li>
                  <li>
                    Developed multimodal content extraction tools from social
                    media reels and posts for location intelligence in Travel
                    AI.
                  </li>
                  <li>
                    Engineered reliable prompt workflows and agentic tool
                    invocation mechanisms.
                  </li>
                </ul>
              </div>

              {/* Web Development */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-semibold text-foreground print:text-black">
                    Full-Stack Web Engineering
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground print:text-[10px] print:text-black">
                    Remote
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-foreground/80 sm:text-sm print:text-[11px] print:text-black">
                  <p className="italic">Full-Stack Developer</p>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[10px] print:text-black">
                    2023
                  </span>
                </div>
                <ul className="mt-1 list-disc space-y-1 pl-4 text-xs/relaxed text-muted-foreground print:mt-0.5 print:space-y-0.5 print:text-[10.5px] print:text-black">
                  <li>
                    Developed responsive, accessible, and performant web
                    applications using modern component systems with Tailwind
                    CSS.
                  </li>
                  <li>
                    Constructed scalable backend interfaces and database schemas
                    ensuring sub-100ms response latencies.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section>
            <h2 className="border-b border-border/70 pb-1 font-heading text-xs font-bold tracking-wider text-foreground uppercase sm:text-sm print:border-black print:pb-0.5 print:text-xs print:text-black">
              Featured Projects
            </h2>

            <div className="mt-2.5 space-y-2.5 print:mt-1.5 print:space-y-1.5">
              {/* Everyday */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-semibold text-foreground print:text-black">
                    Everyday{" "}
                    <span className="font-normal text-muted-foreground print:text-black">
                      — Habit Reward Protocol
                    </span>
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[10px] print:text-black">
                    2025
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-foreground/80 sm:text-sm print:text-[11px] print:text-black">
                  <p className="italic">Creator &amp; Product Engineer</p>
                  <a
                    href="https://everydaydotapp.xyz/?utm_source=prathadox.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted-foreground underline print:text-[10px] print:text-black"
                  >
                    everydaydotapp.xyz
                  </a>
                </div>
                <ul className="mt-1 list-disc space-y-1 pl-4 text-xs/relaxed text-muted-foreground print:mt-0.5 print:space-y-0.5 print:text-[10.5px] print:text-black">
                  <li>
                    Designed and shipped a web/mobile habit-tracking app that
                    rewards users for daily consistency.
                  </li>
                  <li>
                    Awarded a <strong>$25k developer grant</strong> from
                    Starknet; processed <strong>10k+ volume per month</strong>{" "}
                    on the blockchain (peak recorded metrics).
                  </li>
                </ul>
              </div>

              {/* Travel AI */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-semibold text-foreground print:text-black">
                    Travel AI{" "}
                    <span className="font-normal text-muted-foreground print:text-black">
                      — Multimodal Location Extraction Pipeline
                    </span>
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[10px] print:text-black">
                    2024
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-foreground/80 sm:text-sm print:text-[11px] print:text-black">
                  <p className="italic">
                    AI Engineer &amp; Full-Stack Developer
                  </p>
                  <a
                    href="https://github.com/25Pradnyesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted-foreground underline print:text-[10px] print:text-black"
                  >
                    github.com/25Pradnyesh
                  </a>
                </div>
                <ul className="mt-1 list-disc space-y-1 pl-4 text-xs/relaxed text-muted-foreground print:mt-0.5 print:space-y-0.5 print:text-[10.5px] print:text-black">
                  <li>
                    Automated extraction pipeline combining computer vision and
                    NLP to extract destination names and geographic landmarks
                    from social media reels.
                  </li>
                  <li>
                    Clusters extracted locations and plots interactive routes
                    via Google Maps API integration to convert saved content
                    into actionable itineraries.
                  </li>
                </ul>
              </div>

              {/* VertiFarm */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-semibold text-foreground print:text-black">
                    VertiFarm{" "}
                    <span className="font-normal text-muted-foreground print:text-black">
                      — Automated Vertical Farming Monitoring
                    </span>
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[10px] print:text-black">
                    2024
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-foreground/80 sm:text-sm print:text-[11px] print:text-black">
                  <p className="italic">IoT &amp; Full-Stack Developer</p>
                  <a
                    href="https://github.com/25Pradnyesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted-foreground underline print:text-[10px] print:text-black"
                  >
                    github.com/25Pradnyesh
                  </a>
                </div>
                <ul className="mt-1 list-disc space-y-1 pl-4 text-xs/relaxed text-muted-foreground print:mt-0.5 print:space-y-0.5 print:text-[10.5px] print:text-black">
                  <li>
                    Engineered telemetry architecture capturing environmental
                    sensor metrics (humidity, temperature, lighting) for indoor
                    agriculture.
                  </li>
                  <li>
                    Built a real-time full-stack dashboard for monitoring crop
                    conditions and configuring automated nutrient cycles.
                  </li>
                </ul>
              </div>

              {/* Design Resource Vault */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-semibold text-foreground print:text-black">
                    Design Resource Vault{" "}
                    <span className="font-normal text-muted-foreground print:text-black">
                      — Developer Directory
                    </span>
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[10px] print:text-black">
                    2023
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-foreground/80 sm:text-sm print:text-[11px] print:text-black">
                  <p className="italic">Frontend Developer &amp; Designer</p>
                  <a
                    href="https://design-resource-vault.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted-foreground underline print:text-[10px] print:text-black"
                  >
                    design-resource-vault.vercel.app
                  </a>
                </div>
                <ul className="mt-1 list-disc space-y-1 pl-4 text-xs/relaxed text-muted-foreground print:mt-0.5 print:space-y-0.5 print:text-[10.5px] print:text-black">
                  <li>
                    Curated platform of production-ready design tokens,
                    component patterns, and typography tokens with client-side
                    instant filtering.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* TECHNICAL SKILLS */}
          <section>
            <h2 className="border-b border-border/70 pb-1 font-heading text-xs font-bold tracking-wider text-foreground uppercase sm:text-sm print:border-black print:pb-0.5 print:text-xs print:text-black">
              Technical Skills
            </h2>

            <div className="mt-2 space-y-1.5 text-xs/relaxed sm:text-sm/relaxed print:mt-1 print:space-y-0.5 print:text-[10.5px]">
              <p>
                <strong className="font-semibold text-foreground print:text-black">
                  Languages:
                </strong>{" "}
                <span className="text-muted-foreground print:text-black">
                  TypeScript, JavaScript, Python, C++, HTML, CSS, SQL
                </span>
              </p>
              <p>
                <strong className="font-semibold text-foreground print:text-black">
                  Frontend:
                </strong>{" "}
                <span className="text-muted-foreground print:text-black">
                  React, Next.js, Tailwind CSS, shadcn/ui, Radix UI, Base UI,
                  Framer Motion, Expo, TanStack
                </span>
              </p>
              <p>
                <strong className="font-semibold text-foreground print:text-black">
                  Backend &amp; Database:
                </strong>{" "}
                <span className="text-muted-foreground print:text-black">
                  Node.js, Bun, PostgreSQL, MongoDB, Redis, FastAPI, Supabase,
                  nginx
                </span>
              </p>
              <p>
                <strong className="font-semibold text-foreground print:text-black">
                  Tools &amp; DevOps:
                </strong>{" "}
                <span className="text-muted-foreground print:text-black">
                  Git, GitHub, Docker, Vercel, Figma, PostHog, OpenPanel
                </span>
              </p>
            </div>
          </section>

          {/* HONORS & ACHIEVEMENTS */}
          <section>
            <h2 className="border-b border-border/70 pb-1 font-heading text-xs font-bold tracking-wider text-foreground uppercase sm:text-sm print:border-black print:pb-0.5 print:text-xs print:text-black">
              Honors &amp; Achievements
            </h2>

            <div className="mt-2 space-y-1 text-xs/relaxed sm:text-sm/relaxed print:mt-1 print:space-y-0.5 print:text-[10.5px]">
              <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                <p>
                  <strong className="font-semibold text-foreground print:text-black">
                    Winner — Monad Blitz Pune
                  </strong>{" "}
                  <span className="text-muted-foreground print:text-black">
                    (Penguin Protocol · Decentralized AI Investment Syndicate)
                  </span>
                </p>
                <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[10px] print:text-black">
                  10.2024
                </span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                <p>
                  <strong className="font-semibold text-foreground print:text-black">
                    Starknet Foundation Grant ($25,000)
                  </strong>{" "}
                  <span className="text-muted-foreground print:text-black">
                    (Developer grant awarded for Everyday habit reward protocol)
                  </span>
                </p>
                <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[10px] print:text-black">
                  2025
                </span>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  )
}
