import Link from "next/link"

import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"
import { VerticalGridRails } from "@/components/vertical-grid-rails"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

/**
 * Editorial technical footer matching Reference Image 2.
 * Features top hatched separator, centered attribution row, and compact segmented bottom links.
 */
export function SiteFooterCad() {
  return (
    <footer className="max-w-screen overflow-x-clip px-4 sm:px-6">
      <div className="relative isolate mx-auto border-x border-line md:max-w-3xl">
        <VerticalGridRails />
        {/* Top diagonal/hatched separator */}
        <div className="screen-line-top screen-line-bottom">
          <div className="stripe-divider h-8 sm:h-10" />
        </div>

        {/* Centered attribution row */}
        <div className="screen-line-bottom flex items-center justify-center px-4 py-3 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            Built by{" "}
            <a
              href={SOCIAL.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground link-underline"
            >
              {USER.displayName}
            </a>
            . Inspired by / forked from{" "}
            <a
              href="https://github.com/ncdai/chanhdai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground link-underline"
            >
              ncdai/chanhdai.com
            </a>
            .
          </p>
        </div>

        {/* Compact bottom navigation/link row */}
        <div className="screen-line-bottom flex justify-center">
          <div className="flex items-center divide-x divide-line border-x border-line">
            <Link
              href="/llms.txt"
              target="_blank"
              className="px-4 py-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              llms.txt
            </Link>
            <a
              href={SOCIAL.x.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="flex size-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            >
              <XIcon className="size-3.5" />
            </a>
            <a
              href={SOCIAL.github.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex size-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            >
              <GitHubIcon className="size-3.5" />
            </a>
            <a
              href={SOCIAL.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex size-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedInIcon className="size-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom padding for clearance */}
        <div className="h-12 sm:h-16" />
      </div>
    </footer>
  )
}
