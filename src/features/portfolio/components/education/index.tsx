import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { EDUCATION } from "@/features/portfolio/data/education"
import type { Education } from "@/features/portfolio/types/education"

import { EducationItem } from "./education-item"

const ID = "education"

export function Education() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Education</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="p-4 pr-2 sm:p-5 sm:pr-3">
        <div className="relative space-y-6 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
          {EDUCATION.map((item) => (
            <EducationItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Panel>
  )
}
