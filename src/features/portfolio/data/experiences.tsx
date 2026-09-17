import { BrainIcon, Code2Icon, LayersIcon } from "lucide-react"

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
        title: "AI Engineer & Full-Stack Developer",
        employmentPeriod: {
          start: "2024",
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
    location: "Mumbai & Pune, India",
    locationType: "Remote",
    positions: [
      {
        id: "ai-1",
        title: "AI / ML Developer",
        employmentPeriod: {
          start: "2024",
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
    id: "web-development",
    companyName: "Full-Stack Web Engineering",
    location: "Mumbai & Pune, India",
    locationType: "Remote",
    positions: [
      {
        id: "web-1",
        title: "Full-Stack Developer",
        employmentPeriod: {
          start: "2023",
        },
        employmentType: "Full-Stack",
        icon: <LayersIcon />,
        description: `- Developing responsive, accessible, and performant web applications with Next.js, React, Node.js, and TypeScript.
- Designing clean server-client architectures, RESTful API routes, and database schemas with PostgreSQL and Supabase.
- Crafting modern component systems with Tailwind CSS.`,
        skills: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "PostgreSQL",
        ],
        isExpanded: true,
      },
    ],
  },
]
