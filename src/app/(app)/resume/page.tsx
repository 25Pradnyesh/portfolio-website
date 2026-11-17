import type { Metadata } from "next"

import { ResumeActions } from "./resume-actions"

export const metadata: Metadata = {
  title: "Resume — Pradnyesh Shejwal | Product Engineer",
  description:
    "Resume of Pradnyesh Shejwal — Product Engineer focused on frontend engineering, applied AI, and Web3 applications, based in Mumbai and Pune, India.",
  alternates: {
    canonical: "/resume",
  },
}

interface SkillGroup {
  category: string
  items: string
}

interface ProjectLink {
  label: string
  href: string
}

interface ResumeProject {
  title: string
  subtitle?: string
  period: string
  links: ProjectLink[]
  bullets: string[]
  tech: string
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: "TypeScript, JavaScript, Python, Solidity, SQL, C++, Java",
  },
  {
    category: "Frontend Engineering",
    items:
      "React, Next.js, Tailwind CSS, React Native (Expo), Framer Motion, Design Systems, Responsive UI, Figma",
  },
  {
    category: "Backend & APIs",
    items: "FastAPI, Node.js, REST APIs, Google Maps API, MQTT",
  },
  {
    category: "AI / Machine Learning",
    items:
      "PyTorch, Computer Vision, NLP, LLMs, Multimodal Pipelines, Prompt Engineering, Transfer Learning (MobileNetV3), AI Agents",
  },
  {
    category: "Databases",
    items: "PostgreSQL, Supabase, MongoDB",
  },
  {
    category: "Web3 / Blockchain",
    items:
      "Ethereum, Solidity, Foundry, Wallet Integration, Smart Contract Integration, Monad Testnet, SHA-256, Ed25519",
  },
  {
    category: "Developer Tools",
    items: "Git, GitHub, Docker, Vercel",
  },
]

const RESUME_PROJECTS: ResumeProject[] = [
  {
    title: "VAMO (Travel AI) — Multimodal Location Extraction & Mapping",
    period: "07.2026 – Present",
    links: [
      { label: "Live", href: "https://vamo-xi.vercel.app" },
      { label: "GitHub", href: "https://github.com/25Pradnyesh/Travel-AI-" },
    ],
    bullets: [
      "Built an end-to-end travel intelligence web application that transforms unstructured social media reels and captions into structured, mappable trip plans.",
      "Architected a multimodal extraction pipeline in Python and FastAPI combining computer vision, NLP, and LLMs to extract destinations and landmarks, then resolved, verified, and clustered places via Google Maps API for interactive route generation in Next.js.",
    ],
    tech: "Next.js, TypeScript, Python, FastAPI, Computer Vision, NLP, LLMs, Google Maps API, REST APIs",
  },
  {
    title: "ETHGlobal Mumbai — NONY.money",
    subtitle: "Product Architecture · System Design · Frontend Engineering",
    period: "11.2026",
    links: [
      { label: "Live", href: "https://nony.money" },
      {
        label: "Showcase",
        href: "https://ethglobal.com/showcase/nony-money-rmbfi",
      },
    ],
    bullets: [
      "Contributed to the TEE Private Intent Network architecture for NONY, a TEE-powered confidential Ethereum execution and settlement protocol—mapping interactions across Next.js, AWS Nitro Enclaves, smart contracts, wallet auth, private pools, and on-chain settlement, defining public chain visibility vs. confidential TEE state, and documenting deposit → private execution → swap → withdrawal flows across the Technical Specification, Implementation Plan, DECISIONS, and FLOW docs.",
      "Translated protocol architecture into a working product by designing the landing page, visual identity, navigation, and execution/review journeys, and implementing approximately 16 Next.js routes spanning deposit, private execution, pool/mix, transfer, wallet, and withdrawal interfaces with reusable components (AssetSelector, AttestationBadge, ExecutionModeCard, WalletModal).",
      "Integrated wallet hooks, useAttestation, useConfidentialBalance, and frontend lib/api and lib/crypto utilities into attestation and confidential-balance workflows; validated TypeScript, linting, and production builds generating 19 static pages.",
    ],
    tech: "Next.js, React, TypeScript, Ethereum, TEE Attestation UI, Wallet Integration, Client Cryptography, System Architecture",
  },
  {
    title: "Penguin Trace — Cryptographic File Verification Tool",
    subtitle: "Monad Blitz Pune V3",
    period: "10.2026",
    links: [
      { label: "Live", href: "https://monad-v3-six.vercel.app" },
      { label: "GitHub", href: "https://github.com/Shrysxs/monad-v3" },
    ],
    bullets: [
      "Built a browser-based file-verification tool that confirms downloaded files match publisher-signed release manifests without server uploads, using client-side SHA-256 hashing and Ed25519 signature verification.",
      "Implemented and tested a Solidity registry contract using Foundry and deployed it to Monad Testnet to anchor publisher public keys and immutable release records for client-side verification.",
    ],
    tech: "TypeScript, Solidity, Foundry, SHA-256, Ed25519, Monad Testnet, Smart Contracts",
  },
  {
    title: "Penguin Protocol — Decentralized AI Investment Syndicate",
    subtitle: "Winner, Monad Blitz Pune · Built in under 8 hours",
    period: "07.2026",
    links: [
      { label: "GitHub", href: "https://github.com/Shrysxs/monad-blitz-pune" },
    ],
    bullets: [
      "Won Monad Blitz Pune by building the frontend architecture and core product logic for a decentralized AI investment syndicate from concept to working prototype in under 8 hours.",
      "Implemented interactive React and Next.js workflows connecting wallet interactions, AI-assisted investment intelligence views, confidence voting, and on-chain coordination logic.",
    ],
    tech: "Next.js, React, TypeScript, Wallet Integration, Smart Contract Integration, LLMs, REST APIs",
  },
  {
    title: "VertiFarm — AI + IoT Vertical Farming System",
    subtitle: "Final Year Engineering Project",
    period: "2026",
    links: [
      { label: "GitHub", href: "https://github.com/25Pradnyesh/vertifarm-app" },
    ],
    bullets: [
      "Trained a six-class plant disease classification model in PyTorch using MobileNetV3 transfer learning on a 600-image dataset, and integrated real-time image inference into a FastAPI service.",
      "Connected STM32 and ESP32-CAM sensor nodes over MQTT to stream temperature, humidity, soil moisture, and light telemetry into a PostgreSQL/Supabase backend and React Native (Expo) monitoring app.",
    ],
    tech: "Python, FastAPI, PyTorch, MobileNetV3, React Native (Expo), MQTT, PostgreSQL, Supabase, STM32, ESP32-CAM",
  },
  {
    title: "Reclaim — AI Digital Wellbeing Application",
    subtitle: "WeMakeDevs FutureStack GenAI Hackathon · Built in 6 days",
    period: "10.2025",
    links: [{ label: "GitHub", href: "https://github.com/Shrysxs/wemakedevs" }],
    bullets: [
      "Built a full-stack digital wellbeing prototype in 6 days that turns smartphone usage data into contextual behavioral insights and personalized focus interventions.",
      "Integrated Llama inference via the Cerebras API with a Next.js, TypeScript, and Supabase/PostgreSQL application layer for structured prompt orchestration and user telemetry storage.",
    ],
    tech: "Next.js, React, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Cerebras API, Llama",
  },
  {
    title: "VoiceAds — Customer Feedback to Ad Intelligence",
    subtitle: "AIBoomi Startup Weekend Pune · Built in under 24 hours",
    period: "02.2026",
    links: [{ label: "Live", href: "https://voiceads.vercel.app" }],
    bullets: [
      "Designed and shipped an LLM-powered prototype in under 24 hours that runs semantic analysis over unstructured customer reviews to extract sentiment, recurring pain points, and themes into structured ad creative.",
    ],
    tech: "Next.js, React, TypeScript, LLMs, NLP, Prompt Engineering, REST APIs",
  },
  {
    title: "Design Resource Vault — Curated UI & Design Systems Directory",
    period: "08.2026",
    links: [
      { label: "Live", href: "https://design-resource-vault.vercel.app" },
    ],
    bullets: [
      "Built a responsive discovery directory for design systems, component patterns, design tokens, and UI tooling, featuring structured category taxonomy, instant client-side filtering, and motion transitions.",
    ],
    tech: "Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Design Systems",
  },
]

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-2 border-b border-[#13315b]/85 pb-0.5 print:mb-1.5">
      <h2 className="text-[9.5pt] font-bold tracking-[0.09em] text-[#13315b] uppercase print:text-[9.2pt]">
        {title}
      </h2>
    </div>
  )
}

export default function ResumePage() {
  return (
    <div className="mx-auto my-6 max-w-3xl overflow-hidden rounded-xl border border-neutral-300 bg-white text-[#1a1a1a] shadow-sm sm:my-10 print:m-0 print:max-w-none print:overflow-visible print:rounded-none print:border-none print:bg-white print:p-0 print:shadow-none">
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 9.5mm 12mm 9.5mm 12mm;
          }
          html, body {
            background: white !important;
            color: #1a1a1a !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          body > div > *:not(main),
          .group\\/layout > *:not(main) {
            display: none !important;
          }
          header:not(.resume-header),
          footer,
          nav,
          aside,
          [role="navigation"],
          .site-header,
          .site-footer,
          .print\\:hidden {
            display: none !important;
          }
          main {
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            overflow: visible !important;
          }
          a {
            color: #1f6eb5 !important;
            text-decoration: none !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print-break-inside-avoid {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }
          .print-break-before-page {
            break-before: page !important;
            page-break-before: always !important;
          }
          h1, h2, h3 {
            break-after: avoid !important;
            page-break-after: avoid !important;
          }
        }
      `}</style>

      <ResumeActions />

      {/* Resume Document Sheet */}
      <article className="bg-white px-5 py-7 text-[9pt] leading-[1.42] text-[#1a1a1a] sm:px-10 sm:py-9 print:px-0 print:py-0 print:text-[8.55pt] print:leading-[1.35]">
        {/* Header */}
        <header className="resume-header border-b border-neutral-200 pb-3.5 text-center print:border-none print:pb-0">
          <h1 className="text-[18pt] leading-tight font-bold tracking-[0.06em] text-[#0f172a] uppercase sm:text-[20pt] print:text-[18pt]">
            PRADNYESH SHEJWAL
          </h1>
          <p className="mt-1 text-[10pt] font-semibold tracking-[0.01em] text-[#13315b] sm:text-[10.5pt] print:mt-0.5 print:text-[10pt]">
            Product Engineer | Frontend, AI &amp; Web3
          </p>

          <div className="mt-2 space-y-1 text-[8.3pt] text-[#525252] print:mt-1.5 print:space-y-0.5 print:text-[8.2pt]">
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
              <span>Mumbai / Pune, India</span>
              <span aria-hidden className="text-neutral-300">
                |
              </span>
              <a
                href="mailto:workspace.pradnyesh@gmail.com"
                className="text-[#1f6eb5] transition-colors hover:text-[#13315b] hover:underline"
              >
                workspace.pradnyesh@gmail.com
              </a>
              <span aria-hidden className="text-neutral-300">
                |
              </span>
              <a
                href="https://pradnyesh.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1f6eb5] transition-colors hover:text-[#13315b] hover:underline"
              >
                pradnyesh.vercel.app
              </a>
              <span aria-hidden className="text-neutral-300">
                |
              </span>
              <a
                href="https://github.com/25Pradnyesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1f6eb5] transition-colors hover:text-[#13315b] hover:underline"
              >
                github.com/25Pradnyesh
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
              <a
                href="https://www.linkedin.com/in/pradnyesh-s/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1f6eb5] transition-colors hover:text-[#13315b] hover:underline"
              >
                linkedin.com/in/pradnyesh-s
              </a>
              <span aria-hidden className="text-neutral-300">
                |
              </span>
              <a
                href="https://x.com/Pradnyesh_25"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1f6eb5] transition-colors hover:text-[#13315b] hover:underline"
              >
                x.com/Pradnyesh_25
              </a>
              <span aria-hidden className="text-neutral-300">
                |
              </span>
              <a
                href="https://cal.com/pradnyesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1f6eb5] transition-colors hover:text-[#13315b] hover:underline"
              >
                cal.com/pradnyesh
              </a>
            </div>
          </div>
        </header>

        <div className="mt-4 space-y-4 print:mt-3 print:space-y-3">
          {/* Professional Summary */}
          <section className="print-break-inside-avoid">
            <SectionHeading title="PROFESSIONAL SUMMARY" />
            <p className="text-[#1f1f1f]">
              Product engineer building end-to-end web applications across
              frontend engineering, applied AI, and Web3. Works primarily with
              React, Next.js, TypeScript, and Python to take ideas from concept
              to working software through modular UI architecture, API
              integration, and system design contributions. Built multimodal AI
              extraction pipelines, wallet-connected Ethereum interfaces, and
              cryptographic file-verification tools, with rapid prototyping
              demonstrated across hackathons including a win at Monad Blitz Pune
              and frontend engineering at ETHGlobal Mumbai.
            </p>
          </section>

          {/* Education */}
          <section className="print-break-inside-avoid">
            <SectionHeading title="EDUCATION" />
            <div className="space-y-2 print:space-y-1.5">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <span className="font-semibold text-[#0f172a]">
                    Savitribai Phule Pune University (SPPU)
                  </span>
                  <span className="shrink-0 text-[8.4pt] font-medium text-[#525252] tabular-nums">
                    2023 – 2027
                  </span>
                </div>
                <div className="text-[#404040]">
                  Bachelor of Engineering (B.E.) in Electronics &amp; Computer
                  Engineering &middot; Honors: Artificial Intelligence and
                  Machine Learning
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <span className="font-semibold text-[#0f172a]">
                    B.K. Birla College of Arts, Science &amp; Commerce
                  </span>
                  <span className="shrink-0 text-[8.4pt] font-medium text-[#525252] tabular-nums">
                    2022 – 2023
                  </span>
                </div>
                <div className="text-[#404040]">
                  12th Grade &middot; Science Stream
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <span className="font-semibold text-[#0f172a]">
                    Smt. Kantaben Chandulal Gandhi English School
                  </span>
                  <span className="shrink-0 text-[8.4pt] font-medium text-[#525252] tabular-nums">
                    2020 – 2021
                  </span>
                </div>
                <div className="text-[#404040]">10th Grade</div>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="print-break-inside-avoid">
            <SectionHeading title="TECHNICAL SKILLS" />
            <dl className="space-y-1.5 print:space-y-1">
              {SKILL_GROUPS.map((group) => (
                <div
                  key={group.category}
                  className="grid grid-cols-1 gap-x-3 sm:grid-cols-[152px_1fr] print:grid-cols-[138px_1fr]"
                >
                  <dt className="font-semibold text-[#0f172a]">
                    {group.category}
                  </dt>
                  <dd className="text-[#262626]">{group.items}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Experience */}
          <section className="print-break-inside-avoid">
            <SectionHeading title="EXPERIENCE" />
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                <h3 className="font-semibold text-[#0f172a]">
                  Product Engineer{" "}
                  <span className="font-normal text-neutral-400">|</span>{" "}
                  Independent Product Development
                </h3>
                <span className="shrink-0 text-[8.4pt] font-medium text-[#525252] tabular-nums">
                  03.2025 – Present
                </span>
              </div>
              <ul className="mt-1.5 list-disc space-y-1 pl-4 text-[#1f1f1f] print:mt-1 print:space-y-0.5 print:pl-3.5">
                <li>
                  Build end-to-end web applications from concept to deployed
                  prototype using React, Next.js, TypeScript, Python, and
                  FastAPI, owning frontend implementation, client state, and
                  backend API integration.
                </li>
                <li>
                  Design reusable frontend component architectures, responsive
                  layouts, and interactive user journeys using Tailwind CSS,
                  Framer Motion, and Figma-driven design systems.
                </li>
                <li>
                  Integrate external APIs, Ethereum wallet connectivity,
                  client-side cryptographic utilities, and LLM-powered workflows
                  into coherent user-facing products.
                </li>
                <li>
                  Develop multimodal AI pipelines and application-level ML
                  integrations combining computer vision, NLP, LLMs, and PyTorch
                  inference behind FastAPI endpoints.
                </li>
                <li>
                  Contribute to product architecture, transaction-flow design,
                  and rapid prototyping across independent builds and
                  time-constrained hackathons ranging from 8-hour sprints to
                  6-day delivery cycles.
                </li>
              </ul>
            </div>
          </section>

          {/* Projects (Page 2 in Print) */}
          <section className="print-break-before-page pt-1 print:pt-0">
            <SectionHeading title="PROJECTS" />
            <div className="space-y-3 print:space-y-2">
              {RESUME_PROJECTS.map((project) => (
                <div key={project.title} className="print-break-inside-avoid">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                    <div className="flex flex-wrap items-baseline gap-x-1.5">
                      <h3 className="font-semibold text-[#0f172a]">
                        {project.title}
                      </h3>
                      {project.links.map((link) => (
                        <span
                          key={link.href}
                          className="inline-flex items-baseline gap-x-1.5"
                        >
                          <span aria-hidden className="text-neutral-400">
                            &middot;
                          </span>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[8.4pt] font-medium text-[#1f6eb5] transition-colors hover:text-[#13315b] hover:underline"
                          >
                            {link.label}
                          </a>
                        </span>
                      ))}
                    </div>
                    <span className="shrink-0 text-[8.4pt] font-medium text-[#525252] tabular-nums">
                      {project.period}
                    </span>
                  </div>

                  {project.subtitle && (
                    <div className="text-[8.2pt] font-medium text-[#525252]">
                      {project.subtitle}
                    </div>
                  )}

                  <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#1f1f1f] print:mt-0.5 print:space-y-0.5 print:pl-3.5">
                    {project.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>

                  <p className="mt-0.5 text-[8.2pt] text-[#525252]">
                    <span className="font-semibold text-[#262626]">Stack:</span>{" "}
                    {project.tech}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Awards & Coursework */}
          <section className="print-break-inside-avoid pt-1 print:pt-0.5">
            <SectionHeading title="AWARDS, RECOGNITION & COURSEWORK" />
            <div className="space-y-2.5 print:space-y-1.5">
              <div>
                <h3 className="text-[8.3pt] font-semibold tracking-wide text-[#525252] uppercase">
                  Awards &amp; Hackathons
                </h3>
                <ul className="mt-1 list-disc space-y-1 pl-4 text-[#1f1f1f] print:mt-0.5 print:space-y-0.5 print:pl-3.5">
                  <li>
                    <strong className="font-semibold text-[#0f172a]">
                      Monad Blitz Pune — Winner:
                    </strong>{" "}
                    Penguin Protocol, built from concept to working prototype in
                    under 8 hours (07.2026).
                  </li>
                  <li>
                    <strong className="font-semibold text-[#0f172a]">
                      WeMakeDevs FutureStack GenAI Hackathon:
                    </strong>{" "}
                    Reclaim, end-to-end prototype shipped in 6 days (10.2025).
                  </li>
                  <li>
                    <strong className="font-semibold text-[#0f172a]">
                      AIBoomi Startup Weekend Pune:
                    </strong>{" "}
                    VoiceAds, functional prototype shipped in under 24 hours
                    (02.2026).
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[8.3pt] font-semibold tracking-wide text-[#525252] uppercase">
                  Coursework
                </h3>
                <ul className="mt-1 list-disc pl-4 text-[#1f1f1f] print:mt-0.5 print:pl-3.5">
                  <li>
                    <strong className="font-semibold text-[#0f172a]">
                      Machine Learning Specialization (Andrew Ng):
                    </strong>{" "}
                    In progress.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  )
}
