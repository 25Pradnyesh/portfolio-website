import type { Metadata } from "next"

import { ResumeActions } from "./resume-actions"

export const metadata: Metadata = {
  title: "Resume — Pradnyesh | ML Engineer & Full-Stack Developer",
  description:
    "Engineering resume of Pradnyesh — ML Engineer & Full-Stack Developer based in Mumbai & Pune, India.",
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
            margin: 0.28in 0.38in;
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
      <article className="px-6 py-8 sm:px-10 sm:py-9 print:p-0 print:text-[9px] print:leading-[1.18]">
        {/* HEADER */}
        <header className="border-b border-border/70 pb-3 text-center sm:pb-3.5 print:border-black print:pb-1">
          <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl print:text-base print:text-black">
            PRADNYESH
          </h1>
          <p className="mt-0.5 font-mono text-xs font-medium text-foreground/85 sm:text-sm print:text-[10px] print:text-black">
            ML Engineer &amp; Full-Stack Developer · Mumbai · Pune, India
          </p>

          <div className="mt-1.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground sm:gap-x-3.5 print:text-[8px] print:text-black">
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
            <span aria-hidden className="text-border print:text-gray-400">
              |
            </span>
            <a
              href="https://pradnyesh.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground print:text-black"
            >
              pradnyesh.vercel.app
            </a>
          </div>
        </header>

        <div className="mt-3.5 space-y-3.5 print:mt-1 print:space-y-1">
          {/* EDUCATION */}
          <section>
            <h2 className="border-b border-border/70 pb-0.5 font-heading text-xs font-bold tracking-wider text-foreground uppercase sm:text-sm print:border-black print:pb-0.5 print:text-[9.5px] print:text-black">
              Education
            </h2>

            <div className="mt-1.5 space-y-1.5 print:mt-0.5 print:space-y-0.5">
              {/* SPPU */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-semibold text-foreground print:text-black">
                    Savitribai Phule Pune University (SPPU)
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[8px] print:text-black">
                    2023 — 2027
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-foreground/80 sm:text-sm print:text-[8.5px] print:text-black">
                  <p className="italic">
                    Bachelor of Engineering (B.E.) in Electronics &amp; Computer
                    Engineering
                  </p>
                  <span className="font-mono text-xs text-muted-foreground print:text-[8px] print:text-black">
                    Pune, India
                  </span>
                </div>
                <p className="text-xs text-muted-foreground print:text-[8px] print:text-black">
                  Undergraduate engineering student in Electronics &amp;
                  Computer Engineering with{" "}
                  <strong className="font-medium text-foreground/90 print:text-black">
                    HONORS in Artificial Intelligence and Machine Learning
                  </strong>
                  .
                </p>
              </div>

              {/* Secondary education */}
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 print:grid-cols-2">
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs print:text-[8px]">
                    <span className="font-medium text-foreground/95 print:text-black">
                      B.K. Birla College of Arts, Science &amp; Commerce
                    </span>
                    <span className="font-mono text-muted-foreground tabular-nums print:text-black">
                      2022 — 2023
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground italic print:text-[7.5px] print:text-black">
                    12th Grade · Science (Completed 12th grade in science
                    stream)
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs print:text-[8px]">
                    <span className="font-medium text-foreground/95 print:text-black">
                      Smt. Kantaben Chandulal Gandhi English School
                    </span>
                    <span className="font-mono text-muted-foreground tabular-nums print:text-black">
                      2020 — 2021
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground italic print:text-[7.5px] print:text-black">
                    10th Grade (Completed 10th grade)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PROFESSIONAL EXPERIENCE */}
          <section>
            <h2 className="border-b border-border/70 pb-0.5 font-heading text-xs font-bold tracking-wider text-foreground uppercase sm:text-sm print:border-black print:pb-0.5 print:text-[9.5px] print:text-black">
              Professional Experience
            </h2>

            <div className="mt-1.5 space-y-2 print:mt-0.5 print:space-y-0.5">
              {/* Independent Builder & Product Development */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-semibold text-foreground print:text-black">
                    Independent Builder &amp; Product Development
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground print:text-[8px] print:text-black">
                    Independent
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-foreground/80 sm:text-sm print:text-[8.5px] print:text-black">
                  <p className="italic">Full-Stack Developer</p>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[8px] print:text-black">
                    03.2025 — Present
                  </span>
                </div>
                <ul className="mt-0.5 list-disc space-y-0.5 pl-4 text-xs/relaxed text-muted-foreground print:mt-0 print:space-y-0 print:text-[8px] print:text-black">
                  <li>
                    Architecting and shipping end-to-end applications from zero
                    to working product.
                  </li>
                  <li>
                    Building intelligent systems with autonomous agent workflows
                    and multimodal extraction pipelines.
                  </li>
                  <li>
                    Experimenting with Next.js, FastAPI, Python, and modern UI
                    engineering.
                  </li>
                </ul>
                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground print:mt-0 print:text-[7.5px] print:text-black">
                  <span className="font-medium text-foreground/90 print:text-black">
                    Skills:
                  </span>{" "}
                  Product Engineering, Rapid Prototyping, Full-Stack
                  Development, System Architecture
                </p>
              </div>

              {/* AI & Machine Learning Engineering */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-semibold text-foreground print:text-black">
                    AI &amp; Machine Learning Engineering
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground print:text-[8px] print:text-black">
                    Projects &amp; Research
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-foreground/80 sm:text-sm print:text-[8.5px] print:text-black">
                  <p className="italic">AI / ML Developer</p>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[8px] print:text-black">
                    04.2025 — Present
                  </span>
                </div>
                <ul className="mt-0.5 list-disc space-y-0.5 pl-4 text-xs/relaxed text-muted-foreground print:mt-0 print:space-y-0 print:text-[8px] print:text-black">
                  <li>
                    Building intelligent systems using LLMs, computer vision,
                    and NLP extraction pipelines.
                  </li>
                  <li>
                    Developing multimodal content extraction tools from social
                    media reels and posts for Travel AI.
                  </li>
                  <li>
                    Designing prompt engineering and autonomous agent workflows.
                  </li>
                </ul>
                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground print:mt-0 print:text-[7.5px] print:text-black">
                  <span className="font-medium text-foreground/90 print:text-black">
                    Skills:
                  </span>{" "}
                  Generative AI, LLMs, AI Agents, Computer Vision, Python,
                  FastAPI
                </p>
              </div>

              {/* Design Engineering */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-semibold text-foreground print:text-black">
                    Design Engineering
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground print:text-[8px] print:text-black">
                    Projects &amp; Product Development
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-foreground/80 sm:text-sm print:text-[8.5px] print:text-black">
                  <p className="italic">Design Engineer</p>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[8px] print:text-black">
                    07.2025 — Present
                  </span>
                </div>
                <ul className="mt-0.5 list-disc space-y-0.5 pl-4 text-xs/relaxed text-muted-foreground print:mt-0 print:space-y-0 print:text-[8px] print:text-black">
                  <li>
                    Architecting production-grade interfaces and design systems
                    for responsive web applications, translating product
                    requirements into scalable UI architectures.
                  </li>
                  <li>
                    Building component-driven design systems, interaction
                    patterns, and visual language across product surfaces.
                  </li>
                  <li>
                    Bridging design and frontend engineering through
                    high-fidelity implementation, responsive architecture,
                    accessibility, and reusable component primitives.
                  </li>
                  <li>
                    Applying interaction design, motion systems, information
                    architecture, and visual hierarchy to improve product
                    usability and interface quality.
                  </li>
                </ul>
                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground print:mt-0 print:text-[7.5px] print:text-black">
                  <span className="font-medium text-foreground/90 print:text-black">
                    Skills:
                  </span>{" "}
                  UI/UX Design, Design Systems, Figma, Interaction Design,
                  Motion Design, Frontend Engineering
                </p>
              </div>
            </div>
          </section>

          {/* FEATURED PROJECTS */}
          <section>
            <h2 className="border-b border-border/70 pb-0.5 font-heading text-xs font-bold tracking-wider text-foreground uppercase sm:text-sm print:border-black print:pb-0.5 print:text-[9.5px] print:text-black">
              Featured Projects
            </h2>

            <div className="mt-1.5 space-y-2 print:mt-0.5 print:space-y-0.5">
              {/* Travel AI */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-semibold text-foreground print:text-black">
                    Travel AI
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[8px] print:text-black">
                    06.2026 — Present
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-foreground/80 sm:text-sm print:text-[8.5px] print:text-black">
                  <p className="italic">
                    AI Engineer &amp; Full-Stack Developer · Independent Project
                  </p>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground print:text-[8px] print:text-black">
                  AI-powered travel intelligence system for extracting,
                  structuring, and mapping geographic information from social
                  media content.
                </p>
                <ul className="mt-0.5 list-disc space-y-0.5 pl-4 text-xs/relaxed text-muted-foreground print:mt-0 print:space-y-0 print:text-[8px] print:text-black">
                  <li>
                    Architecting a multimodal information-extraction pipeline
                    combining computer vision, NLP, and contextual language
                    models to identify destinations, landmarks, and geographic
                    signals from Instagram reels and captions.
                  </li>
                  <li>
                    Developing entity extraction, semantic parsing, location
                    resolution, and structured data transformation workflows to
                    convert unstructured social content into structured
                    geographic intelligence.
                  </li>
                  <li>
                    Integrating Google Maps APIs and geospatial services to
                    cluster extracted locations, establish spatial
                    relationships, and generate interactive routes and itinerary
                    representations.
                  </li>
                </ul>
                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground print:mt-0 print:text-[7.5px] print:text-black">
                  <span className="font-medium text-foreground/90 print:text-black">
                    Skills:
                  </span>{" "}
                  Python, FastAPI, Next.js, TypeScript, Computer Vision, NLP,
                  LLMs, Information Extraction, Semantic Parsing, Geospatial
                  Processing, Google Maps API, REST APIs
                </p>
              </div>

              {/* Penguin Protocol */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-semibold text-foreground print:text-black">
                    Penguin Protocol
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[8px] print:text-black">
                    07.2026
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-foreground/80 sm:text-sm print:text-[8.5px] print:text-black">
                  <p className="italic">
                    Collaborative Project · Monad Blitz Pune Hackathon
                  </p>
                  <a
                    href="https://github.com/Shrysxs/monad-blitz-pune"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted-foreground underline hover:text-foreground print:text-[8px] print:text-black"
                  >
                    github.com/Shrysxs/monad-blitz-pune
                  </a>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground print:text-[8px] print:text-black">
                  <strong className="font-medium text-foreground print:text-black">
                    Winner — Monad Blitz Pune.
                  </strong>{" "}
                  Decentralized AI investment syndicate integrating AI-assisted
                  decision workflows with blockchain infrastructure.
                </p>
                <ul className="mt-0.5 list-disc space-y-0.5 pl-4 text-xs/relaxed text-muted-foreground print:mt-0 print:space-y-0 print:text-[8px] print:text-black">
                  <li>
                    Engineered the frontend architecture and core product logic,
                    translating the investment-syndicate concept into a
                    functional decentralized application.
                  </li>
                  <li>
                    Implemented product workflows around AI-assisted investment
                    intelligence, decentralized coordination, and on-chain
                    interactions.
                  </li>
                  <li>
                    Collaborated on the rapid architecture and implementation of
                    the MVP, taking the product from concept to a functional
                    prototype in under 8 hours.
                  </li>
                </ul>
                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground print:mt-0 print:text-[7.5px] print:text-black">
                  <span className="font-medium text-foreground/90 print:text-black">
                    Skills:
                  </span>{" "}
                  React, Next.js, TypeScript, Web3, Blockchain, Smart Contracts,
                  AI/LLMs, Wallet Integration, On-Chain Interactions, API
                  Integration, Product Engineering
                </p>
              </div>

              {/* VoiceAds */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-semibold text-foreground print:text-black">
                    VoiceAds
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[8px] print:text-black">
                    02.2026
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-foreground/80 sm:text-sm print:text-[8.5px] print:text-black">
                  <p className="italic">
                    Collaborative Project · AIBoomi Startup Weekend, Pune
                  </p>
                  <a
                    href="https://voiceads.vercel.app/?utm_source=portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted-foreground underline hover:text-foreground print:text-[8px] print:text-black"
                  >
                    voiceads.vercel.app
                  </a>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground print:text-[8px] print:text-black">
                  LLM-powered MarTech platform that transforms authentic
                  customer feedback into structured advertising intelligence and
                  high-trust marketing content.
                </p>
                <ul className="mt-0.5 list-disc space-y-0.5 pl-4 text-xs/relaxed text-muted-foreground print:mt-0 print:space-y-0 print:text-[8px] print:text-black">
                  <li>
                    Contributed to the development of an LLM-driven semantic
                    analysis pipeline for extracting customer sentiment,
                    recurring language, product signals, pain points, and
                    thematic patterns from unstructured reviews.
                  </li>
                  <li>
                    Developed a feedback-to-content generation workflow that
                    converts qualitative customer insights into structured
                    marketing narratives and advertising-ready creative.
                  </li>
                  <li>
                    Collaborated on the product architecture and implementation
                    to design, build, and deploy a functional prototype in under
                    24 hours.
                  </li>
                </ul>
                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground print:mt-0 print:text-[7.5px] print:text-black">
                  <span className="font-medium text-foreground/90 print:text-black">
                    Skills:
                  </span>{" "}
                  Next.js, React, TypeScript, LLMs, NLP, Semantic Analysis,
                  Sentiment Analysis, Prompt Engineering, Generative AI, Content
                  Intelligence, MarTech, REST APIs, Vercel
                </p>
              </div>

              {/* Design Resource Vault */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-semibold text-foreground print:text-black">
                    Design Resource Vault
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[8px] print:text-black">
                    08.2026
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-foreground/80 sm:text-sm print:text-[8.5px] print:text-black">
                  <p className="italic">
                    Frontend Developer &amp; Designer · Independent Project
                  </p>
                  <a
                    href="https://design-resource-vault.vercel.app/?utm_source=portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted-foreground underline hover:text-foreground print:text-[8px] print:text-black"
                  >
                    design-resource-vault.vercel.app
                  </a>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground print:text-[8px] print:text-black">
                  Design intelligence platform for developers and designers,
                  focused on structured discovery of production-ready design
                  resources.
                </p>
                <ul className="mt-0.5 list-disc space-y-0.5 pl-4 text-xs/relaxed text-muted-foreground print:mt-0 print:space-y-0 print:text-[8px] print:text-black">
                  <li>
                    Architected a centralized resource platform covering design
                    systems, component patterns, design tokens, typography
                    systems, UI tooling, and interaction references.
                  </li>
                  <li>
                    Implemented a structured content taxonomy and discovery
                    architecture with category indexing, client-side filtering,
                    and efficient resource retrieval.
                  </li>
                  <li>
                    Engineered a responsive, production-grade interface with
                    emphasis on component architecture, visual systems,
                    interaction design, and frontend performance.
                  </li>
                </ul>
                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground print:mt-0 print:text-[7.5px] print:text-black">
                  <span className="font-medium text-foreground/90 print:text-black">
                    Skills:
                  </span>{" "}
                  Next.js, React, TypeScript, Tailwind CSS, Framer Motion,
                  Design Systems, Design Tokens, Component Architecture,
                  Interaction Design, Responsive UI, UX Engineering
                </p>
              </div>

              {/* Reclaim */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-semibold text-foreground print:text-black">
                    Reclaim
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[8px] print:text-black">
                    10.2025
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-foreground/80 sm:text-sm print:text-[8.5px] print:text-black">
                  <p className="italic">
                    Collaborative Project · WeMakeDevs FutureStack GenAI
                    Hackathon
                  </p>
                  <a
                    href="https://github.com/Shrysxs/wemakedevs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted-foreground underline hover:text-foreground print:text-[8px] print:text-black"
                  >
                    github.com/Shrysxs/wemakedevs
                  </a>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground print:text-[8px] print:text-black">
                  AI-powered digital wellbeing platform that transforms
                  smartphone usage data into contextual behavioral insights and
                  personalized interventions.
                </p>
                <ul className="mt-0.5 list-disc space-y-0.5 pl-4 text-xs/relaxed text-muted-foreground print:mt-0 print:space-y-0 print:text-[8px] print:text-black">
                  <li>
                    Contributed to the architecture and development of a
                    full-stack AI application integrating Llama-based models
                    through the Cerebras API with a Supabase-backed application
                    and data layer.
                  </li>
                  <li>
                    Developed AI workflows for behavioral pattern analysis,
                    contextual insight generation, usage interpretation, and
                    personalized focus interventions.
                  </li>
                  <li>
                    Collaborated across product development, frontend
                    engineering, backend infrastructure, database integration,
                    and AI orchestration to deliver a functional end-to-end
                    prototype within 6 days.
                  </li>
                </ul>
                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground print:mt-0 print:text-[7.5px] print:text-black">
                  <span className="font-medium text-foreground/90 print:text-black">
                    Skills:
                  </span>{" "}
                  Next.js 14, React, TypeScript, Tailwind CSS, Supabase,
                  PostgreSQL, Cerebras API, Llama, Generative AI, LLM
                  Integration, AI Orchestration, Behavioral Analytics, REST APIs
                </p>
              </div>
            </div>
          </section>

          {/* AWARDS / ACHIEVEMENTS */}
          <section>
            <h2 className="border-b border-border/70 pb-0.5 font-heading text-xs font-bold tracking-wider text-foreground uppercase sm:text-sm print:border-black print:pb-0.5 print:text-[9.5px] print:text-black">
              Awards / Achievements
            </h2>

            <div className="mt-1.5 space-y-1 text-xs/relaxed sm:text-sm/relaxed print:mt-0.5 print:space-y-0 print:text-[8px]">
              <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                <p>
                  <strong className="font-semibold text-foreground print:text-black">
                    Monad Blitz Pune — Penguin Protocol
                  </strong>{" "}
                  <span className="text-muted-foreground print:text-black">
                    · Winner
                  </span>
                </p>
                <span className="font-mono text-xs text-muted-foreground tabular-nums print:text-[8px] print:text-black">
                  07.2026
                </span>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  )
}
