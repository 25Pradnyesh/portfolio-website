import { addQueryParams } from "@/utils/url"
import { ArrowUpRightIcon } from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import { cn } from "@/lib/utils"
import { Panel } from "@/features/portfolio/components/panel"
import { SOCIAL_ICONS } from "@/features/portfolio/components/social-link-icons"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"

const SOCIAL_ICON_COLORS: Record<string, string> = {
  github: "text-[#24292f] dark:text-white",
  linkedin: "text-[#0A66C2]",
  x: "text-black dark:text-white",
  discord: "text-[#5865F2]",
  cal: "text-foreground",
  telegram: "text-[#24A1DE]",
  email: "text-[#EA4335]",
  resume: "text-[#EF4444]",
}

export function SocialLinks() {
  return (
    <Panel className="screen-line-top-none">
      <h2 className="sr-only">Social links</h2>

      <div className="grid grid-cols-2 border-t border-line sm:grid-cols-4">
        {SOCIAL_LINKS.map((item, index) => {
          const isRightEdgeMobile = index % 2 === 1
          const isRightEdgeDesktop = (index + 1) % 4 === 0
          const isLastRowMobile = index >= 6
          const isLastRowDesktop = index >= 4
          const isExternal = item.href.startsWith("http")
          const href = isExternal
            ? addQueryParams(item.href, UTM_PARAMS)
            : item.href

          return (
            <a
              key={item.name}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className={cn(
                "group relative flex items-center justify-between gap-2.5 px-3.5 py-3 sm:px-4 sm:py-3.5 md:py-4",
                "font-mono text-xs text-muted-foreground transition-colors hover:bg-muted/25 hover:text-foreground",
                "outline-none focus-visible:bg-muted/30 focus-visible:ring-1 focus-visible:ring-ring",
                !isRightEdgeMobile && "border-r border-line",
                isRightEdgeDesktop
                  ? "sm:border-r-0"
                  : "sm:border-r sm:border-line",
                !isLastRowMobile && "border-b border-line",
                isLastRowDesktop
                  ? "sm:border-b-0"
                  : "sm:border-b sm:border-line"
              )}
            >
              <span className="flex min-w-0 items-center gap-2.5 truncate sm:gap-3">
                <span
                  className={cn(
                    "shrink-0 transition-opacity group-hover:opacity-90 [&_svg]:size-4 sm:[&_svg]:size-4.5",
                    SOCIAL_ICON_COLORS[item.name]
                  )}
                >
                  {SOCIAL_ICONS[item.name]}
                </span>
                <span className="truncate font-mono text-xs font-medium text-foreground/85 transition-colors group-hover:text-foreground sm:text-[13px]">
                  {item.title}
                </span>
              </span>

              {isExternal ? (
                <ArrowUpRightIcon
                  className="size-3.5 shrink-0 text-muted-foreground/35 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground/80 sm:size-4"
                  aria-hidden
                />
              ) : (
                <span className="font-mono text-[10px] text-muted-foreground/40 transition-colors select-none group-hover:text-muted-foreground/70 sm:text-[11px]">
                  {item.name === "resume" ? "REQ" : "DIRECT"}
                </span>
              )}
            </a>
          )
        })}
      </div>
    </Panel>
  )
}
