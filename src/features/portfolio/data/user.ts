import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Pradnyesh",
  lastName: "Shejwal",
  displayName: "Pradnyesh",
  username: "25Pradnyesh",
  gender: "male",
  pronouns: "he/him",
  bio: "Founder of Travel AI and independent product builder focused on Machine Learning, Generative AI, and intelligent product experiences.",
  flipSentences: [
    "ML ENGINEER",
    "PRODUCT DEVELOPER",
    '"FAIL FAST. BUILD FASTER."',
  ],
  address: "Mumbai & Pune, India",
  phoneNumberB64: "", // Not provided / leaving empty to avoid inventing contact info
  emailB64: "d29ya3NwYWNlLnByYWRueWVzaEBnbWFpbC5jb20=", // base64 encoded workspace.pradnyesh@gmail.com
  website: "https://github.com/25Pradnyesh",
  jobTitle: "Founder / Product Engineer @ Travel AI",
  jobs: [
    {
      title: "Founder & Product Engineer",
      company: "Travel AI",
      website: "https://github.com/25Pradnyesh",
    },
    {
      title: "B.E. — Electronics & Computer Engineering",
      company: "Savitribai Phule Pune University (SPPU)",
      website: "",
    },
  ],
  about: `### Philosophy

Building over talking. The fastest way to understand a technology or solve a problem is to build it, break it, and ship working software. Failure is simply the fastest feedback loop for learning. Relentless curiosity, pragmatic product thinking, and an obsession with shipping.

### What I Do

I am an engineering student at Savitribai Phule Pune University (SPPU) and an independent builder focused on Artificial Intelligence, Generative AI, full-stack development, and product engineering.

I enjoy taking ideas from zero → prototype → working product. Over the past 1.5+ years of hands-on building, I have created software across:
- **AI & Generative AI**: Autonomous agent architectures, location extraction pipelines, contextual voice synthesis, and LLM integrations.
- **Full-Stack Web Development**: High-performance interfaces and backends built with Next.js, React, Node.js, FastAPI, and TypeScript.
- **Automation & Dev Tools**: Workflow scripts, developer resource portals, and data extraction engines.
- **Web3 & Protocols**: Rapid-build syndicate protocols and decentralized prototypes.
- **Product Design & Media**: End-to-end interface craft, UI/UX systems in Figma, and video post-production.

I actively compete in hackathons and rapid-build environments where high-leverage product thinking, technical clarity, and pure shipping speed matter most.
`,
  avatar: "/images/profile.jpg",
  avatarVariants: {
    lightOff: "/images/profile.jpg",
    lightOn: "/images/profile.jpg",
    darkOff: "/images/profile.jpg",
    darkOn: "/images/profile.jpg",
  },
  ogImage: "/images/profile.jpg",
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "pradnyesh",
    "pradnyesh shejwal",
    "pradnyesh nana shejwal",
    "25pradnyesh",
    "ai builder",
    "machine learning",
    "generative ai",
    "ai agents",
    "savitribai phule pune university",
    "sppu",
    "pune",
  ],
  dateCreated: "2026-09-15", // YYYY-MM-DD
}
