import {
  BrainIcon,
  CompassIcon,
  FolderCodeIcon,
  MicIcon,
  TrophyIcon,
} from "lucide-react"

import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "travel-ai",
    title: "Travel AI",
    period: {
      start: "2024",
    },
    link: "https://github.com/25Pradnyesh",
    skills: [
      "Python",
      "FastAPI",
      "Next.js",
      "Computer Vision",
      "NLP",
      "Google Maps API",
    ],
    description: `An AI-powered system that extracts travel locations from Instagram content and organizes them into structured travel data and actionable maps.
- **Problem**: High-value travel tips and hidden spots shared across Instagram reels and posts get lost in saved collections and are cumbersome to plan into actual itineraries.
- **What I Built**: An automated extraction pipeline combining computer vision and NLP to extract destination names, landmarks, and geographic context from social media reels and captions.
- **Implementation**: Built with Next.js, Python, FastAPI, automated content extraction, and Google Maps API integration to cluster spots and plot interactive routes.`,
    icon: <CompassIcon />,
    isExpanded: true,
  },
  {
    id: "penguin-protocol",
    title: "Penguin Protocol",
    period: {
      start: "2024",
    },
    link: "https://github.com/25Pradnyesh",
    skills: [
      "TypeScript",
      "Next.js",
      "Decentralized Protocols",
      "AI Syndicates",
      "Rapid Prototyping",
    ],
    description: `**🥇 WINNER — Monad Blitz Pune** · Decentralized AI Investment Syndicate built in under 8 hours.
- **Concept**: A decentralized protocol enabling autonomous multi-agent investment syndicates with transparent on-chain verification and collaborative coordination.
- **My Role**: Engineered the frontend interface and core product logic under tight 8-hour hackathon constraints.
- **Achievement**: Awarded 1st Place Winner at Monad Blitz Pune for technical execution, speed of implementation, and product feasibility.`,
    icon: <TrophyIcon className="text-amber-500" />,
    isExpanded: true,
  },
  {
    id: "reclaim",
    title: "Reclaim",
    period: {
      start: "2024",
    },
    link: "https://github.com/25Pradnyesh",
    skills: [
      "Generative AI",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "Cerebras API",
      "Llama",
    ],
    description: `AI-powered phone addiction management and digital wellbeing application built during the **WeMakeDevs FutureStack GenAI Hackathon** in 6 days.
- **Problem**: Frictionless application loops and compulsive phone-checking degrade deep work and student productivity.
- **What I Built**: Proactive AI system that analyzes usage patterns and introduces contextual friction to break automatic habit loops.
- **Stack**: Built with Next.js, Tailwind CSS, Supabase backend, Cerebras ultra-low-latency API, and Llama models for real-time conversational interventions.`,
    icon: <BrainIcon />,
    isExpanded: true,
  },
  {
    id: "voice-ads",
    title: "VoiceAds",
    period: {
      start: "2024",
    },
    link: "https://github.com/25Pradnyesh",
    skills: [
      "Generative AI",
      "Text-to-Speech (TTS)",
      "Python",
      "FastAPI",
      "Web Audio",
    ],
    description: `AI voice advertising MVP built and shipped at **AIBoomi Startup Weekend — Pune** in under 24 hours.
- **Concept**: Context-aware audio advertisement generation platform powered by generative voice synthesis.
- **What I Built**: End-to-end working prototype generating tailored conversational audio ad creatives that dynamically adapt to real-time listener context.`,
    icon: <MicIcon />,
    isExpanded: true,
  },
  {
    id: "design-resource-vault",
    title: "Design Resource Vault",
    period: {
      start: "2023",
    },
    link: "https://github.com/25Pradnyesh",
    skills: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "UI/UX Design",
      "Full-Stack",
    ],
    description: `Curated design resource platform built with modern Next.js and Tailwind CSS architecture.
- **Problem**: Developers and designers spend hours searching disparate sources for production-ready design tokens, component patterns, and UI tools.
- **What I Built**: A structured, centralized directory organizing verified frontend tools, color systems, and components with fast client-side filtering and dark-mode previews.`,
    icon: <FolderCodeIcon />,
    isExpanded: false,
  },
]
