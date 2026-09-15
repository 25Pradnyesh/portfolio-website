import type { Route } from "next"
import Link from "next/link"
import { decodeEmail } from "@/utils/string"
import { addQueryParams } from "@/utils/url"
import { ArrowDownRightIcon, FileTextIcon, MailIcon } from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import { Button } from "@/components/base/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { Panel, PanelContent } from "@/features/portfolio/components/panel"
import { SOCIAL_ICONS } from "@/features/portfolio/components/social-link-icons"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export function SocialLinks() {
  const emailDecoded = decodeEmail(USER.emailB64)

  return (
    <Panel>
      <h2 className="sr-only">Actions and Social links</h2>

      <PanelContent>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              className="h-8.5 gap-1.5 px-3 font-medium shadow-xs"
              variant="default"
              size="sm"
              nativeButton={false}
              render={
                <a href="#projects">
                  <ArrowDownRightIcon className="size-3.5" />
                  <span>Explore Projects</span>
                </a>
              }
            />

            <Button
              className="h-8.5 gap-1.5 px-3 font-medium"
              variant="outline"
              size="sm"
              nativeButton={false}
              render={
                <Link href={"/resume" as Route}>
                  <FileTextIcon className="size-3.5" />
                  <span>View Resume</span>
                </Link>
              }
            />

            <Button
              className="h-8.5 gap-1.5 px-3 font-medium"
              variant="outline"
              size="sm"
              nativeButton={false}
              render={
                <a
                  href={`mailto:${emailDecoded}`}
                  rel="noopener noreferrer"
                  aria-label="Send email to Pradnyesh"
                >
                  <MailIcon className="size-3.5" />
                  <span>Get in Touch</span>
                </a>
              }
            />
          </div>

          <ul className="flex flex-wrap items-center gap-2">
            {SOCIAL_LINKS.map((item) => (
              <li key={item.name}>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button
                        className="text-foreground/80 shadow-none [&_svg:not([class*='size-'])]:size-4.5"
                        variant="outline"
                        size="icon-sm"
                        nativeButton={false}
                        render={
                          <a
                            href={addQueryParams(item.href, UTM_PARAMS)}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${item.title} profile`}
                          >
                            {SOCIAL_ICONS[item.name]}
                            <span className="sr-only">{item.title}</span>
                          </a>
                        }
                      />
                    }
                  />
                  <TooltipContent>
                    {item.title} ({item.handle})
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </PanelContent>
    </Panel>
  )
}
