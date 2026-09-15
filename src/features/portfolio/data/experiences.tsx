import {
  BrainIcon,
  Code2Icon,
  LayersIcon,
  PaletteIcon,
  TrophyIcon,
} from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "independent-builder",
    companyName: "Independent Builder & Product Development",
    location: "Mumbai & Pune, India",
    locationType: "Remote",
    isCurrentEmployer: true,
    positions: [
      {
        id: "builder-1",
        title: "Independent Builder & Software Developer",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "~1–1.5 Years Hands-On",
        icon: <Code2Icon />,
        description: `- Architecting and shipping end-to-end applications from zero to working product.
- Experimenting aggressively with modern web frameworks, autonomous agent workflows, and developer tools.
- Maintaining a relentless build-and-ship cadence across personal builds, open-source tools, and hackathons.`,
        skills: [
          "Product Engineering",
          "Rapid Prototyping",
          "Full-Stack Development",
          "System Architecture",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "ai-genai",
    companyName: "AI / GenAI Engineering",
    location: "Mumbai & Pune, India",
    locationType: "Remote",
    positions: [
      {
        id: "ai-1",
        title: "AI & GenAI Developer",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "~1 Year Practical Experience",
        icon: <BrainIcon />,
        description: `- Building intelligent systems using Cerebras API, Llama models, and OpenAI endpoints.
- Implementing computer vision and OCR pipelines for unstructured multimodal content extraction from social media.
- Engineering autonomous agent coordination workflows and real-time contextual voice synthesis.`,
        skills: [
          "Generative AI",
          "LLMs",
          "AI Agents",
          "Computer Vision",
          "Python",
          "FastAPI",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "web-development",
    companyName: "Full-Stack Web Development",
    location: "Mumbai & Pune, India",
    locationType: "Remote",
    positions: [
      {
        id: "web-1",
        title: "Full-Stack Web Developer",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "~1–1.5 Years Experience",
        icon: <LayersIcon />,
        description: `- Developing responsive, accessible, and performant web applications with Next.js, React, Node.js, and TypeScript.
- Designing clean server-client architectures, RESTful API routes, and database schemas with Supabase, PostgreSQL, and MongoDB.
- Crafting modern component systems with Tailwind CSS and Radix UI primitives.`,
        skills: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "Supabase",
          "PostgreSQL",
          "MongoDB",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "hackathons",
    companyName: "Hackathons & Web3 Protocols",
    location: "Pune, India",
    locationType: "Hybrid",
    positions: [
      {
        id: "hack-1",
        title: "Hackathon Builder & Protocol Prototyper",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "~6–12 Months Experience",
        icon: <TrophyIcon />,
        description: `- 1st Place Winner at Monad Blitz Pune: Architected frontend and syndicate coordination logic for Penguin Protocol in under 8 hours.
- Built and shipped Reclaim at WeMakeDevs FutureStack GenAI Hackathon in 6 days.
- Shipped VoiceAds prototype in under 24 hours at AIBoomi Startup Weekend Pune.
- Participated in Starknet Outpost Demo Day showcasing decentralized protocol concepts.`,
        skills: [
          "Rapid Prototyping",
          "Team Coordination",
          "Hackathon Sprints",
          "Web3 Protocols",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "ui-ux-content",
    companyName: "UI/UX & Video Post-Production",
    location: "Mumbai & Pune, India",
    locationType: "Remote",
    positions: [
      {
        id: "content-1",
        title: "UI/UX Designer & Content Creator",
        employmentPeriod: {
          start: "2023",
        },
        employmentType: "~1+ Year Practical Work",
        icon: <PaletteIcon />,
        description: `- Designing clean user interfaces, typography systems, and interaction flows in Figma.
- Producing and editing high-retention video content for digital platforms and client projects.
- End-to-end post-production: pacing, sound design, visual assets, and color grading.`,
        skills: [
          "Figma",
          "UI/UX Design",
          "Adobe Premiere Pro",
          "DaVinci Resolve",
          "Visual Storytelling",
        ],
        isExpanded: false,
      },
    ],
  },
]
