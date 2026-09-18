"use client"

import { useRef } from "react"
import { usePathname } from "next/navigation"
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react"

import { VerticalGridRails } from "@/components/vertical-grid-rails"

const PROXIMITY_RADIUS = 180
const MAX_DISPLACEMENT = 36

const SPRING_CONFIG = {
  stiffness: 160,
  damping: 18,
  mass: 0.15,
}

/**
 * Large horizontal breathing-space / media area rendered between the site header and profile on the homepage.
 * Features a technical dot-grid background with centered personal mark `PS`.
 * Includes a subtle physical cursor-proximity magnetic repulsion interaction on desktop pointers.
 * Structured cleanly and extensibly for future video/media embedding.
 */
export function HeroMediaBanner() {
  const pathname = usePathname()
  const shouldReduceMotion = useReducedMotion()

  const wrapperRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, SPRING_CONFIG)
  const springY = useSpring(mouseY, SPRING_CONFIG)

  // Only display the hero media area on the homepage
  if (pathname !== "/") {
    return null
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // Disable interaction on touch / non-mouse devices or if user prefers reduced motion
    if (e.pointerType !== "mouse" || shouldReduceMotion) return

    const wrapper = wrapperRef.current
    if (!wrapper) return

    const rect = wrapper.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Vector from cursor to resting center of PS mark
    const dx = centerX - e.clientX
    const dy = centerY - e.clientY
    const distance = Math.hypot(dx, dy)

    if (distance < PROXIMITY_RADIUS && distance > 0) {
      // Smooth non-linear falloff (stronger displacement the closer the cursor gets)
      const factor = Math.pow(1 - distance / PROXIMITY_RADIUS, 1.5)
      const displacement = factor * MAX_DISPLACEMENT
      const angle = Math.atan2(dy, dx)

      mouseX.set(Math.cos(angle) * displacement)
      mouseY.set(Math.sin(angle) * displacement)
    } else {
      mouseX.set(0)
      mouseY.set(0)
    }
  }

  const handlePointerLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div className="max-w-screen overflow-x-clip px-4 sm:px-6">
      <div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="screen-line-bottom relative mx-auto flex min-h-[220px] w-full items-center justify-center overflow-hidden border-x border-line screen-line-bottom-border sm:min-h-[260px] md:min-h-[280px] md:max-w-3xl"
      >
        <VerticalGridRails />

        {/* Technical dot-grid background */}
        <div
          className="pointer-events-none absolute inset-0 -z-1 bg-[radial-gradient(rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:16px_16px] dark:bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)]"
          aria-hidden
        />

        {/* Reserved container for future video/media embed */}
        <div
          ref={wrapperRef}
          className="relative z-1 flex items-center justify-center p-6 sm:p-8"
        >
          <motion.span
            className="font-mono text-3xl font-bold tracking-widest text-foreground select-none sm:text-4xl"
            style={{
              x: springX,
              y: springY,
            }}
          >
            PS
          </motion.span>
        </div>
      </div>
    </div>
  )
}
