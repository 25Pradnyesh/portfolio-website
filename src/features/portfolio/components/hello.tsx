import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"

const ID = "about"

export function Hello() {
  return (
    <div
      id={ID}
      className="border-y border-white/[0.08] px-5 py-6 sm:px-6 sm:py-8"
    >
      <div className="flex items-center justify-between pb-3">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-[1.75rem]">
          <a href={`#${ID}`} className="outline-none hover:text-white">
            About
          </a>
        </h2>
        <PanelTitleCopy id={ID} />
      </div>

      <div className="flex flex-col gap-4">
        {/* Editorial Lead Copy: Narrative biography */}
        <p className="text-sm/relaxed text-white/70 sm:text-[15px]/relaxed">
          AI Engineer &amp; Full-Stack Developer based in Mumbai &amp; Pune,
          India. Focused on building intelligent systems, autonomous agents, and
          high-performance digital products from concept to deployment.
        </p>

        {/* Supporting Details: Highlighted flagship projects */}
        <div className="border-t border-dashed border-white/[0.08] pt-3.5 text-xs/relaxed text-white/50 sm:text-[13px]/relaxed">
          <p>
            <span className="font-mono font-medium text-white/80">
              Primary projects
            </span>{" "}
            include{" "}
            <a
              href="https://github.com/25Pradnyesh"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-white/60"
            >
              Travel AI
            </a>{" "}
            (location extraction pipeline from social content),{" "}
            <a
              href="https://github.com/25Pradnyesh"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-white/60"
            >
              VertiFarm
            </a>{" "}
            (automated monitoring for vertical farming), and{" "}
            <a
              href="https://design-resource-vault.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-white/60"
            >
              Design Resource Vault
            </a>{" "}
            (curated directory for frontend developers).
          </p>
        </div>
      </div>
    </div>
  )
}
