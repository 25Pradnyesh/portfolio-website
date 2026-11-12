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

  const isDirectGitHubLink = project.link?.includes("github.com")
  const liveUrl = !isDirectGitHubLink ? project.link : undefined
  const repoUrl =
    project.repository ?? (isDirectGitHubLink ? project.link : undefined)

  return (
    <Collapsible className={className} defaultOpen={project.isExpanded}>
      <CollapsibleTrigger className="group/project flex w-full items-center text-left hover:bg-accent-muted">
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
          <div className="flex min-w-0 flex-1 flex-col gap-1 pr-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="leading-snug font-medium text-balance">
              {project.title}
            </h3>

            <dl className="shrink-0 font-mono text-xs text-muted-foreground sm:text-right">
              <dt className="sr-only">Period</dt>
              <dd className="flex items-center gap-0.5 tabular-nums">
                <span>{start}</span>
                {!isSinglePeriod && (
                  <>
                    <span className="font-mono">—</span>
                    {isOngoing ? (
                      <InfinityIcon
                        className="size-4.5 translate-y-[0.5px]"
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

          <div className="flex items-center gap-1">
            {liveUrl && (
              <Tooltip>
                <TooltipTrigger
                  render={
                    <a
                      className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                      href={addQueryParams(liveUrl, UTM_PARAMS)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                    >
                      <ExternalLinkIcon className="pointer-events-none size-4" />
                    </a>
                  }
                />
                <TooltipContent>
                  <p>Open live project</p>
                </TooltipContent>
              </Tooltip>
            )}

            {repoUrl && (
              <Tooltip>
                <TooltipTrigger
                  render={
                    <a
                      className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                      href={addQueryParams(repoUrl, UTM_PARAMS)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} repository on GitHub`}
                    >
                      <GitHubIcon className="pointer-events-none size-4" />
                    </a>
                  }
                />
                <TooltipContent>
                  <p>View repository on GitHub</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>

          <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
            <CollapsibleChevronsUpDownIcon duration={0.15} />
          </div>
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent className="overflow-hidden">
        <div className="space-y-4 border-t border-line p-4">
          {project.description && (
            <div className="typeset typeset-description">
              <Markdown>{project.description}</Markdown>
            </div>
          )}

          {(liveUrl || repoUrl) && (
            <div className="flex flex-wrap items-center gap-4 text-sm">
              {liveUrl && (
                <a
                  href={addQueryParams(liveUrl, UTM_PARAMS)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground link hover:text-foreground"
                >
                  <ExternalLinkIcon className="size-3.5" />
                  <span>Live</span>
                </a>
              )}
              {repoUrl && (
                <a
                  href={addQueryParams(repoUrl, UTM_PARAMS)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground link hover:text-foreground"
                >
                  <GitHubIcon className="size-3.5" />
                  <span>Repository</span>
                </a>
              )}
            </div>
          )}

          {project.skills.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {project.skills.map((skill, index) => (
                <li key={index} className="flex">
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
