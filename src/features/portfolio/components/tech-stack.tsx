"use client"

import * as React from "react"

import { TECH_STACK, type TechItem } from "../data/tech-stack"
import { Panel, PanelHeader, PanelTitle } from "./panel"
import { PanelTitleCopy } from "./panel-title-copy"

const ID = "stack"

export function TechStack() {
  const [activeItem, setActiveItem] = React.useState<TechItem | null>(null)

  return (
    <Panel id={ID}>
      <div
        id="tech-stack"
        className="scroll-mt-[calc(var(--header-height)+var(--separator-height))]"
      />
      <PanelHeader className="flex h-11 items-center justify-between px-4 sm:h-12 sm:px-5">
        <div className="flex items-baseline gap-2">
          <PanelTitle className="font-heading text-[22px] font-semibold tracking-tight text-foreground sm:text-2xl">
            <a href={`#${ID}`}>Stack</a>
            <PanelTitleCopy id={ID} />
          </PanelTitle>
          <span className="font-mono text-[10px] tracking-wider text-muted-foreground select-none sm:text-[11px]">
            ({TECH_STACK.length} TECHNOLOGIES)
          </span>
        </div>

        {/* Dynamic active status label */}
        <div className="flex items-center font-mono text-[10px] tracking-wider uppercase transition-colors select-none sm:text-[11px]">
          <span className="text-muted-foreground/60">INSPECT:&nbsp;</span>
          {activeItem ? (
            <span
              className="font-semibold tracking-wider transition-colors duration-150"
              style={{ color: activeItem.accentColor }}
            >
              {activeItem.title}
            </span>
          ) : (
            <span className="font-medium text-muted-foreground/50 transition-colors duration-150">
              HOVER TO REVEAL
            </span>
          )}
        </div>
      </PanelHeader>

      <div className="p-4 sm:p-5 md:p-6">
        <div className="grid grid-cols-5 justify-items-center gap-x-2 gap-y-5 sm:grid-cols-10 sm:gap-x-2 sm:gap-y-6 md:grid-cols-[repeat(15,minmax(0,1fr))] md:gap-x-1.5 md:gap-y-6">
          {TECH_STACK.map((item) => {
            const isHovered = activeItem?.key === item.key

            return (
              <a
                key={item.key}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.title}
                onMouseEnter={() => setActiveItem(item)}
                onMouseLeave={() => setActiveItem(null)}
                onFocus={() => setActiveItem(item)}
                onBlur={() => setActiveItem(null)}
                className={`flex size-9.5 cursor-pointer items-center justify-center rounded transition-all duration-150 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none sm:size-10 md:size-10.5 ${
                  isHovered ? "bg-muted/50" : "hover:bg-muted/50"
                }`}
              >
                <div
                  className={`flex size-6.5 items-center justify-center transition-all duration-150 sm:size-7 md:size-7.5 [&_span]:size-full [&_svg]:size-full [&_svg]:max-h-full [&_svg]:max-w-full ${
                    isHovered
                      ? "scale-110 opacity-100"
                      : activeItem
                        ? "opacity-40"
                        : "opacity-80 hover:opacity-100"
                  }`}
                >
                  {item.icon}
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </Panel>
  )
}
