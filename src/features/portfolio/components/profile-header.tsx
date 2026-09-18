import { MapPinIcon } from "lucide-react"

import { AvatarLights } from "@/features/portfolio/components/avatar-lights"
import { USER } from "@/features/portfolio/data/user"

import { AvatarLightsToggle } from "./avatar-lights-toggle"
import { FlipSentences } from "./flip-sentences"
import { PortfolioIsometricMark } from "./portfolio-isometric-mark"
import { PronounceMyName } from "./pronounce-my-name"
import { VerifiedIcon } from "./verified-icon"

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] overflow-y-clip border-x screen-line-bottom-border after:z-1">
      <figure className="relative col-span-2 p-2 sm:col-span-1 sm:col-start-2 sm:p-4">
        <PortfolioIsometricMark className="h-20 w-full sm:h-24 md:h-28" />

        <figcaption className="pointer-events-none absolute right-2 bottom-2 font-mono text-[10px] leading-none tracking-widest text-muted-foreground/60 uppercase tabular-nums select-none sm:right-4 sm:bottom-4">
          Fig. 1.
        </figcaption>
      </figure>

      <div className="flex flex-col sm:row-span-2 sm:row-start-1">
        <div className="screen-line-top mt-auto shrink-0 border-r border-line">
          <div className="mx-0.5 my-0.75 flex outline-none">
            <AvatarLightsToggle className="group/avatar-lights-toggle outline-none">
              <AvatarLights
                className="size-30 ring-1 ring-border/60 ring-offset-2 ring-offset-background transition-shadow group-focus-visible/avatar-lights-toggle:ring-2 group-focus-visible/avatar-lights-toggle:ring-ring min-[24rem]:size-32 sm:size-40"
                variants={USER.avatarVariants}
              />
            </AvatarLightsToggle>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="z-1 mt-auto border-t border-line">
          <div className="flex items-center gap-2 pl-4">
            <h1 className="-translate-y-px text-[2rem]/none font-medium tracking-tight">
              {USER.displayName}
            </h1>

            <VerifiedIcon className="size-4.5 select-none" aria-hidden />

            {USER.namePronunciationUrl && (
              <PronounceMyName
                namePronunciationUrl={USER.namePronunciationUrl}
              />
            )}
          </div>

          <FlipSentences className="h-12.5 border-t border-line py-1 pl-4 sm:h-9">
            {USER.flipSentences}
          </FlipSentences>

          <div className="flex items-center gap-1 border-t border-line py-1.5 pl-4 font-mono text-[11px] tracking-wider text-muted-foreground/60 uppercase">
            <MapPinIcon
              className="size-3 shrink-0 text-muted-foreground/50"
              aria-hidden
            />
            <span>{USER.address}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
