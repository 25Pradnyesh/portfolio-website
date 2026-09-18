import { BrainIcon, Code2Icon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "independent-builder",
    companyName: "Independent Builder & Product Development",
    isCurrentEmployer: true,
    positions: [
      {
        id: "builder-1",
        title: "Full-Stack Developer",
        employmentPeriod: {
          start: "03.2025",
        },
        employmentType: "Independent",
        icon: <Code2Icon />,
        description: `- Architecting and shipping end-to-end applications from zero to working product.
- Building intelligent systems with autonomous agent workflows and multimodal extraction pipelines.
- Experimenting with Next.js, FastAPI, Python, and modern UI engineering.`,
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
    companyName: "AI & Machine Learning Engineering",
    positions: [
      {
        id: "ai-1",
        title: "AI / ML Developer",
        employmentPeriod: {
          start: "04.2025",
        },
        employmentType: "Projects & Research",
        icon: <BrainIcon />,
        description: `- Building intelligent systems using LLMs, computer vision, and NLP extraction pipelines.
- Developing multimodal content extraction tools from social media reels and posts for Travel AI.
- Designing prompt engineering and autonomous agent workflows.`,
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
    id: "design-engineering",
    companyName: "Design Engineering",
    positions: [
      {
        id: "design-1",
        title: "Design Engineer",
        employmentPeriod: {
          start: "07.2025",
        },
        employmentType: "Projects & Product Development",
        icon: <Code2Icon />,
        description: `- Architecting production-grade interfaces and design systems for responsive web applications, translating product requirements into scalable UI architectures.
- Building component-driven design systems, interaction patterns, and visual language across product surfaces.
- Bridging design and frontend engineering through high-fidelity implementation, responsive architecture, accessibility, and reusable component primitives.
- Applying interaction design, motion systems, information architecture, and visual hierarchy to improve product usability and interface quality.`,
        skills: [
          "UI/UX Design",
          "Design Systems",
          "Figma",
          "Interaction Design",
          "Motion Design",
          "Frontend Engineering",
        ],
        isExpanded: true,
      },
    ],
  },
]
