import type { Metadata } from "next"

import { ResumeActions } from "./resume-actions"

export const metadata: Metadata = {
  title: "Resume — Pradnyesh | AI Product Engineer",
  description:
    "Engineering resume of Pradnyesh — AI Product Engineer based in Mumbai & Pune, India.",
  alternates: {
    canonical: "/resume",
  },
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-2 border-b border-black pb-1">
      <h2 className="font-heading text-[10pt] font-bold tracking-wider text-black uppercase print:text-[9.5pt]">
        {title}
      </h2>
    </div>
  )
}

export default function ResumePage() {
  return (
    <div className="mx-auto my-6 max-w-3xl overflow-hidden rounded-xl border border-neutral-300 bg-neutral-100 text-[#1f2937] shadow-sm sm:my-10 print:m-0 print:max-w-none print:overflow-visible print:rounded-none print:border-none print:bg-white print:p-0 print:shadow-none">
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 10mm 12mm 10mm 12mm;
          }
          html, body {
            background: white !important;
            color: #1f2937 !important;
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
            color: #1a56db !important;
            text-decoration: underline !important;
            text-underline-offset: 2px !important;
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
      <article className="bg-white px-8 py-8 text-[9pt] leading-[1.4] text-[#1f2937] shadow-xs sm:px-10 sm:py-9 print:px-0 print:py-0 print:text-[8.8pt] print:leading-[1.38] print:shadow-none">
        {/* ——— HEADER ——— */}
        <header className="resume-header text-center">
          <h1 className="font-heading text-2xl font-bold tracking-tight text-black sm:text-[22pt] print:text-[20pt] print:leading-none">
            PRADNYESH
          </h1>
          <p className="mt-1 text-[9.5pt] font-medium text-black print:text-[9.2pt]">
            AI Product Engineer &middot; Mumbai &middot; Pune, India
          </p>

          <div className="mt-1.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[8.5pt] text-[#1f2937] print:mt-1 print:gap-x-1.5 print:text-[8pt]">
            <span>Mumbai &middot; Pune, India</span>
            <span aria-hidden className="text-neutral-400">
              |
            </span>
            <a
              href="mailto:workspace.pradnyesh@gmail.com"
              className="text-[#1a56db] underline decoration-[#1a56db]/50 underline-offset-2 transition-colors hover:text-[#1e40af] hover:decoration-[#1e40af]"
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
              className="text-[#1a56db] underline decoration-[#1a56db]/50 underline-offset-2 transition-colors hover:text-[#1e40af] hover:decoration-[#1e40af]"
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
              className="text-[#1a56db] underline decoration-[#1a56db]/50 underline-offset-2 transition-colors hover:text-[#1e40af] hover:decoration-[#1e40af]"
            >
              github.com/25Pradnyesh
            </a>
            <span aria-hidden className="text-neutral-400">
              |
            </span>
            <a
              href="https://x.com/Pradnyesh_25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a56db] underline decoration-[#1a56db]/50 underline-offset-2 transition-colors hover:text-[#1e40af] hover:decoration-[#1e40af]"
            >
              x.com/Pradnyesh_25
            </a>
            <span aria-hidden className="text-neutral-400">
              |
            </span>
            <a
              href="https://www.linkedin.com/in/pradnyesh-s/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a56db] underline decoration-[#1a56db]/50 underline-offset-2 transition-colors hover:text-[#1e40af] hover:decoration-[#1e40af]"
            >
              linkedin.com/in/pradnyesh-s/
            </a>
            <span aria-hidden className="text-neutral-400">
              |
            </span>
            <a
              href="https://cal.com/pradnyesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a56db] underline decoration-[#1a56db]/50 underline-offset-2 transition-colors hover:text-[#1e40af] hover:decoration-[#1e40af]"
            >
              cal.com/pradnyesh
            </a>
          </div>
        </header>

        <div className="mt-4 space-y-4 print:mt-3 print:space-y-3.5">
          {/* ——— SUMMARY ——— */}
          <section className="print-break-inside-avoid">
            <SectionHeading title="SUMMARY" />
            <p className="text-justify text-[#1f2937] print:text-left">
              AI Product Engineer specializing in end-to-end product engineering
              across modern web applications, scalable backend APIs, and
              intelligent AI systems. Experienced in architecting and shipping
              independent products and rapid hackathon prototypes from concept
              to production. Hands-on experience developing multimodal
              pipelines, computer vision, NLP, LLMs, and autonomous agent
              workflows alongside full-stack engineering. Winner of Monad Blitz
              Pune. Currently deepening machine-learning foundations through
              Andrew Ng&apos;s Machine Learning Specialization while expanding
              Web3 and Ethereum application integration.
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
                  <span className="shrink-0 font-medium text-[#374151] tabular-nums">
                    2023 — 2027
                  </span>
                </div>
                <div className="text-[#374151]">
                  Bachelor of Engineering (B.E.) in Electronics &amp; Computer
                  Engineering
                </div>
                <div className="text-[#374151]">
                  Honors: Artificial Intelligence and Machine Learning
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-x-2">
                  <span className="font-bold text-black">
                    B.K. Birla College of Arts, Science &amp; Commerce
                  </span>
                  <span className="shrink-0 font-medium text-[#374151] tabular-nums">
                    2022 — 2023
                  </span>
                </div>
                <div className="text-[#374151]">
                  12th Grade &middot; Science Stream
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-x-2">
                  <span className="font-bold text-black">
                    Smt. Kantaben Chandulal Gandhi English School
                  </span>
                  <span className="shrink-0 font-medium text-[#374151] tabular-nums">
                    2020 — 2021
                  </span>
                </div>
                <div className="text-[#374151]">10th Grade</div>
              </div>
            </div>
          </section>

          {/* ——— SKILLS ——— */}
          <section className="print-break-inside-avoid">
            <SectionHeading title="SKILLS" />
            <div className="space-y-1 text-[#1f2937] print:space-y-0.5">
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
                  <span className="shrink-0 font-medium text-[#374151] tabular-nums">
                    03.2025 — Present
                  </span>
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#1f2937] print:mt-0.5 print:space-y-0 print:pl-3.5">
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
                  <li>
                    <strong className="font-bold text-black">Skills:</strong>{" "}
                    Product Engineering, Rapid Prototyping, Full-Stack
                    Development, System Architecture
                  </li>
                </ul>
              </div>

              {/* Block 2 */}
              <div className="print-break-inside-avoid">
                <div className="flex items-baseline justify-between gap-x-2">
                  <span className="font-bold text-black">
                    AI Developer | AI Engineering — Projects &amp; Research
                  </span>
                  <span className="shrink-0 font-medium text-[#374151] tabular-nums">
                    06.2025 — Present
                  </span>
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#1f2937] print:mt-0.5 print:space-y-0 print:pl-3.5">
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
                  <li>
                    <strong className="font-bold text-black">Skills:</strong>{" "}
                    Generative AI, LLMs, AI Agents, Computer Vision, NLP,
                    Python, FastAPI, PyTorch, Machine Learning
                  </li>
                </ul>
              </div>

              {/* Block 3 */}
              <div className="print-break-inside-avoid">
                <div className="flex items-baseline justify-between gap-x-2">
                  <span className="font-bold text-black">
                    Design Engineer | Design Engineering — Projects &amp;
                    Product Development
                  </span>
                  <span className="shrink-0 font-medium text-[#374151] tabular-nums">
                    07.2025 — Present
                  </span>
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#1f2937] print:mt-0.5 print:space-y-0 print:pl-3.5">
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
                  <li>
                    <strong className="font-bold text-black">Skills:</strong>{" "}
                    UI/UX Design, Design Systems, Figma, Interaction Design,
                    Motion Design, Frontend Engineering
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ——— PROJECTS (Starts Page 2 naturally in print) ——— */}
          <section className="print-break-before-page pt-2 print:pt-0">
            <SectionHeading title="PROJECTS" />
            <div className="space-y-3.5 print:space-y-3">
              {/* 1. Travel AI */}
              <div className="print-break-inside-avoid">
                <div className="flex items-baseline justify-between gap-x-2">
                  <div>
                    <span className="font-bold text-black">
                      Travel AI — AI Location Extraction &amp; Mapping System
                    </span>
                    <span className="text-[#374151]"> &middot; </span>
                    <a
                      href="https://github.com/25Pradnyesh/Travel-AI-/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1a56db] underline decoration-[#1a56db]/50 underline-offset-2 transition-colors hover:text-[#1e40af]"
                    >
                      GitHub
                    </a>
                  </div>
                  <span className="shrink-0 font-medium text-[#374151] tabular-nums">
                    07.2026 — Present
                  </span>
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#1f2937] print:mt-0.5 print:space-y-0 print:pl-3.5">
                  <li>
                    Built a multimodal extraction pipeline combining computer
                    vision, NLP, contextual language models, semantic parsing,
                    and geographic reasoning to identify destinations,
                    landmarks, and geographic context from social-media reels
                    and captions.
                  </li>
                  <li>
                    Developed location extraction, candidate resolution,
                    verification, and structured transformation workflows
                    converting unstructured travel content into usable
                    geographic data; processed 100+ reels during testing.
                  </li>
                  <li>
                    Integrated Google Maps and geospatial services to cluster
                    extracted locations, establish spatial relationships, and
                    generate interactive routes and travel representations.
                  </li>
                  <li>
                    <strong className="font-bold text-black">Skills:</strong>{" "}
                    Python, FastAPI, Next.js, TypeScript, Computer Vision, NLP,
                    LLMs, Google Maps API, REST APIs
                  </li>
                </ul>
              </div>

              {/* 2. Penguin Protocol */}
              <div className="print-break-inside-avoid">
                <div className="flex items-baseline justify-between gap-x-2">
                  <div>
                    <span className="font-bold text-black">
                      Penguin Protocol — Decentralized AI Investment Syndicate
                    </span>
                    <span className="text-[#374151]"> &middot; </span>
                    <a
                      href="https://github.com/Shrysxs/monad-blitz-pune"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1a56db] underline decoration-[#1a56db]/50 underline-offset-2 transition-colors hover:text-[#1e40af]"
                    >
                      GitHub
                    </a>
                  </div>
                  <span className="shrink-0 font-medium text-[#374151] tabular-nums">
                    07.2026
                  </span>
                </div>
                <div className="text-[8.3pt] font-semibold text-black print:text-[8.1pt]">
                  WINNER — Monad Blitz Pune &middot; Built in under 8 hours
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#1f2937] print:mt-0.5 print:space-y-0 print:pl-3.5">
                  <li>
                    Built the frontend and core product logic for the
                    decentralized AI investment platform.
                  </li>
                  <li>
                    Implemented AI-assisted investment workflows around agent
                    analysis, market context, confidence voting, and on-chain
                    interactions.
                  </li>
                  <li>
                    Took the project from concept to functional prototype in
                    under 8 hours and won Monad Blitz Pune.
                  </li>
                  <li>
                    <strong className="font-bold text-black">Skills:</strong>{" "}
                    React, Next.js, TypeScript, Web3, Blockchain, Smart
                    Contracts, AI/LLMs, Wallet Integration, API Integration
                  </li>
                </ul>
              </div>

              {/* 3. Reclaim */}
              <div className="print-break-inside-avoid">
                <div className="flex items-baseline justify-between gap-x-2">
                  <div>
                    <span className="font-bold text-black">
                      Reclaim — AI-Powered Phone-Use Management App
                    </span>
                    <span className="text-[#374151]"> &middot; </span>
                    <a
                      href="https://github.com/Shrysxs/wemakedevs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1a56db] underline decoration-[#1a56db]/50 underline-offset-2 transition-colors hover:text-[#1e40af]"
                    >
                      GitHub
                    </a>
                  </div>
                  <span className="shrink-0 font-medium text-[#374151] tabular-nums">
                    10.2025
                  </span>
                </div>
                <div className="text-[8.3pt] font-medium text-[#374151] print:text-[8.1pt]">
                  WeMakeDevs FutureStack GenAI Hackathon &middot; Shipped in 6
                  days
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#1f2937] print:mt-0.5 print:space-y-0 print:pl-3.5">
                  <li>
                    Built a full-stack application designed to transform
                    phone-usage data into contextual behavioral insights and
                    personalized interventions.
                  </li>
                  <li>
                    Integrated Llama through Cerebras API with a Supabase-backed
                    application and data layer; built and shipped the working
                    prototype in 6 days.
                  </li>
                  <li>
                    <strong className="font-bold text-black">Skills:</strong>{" "}
                    Next.js 14, React, TypeScript, Tailwind CSS, Supabase,
                    PostgreSQL, Cerebras API, Llama, Generative AI, REST APIs
                  </li>
                </ul>
              </div>

              {/* 4. AI + IoT Vertical Farming System */}
              <div className="print-break-inside-avoid">
                <div className="flex items-baseline justify-between gap-x-2">
                  <span className="font-bold text-black">
                    AI + IoT Vertical Farming System — Final Year Project
                  </span>
                  <span className="shrink-0 font-medium text-[#374151] tabular-nums">
                    2026
                  </span>
                </div>
                <div className="text-[8.3pt] font-medium text-[#374151] print:text-[8.1pt]">
                  Environmental monitoring, automation, and plant-disease
                  detection
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#1f2937] print:mt-0.5 print:space-y-0 print:pl-3.5">
                  <li>
                    Built and trained a six-class plant disease
                    image-classification model using MobileNetV3 transfer
                    learning. Prepared and standardized a 600-image dataset into
                    six plant-health classes at 224&times;224 resolution, split
                    into 420 training, 90 validation, and 90 test images.
                  </li>
                  <li>
                    Trained and evaluated the model, then integrated inference
                    into a FastAPI backend and application workflow; processed
                    500+ images during testing.
                  </li>
                  <li>
                    Integrated environmental monitoring and automation using
                    temperature, humidity, soil moisture, and light-intensity
                    sensing with the application layer.
                  </li>
                  <li>
                    <strong className="font-bold text-black">Hardware:</strong>{" "}
                    STM32, ESP32-CAM, environmental sensors &middot;{" "}
                    <strong className="font-bold text-black">Software:</strong>{" "}
                    Python, FastAPI, React Native / Expo, MQTT, PostgreSQL /
                    Supabase, PyTorch / MobileNetV3
                  </li>
                </ul>
              </div>

              {/* 5. VoiceAds */}
              <div className="print-break-inside-avoid">
                <div className="flex items-baseline justify-between gap-x-2">
                  <div>
                    <span className="font-bold text-black">
                      VoiceAds — AI Customer Feedback to Ad Intelligence
                    </span>
                    <span className="text-[#374151]"> &middot; </span>
                    <a
                      href="https://voiceads.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1a56db] underline decoration-[#1a56db]/50 underline-offset-2 transition-colors hover:text-[#1e40af]"
                    >
                      Live
                    </a>
                  </div>
                  <span className="shrink-0 font-medium text-[#374151] tabular-nums">
                    2026
                  </span>
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#1f2937] print:mt-0.5 print:space-y-0 print:pl-3.5">
                  <li>
                    Built and shipped working prototype in under 24 hours at
                    AIBoomi Startup Weekend Pune. Developed an LLM-driven
                    semantic-analysis workflow extracting customer sentiment,
                    recurring language, pain points, and product themes into
                    structured advertising content.
                  </li>
                  <li>
                    <strong className="font-bold text-black">Skills:</strong>{" "}
                    Next.js, React, TypeScript, LLMs, NLP, Semantic Analysis,
                    Prompt Engineering, Generative AI
                  </li>
                </ul>
              </div>

              {/* 6. Design Resource Vault */}
              <div className="print-break-inside-avoid">
                <div className="flex items-baseline justify-between gap-x-2">
                  <div>
                    <span className="font-bold text-black">
                      Design Resource Vault — Curated Design &amp; UI Discovery
                      Platform
                    </span>
                    <span className="text-[#374151]"> &middot; </span>
                    <a
                      href="https://design-resource-vault.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1a56db] underline decoration-[#1a56db]/50 underline-offset-2 transition-colors hover:text-[#1e40af]"
                    >
                      Live
                    </a>
                  </div>
                  <span className="shrink-0 font-medium text-[#374151] tabular-nums">
                    08.2026
                  </span>
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#1f2937] print:mt-0.5 print:space-y-0 print:pl-3.5">
                  <li>
                    Built a centralized discovery platform for design systems,
                    component patterns, design tokens, typography references,
                    and UI tooling with structured categorization and
                    client-side filtering.
                  </li>
                  <li>
                    <strong className="font-bold text-black">Skills:</strong>{" "}
                    Next.js, TypeScript, Tailwind CSS, Framer Motion, Design
                    Systems, UI/UX
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ——— AWARDS & RECOGNITION ——— */}
          <section className="print-break-inside-avoid pt-1">
            <SectionHeading title="AWARDS & RECOGNITION" />
            <ul className="list-disc space-y-1.5 pl-4 text-[#1f2937] print:space-y-1 print:pl-3.5">
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
