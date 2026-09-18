import { cn } from "@/lib/utils"

/**
 * Shared vertical alignment grid rails for the portfolio layout.
 * Establishes persistent alignment across Header, Hero/Profile, Overview, Socials,
 * Tech Stack, Experience, Projects, Education, Awards, Blog, and Footer.
 *
 * - 0% & 100%: Outer boundary rails matching content width
 * - 25% & 75%: Major internal quarter-column alignment rails (hidden on narrow mobile)
 * - 50%: Center axis alignment rail (hidden on narrow mobile)
 */
export function VerticalGridRails({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-1 select-none",
        className
      )}
      aria-hidden="true"
    >
      {/* Far-Left Content Boundary Rail */}
      <div className="absolute inset-y-0 left-0 w-px bg-line" />

      {/* Far-Right Content Boundary Rail */}
      <div className="absolute inset-y-0 right-0 w-px bg-line" />
    </div>
  )
}
