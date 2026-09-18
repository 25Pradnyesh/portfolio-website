import { CollapsibleList } from "@/components/collapsible-list"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { PROJECTS } from "@/features/portfolio/data/projects"

import { ProjectItem } from "./project-item"

const ID = "Projects"

export function Projects() {
  return (
    <Panel id={ID} className="screen-line-top-none">
      <div
        id="projects"
        className="scroll-mt-[calc(var(--header-height)+var(--separator-height))]"
      />
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Projects</a>
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={PROJECTS}
        max={3}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  )
}
