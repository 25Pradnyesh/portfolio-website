import { Markdown } from "@/components/markdown"
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { USER } from "@/features/portfolio/data/user"

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

      <PanelContent>
        <div className="typeset typeset-description [&_li]:ps-0.5 [&_ul]:ps-3.5">
          <Markdown>{USER.about}</Markdown>
        </div>
      </PanelContent>
    </Panel>
  )
}
