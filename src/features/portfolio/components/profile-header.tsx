import { MapPinIcon } from "lucide-react"

import { AvatarLights } from "@/features/portfolio/components/avatar-lights"
import { USER } from "@/features/portfolio/data/user"

import { AvatarLightsToggle } from "./avatar-lights-toggle"
import { FlipSentences } from "./flip-sentences"
import { PronounceMyName } from "./pronounce-my-name"
import { VerifiedIcon } from "./verified-icon"

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom grid min-w-0 grid-cols-[auto_minmax(0,1fr)] overflow-y-clip border-x screen-line-bottom-border after:z-1">
      <div className="flex flex-col border-r border-line">
        <div className="mx-0.5 my-0.75 flex h-full items-center justify-center outline-none">
          <AvatarLightsToggle className="group/avatar-lights-toggle outline-none">
            <AvatarLights
              className="size-30 ring-1 ring-border/60 ring-offset-2 ring-offset-background transition-shadow group-focus-visible/avatar-lights-toggle:ring-2 group-focus-visible/avatar-lights-toggle:ring-ring min-[24rem]:size-32 sm:size-40"
              variants={USER.avatarVariants}
            />
          </AvatarLightsToggle>
        </div>
      </div>

      <div className="flex min-w-0 flex-col justify-center">
        <div className="flex items-center gap-2 py-3 pl-4 sm:py-4">
          <h1 className="-translate-y-px text-[2rem]/none font-medium tracking-tight">
            {USER.displayName}
          </h1>

          <VerifiedIcon className="size-4.5 select-none" aria-hidden />

          {USER.namePronunciationUrl && (
            <PronounceMyName namePronunciationUrl={USER.namePronunciationUrl} />
          )}
        </div>

        <FlipSentences className="h-9 min-w-0 border-t border-line py-1 pr-3 pl-4 whitespace-nowrap sm:h-9 sm:pr-4">
          {USER.flipSentences}
        </FlipSentences>

        <div className="flex items-center gap-1 border-t border-line py-1.5 pl-4 font-mono text-[11px] tracking-wider text-muted-foreground/60 uppercase">
          <MapPinIcon
            className="size-3 shrink-0 text-muted-foreground/50"
            aria-hidden
          />
          <span className="min-w-0 break-words">{USER.address}</span>
        </div>
      </div>
    </div>
  )
}
