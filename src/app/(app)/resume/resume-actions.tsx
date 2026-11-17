"use client"

import Link from "next/link"
import { ArrowLeftIcon, PrinterIcon } from "lucide-react"

export function ResumeActions() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 bg-neutral-50 px-4 py-3 sm:px-6 print:hidden">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-600 transition-colors hover:text-neutral-900"
      >
        <ArrowLeftIcon className="size-3.5" />
        <span>Back to Portfolio</span>
      </Link>

      <div className="flex items-center gap-2">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-neutral-300 bg-white px-3 py-1.5 font-mono text-xs font-medium text-neutral-900 shadow-xs transition-colors hover:bg-neutral-100"
        >
          <span>Open PDF</span>
        </a>

        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-neutral-300 bg-white px-3 py-1.5 font-mono text-xs font-medium text-neutral-900 shadow-xs transition-colors hover:bg-neutral-100"
        >
          <PrinterIcon className="size-3.5" />
          <span>Print</span>
        </button>
      </div>
    </div>
  )
}
