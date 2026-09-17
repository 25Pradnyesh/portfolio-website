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
    <Panel id={ID} className="screen-line-bottom-none screen-line-top-none">
      <PanelHeader className="border-b-0 px-4 pt-4 pb-0 screen-line-bottom-none sm:px-5 sm:pt-5">
        <PanelTitle>
          About
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="px-4 pt-3 pb-4 sm:px-5 sm:pt-3.5 sm:pb-5">
        <div className="typeset typeset-description [&_li]:ps-0.5 [&_ul]:ps-3.5">
          <Markdown>{USER.about}</Markdown>
        </div>
      </PanelContent>
    </Panel>
  )
}
