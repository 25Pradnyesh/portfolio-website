import {
  BotIcon,
  CompassIcon,
  FolderCodeIcon,
  Mic2Icon,
  SproutIcon,
} from "lucide-react"

import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "travel-ai",
    title: "Travel AI",
    period: {
      start: "06.2026",
    },
    skills: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "Computer Vision",
      "NLP",
      "LLMs",
      "Information Extraction",
      "Semantic Parsing",
      "Geospatial Processing",
      "Google Maps API",
      "REST APIs",
    ],
    description: `**Independent Project · 06.2026—Present**

AI-powered travel intelligence system for extracting, structuring, and mapping geographic information from social media content.

- Architecting a **multimodal information-extraction pipeline** combining computer vision, NLP, and contextual language models to identify destinations, landmarks, and geographic signals from Instagram reels and captions.
- Developing **entity extraction, semantic parsing, location resolution, and structured data transformation** workflows to convert unstructured social content into structured geographic intelligence.
- Integrating **Google Maps APIs and geospatial services** to cluster extracted locations, establish spatial relationships, and generate interactive routes and itinerary representations.`,
    icon: <CompassIcon />,
    isExpanded: true,
  },
  {
    id: "penguin-protocol",
    title: "Penguin Protocol",
    period: {
      start: "07.2026",
      end: "07.2026",
    },
    link: "https://github.com/Shrysxs/monad-blitz-pune",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Web3",
      "Blockchain",
      "Smart Contracts",
      "AI/LLMs",
      "Wallet Integration",
      "On-Chain Interactions",
      "API Integration",
      "Product Engineering",
    ],
    description: `**Collaborative Project · Monad Blitz Pune Hackathon · 07.2026**

**🥇 Winner — Monad Blitz Pune**

Decentralized AI investment syndicate integrating AI-assisted decision workflows with blockchain infrastructure.

- Engineered the **frontend architecture and core product logic**, translating the investment-syndicate concept into a functional decentralized application.
- Implemented product workflows around **AI-assisted investment intelligence, decentralized coordination, and on-chain interactions**.
- Collaborated on the rapid architecture and implementation of the MVP, taking the product from concept to a functional prototype in **under 8 hours**.`,
    icon: <BotIcon />,
    isExpanded: false,
  },
  {
    id: "voiceads",
    title: "VoiceAds",
    period: {
      start: "02.2026",
      end: "02.2026",
    },
    link: "https://voiceads.vercel.app/",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "LLMs",
      "NLP",
      "Semantic Analysis",
      "Sentiment Analysis",
      "Prompt Engineering",
      "Generative AI",
      "Content Intelligence",
      "MarTech",
      "REST APIs",
      "Vercel",
    ],
    description: `**Collaborative Project · AIBoomi Startup Weekend, Pune · 02.2026**

LLM-powered MarTech platform that transforms authentic customer feedback into structured advertising intelligence and high-trust marketing content.

- Contributed to the development of an **LLM-driven semantic analysis pipeline** for extracting customer sentiment, recurring language, product signals, pain points, and thematic patterns from unstructured reviews.
- Developed a **feedback-to-content generation workflow** that converts qualitative customer insights into structured marketing narratives and advertising-ready creative.
- Collaborated on the product architecture and implementation to design, build, and deploy a **functional prototype in under 24 hours**.`,
    icon: <Mic2Icon />,
    isExpanded: false,
  },
  {
    id: "design-resource-vault",
    title: "Design Resource Vault",
    period: {
      start: "08.2026",
      end: "08.2026",
    },
    link: "https://design-resource-vault.vercel.app/",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Design Systems",
      "Design Tokens",
      "Component Architecture",
      "Interaction Design",
      "Responsive UI",
      "UX Engineering",
    ],
    description: `**Independent Project · 08.2026**

Design intelligence platform for developers and designers, focused on structured discovery of production-ready design resources.

- Architected a centralized resource platform covering **design systems, component patterns, design tokens, typography systems, UI tooling, and interaction references**.
- Implemented a structured **content taxonomy and discovery architecture** with category indexing, client-side filtering, and efficient resource retrieval.
- Engineered a responsive, production-grade interface with emphasis on **component architecture, visual systems, interaction design, and frontend performance**.

**Live:** https://design-resource-vault.vercel.app/`,
    icon: <FolderCodeIcon />,
    isExpanded: false,
  },
  {
    id: "reclaim",
    title: "Reclaim",
    period: {
      start: "10.2025",
      end: "10.2025",
    },
    link: "https://github.com/Shrysxs/wemakedevs",
    skills: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Cerebras API",
      "Llama",
      "Generative AI",
      "LLM Integration",
      "AI Orchestration",
      "Behavioral Analytics",
      "REST APIs",
    ],
    description: `**Collaborative Project · WeMakeDevs FutureStack GenAI Hackathon · 10.2025**

AI-powered digital wellbeing platform that transforms smartphone usage data into contextual behavioral insights and personalized interventions.

- Contributed to the architecture and development of a **full-stack AI application** integrating Llama-based models through the Cerebras API with a Supabase-backed application and data layer.
- Developed AI workflows for **behavioral pattern analysis, contextual insight generation, usage interpretation, and personalized focus interventions**.
- Collaborated across product development, frontend engineering, backend infrastructure, database integration, and AI orchestration to deliver a **functional end-to-end prototype within 6 days**.

**GitHub:** https://github.com/Shrysxs/wemakedevs`,
    icon: <SproutIcon />,
    isExpanded: false,
  },
]
