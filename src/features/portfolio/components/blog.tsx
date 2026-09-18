import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"

const ID = "blog"

export function Blog() {
  return (
    <Panel id={ID}>
      <div
        id="blog"
        className="scroll-mt-[calc(var(--header-height)+var(--separator-height))]"
      />
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Blog</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="relative flex min-h-[220px] flex-col items-center justify-center gap-5 py-16 sm:min-h-[260px] sm:py-20">
        {/* Subtle technical background grid lines matching Swiss editorial aesthetic */}
        <div
          className="pointer-events-none absolute inset-0 -z-1 flex justify-center"
          aria-hidden
        >
          <div className="h-full w-full max-w-xs border-x border-line/50 sm:max-w-sm" />
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 top-1/2 -z-1 h-px -translate-y-1/2 bg-line/30"
          aria-hidden
        />

        <p className="font-mono text-sm tracking-tight text-muted-foreground select-none sm:text-base">
          Coming soon.
        </p>

        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-medium text-zinc-950 shadow-sm transition-colors hover:bg-zinc-100 sm:text-sm dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          <span>All Posts</span>
          <ArrowRightIcon className="size-3.5" />
        </Link>
      </div>
    </Panel>
  )
}
