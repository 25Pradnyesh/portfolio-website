import type { SocialProfile } from "@/features/portfolio/types/social-links"

/**
 * Keyed registry of social profiles — the single source of truth. Icons are
 * bound separately in `social-link-icons.tsx` (keyed by the same `SocialName`),
 * so adding a profile here forces the icon map to stay in sync at compile time.
 */
export const SOCIAL = {
  github: {
    title: "GitHub",
    handle: "25Pradnyesh",
    href: "https://github.com/25Pradnyesh",
    sameAs: true,
  },
  linkedin: {
    title: "LinkedIn",
    handle: "pradnyesh-s",
    href: "https://www.linkedin.com/in/pradnyesh-s/",
    sameAs: true,
  },
  x: {
    title: "X",
    handle: "@Pradnyesh_25",
    href: "https://x.com/Pradnyesh_25",
    sameAs: true,
  },
  discord: {
    title: "Discord",
    handle: "Pradnyesh",
    href: "https://discord.com/users/1397630514554212554",
    sameAs: true,
  },
  cal: {
    title: "Cal.com",
    handle: "pradnyesh",
    href: "https://cal.com/pradnyesh",
    sameAs: false,
  },
  telegram: {
    title: "Telegram",
    handle: "@Pradnyesh_25",
    href: "https://t.me/Pradnyesh_25",
    sameAs: false,
  },
  email: {
    title: "Email",
    handle: "workspace.pradnyesh@gmail.com",
    href: "mailto:workspace.pradnyesh@gmail.com",
    sameAs: false,
  },
  resume: {
    title: "Resume",
    handle: "Resume",
    href: "/resume",
    sameAs: false,
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
