import type { StaticImageData } from "next/image"

export type Project = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string
  title: string
  /**
   * Project period for display and sorting.
   * Use "MM.YYYY" format. Omit `end` for ongoing projects.
   */
  period: {
    /** Start date (e.g., "05.2025"). */
    start: string
    /** End date; leave undefined for "Present". */
    end?: string
  }
  /** Public URL (site, repository, demo, or video). */
  link?: string
  /** Source code repository URL (e.g. GitHub). */
  repository?: string
  /** Tags/technologies for chips or filtering. */
  skills: string[]
  /** Optional rich description; Markdown and line breaks supported. */
  description?: string
  /** Logo image (static import or URL under /public). Takes precedence over `icon`. */
  logo?: string | StaticImageData
  /** Optional className to fine-tune optical framing of `logo` inside its tile. */
  logoClassName?: string
  /** Inline SVG icon, framed in a tile. Used only when `logo` is unset. */
  icon?: React.ReactElement
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean
}
