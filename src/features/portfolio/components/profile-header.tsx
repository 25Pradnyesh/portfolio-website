import { MapPinIcon } from "lucide-react"

import { AvatarLights } from "@/features/portfolio/components/avatar-lights"
import { USER } from "@/features/portfolio/data/user"

import { AvatarLightsToggle } from "./avatar-lights-toggle"
import { PortfolioIsometricMark } from "./portfolio-isometric-mark"
import { PronounceMyName } from "./pronounce-my-name"
import { VerifiedIcon } from "./verified-icon"

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom overflow-y-clip border-x screen-line-bottom-border after:z-1">
      {/* Zone 1 — CAD isometric mark: Compact environmental visual */}
      <figure className="relative flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2">
        <PortfolioIsometricMark className="h-20 w-full sm:h-24 md:h-28" />

        {/* Technical caption label */}
        <figcaption className="pointer-events-none absolute right-2.5 bottom-1 font-mono text-[10px] leading-none tracking-widest text-muted-foreground/60 uppercase tabular-nums select-none sm:right-3 sm:bottom-1.5">
          Fig. 1.
        </figcaption>
      </figure>

      {/* Zone 2 — Unified Identity Lockup: Avatar on left, Name, Role & Location on right */}
      <div className="flex items-center gap-3.5 border-t border-line px-4 py-3 sm:gap-4.5 sm:px-5 sm:py-3.5">
        <AvatarLightsToggle className="group/avatar-lights-toggle shrink-0 outline-none">
          <AvatarLights
            className="size-14 rounded-full ring-1 ring-border/60 ring-offset-2 ring-offset-background transition-shadow group-focus-visible/avatar-lights-toggle:ring-2 group-focus-visible/avatar-lights-toggle:ring-ring sm:size-16"
            variants={USER.avatarVariants}
          />
        </AvatarLightsToggle>

        <div className="flex min-w-0 flex-col justify-center">
          {/* Primary Identity: Name + Verified Checkmark */}
          <div className="flex items-center gap-1.5 sm:gap-2">
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

          {/* Role: Concise secondary positioning label subordinate to Name */}
          <p className="mt-1 font-mono text-xs font-medium text-muted-foreground sm:mt-1.5 sm:text-sm">
            AI Systems Builder
          </p>

          {/* Location: Tertiary metadata in uppercase monospace styling */}
          <div className="mt-0.75 flex items-center gap-1 font-mono text-[10px] tracking-wider text-muted-foreground/60 uppercase sm:mt-1 sm:text-[11px]">
            <MapPinIcon
              className="size-3 shrink-0 text-muted-foreground/50"
              aria-hidden
            />
            <span>MUMBAI · PUNE, INDIA</span>
          </div>
        </div>
      </div>
    </div>
  )
}
