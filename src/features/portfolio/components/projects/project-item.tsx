import Image from "next/image"
import { addQueryParams } from "@/utils/url"
import { BoxIcon, ExternalLinkIcon, InfinityIcon } from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import { IconTile } from "@/components/ui/icon-tile"
import { Tag } from "@/components/ui/tag"
import {
  Collapsible,
  CollapsibleChevronsUpDownIcon,
} from "@/components/base/collapsible-animated"
import { Button } from "@/components/base/ui/button"
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/base/ui/collapsible"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { GitHubIcon } from "@/components/icons"
import { Markdown } from "@/components/markdown"

import type { Project } from "../../types/projects"

export function ProjectItem({
  className,
  project,
}: {
  className?: string
  project: Project
}) {
  const { start, end } = project.period
  const isOngoing = !end
  const isSinglePeriod = end === start
  const isGitHub = project.link.includes("github.com")

  return (
    <Collapsible className={className} defaultOpen={project.isExpanded}>
      <div className="flex w-full items-stretch border-b border-line last:border-b-0">
        <CollapsibleTrigger className="group/project flex flex-1 cursor-pointer items-center text-left transition-colors outline-none hover:bg-accent-muted/60 focus-visible:bg-accent-muted">
          {project.logo ? (
            <Image
              src={project.logo}
              alt={project.title}
              width={32}
              height={32}
              quality={100}
              className="mx-4 flex size-6 shrink-0 grayscale select-none group-hover/project:grayscale-0"
              unoptimized
              aria-hidden
            />
          ) : (
            <IconTile className="mx-4">{project.icon ?? <BoxIcon />}</IconTile>
          )}

          <div className="flex flex-1 items-center gap-2 border-l border-dashed border-line p-4 pr-2">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="leading-snug font-medium text-balance text-foreground">
                  {project.title}
                </h3>

                {project.id === "penguin-protocol" && (
                  <span className="inline-flex items-center gap-1 rounded-sm border border-amber-500/30 bg-amber-500/10 px-1.5 py-0.25 font-mono text-[10px] font-semibold text-amber-600 dark:text-amber-400">
                    🥇 Winner — Monad Blitz
                  </span>
                )}

                {project.id === "reclaim" && (
                  <span className="inline-flex items-center gap-1 rounded-sm border border-blue-500/30 bg-blue-500/10 px-1.5 py-0.25 font-mono text-[10px] font-medium text-blue-600 dark:text-blue-400">
                    GenAI Hackathon
                  </span>
                )}

                <dl className="font-mono text-xs text-muted-foreground">
                  <dt className="sr-only">Period</dt>
                  <dd className="flex items-center gap-0.5">
                    <span>{start}</span>
                    {!isSinglePeriod && (
                      <>
                        <span>—</span>
                        {isOngoing ? (
                          <InfinityIcon
                            className="size-3.5 translate-y-[0.5px]"
                            aria-label="Present"
                          />
                        ) : (
                          <span>{end}</span>
                        )}
                      </>
                    )}
                  </dd>
                </dl>
              </div>

              {project.skills.length > 0 && (
                <div className="mt-1.5 flex flex-wrap items-center gap-1">
                  {project.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded bg-muted/70 px-1.5 py-0.25 font-mono text-[11px] text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                  {project.skills.length > 3 && (
                    <span className="font-mono text-[11px] text-muted-foreground/70">
                      +{project.skills.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
              <CollapsibleChevronsUpDownIcon duration={0.15} />
            </div>
          </div>
        </CollapsibleTrigger>

        <div className="flex items-center border-l border-dashed border-line bg-background px-3">
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-xs"
                  className="cursor-pointer text-muted-foreground hover:text-foreground"
                  nativeButton={false}
                  render={
                    <a
                      href={addQueryParams(project.link, UTM_PARAMS)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} ${isGitHub ? "on GitHub" : ""}`}
                    >
                      {isGitHub ? (
                        <GitHubIcon className="size-3.5" />
                      ) : (
                        <ExternalLinkIcon className="size-3.5" />
                      )}
                    </a>
                  }
                />
              }
            />
            <TooltipContent>
              <p>{isGitHub ? "View on GitHub" : "Open project"}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <CollapsibleContent className="overflow-hidden">
        <div className="space-y-4 border-t border-line bg-muted/10 p-4">
          {project.description && (
            <div className="typeset typeset-description">
              <Markdown>{project.description}</Markdown>
            </div>
          )}

          {project.skills.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {project.skills.map((skill, index) => (
                <li key={index} className="flex">
                  <Tag className="transition-colors hover:border-foreground/30">
                    {skill}
                  </Tag>
                </li>
              ))}
            </ul>
          )}

          <div className="pt-1">
            <Button
              variant="outline"
              size="xs"
              className="cursor-pointer gap-1.5 text-xs font-medium"
              nativeButton={false}
              render={
                <a
                  href={addQueryParams(project.link, UTM_PARAMS)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {isGitHub ? (
                    <GitHubIcon className="size-3" />
                  ) : (
                    <ExternalLinkIcon className="size-3" />
                  )}
                  <span>
                    {isGitHub ? "View repository on GitHub" : "Open project"}
                  </span>
                </a>
              }
            />
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
