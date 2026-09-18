import { cn } from "@/lib/utils"

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-6 w-full border-y border-white/[0.08]",
        "bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.04)_0px,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_8px)]",
        "overflow-hidden select-none",
        className
      )}
      aria-hidden
    />
  )
}
