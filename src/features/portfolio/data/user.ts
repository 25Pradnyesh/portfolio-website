import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Pradnyesh",
  lastName: "S.",
  displayName: "Pradnyesh",
  username: "25Pradnyesh",
  gender: "male",
  pronouns: "he/him",
  bio: "AI Engineer & Full-Stack Developer building intelligent products, AI systems and polished digital experiences.",
  flipSentences: [
    "AI Engineer",
    "Full-Stack Developer",
    "AI Systems Builder",
    "Generative AI Builder",
    "Independent Builder",
  ],
  address: "MUMBAI · PUNE, INDIA",
  phoneNumberB64: "",
  emailB64: "d29ya3NwYWNlLnByYWRueWVzaEBnbWFpbC5jb20=", // base64 encoded workspace.pradnyesh@gmail.com
  website: "https://github.com/25Pradnyesh",
  jobTitle: "AI Systems Builder",
  jobs: [
    {
      title: "AI Engineer & Full-Stack Developer",
      company: "Independent Builder",
      website: "https://github.com/25Pradnyesh",
    },
  ],
  about: `- AI Engineer & Full-Stack Developer based in Mumbai & Pune, India.
- Focused on building intelligent systems, autonomous agents, and high-performance digital products from concept to deployment.
- Primary projects include [Travel AI](https://github.com/25Pradnyesh) (location extraction pipeline from social content), [VertiFarm](https://github.com/25Pradnyesh) (automated monitoring for vertical farming), and [Design Resource Vault](https://design-resource-vault.vercel.app/) (curated directory for frontend developers).
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
    "pradnyesh s",
    "25pradnyesh",
    "ai engineer",
    "full-stack developer",
    "machine learning",
    "generative ai",
    "pune",
    "mumbai",
  ],
  dateCreated: "2024-01-01", // YYYY-MM-DD
}
