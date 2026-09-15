"use client"

import { ArrowUpIcon } from "lucide-react"

import { GitHubIcon } from "@/components/icons"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export function SiteFooter() {
  const githubLink = SOCIAL.github
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="max-w-screen overflow-x-clip px-2">
      <div className="mx-auto border-x border-line group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        <div className="screen-line-top screen-line-bottom">
          <div className="stripe-divider h-8" />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 px-4 py-8 font-mono text-xs text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">
              {USER.displayName}
            </span>
            <span>©</span>
            <span>{currentYear}</span>
            <span>•</span>
            <span>Pune, India</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={githubLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="size-3.5" />
              <span>GitHub</span>
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              className="flex cursor-pointer items-center gap-1 transition-colors outline-none hover:text-foreground focus-visible:underline"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUpIcon className="size-3" />
            </button>
          </div>
        </div>
      </div>

      <SiteFooterInteractiveLogotype />

      <div className="h-(--fade-bottom-height)" />
      <div className="pb-[env(safe-area-inset-bottom,0)]" />
    </footer>
  )
}
