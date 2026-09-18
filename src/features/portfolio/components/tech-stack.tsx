import { TECH_STACK } from "../data/tech-stack"
import type { TechStack as TechStackType } from "../types/tech-stack"
import { Panel, PanelHeader, PanelTitle } from "./panel"
import { PanelTitleCopy } from "./panel-title-copy"

const ID = "stack"

const CATEGORY_ORDER = [
  "AI / ML",
  "Languages",
  "Frontend",
  "Backend & Database",
  "Infrastructure & Tools",
  "Analytics & Design",
] as const

const TECH_BRAND_COLORS: Record<string, string> = {
  typescript: "#3178C6",
  js: "#F7DF1E",
  python: "#3776AB",
  react: "#61DAFB",
  tailwindcss: "#06B6D4",
  motion: "#FF0055",
  tanstack: "#FF4154",
  "mobx-state-tree": "#FF6600",
  nodejs: "#5FA04E",
  postgresql: "#4169E1",
  mongodb: "#47A248",
  redis: "#DC382D",
  nginx: "#009639",
  claude: "#D97757",
  gemini: "#4E88FF",
  chatgpt: "#10A37F",
  git: "#F05032",
  docker: "#2496ED",
  posthog: "#F54E00",
  figma: "#F24E1E",
  ps: "#31A8FF",
}

export function TechStack() {
  const grouped = groupByCategory(TECH_STACK)

  return (
    <Panel id={ID}>
      <div
        id="tech-stack"
        className="scroll-mt-[calc(var(--header-height)+var(--separator-height))]"
      />
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Stack</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="relative [--col-left-width:--spacing(48)]">
        <div
          className="pointer-events-none absolute inset-y-0 left-(--col-left-width) -z-1 w-px border-r border-dashed border-line max-sm:hidden"
          aria-hidden
        />

        {CATEGORY_ORDER.map((category, index) => {
          const items = grouped[category]
          if (!items || items.length === 0) return null

          const categoryId = `${ID}-${category
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "")}`

          return (
            <div
              key={category}
              className="grid items-start gap-y-2.5 border-b border-line py-3.5 last:border-none sm:grid-cols-[var(--col-left-width)_1fr]"
            >
              <div
                id={categoryId}
                className="pl-4 text-sm leading-7 font-medium text-foreground/90 sm:pl-5"
              >
                <span
                  className="mr-2 font-mono text-xs text-muted-foreground/60 select-none"
                  aria-hidden
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                {category}
              </div>

              <ul
                aria-labelledby={categoryId}
                className="flex flex-wrap gap-1.5 px-4 sm:px-5"
              >
                {items.map((item) => {
                  const brandColor = TECH_BRAND_COLORS[item.key]

                  return (
                    <li key={item.key} className="flex">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener"
                        className="group flex h-7 items-center justify-center gap-1.5 rounded-md border border-border/70 bg-muted/40 px-2.5 font-mono text-xs text-foreground/90 transition-colors hover:border-border hover:bg-muted/80 hover:text-foreground"
                      >
                        <span
                          className="flex size-4 shrink-0 items-center justify-center text-foreground/80 transition-colors group-hover:text-foreground [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0"
                          style={brandColor ? { color: brandColor } : undefined}
                        >
                          {item.icon}
                        </span>
                        <span>{item.title}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </Panel>
  )
}

function groupByCategory(
  items: TechStackType[]
): Record<string, TechStackType[]> {
  return items.reduce<Record<string, TechStackType[]>>((acc, item) => {
    for (const category of item.categories) {
      ;(acc[category] ??= []).push(item)
    }
    return acc
  }, {})
}
