import { CompassIcon, FolderCodeIcon, SproutIcon } from "lucide-react"

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
    description: `AI-powered system for extracting travel locations from Instagram content and organizing them into maps.
- Automated extraction pipeline combining computer vision and NLP to extract destination names, landmarks, and geographic context from social media reels and captions.
- Clusters extracted locations and plots interactive routes with Google Maps API integration to turn saved inspiration into actionable itineraries.`,
    icon: <CompassIcon />,
    isExpanded: true,
  },
  {
    id: "vertifarm",
    title: "VertiFarm",
    period: {
      start: "2024",
    },
    link: "https://github.com/25Pradnyesh",
    skills: ["IoT", "Python", "Automation", "Sensors", "Full-Stack"],
    description: `Vertical farming project focused on controlled-environment agriculture and automated monitoring.
- Designed system architecture to capture sensor telemetry and track environmental parameters (humidity, temperature, light cycles) essential for indoor crop growth.
- Developed full-stack dashboard for visualizing real-time metrics and managing automated nutrient and lighting schedules.`,
    icon: <SproutIcon />,
    isExpanded: true,
  },
  {
    id: "design-resource-vault",
    title: "Design Resource Vault",
    period: {
      start: "2023",
    },
    link: "https://design-resource-vault.vercel.app/",
    skills: ["Next.js", "Tailwind CSS", "TypeScript", "UI/UX Design"],
    description: `Curated design-resource platform for developers and designers.
- Centralized repository of production-ready design tokens, component patterns, UI tools, and typography inspiration.
- Built with high-performance client-side filtering, category tagging, and dark-mode previews.`,
    icon: <FolderCodeIcon />,
    isExpanded: false,
  },
]
