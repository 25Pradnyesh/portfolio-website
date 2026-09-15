import { ArrowUpRightIcon } from "lucide-react"

import { Button } from "@/components/base/ui/button"
import { GitHubIcon, XIcon } from "@/components/icons"
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { SOCIAL } from "@/features/portfolio/data/social-links"

const ID = "blog"

export function Blog() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Blog</a>
          <PanelTitleSup>(Coming soon)</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-4">
        <div className="rounded-lg border border-dashed border-line bg-muted/20 p-5 sm:p-6">
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="flex size-2 animate-pulse rounded-full bg-amber-500" />
            <span className="font-semibold tracking-wider text-foreground/90 uppercase">
              Writing & Architecture Notes
            </span>
          </div>

          <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground sm:text-lg">
            Technical essays and build breakdowns are in progress.
          </h3>

          <p className="mt-1.5 max-w-xl text-sm/relaxed text-pretty text-muted-foreground">
            Deep dives on autonomous AI agents, hackathon postmortems,
            full-stack architecture, and engineering experiments will be
            published here. In the meantime, I share ongoing progress and build
            logs in real time.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1.5 px-3 text-xs font-medium"
              nativeButton={false}
              render={
                <a
                  href={SOCIAL.x.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Pradnyesh on X"
                >
                  <XIcon className="size-3.5" />
                  <span>Follow on X</span>
                  <ArrowUpRightIcon className="size-3 text-muted-foreground" />
                </a>
              }
            />

            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1.5 px-3 text-xs font-medium"
              nativeButton={false}
              render={
                <a
                  href={SOCIAL.github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Pradnyesh on GitHub"
                >
                  <GitHubIcon className="size-3.5" />
                  <span>GitHub Repos</span>
                  <ArrowUpRightIcon className="size-3 text-muted-foreground" />
                </a>
              }
            />
          </div>
        </div>
      </PanelContent>
    </Panel>
  )
}
