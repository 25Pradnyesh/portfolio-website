import { MapPinIcon } from "lucide-react"

import { AvatarLights } from "@/features/portfolio/components/avatar-lights"
import { USER } from "@/features/portfolio/data/user"

import { AvatarLightsToggle } from "./avatar-lights-toggle"
import { PortfolioIsometricMark } from "./portfolio-isometric-mark"
import { PronounceMyName } from "./pronounce-my-name"
import { VerifiedIcon } from "./verified-icon"

export function ProfileHeader() {
  return (
    <div className="overflow-y-clip border-b border-white/[0.08]">
      {/* Zone 1 — CAD isometric mark: Compact environmental visual */}
      <figure className="relative flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2">
        <PortfolioIsometricMark className="h-20 w-full sm:h-24 md:h-28" />

        {/* Technical caption label */}
        <figcaption className="pointer-events-none absolute right-2.5 bottom-1 font-mono text-[10px] leading-none tracking-widest text-muted-foreground/60 uppercase tabular-nums select-none sm:right-3 sm:bottom-1.5">
          Fig. 1.
        </figcaption>
      </figure>

      {/* Zone 2 — Unified Identity Lockup: Avatar on left, Name, Role & Location on right */}
      <div className="flex items-center gap-4.5 border-t border-white/[0.08] px-5 py-6 sm:gap-6 sm:px-6 sm:py-7">
        <AvatarLightsToggle className="group/avatar-lights-toggle shrink-0 outline-none">
          <AvatarLights
            className="size-20 rounded-full border border-white/[0.08] shadow-md transition-transform duration-200 group-hover/avatar-lights-toggle:scale-[1.02] group-focus-visible/avatar-lights-toggle:ring-2 group-focus-visible/avatar-lights-toggle:ring-ring sm:size-24"
            variants={USER.avatarVariants}
          />
        </AvatarLightsToggle>

        <div className="flex min-w-0 flex-col justify-center">
          {/* Primary Identity: Name + Verified Checkmark */}
          <div className="flex items-center gap-2">
            <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-[1.75rem] sm:leading-none">
              {USER.displayName}
            </h1>

            <VerifiedIcon
              className="size-4.5 shrink-0 text-foreground/70 select-none sm:size-5"
              aria-hidden
            />

            {USER.namePronunciationUrl && (
              <PronounceMyName
                namePronunciationUrl={USER.namePronunciationUrl}
              />
            )}
          </div>

          {/* Role: JetBrains Mono metadata font 13px-14px */}
          <p className="mt-1 font-mono text-[13px] text-white/70 sm:mt-1.5 sm:text-sm">
            {USER.jobTitle}
          </p>

          {/* Location: JetBrains Mono metadata font 13px */}
          <div className="mt-1 flex items-center gap-1.5 font-mono text-xs text-white/50 sm:text-[13px]">
            <MapPinIcon
              className="size-3.5 shrink-0 text-white/40"
              aria-hidden
            />
            <span>MUMBAI · PUNE, INDIA</span>
          </div>
        </div>
      </div>
    </div>
  )
}
