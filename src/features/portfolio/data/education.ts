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
- Primary technical focus on Machine Learning, Generative AI, autonomous agents, and system architecture.
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
    isExpanded: true,
  },
  {
    id: "birla-college",
    school: "B.K. Birla College of Arts, Science & Commerce",
    degree: "Higher Secondary (12th Grade)",
    fieldOfStudy: "Science Stream",
    period: {
      start: "2022",
      end: "2023",
    },
    description:
      "Completed higher secondary coursework with a rigorous concentration in science, mathematics, and foundational computing.",
    skills: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
  },
  {
    id: "gandhi-school",
    school: "Smt. Kantaben Chandulal Gandhi English School",
    degree: "Secondary School (10th Grade)",
    fieldOfStudy: "General Academics",
    period: {
      start: "2020",
      end: "2021",
    },
    description:
      "Completed secondary school education with strong foundations in science, mathematics, and early programming exploration.",
  },
]
