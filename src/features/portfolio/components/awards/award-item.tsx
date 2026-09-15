import { format } from "date-fns"
import { Crown, Paperclip } from "lucide-react"

import { IconTile } from "@/components/ui/icon-tile"
import {
  Collapsible,
  CollapsibleChevronsUpDownIcon,
} from "@/components/base/collapsible-animated"
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/base/ui/collapsible"
import { Separator } from "@/components/base/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { Markdown } from "@/components/markdown"
import type { Award } from "@/features/portfolio/types/awards"

export function AwardItem({
  className,
  award,
}: {
  className?: string
  award: Award
}) {
  const canExpand = !!award.description

  const isWinner = award.id === "monad-blitz-pune"

  return (
    <Collapsible className={className} disabled={!canExpand}>
      <CollapsibleTrigger
        className={`flex w-full items-center text-left transition-colors hover:bg-accent-muted ${
          isWinner ? "bg-amber-500/5 dark:bg-amber-500/10" : ""
        }`}
      >
        <IconTile
          className={`mx-4 ${
            isWinner
              ? "border-amber-500/50 bg-amber-500/20 text-amber-500 dark:text-amber-400"
              : ""
          }`}
        >
          {award.icon ?? <Crown />}
        </IconTile>

        <div className="flex flex-1 items-center gap-2 border-l border-dashed border-line p-4 pr-2">
          <div className="flex-1">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h3 className="leading-snug font-medium text-balance text-foreground">
                {award.title}
              </h3>
              {isWinner && (
                <span className="inline-flex items-center gap-1 rounded-sm border border-amber-500/40 bg-amber-500/20 px-1.5 py-0.25 font-mono text-[10px] font-bold text-amber-600 dark:text-amber-400">
                  1ST PLACE WINNER
                </span>
              )}
            </div>

            <dl className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
              <div>
                <dt className="sr-only">Prize</dt>
                <dd
                  className={
                    isWinner
                      ? "font-semibold text-amber-600 dark:text-amber-400"
                      : ""
                  }
                >
                  {award.prize}
                </dd>
              </div>

              <Separator
                className="data-vertical:h-4 data-vertical:self-center"
                orientation="vertical"
                aria-hidden
              />

              <div>
                <dt className="sr-only">Awarded in</dt>
                <dd>
                  <time dateTime={new Date(award.date).toISOString()}>
                    {format(new Date(award.date), "MM.yyyy")}
                  </time>
                </dd>
              </div>

              <Separator
                className="data-vertical:h-4 data-vertical:self-center"
                orientation="vertical"
                aria-hidden
              />

              <div>
                <dt className="sr-only">Received in Grade</dt>
                <dd>{award.grade}</dd>
              </div>
            </dl>
          </div>

          {award.referenceLink && (
            <Tooltip>
              <TooltipTrigger
                render={
                  <a
                    className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4"
                    href={award.referenceLink}
                    target="_blank"
                    rel="noopener"
                    aria-label="Open reference attachment"
                  >
                    <Paperclip />
                  </a>
                }
              />
              <TooltipContent>
                <p>Open reference attachment</p>
              </TooltipContent>
            </Tooltip>
          )}

          {canExpand && (
            <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
              <CollapsibleChevronsUpDownIcon duration={0.15} />
            </div>
          )}
        </div>
      </CollapsibleTrigger>

      {canExpand && (
        <CollapsibleContent className="overflow-hidden">
          <div className="typeset typeset-description border-t border-line p-4">
            <Markdown>{award.description}</Markdown>
          </div>
        </CollapsibleContent>
      )}
    </Collapsible>
  )
}
