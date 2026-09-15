"use client"

import { PrinterIcon } from "lucide-react"

import { Button } from "@/components/base/ui/button"

export function ResumePrintButton() {
  return (
    <Button
      variant="outline"
      size="sm"
      className="h-8 cursor-pointer gap-1.5 font-mono text-xs"
      onClick={() => window.print()}
    >
      <PrinterIcon className="size-3.5" />
      <span>Print / PDF</span>
    </Button>
  )
}
