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
    <section className="border-x border-y border-white/[0.12]">
      <h2 className="sr-only">Social links</h2>

      <div className="grid grid-cols-1 gap-px bg-white/[0.12] sm:grid-cols-2 lg:grid-cols-4">
        {SOCIAL_LINKS.map((item) => {
          const isExternal = item.href.startsWith("http")
          const isNewTab = isExternal || item.name === "resume"

          const href = isExternal
            ? addQueryParams(item.href, UTM_PARAMS)
            : item.href

          const brandColor = BRAND_COLORS[item.name]

          return (
            <a
              key={item.name}
              href={href}
              target={isNewTab ? "_blank" : undefined}
              rel={isNewTab ? "noopener noreferrer" : undefined}
              className="group relative flex min-h-[58px] items-center justify-between gap-3 bg-[#09090b] px-4 py-3.5 transition-colors duration-200 outline-none hover:bg-white/[0.035] focus-visible:bg-white/[0.055] sm:min-h-[62px] sm:px-4.5"
            >
              {/* Brand + label */}
              <div className="flex min-w-0 items-center gap-3">
                <div
                  className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.045] transition-all duration-200 group-hover:border-white/[0.2] group-hover:bg-white/[0.07]"
                  style={
                    brandColor
                      ? {
                          color: brandColor,
                        }
                      : undefined
                  }
                >
                  <span className="flex items-center justify-center [&>svg]:size-[18px] [&>svg]:shrink-0">
                    {SOCIAL_ICONS[item.name]}
                  </span>
                </div>

                <span className="truncate font-mono text-sm font-medium tracking-tight text-foreground">
                  {item.name === "discord"
                    ? "Pradnyesh"
                    : item.name === "x"
                      ? "X"
                      : item.name === "cal"
                        ? "Cal.com"
                        : item.name === "email"
                          ? "Email"
                          : item.name === "resume"
                            ? "Resume"
                            : item.name.charAt(0).toUpperCase() +
                              item.name.slice(1)}
                </span>
              </div>

              {/* Action indicator */}
              {isNewTab ? (
                <ArrowUpRightIcon
                  className="size-3.5 shrink-0 text-muted-foreground/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  aria-hidden="true"
                />
              ) : (
                <span className="shrink-0 font-mono text-[10px] tracking-wider text-muted-foreground/45 uppercase transition-colors duration-200 group-hover:text-muted-foreground/80">
                  DIRECT
                </span>
              )}

              {/* Subtle hover edge */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/0 transition-colors duration-200 group-hover:bg-white/[0.12]"
              />
            </a>
          )
        })}
      </div>
    </section>
  )
}
