import { addQueryParams } from "@/utils/url"
import { ArrowUpRightIcon } from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import { SOCIAL_ICONS } from "@/features/portfolio/components/social-link-icons"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"

const BRAND_COLORS: Record<string, string> = {
  github: "#ffffff",
  linkedin: "#0A66C2",
  x: "#ffffff",
  discord: "#5865F2",
  cal: "#ffffff",
  telegram: "#24A1DE",
  email: "#EA4335",
  resume: "#38BDF8",
}

export function SocialLinks() {
  return (
    <div className="border-y border-white/[0.08]">
      <h2 className="sr-only">Social links</h2>

      <div className="grid grid-cols-1 gap-px bg-white/[0.08] md:grid-cols-3">
        {SOCIAL_LINKS.map((item) => {
          const isExternal = item.href.startsWith("http")
          const href = isExternal
            ? addQueryParams(item.href, UTM_PARAMS)
            : item.href
          const brandColor = BRAND_COLORS[item.name]

          return (
            <a
              key={item.name}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group flex min-h-[64px] items-center justify-between gap-3 bg-[#09090b] px-4 py-3.5 transition-colors duration-150 outline-none hover:bg-white/[0.03] focus-visible:bg-white/[0.05]"
            >
              <div className="flex min-w-0 items-center gap-3 truncate">
                {/* 36px x 36px container with 20px x 20px icon */}
                <div
                  className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.05] transition-colors group-hover:border-white/[0.12] [&>svg]:size-5 [&>svg]:h-5 [&>svg]:w-5"
                  style={brandColor ? { color: brandColor } : undefined}
                >
                  {SOCIAL_ICONS[item.name]}
                </div>

                <span className="truncate font-mono text-[13px] font-medium text-zinc-200 transition-colors group-hover:text-white sm:text-sm">
                  {item.title}
                </span>
              </div>

              {/* Uniform diagonal 12px external link arrow on EVERY card */}
              <ArrowUpRightIcon
                className="size-3 shrink-0 text-white/40 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/90"
                aria-hidden
              />
            </a>
          )
        })}

        {/* Seamless 9th cell filler for 3x3 desktop grid */}
        <div
          className="hidden min-h-[64px] bg-[#09090b] md:block"
          aria-hidden
        />
      </div>
    </div>
  )
}
