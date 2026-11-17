import type { Metadata } from "next"

import { ResumeActions } from "./resume-actions"

export const metadata: Metadata = {
  title: "Resume — Pradnyesh Shejwal | AI Product Engineer",
  description:
    "Engineering resume of Pradnyesh Shejwal — AI Product Engineer based in Mumbai & Pune, India.",
  alternates: {
    canonical: "/resume",
  },
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-2 border-b border-[#13315b] pb-1 print:mb-1.5 print:pb-0.5">
      <h2 className="font-heading text-[10pt] font-bold tracking-wider text-[#13315b] uppercase print:text-[10pt]">
        {title}
      </h2>
    </div>
  )
}

export default function ResumePage() {
  return (
    <div className="mx-auto my-6 max-w-3xl overflow-hidden rounded-xl border border-neutral-300 bg-neutral-100 text-[#1a1a1a] shadow-sm sm:my-10 print:m-0 print:max-w-none print:overflow-visible print:rounded-none print:border-none print:bg-white print:p-0 print:shadow-none">
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 10mm 12mm 10mm 12mm;
          }
          html, body {
            background: white !important;
            color: #1a1a1a !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          body > div > *:not(main) {
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
      <article className="bg-white px-8 py-8 text-[9pt] leading-[1.4] text-[#1a1a1a] shadow-xs sm:px-10 sm:py-9 print:px-0 print:py-0 print:text-[8.8pt] print:leading-[1.38] print:shadow-none">
        {/* ——— HEADER ——— */}
        <header className="resume-header text-center">
          <p className="mt-1 text-[10.5pt] font-semibold text-black print:text-[10.5pt]">
            Product Engineer | Frontend, AI &amp; Web3
          </p>

          <div className="mt-2 space-y-1 text-[8.4pt] text-[#545454] print:mt-1.5 print:space-y-0.5 print:text-[8.4pt]">
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
              <span>Mumbai &middot; Pune, India</span>
              <span aria-hidden className="text-neutral-400">
                |
              </span>
              <a
                href="mailto:workspace.pradnyesh@gmail.com"
                className="text-[#1f6eb5] transition-colors hover:text-[#13315b] hover:underline"
              >
                workspace.pradnyesh@gmail.com
              </a>
              <span aria-hidden className="text-neutral-400">
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
              <span aria-hidden className="text-neutral-400">
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
              <span aria-hidden className="text-neutral-400">
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
              <span aria-hidden className="text-neutral-400">
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

        <div className="mt-4 space-y-4 print:mt-3 print:space-y-3.5">
          {/* ——— SUMMARY ——— */}
          <section className="print-break-inside-avoid">
            <SectionHeading title="SUMMARY" />
            <p className="text-justify text-[#1a1a1a] print:text-left">
              Product-focused engineer experienced in designing, building, and
              shipping web applications across frontend engineering, AI, and
              Web3. Strong foundation in React, Next.js, TypeScript, and Python,
              with hands-on experience developing multimodal AI pipelines,
              integrating LLM-powered workflows, and building blockchain-enabled
              applications. Contributed to system architecture and frontend
              development at ETHGlobal Mumbai and built Penguin Trace, a
              file-verification tool using cryptographic signatures and on-chain
              registries. Winner of Monad Blitz Pune, with a focus on turning
              complex technical concepts into functional, user-centered
              products.
            </p>
          </section>

          {/* ——— EDUCATION ——— */}
          <section className="print-break-inside-avoid">
            <SectionHeading title="EDUCATION" />
            <div className="space-y-2 print:space-y-1.5">
              <div>
                <div className="flex items-baseline justify-between gap-x-2">
                  <span className="font-bold text-black">
                    Savitribai Phule Pune University (SPPU)
                  </span>
                  <span className="shrink-0 font-medium text-[#545454] tabular-nums">
                    2023 – 2027
                  </span>
                </div>
                <div className="text-[#545454]">
                  Bachelor of Engineering (B.E.) in Electronics &amp; Computer
                  Engineering
                </div>
                <div className="text-[#545454]">
                  Honors: Artificial Intelligence and Machine Learning
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-x-2">
                  <span className="font-bold text-black">
                    B.K. Birla College of Arts, Science &amp; Commerce
                  </span>
                  <span className="shrink-0 font-medium text-[#545454] tabular-nums">
                    2022 – 2023
                  </span>
                </div>
                <div className="text-[#545454]">
                  12th Grade &middot; Science Stream
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-x-2">
                  <span className="font-bold text-black">
                    Smt. Kantaben Chandulal Gandhi English School
                  </span>
                  <span className="shrink-0 font-medium text-[#545454] tabular-nums">
                    2020 – 2021
                  </span>
                </div>
                <div className="text-[#545454]">10th Grade</div>
              </div>
            </div>
          </section>

          {/* ——— SKILLS ——— */}
          <section className="print-break-inside-avoid">
            <SectionHeading title="SKILLS" />
            <div className="space-y-1 text-[#1a1a1a] print:space-y-0.5">
              <p>
                <strong className="font-bold text-black">Languages:</strong>{" "}
                Python, TypeScript, JavaScript, C++, Java, SQL
              </p>
              <p>
                <strong className="font-bold text-black">Frontend:</strong>{" "}
                React, Next.js, Tailwind CSS, Figma
              </p>
              <p>
                <strong className="font-bold text-black">Backend:</strong>{" "}
                Node.js, FastAPI, REST APIs
              </p>
              <p>
                <strong className="font-bold text-black">AI / ML:</strong>{" "}
                PyTorch, Machine Learning, Computer Vision, NLP, LLMs,
                Generative AI, AI Agents
              </p>
              <p>
                <strong className="font-bold text-black">Databases:</strong>{" "}
                PostgreSQL, Supabase, MongoDB
              </p>
              <p>
                <strong className="font-bold text-black">Web3:</strong>{" "}
                Solidity, Ethereum
              </p>
              <p>
                <strong className="font-bold text-black">Tools:</strong> Git,
                Docker
              </p>
              <p>
                <strong className="font-bold text-black">Learning:</strong>{" "}
                Andrew Ng — Machine Learning Specialization (in progress)
              </p>
            </div>
          </section>

          {/* ——— EXPERIENCE ——— */}
          <section className="print-break-inside-avoid">
            <SectionHeading title="EXPERIENCE" />
            <div className="space-y-3 print:space-y-2.5">
              {/* Block 1 */}
              <div className="print-break-inside-avoid">
                <div className="flex items-baseline justify-between gap-x-2">
                  <span className="font-bold text-black">
                    Full-Stack Developer | Independent Builder &amp; Product
                    Development
                  </span>
                  <span className="shrink-0 font-medium text-[#545454] tabular-nums">
                    03.2025 – Present
                  </span>
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#1a1a1a] print:mt-0.5 print:space-y-0 print:pl-3.5">
                  <li>
                    Architected and shipped end-to-end applications from zero to
                    working product across Next.js, FastAPI, Python, APIs, and
                    databases.
                  </li>
                  <li>
                    Built intelligent systems with autonomous agent workflows
                    and multimodal extraction pipelines; owned projects from
                    concept through implementation and iteration.
                  </li>
                </ul>
                <p className="mt-1 text-[#1a1a1a] print:mt-0.5">
                  <strong className="font-bold text-black">Skills:</strong>{" "}
                  Product Engineering, Rapid Prototyping, Full-Stack
                  Development, System Architecture
                </p>
              </div>

              {/* Block 2 */}
              <div className="print-break-inside-avoid">
                <div className="flex items-baseline justify-between gap-x-2">
                  <span className="font-bold text-black">
                    AI Developer | AI Engineering — Projects &amp; Research
                  </span>
                  <span className="shrink-0 font-medium text-[#545454] tabular-nums">
                    06.2025 – Present
                  </span>
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#1a1a1a] print:mt-0.5 print:space-y-0 print:pl-3.5">
                  <li>
                    Built intelligent systems using LLMs, computer vision, NLP,
                    multimodal processing, and AI agents; developed Travel
                    AI&apos;s extraction pipelines.
                  </li>
                  <li>
                    Engineered prompt-engineering workflows and integrated
                    machine-learning inference into production applications;
                    strengthening ML fundamentals via Andrew Ng&apos;s Machine
                    Learning Specialization.
                  </li>
                </ul>
                <p className="mt-1 text-[#1a1a1a] print:mt-0.5">
                  <strong className="font-bold text-black">Skills:</strong>{" "}
                  Generative AI, LLMs, AI Agents, Computer Vision, NLP, Python,
                  FastAPI, PyTorch, Machine Learning
                </p>
              </div>

              {/* Block 3 */}
              <div className="print-break-inside-avoid">
                <div className="flex items-baseline justify-between gap-x-2">
                  <span className="font-bold text-black">
                    Design Engineer | Design Engineering — Projects &amp;
                    Product Development
                  </span>
                  <span className="shrink-0 font-medium text-[#545454] tabular-nums">
                    07.2025 – Present
                  </span>
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#1a1a1a] print:mt-0.5 print:space-y-0 print:pl-3.5">
                  <li>
                    Architected production-grade interfaces, interaction
                    patterns, and component-driven design systems for responsive
                    applications.
                  </li>
                  <li>
                    Bridged design and frontend engineering through
                    high-fidelity implementation, responsive architecture,
                    accessibility, motion, and visual hierarchy.
                  </li>
                </ul>
                <p className="mt-1 text-[#1a1a1a] print:mt-0.5">
                  <strong className="font-bold text-black">Skills:</strong>{" "}
                  UI/UX Design, Design Systems, Figma, Interaction Design,
                  Motion Design, Frontend Engineering
                </p>
              </div>
            </div>
          </section>

          {/* ——— PROJECTS (Starts Page 2 naturally in print) ——— */}
          <section className="print-break-before-page pt-2 print:pt-0">
            <SectionHeading title="PROJECTS" />
            <div className="space-y-3 print:space-y-1.5">
              {/* 1. ETHGlobal Mumbai — NONY.money */}
              <div className="print-break-inside-avoid">
                <div className="flex items-baseline justify-between gap-x-2">
                  <div>
                    <span className="font-bold text-black">
                      ETHGlobal Mumbai — NONY.money
                    </span>
                    <span className="text-[#545454]"> &middot; </span>
                    <a
                      href="https://nony.money"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#1f6eb5] transition-colors hover:text-[#13315b] hover:underline"
                    >
                      Live
                    </a>
                    <span className="text-[#545454]"> &middot; </span>
                    <a
                      href="https://ethglobal.com/showcase/nony-money-rmbfi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#1f6eb5] transition-colors hover:text-[#13315b] hover:underline"
                    >
                      Showcase
                    </a>
                  </div>
                  <span className="shrink-0 font-medium text-[#545454] tabular-nums">
                    11.2026
                  </span>
                </div>

                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#1a1a1a] print:mt-0.5 print:space-y-0 print:pl-3.5">
                  <li>
                    Architected and implemented approximately 16 Next.js
                    application routes covering deposits, private execution,
                    transaction pools, transfers, wallet management, and
                    withdrawals.
                  </li>
                  <li>
                    Developed reusable UI components and integrated wallet
                    functionality, TEE attestation interfaces, confidential
                    balance hooks, and frontend API and cryptographic utilities;
                    contributed to protocol architecture and transaction-flow
                    documentation.
                  </li>
                </ul>

                <p className="mt-0.5 text-[#1a1a1a] print:mt-0.5">
                  <strong className="font-bold text-black">Skills:</strong>{" "}
                  Next.js, React, TypeScript, Ethereum, TEE, AWS Nitro Enclaves,
                  Wallet Integration, Cryptographic Utilities
                </p>
              </div>

              {/* 2. Monad Blitz Pune V3 — Penguin Trace */}
              <div className="print-break-inside-avoid">
                <div className="flex items-baseline justify-between gap-x-2">
                  <div>
                    <span className="font-bold text-black">
                      Monad Blitz Pune V3 — Penguin Trace
                    </span>
                    <span className="text-[#545454]"> &middot; </span>
                    <a
                      href="https://monad-v3-six.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#1f6eb5] transition-colors hover:text-[#13315b] hover:underline"
                    >
                      Live
                    </a>
                    <span className="text-[#545454]"> &middot; </span>
                    <a
                      href="https://github.com/Shrysxs/monad-v3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#1f6eb5] transition-colors hover:text-[#13315b] hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                  <span className="shrink-0 font-medium text-[#545454] tabular-nums">
                    10.2026
                  </span>
                </div>

                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#1a1a1a] print:mt-0.5 print:space-y-0 print:pl-3.5">
                  <li>
                    Built Penguin Trace, a file-verification application using
                    client-side SHA-256 hashing to verify downloaded files
                    against publisher-signed release manifests.
                  </li>
                  <li>
                    Implemented Ed25519 signature verification and integrated a
                    Solidity registry contract on Monad Testnet to register
                    publisher public keys and release records; developed and
                    tested the contract using Foundry.
                  </li>
                </ul>

                <p className="mt-0.5 text-[#1a1a1a] print:mt-0.5">
                  <strong className="font-bold text-black">Skills:</strong>{" "}
                  TypeScript, Solidity, Foundry, SHA-256, Ed25519, Monad
                  Testnet, Smart Contracts, Web3
                </p>
              </div>

              {/* 3. VAMO */}
              <div className="print-break-inside-avoid">
                <div className="flex items-baseline justify-between gap-x-2">
                  <div>
                    <span className="font-bold text-black">
                      VAMO — A Location Extraction &amp; Mapping System
                    </span>
                    <span className="text-[#545454]"> &middot; </span>
                    <a
                      href="https://github.com/25Pradnyesh/Travel-AI-"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#1f6eb5] transition-colors hover:text-[#13315b] hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                  <span className="shrink-0 font-medium text-[#545454] tabular-nums">
                    07.2026 – Present
                  </span>
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#1a1a1a] print:mt-0.5 print:space-y-0 print:pl-3.5">
                  <li>
                    Built a multimodal extraction pipeline combining computer
                    vision, NLP, and LLMs to identify destinations, landmarks,
                    and geographic context from social reels and captions.
                  </li>
                  <li>
                    Developed location resolution, verification, and structured
                    transformation workflows; integrated Google Maps APIs to
                    cluster locations and generate interactive routes.
                  </li>
                </ul>
                <p className="mt-0.5 text-[#1a1a1a] print:mt-0.5">
                  <strong className="font-bold text-black">Skills:</strong>{" "}
                  Python, FastAPI, Next.js, TypeScript, Computer Vision, NLP,
                  LLMs, Google Maps API, REST APIs
                </p>
              </div>

              {/* 4. Penguin Protocol */}
              <div className="print-break-inside-avoid">
                <div className="flex items-baseline justify-between gap-x-2">
                  <div>
                    <span className="font-bold text-black">
                      Penguin Protocol — Decentralized AI Investment Syndicate
                    </span>
                    <span className="text-[#545454]"> &middot; </span>
                    <a
                      href="https://github.com/Shrysxs/monad-blitz-pune"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#1f6eb5] transition-colors hover:text-[#13315b] hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                  <span className="shrink-0 font-medium text-[#545454] tabular-nums">
                    07.2026
                  </span>
                </div>
                <div className="text-[8.4pt] font-semibold text-[#545454] print:text-[8.4pt]">
                  WINNER — Monad Blitz Pune &middot; Built in under 8 hours
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#1a1a1a] print:mt-0.5 print:space-y-0 print:pl-3.5">
                  <li>
                    Built frontend architecture and core product logic for the
                    decentralized AI investment syndicate.
                  </li>
                  <li>
                    Implemented workflows around AI-assisted investment
                    intelligence, decentralized coordination, confidence voting,
                    and on-chain interactions.
                  </li>
                </ul>
                <p className="mt-0.5 text-[#1a1a1a] print:mt-0.5">
                  <strong className="font-bold text-black">Skills:</strong>{" "}
                  React, Next.js, TypeScript, Web3, Blockchain, Smart Contracts,
                  AI/LLMs, Wallet Integration, API Integration
                </p>
              </div>

              {/* 5. Reclaim */}
              <div className="print-break-inside-avoid">
                <div className="flex items-baseline justify-between gap-x-2">
                  <div>
                    <span className="font-bold text-black">
                      Reclaim — AI-Powered Phone-Use Management App
                    </span>
                    <span className="text-[#545454]"> &middot; </span>
                    <a
                      href="https://github.com/Shrysxs/wemakedevs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#1f6eb5] transition-colors hover:text-[#13315b] hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                  <span className="shrink-0 font-medium text-[#545454] tabular-nums">
                    10.2025
                  </span>
                </div>
                <div className="text-[8.4pt] font-medium text-[#545454] print:text-[8.4pt]">
                  WeMakeDevs FutureStack GenAI Hackathon &middot; Shipped in 6
                  days
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#1a1a1a] print:mt-0.5 print:space-y-0 print:pl-3.5">
                  <li>
                    Built full-stack application transforming smartphone usage
                    data into contextual behavioral insights and personalized
                    focus interventions.
                  </li>
                  <li>
                    Integrated Llama via Cerebras API with Supabase backend and
                    data layer; shipped functional prototype within 6 days.
                  </li>
                </ul>
                <p className="mt-0.5 text-[#1a1a1a] print:mt-0.5">
                  <strong className="font-bold text-black">Skills:</strong>{" "}
                  Next.js 14, React, TypeScript, Tailwind CSS, Supabase,
                  PostgreSQL, Cerebras API, Llama, Generative AI, REST APIs
                </p>
              </div>

              {/* 6. AI + IoT Vertical Farming System */}
              <div className="print-break-inside-avoid">
                <div className="flex items-baseline justify-between gap-x-2">
                  <div>
                    <span className="font-bold text-black">
                      AI + IoT Vertical Farming System — Final Year Project
                    </span>
                    <span className="text-[#545454]"> &middot; </span>
                    <a
                      href="https://github.com/25Pradnyesh/vertifarm-app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#1f6eb5] transition-colors hover:text-[#13315b] hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                  <span className="shrink-0 font-medium text-[#545454] tabular-nums">
                    2026
                  </span>
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#1a1a1a] print:mt-0.5 print:space-y-0 print:pl-3.5">
                  <li>
                    Trained a six-class plant disease classification model using
                    MobileNetV3 transfer learning on a 600-image dataset;
                    integrated inference into a FastAPI backend.
                  </li>
                  <li>
                    Integrated environmental telemetry (temperature, humidity,
                    soil moisture, light) via STM32 and ESP32 with real-time
                    application monitoring.
                  </li>
                </ul>
                <p className="mt-0.5 text-[#1a1a1a] print:mt-0.5">
                  <strong className="font-bold text-black">Hardware:</strong>{" "}
                  STM32, ESP32-CAM, sensors &middot;{" "}
                  <strong className="font-bold text-black">Software:</strong>{" "}
                  Python, FastAPI, React Native / Expo, MQTT, PostgreSQL /
                  Supabase, PyTorch
                </p>
              </div>

              {/* 7. VoiceAds */}
              <div className="print-break-inside-avoid">
                <div className="flex items-baseline justify-between gap-x-2">
                  <div>
                    <span className="font-bold text-black">
                      VoiceAds — AI Customer Feedback to Ad Intelligence
                    </span>
                    <span className="text-[#545454]"> &middot; </span>
                    <a
                      href="https://voiceads.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#1f6eb5] transition-colors hover:text-[#13315b] hover:underline"
                    >
                      Live
                    </a>
                  </div>
                  <span className="shrink-0 font-medium text-[#545454] tabular-nums">
                    2026
                  </span>
                </div>
                <div className="text-[8.4pt] font-medium text-[#545454] print:text-[8.4pt]">
                  AIBoomi Startup Weekend Pune &middot; Shipped in under 24
                  hours
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#1a1a1a] print:mt-0.5 print:space-y-0 print:pl-3.5">
                  <li>
                    Built and shipped prototype in under 24 hours at AIBoomi
                    Startup Weekend. Developed LLM-driven semantic analysis
                    extracting sentiment, recurring pain points, and themes into
                    structured ad creative.
                  </li>
                </ul>
                <p className="mt-0.5 text-[#1a1a1a] print:mt-0.5">
                  <strong className="font-bold text-black">Skills:</strong>{" "}
                  Next.js, React, TypeScript, LLMs, NLP, Semantic Analysis,
                  Prompt Engineering, Generative AI
                </p>
              </div>

              {/* 8. Design Resource Vault */}
              <div className="print-break-inside-avoid">
                <div className="flex items-baseline justify-between gap-x-2">
                  <div>
                    <span className="font-bold text-black">
                      Design Resource Vault — Curated Design &amp; UI Discovery
                      Platform
                    </span>
                    <span className="text-[#545454]"> &middot; </span>
                    <a
                      href="https://design-resource-vault.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#1f6eb5] transition-colors hover:text-[#13315b] hover:underline"
                    >
                      Live
                    </a>
                  </div>
                  <span className="shrink-0 font-medium text-[#545454] tabular-nums">
                    08.2026
                  </span>
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#1a1a1a] print:mt-0.5 print:space-y-0 print:pl-3.5">
                  <li>
                    Built a centralized discovery platform for design systems,
                    component patterns, tokens, and UI tooling with category
                    indexing and client-side filtering.
                  </li>
                </ul>
                <p className="mt-0.5 text-[#1a1a1a] print:mt-0.5">
                  <strong className="font-bold text-black">Skills:</strong>{" "}
                  Next.js, TypeScript, Tailwind CSS, Framer Motion, Design
                  Systems, UI/UX
                </p>
              </div>
            </div>
          </section>

          {/* ——— AWARDS & RECOGNITION ——— */}
          <section className="print-break-inside-avoid pt-1">
            <SectionHeading title="AWARDS & RECOGNITION" />
            <ul className="list-disc space-y-1.5 pl-4 text-[#1a1a1a] print:space-y-1 print:pl-3.5">
              <li>
                <strong className="font-bold text-black">
                  Monad Blitz Pune — Winner:
                </strong>{" "}
                Penguin Protocol &middot; Built in under 8 hours (07.2026)
              </li>
              <li>
                <strong className="font-bold text-black">
                  WeMakeDevs FutureStack GenAI Hackathon:
                </strong>{" "}
                Reclaim &middot; Working prototype built in 6 days (10.2025)
              </li>
              <li>
                <strong className="font-bold text-black">
                  AIBoomi Startup Weekend — Pune:
                </strong>{" "}
                VoiceAds &middot; Working prototype built in under 24 hours
                (2026)
              </li>
              <li>
                <strong className="font-bold text-black">
                  Andrew Ng — Machine Learning Specialization:
                </strong>{" "}
                Currently pursuing
              </li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  )
}
