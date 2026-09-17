"use client"

import { useEffect, useId, useRef } from "react"
import type { Transition } from "motion/react"
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

import { metalClickSound } from "@/lib/soundcn/metal-click"
import { cn } from "@/lib/utils"
import { useSound } from "@/hooks/soundcn/use-sound"

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
}

export function PortfolioIsometricMark({
  className,
}: { className?: string } = {}) {
  const id = useId()
  const ids = {
    facePattern: `mark-face-pattern-${id}`,
    faceFill: `mark-face-fill-${id}`,
    stroke: `mark-stroke-${id}`,
    radialGradient: `mark-radial-gradient-${id}`,
  }

  const ref = useRef<SVGSVGElement>(null)

  const [play] = useSound(metalClickSound)

  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { margin: "80px" })

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const cx = useSpring(useTransform(mouseX, [0, 1], [0, 556]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  const cy = useSpring(useTransform(mouseY, [0, 1], [24, 312]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  useEffect(() => {
    if (shouldReduceMotion || !isInView) {
      return
    }

    if (window.matchMedia("(hover: none)").matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [shouldReduceMotion, isInView, mouseX, mouseY])

  return (
    <motion.svg
      ref={ref}
      className={cn(
        "h-auto w-full touch-manipulation overflow-visible [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))]",
        className
      )}
      viewBox="0 24 556 288"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial="normal"
      whileTap="pressed"
      onTap={() => play()}
    >
      <defs>
        <pattern
          id={ids.facePattern}
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2"
            stroke="var(--pattern)"
            strokeWidth="1"
          />
        </pattern>

        <motion.g
          id={ids.faceFill}
          variants={{
            normal: {
              transform: "translate(0px, 0px)",
            },
            pressed: {
              transform: "translate(0px, 12px)",
            },
          }}
          transition={transition}
        >
          {/* Top isometric facets */}
          <path d="M278 40 L389 104 L278 168 L167 104 Z" />
          <path d="M389 104 L444 136 L333 200 L278 168 Z" />
          <path d="M167 104 L278 168 L222 200 L111 136 Z" />
        </motion.g>

        <motion.path
          id={ids.stroke}
          variants={{
            normal: {
              d: "M278 40 L389 104 L389 232 L278 296 L167 232 L167 104 Z M278 168 L278 296 M278 168 L389 104 M278 168 L167 104 M444 136 L444 200 L333 264 M444 136 L389 104 M333 200 L333 264 M111 136 L111 200 L222 264 M111 136 L167 104 M222 200 L222 264",
            },
            pressed: {
              d: "M278 52 L389 116 L389 232 L278 296 L167 232 L167 116 Z M278 180 L278 296 M278 180 L389 116 M278 180 L167 116 M444 148 L444 200 L333 264 M444 148 L389 116 M333 212 L333 264 M111 148 L111 200 L222 264 M111 148 L167 116 M222 212 L222 264",
            },
          }}
          transition={transition}
        />

        <motion.radialGradient
          id={ids.radialGradient}
          cx={cx}
          cy={cy}
          r="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            className="dark:[stop-color:#fff]"
            stopColor="var(--color-zinc-700)"
          />
          <stop
            className="dark:[stop-color:var(--color-zinc-600)]"
            offset="1"
            stopColor="var(--color-zinc-400)"
            stopOpacity="0"
          />
        </motion.radialGradient>
      </defs>

      {/* Grid lines in technical CAD style */}
      <g className="stroke-line" strokeWidth="1" strokeDasharray="4 2">
        <path d="M-477.55 756.57L1254.51 -243.41" />
        <path d="M977.37 788.58L-754.67 -211.42" />
        <path d="M1143.65 692.58L-588.39 -307.42" />
      </g>

      <g className="fill-background" fillRule="evenodd" clipRule="evenodd">
        <motion.path
          variants={{
            normal: {
              d: "M167 104 L278 168 L278 296 L167 232 Z",
            },
            pressed: {
              d: "M167 116 L278 180 L278 296 L167 232 Z",
            },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: {
              d: "M278 168 L389 104 L389 232 L278 296 Z",
            },
            pressed: {
              d: "M278 180 L389 116 L389 232 L278 296 Z",
            },
          }}
          transition={transition}
        />
      </g>

      <use href={`#${ids.faceFill}`} className="fill-background" />
      <use href={`#${ids.faceFill}`} fill={`url(#${ids.facePattern})`} />

      <use href={`#${ids.stroke}`} stroke="var(--stroke)" strokeWidth="1.5" />
      <use
        href={`#${ids.stroke}`}
        stroke={`url(#${ids.radialGradient})`}
        strokeWidth="1.5"
      />
    </motion.svg>
  )
}
