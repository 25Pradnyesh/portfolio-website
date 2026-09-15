"use client"

import { useEffect, useRef, useState } from "react"
import {
  AnimatePresence,
  motion,
  useInView,
  usePageInView,
  useReducedMotion,
} from "motion/react"

import { cn } from "@/lib/utils"

const ROLES = [
  "ML ENGINEER",
  "PRODUCT DEVELOPER",
  '"FAIL FAST. BUILD FASTER."',
] as const

const LONGEST_LABEL = '"FAIL FAST. BUILD FASTER."'

export function RollingRoleTag({
  className,
  interval = 3,
}: {
  className?: string
  interval?: number
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isPageInView = usePageInView()
  const isInView = useInView(ref)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (!isPageInView || !isInView) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROLES.length)
    }, interval * 1000)

    return () => clearInterval(timer)
  }, [interval, isPageInView, isInView])

  return (
    <div
      ref={ref}
      className={cn(
        "relative inline-flex h-6.5 items-center justify-center overflow-hidden rounded-md border border-line bg-muted/40 px-2.5 font-mono text-[11px] font-medium tracking-wider text-muted-foreground select-none sm:h-7 sm:text-xs",
        className
      )}
      aria-label="Role tag"
    >
      {/* Invisible spacer to reserve maximum width and prevent any layout shift */}
      <span
        className="pointer-events-none invisible block px-1 whitespace-nowrap opacity-0 select-none"
        aria-hidden="true"
      >
        {LONGEST_LABEL}
      </span>

      {/* Animated rolling label */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentIndex}
          className="absolute inset-0 flex items-center justify-center px-2 text-center whitespace-nowrap text-muted-foreground"
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { y: "50%", opacity: 0, filter: "blur(1px)" }
          }
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : { y: "0%", opacity: 1, filter: "blur(0px)" }
          }
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { y: "-50%", opacity: 0, filter: "blur(1px)" }
          }
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        >
          {ROLES[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
