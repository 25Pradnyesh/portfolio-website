import { urlToName } from "@/utils/url"
import { LinkIcon, MarsIcon, NonBinaryIcon, VenusIcon } from "lucide-react"

import { USER } from "@/features/portfolio/data/user"
import type { User } from "@/features/portfolio/types/user"

import { Panel, PanelContent } from "../panel"
import { CurrentLocalTimeItem } from "./current-local-time-item"
import { EmailItem } from "./email-item"
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item"
import { PhoneItem } from "./phone-item"

export function Overview() {
  return (
    <Panel className="screen-line-bottom-none screen-line-top-none">
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
        <CurrentLocalTimeItem timeZone={USER.timeZone} />

        {USER.phoneNumberB64 && (
          <PhoneItem phoneNumberB64={USER.phoneNumberB64} />
        )}

        <EmailItem emailB64={USER.emailB64} />

        <IntroItem>
          <IntroItemIcon>
            <LinkIcon />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              href={USER.website}
              aria-label={`Personal website: ${urlToName(USER.website)}`}
            >
              {urlToName(USER.website)}
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>

        <IntroItem>
          <IntroItemIcon>{getGenderIcon(USER.gender)}</IntroItemIcon>
          <IntroItemContent aria-label={`Pronouns: ${USER.pronouns}`}>
            {USER.pronouns}
          </IntroItemContent>
        </IntroItem>
      </PanelContent>

      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-1 w-px -translate-x-2.25 border-r border-dashed border-line max-sm:hidden" />
    </Panel>
  )
}

function getGenderIcon(gender: User["gender"]) {
  switch (gender) {
    case "male":
      return <MarsIcon />
    case "female":
      return <VenusIcon />
    case "non-binary":
      return <NonBinaryIcon />
  }
}
