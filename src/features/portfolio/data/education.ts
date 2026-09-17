import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "sppu",
    school: "Savitribai Phule Pune University (SPPU)",
    degree: "Bachelor of Engineering (B.E.)",
    fieldOfStudy: "Electronics & Computer Engineering",
    period: {
      start: "2023",
      end: "2027",
    },
    description: `- Undergraduate engineering student in Electronics & Computer Engineering.
- Primary technical focus on Machine Learning, Generative AI, autonomous agents, and full-stack systems.
- Active in technical hackathons, open-source building, and rapid software prototyping.`,
    skills: [
      "Python",
      "C++",
      "Machine Learning",
      "Generative AI",
      "AI Agents",
      "Next.js",
      "TypeScript",
      "FastAPI",
    ],
  },
]
