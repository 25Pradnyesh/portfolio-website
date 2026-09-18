import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"

const ID = "about"

export function Hello() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>About</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-4 px-5 py-5 sm:px-6 sm:py-6">
        <p className="text-sm/relaxed font-normal text-foreground/90 sm:text-[15px]/relaxed">
          <strong className="font-semibold text-foreground">
            ML Engineer &amp; Full-Stack Developer
          </strong>{" "}
          building intelligent, user-centric products across{" "}
          <strong className="font-semibold text-foreground">
            Machine Learning, AI, and modern web technologies
          </strong>
          , with hands-on experience in{" "}
          <strong className="font-semibold text-foreground">
            Python, Next.js, React, TypeScript, FastAPI, Node.js, and Supabase
          </strong>
          .
        </p>

        <ul className="space-y-3 pt-1 text-sm/relaxed text-muted-foreground sm:text-[14px]/relaxed">
          <li className="flex items-start gap-2.5">
            <span
              className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground/50"
              aria-hidden
            />
            <span>
              <strong className="font-medium text-foreground">
                Creator of Travel AI
              </strong>
              , an AI-powered system that extracts locations from Instagram
              travel content and automatically organizes them into{" "}
              <strong className="font-medium text-foreground">
                Google Maps
              </strong>
              , combining machine intelligence with practical product
              engineering.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span
              className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground/50"
              aria-hidden
            />
            <span>
              Deepening my expertise in{" "}
              <strong className="font-medium text-foreground">
                Machine Learning, Generative AI, AI Agents, LLMs, and Deep
                Learning
              </strong>
              , with a focus on turning complex ideas into{" "}
              <strong className="font-medium text-foreground">
                practical, reliable, and useful products
              </strong>
              .
            </span>
          </li>
        </ul>
      </PanelContent>
    </Panel>
  )
}
