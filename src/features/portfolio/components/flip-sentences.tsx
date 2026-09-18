"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useInView, usePageInView } from "motion/react"

import { cn } from "@/lib/utils"
import { TextFlip } from "@/registry/components/text-flip"

const DEFAULT_FONT_SIZE = 14
const MIN_FONT_SIZE = 10

export function FlipSentences({
  children,
  className,
  ...props
}: Omit<React.ComponentProps<"div">, "children"> & {
  children: string[]
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const measureRefs = useRef<(HTMLSpanElement | null)[]>([])

  const isPageInView = usePageInView()
  const isInView = useInView(containerRef)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [fontSizes, setFontSizes] = useState<number[]>(() =>
    children.map(() => DEFAULT_FONT_SIZE)
  )

  const updateFontSizes = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const style = window.getComputedStyle(container)
    const paddingLeft = parseFloat(style.paddingLeft) || 0
    const paddingRight = parseFloat(style.paddingRight) || 0
    const availableWidth = Math.max(
      0,
      container.clientWidth - paddingLeft - paddingRight
    )
    // 2px safety buffer to prevent subpixel edge wrapping or clipping
    const usableWidth = Math.max(0, availableWidth - 2)

    if (!usableWidth) return

    const calculatedSizes = children.map((_, i) => {
      const span = measureRefs.current[i]
      if (!span) return DEFAULT_FONT_SIZE

      const renderedWidth = span.getBoundingClientRect().width
      if (!renderedWidth || renderedWidth <= usableWidth) {
        return DEFAULT_FONT_SIZE
      }

      // Calculate the scaled font size that fits in usableWidth
      const calculated = (usableWidth / renderedWidth) * DEFAULT_FONT_SIZE

      // Use approximately 10px as the practical minimum fitted size
      const fitted = Math.max(
        MIN_FONT_SIZE,
        Math.min(DEFAULT_FONT_SIZE, Number(calculated.toFixed(2)))
      )

      return fitted
    })

    setFontSizes((prev) => {
      const isSame =
        prev.length === calculatedSizes.length &&
        prev.every((size, idx) => Math.abs(size - calculatedSizes[idx]) < 0.05)
      return isSame ? prev : calculatedSizes
    })
  }, [children])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    updateFontSizes()

    // Re-measure when web fonts are loaded to ensure exact font metrics
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(updateFontSizes)
    }

    const observer = new ResizeObserver(updateFontSizes)
    observer.observe(container)
    window.addEventListener("resize", updateFontSizes)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", updateFontSizes)
    }
  }, [updateFontSizes])

  // Recalculate when the displayed tagline changes
  useEffect(() => {
    updateFontSizes()
  }, [currentIndex, updateFontSizes])

  return (
    <div
      ref={containerRef}
      {...props}
      className={cn("flex min-w-0 items-center", className)}
    >
      <TextFlip
        className="min-w-0 shimmer font-mono whitespace-nowrap text-muted-foreground shimmer-duration-1500 shimmer-once not-dark:shimmer-color-foreground"
        style={(index) => ({
          fontSize: `${fontSizes[index] ?? DEFAULT_FONT_SIZE}px`,
          whiteSpace: "nowrap",
        })}
        interval={3}
        play={isPageInView && isInView}
        onIndexChange={setCurrentIndex}
      >
        {children}
      </TextFlip>

      {/* Hidden measurement spans rendered in the exact mono font at 14px */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 -z-50 opacity-0 select-none"
        style={{ visibility: "hidden" }}
      >
        {children.map((sentence, i) => (
          <span
            key={i}
            ref={(el) => {
              measureRefs.current[i] = el
            }}
            className="inline-block font-mono text-[14px] whitespace-nowrap"
          >
            {sentence}
          </span>
        ))}
      </div>
    </div>
  )
}
