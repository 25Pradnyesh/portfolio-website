import type { Route } from "next"

import type { NavItem } from "@/types/nav"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_APP_URL || "https://portfolio.local",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const LICENSE = {
  name: "MIT License",
  url: "/LICENSE",
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const HEADER_NAV: NavItem<Route>[] = [
  {
    title: "Home",
    href: "/" as Route,
  },
  {
    title: "Blog",
    href: "/blog" as Route,
  },
]

export const MAIN_NAV: NavItem<Route>[] = [
  {
    title: "About",
    href: "/#about" as Route,
  },
  {
    title: "Stack",
    href: "/#stack" as Route,
  },
  {
    title: "Experience",
    href: "/#experience" as Route,
  },
  {
    title: "Education",
    href: "/#education" as Route,
  },
  {
    title: "Projects",
    href: "/#projects" as Route,
  },
  {
    title: "Resume",
    href: "/resume" as Route,
  },
  {
    title: "Contact",
    href: "/#contact" as Route,
  },
]

export const MOBILE_NAV: NavItem<Route>[] = [
  {
    title: "Home",
    href: "/" as Route,
  },
  ...MAIN_NAV,
]

export const X_HANDLE = SOCIAL.x.handle
export const GITHUB_USERNAME = SOCIAL.github.handle
export const SOURCE_CODE_GITHUB_REPO = "25Pradnyesh"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/25Pradnyesh"

export const SPONSORSHIP_URL = ""

export const UTM_PARAMS = {
  utm_source: "portfolio",
}
