import { decodeEmail } from "@/utils/string"
import { ArrowUpRightIcon, MailIcon } from "lucide-react"

import { Button } from "@/components/base/ui/button"
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

const ID = "contact"

export function Contact() {
  const emailDecoded = decodeEmail(USER.emailB64)

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Contact</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-6">
        <p className="max-w-xl text-sm/relaxed text-pretty text-muted-foreground">
          I am always interested in discussing AI systems, autonomous agents,
          full-stack engineering, and new opportunities. If you are working on
          something exciting or want to connect, feel free to reach out
          directly.
        </p>

        <div className="flex flex-wrap items-center gap-2.5">
          <Button
            variant="default"
            size="sm"
            className="h-9 cursor-pointer gap-2 px-3.5 font-medium"
            nativeButton={false}
            render={
              <a
                href={`mailto:${emailDecoded}`}
                rel="noopener noreferrer"
                aria-label="Send email"
              >
                <MailIcon className="size-4" />
                <span>Send Email</span>
              </a>
            }
          />

          <Button
            variant="outline"
            size="sm"
            className="h-9 cursor-pointer gap-2 px-3.5 font-medium"
            nativeButton={false}
            render={
              <a
                href={SOCIAL.github.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <GitHubIcon className="size-3.5" />
                <span>GitHub</span>
                <ArrowUpRightIcon className="size-3 text-muted-foreground" />
              </a>
            }
          />

          <Button
            variant="outline"
            size="sm"
            className="h-9 cursor-pointer gap-2 px-3.5 font-medium"
            nativeButton={false}
            render={
              <a
                href={SOCIAL.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon className="size-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRightIcon className="size-3 text-muted-foreground" />
              </a>
            }
          />

          <Button
            variant="outline"
            size="sm"
            className="h-9 cursor-pointer gap-2 px-3.5 font-medium"
            nativeButton={false}
            render={
              <a
                href={SOCIAL.x.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X profile"
              >
                <XIcon className="size-3.5" />
                <span>X</span>
                <ArrowUpRightIcon className="size-3 text-muted-foreground" />
              </a>
            }
          />
        </div>
      </PanelContent>
    </Panel>
  )
}
