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
    description:
      "Undergraduate engineering student in Electronics & Computer Engineering with HONORS in Artificial Intelligence and Machine Learning.",
    isExpanded: true,
  },
  {
    id: "bk-birla-college",
    school: "B.K. Birla College of Arts, Science & Commerce",
    degree: "12th Grade",
    fieldOfStudy: "Science",
    period: {
      start: "2022",
      end: "2023",
    },
    description: "Completed 12th grade in science stream.",
    isExpanded: true,
  },
  {
    id: "skc-gandhi-school",
    school: "Smt. Kantaben Chandulal Gandhi English School",
    degree: "10th Grade",
    period: {
      start: "2020",
      end: "2021",
    },
    description: "Completed 10th grade.",
    isExpanded: true,
  },
]
