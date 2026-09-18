"use client"

import Link from "next/link"
import { ArrowLeftIcon, PrinterIcon } from "lucide-react"

export function ResumeActions() {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border/60 bg-muted/20 px-4 py-3 sm:px-6 print:hidden">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeftIcon className="size-3.5" />
        <span>Back to Portfolio</span>
      </Link>

      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-border/80 bg-background px-3 py-1.5 font-mono text-xs font-medium text-foreground shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <PrinterIcon className="size-3.5" />
        <span>Print / Save as PDF</span>
      </button>
    </div>
  )
}
