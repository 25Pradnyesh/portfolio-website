import { FileTextIcon, MailIcon } from "lucide-react"

import {
  CalIcon,
  DiscordIcon,
  GitHubIcon,
  LinkedInIcon,
  TelegramIcon,
  XIcon,
} from "@/components/icons"
import type { SocialName } from "@/features/portfolio/data/social-links"

/**
 * Presentation binding for social profiles. Kept separate from the social
 * data so the data layer stays JSX-free. Keyed by `SocialName` so it stays
 * exhaustive with the registry.
 */
export const SOCIAL_ICONS: Record<SocialName, React.JSX.Element> = {
  github: <GitHubIcon />,
  linkedin: <LinkedInIcon />,
  x: <XIcon />,
  discord: <DiscordIcon />,
  cal: <CalIcon />,
  telegram: <TelegramIcon />,
  email: <MailIcon />,
  resume: <FileTextIcon />,
}
