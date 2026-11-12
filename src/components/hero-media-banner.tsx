"use client"

import { useState, useSyncExternalStore } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"
import { HeroDeskClock } from "@/components/hero-desk-clock"
import { VerticalGridRails } from "@/components/vertical-grid-rails"

export interface HeroMediaSource {
  /** Optional video loop sources for future motion upgrades */
  video?: {
    day?: string
    night?: string
  }
  /** High-resolution day/night pixel art image assets */
  images?: {
    day: string
    night: string
  }
  alt?: string
}

export interface HeroMediaBannerProps {
  media?: HeroMediaSource
  children?: React.ReactNode
  className?: string
}

const DEFAULT_HERO_MEDIA: HeroMediaSource = {
  images: {
    day: "/images/hero-pixel-day.png",
    night: "/images/hero-pixel-night.png",
  },
  alt: "Pixel art developer workspace with dual monitors, mechanical keyboard, and live digital desk clock",
}

function getNetworkSaveData(): boolean {
  if (typeof navigator !== "undefined" && "connection" in navigator) {
    const conn = (
      navigator as unknown as {
        connection?: { saveData?: boolean; effectiveType?: string }
      }
    ).connection
    return Boolean(
      conn?.saveData ||
      conn?.effectiveType === "slow-2g" ||
      conn?.effectiveType === "2g"
    )
  }
  return false
}

function subscribeNetworkChange(callback: () => void) {
  if (typeof navigator !== "undefined" && "connection" in navigator) {
    const conn = (
      navigator as unknown as {
        connection?: EventTarget
      }
    ).connection
    conn?.addEventListener?.("change", callback)
    return () => conn?.removeEventListener?.("change", callback)
  }
  return () => {}
}

/**
 * Hero media area rendered between the site header and profile on the homepage.
 *
 * Features:
 * - Dynamic Day / Night theme-adaptive pixel-art developer workspace
 * - Ultra-crisp pixel-art rendering with preloaded alternate assets to prevent theme-switch flash
 * - Live synchronized desk-mounted digital clock tracking real browser system time (HH:MM:SS AM/PM / 24h)
 * - Calibrated compact vertical height: ~310px desktop, ~260px tablet, ~195px mobile
 * - Future-proof media architecture: supports dropping in video loops without redesign
 * - Respects prefers-reduced-motion and saves bandwidth on low-speed connections
 * - CAD-aligned grid rails and responsive composition across mobile, tablet, laptop, and desktop
 */
export function HeroMediaBanner({
  media = DEFAULT_HERO_MEDIA,
  children,
  className,
}: HeroMediaBannerProps) {
  const pathname = usePathname()
  const shouldReduceMotion = useReducedMotion()

  const isLowBandwidth = useSyncExternalStore(
    subscribeNetworkChange,
    getNetworkSaveData,
    () => false
  )

  const [dayError, setDayError] = useState(false)
  const [nightError, setNightError] = useState(false)

  // Only display the hero media banner on the homepage
  if (pathname !== "/") {
    return null
  }

  const dayImg = media.images?.day ?? DEFAULT_HERO_MEDIA.images!.day
  const nightImg = media.images?.night ?? DEFAULT_HERO_MEDIA.images!.night
  const altText = media.alt ?? DEFAULT_HERO_MEDIA.alt!

  // Future video support: only active if video URLs are provided, motion is not reduced, and bandwidth is adequate
  const hasVideo = Boolean(media.video?.day || media.video?.night)
  const canPlayVideo = hasVideo && !shouldReduceMotion && !isLowBandwidth

  return (
    <div className="max-w-screen overflow-x-clip px-4 sm:px-6">
      <div
        className={cn(
          "screen-line-bottom relative mx-auto w-full overflow-hidden border-x border-line screen-line-bottom-border md:max-w-3xl",
          // Height constraints tuned to keep profile above fold:
          // Desktop: 310px (target 300-320px)
          // Tablet:  260px (target 240-280px)
          // Mobile:  195px (target 170-220px)
          "h-[195px] select-none sm:h-[260px] md:h-[310px]",
          className
        )}
      >
        <VerticalGridRails />

        {/* Technical dot-grid fallback visible if assets are loading or unavailable */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:16px_16px] dark:bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)]"
          aria-hidden
        />

        {/* Media Frame: retains 1670:942 aspect ratio and frames focal workspace (developer, monitors, clock) */}
        <div className="absolute inset-x-0 top-[-2px] aspect-1670/942 w-full sm:top-[-36px] md:top-[-44px]">
          {/* Media Layer: Video (Future Animation) or Crisp Pixel-Art Image (Day/Night) */}
          {canPlayVideo ? (
            <div className="pointer-events-none absolute inset-0 h-full w-full">
              {media.video?.day && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={dayImg}
                  className="absolute inset-0 h-full w-full object-cover object-[35%_36%] opacity-100 transition-opacity duration-700 ease-in-out sm:object-[center_36%] dark:opacity-0"
                >
                  <source src={media.video.day} type="video/mp4" />
                </video>
              )}
              {media.video?.night && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={nightImg}
                  className="absolute inset-0 h-full w-full object-cover object-[35%_36%] opacity-0 transition-opacity duration-700 ease-in-out sm:object-[center_36%] dark:opacity-100"
                >
                  <source src={media.video.night} type="video/mp4" />
                </video>
              )}
            </div>
          ) : (
            <div className="pointer-events-none absolute inset-0 h-full w-full">
              {/* Daytime Workspace (Light Mode) */}
              {!dayError && (
                <Image
                  src={dayImg}
                  alt={`${altText} (Day mode)`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                  onError={() => setDayError(true)}
                  className={cn(
                    "object-cover object-[35%_36%] select-none sm:object-[center_36%]",
                    "transition-opacity duration-700 ease-in-out",
                    "[image-rendering:pixelated]",
                    "opacity-100 dark:opacity-0"
                  )}
                />
              )}

              {/* Nighttime Workspace (Dark Mode) */}
              {!nightError && (
                <Image
                  src={nightImg}
                  alt={`${altText} (Night mode)`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                  onError={() => setNightError(true)}
                  className={cn(
                    "object-cover object-[35%_36%] select-none sm:object-[center_36%]",
                    "transition-opacity duration-700 ease-in-out",
                    "[image-rendering:pixelated]",
                    "opacity-0 dark:opacity-100"
                  )}
                />
              )}
            </div>
          )}

          {/* Live Desk Clock Overlay — Aligned directly over the desk digital clock */}
          <HeroDeskClock />
        </div>

        {/* Subtle edge readability gradients: preserve crisp art while harmonizing with header and profile borders */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-4 bg-linear-to-b from-background/30 to-transparent sm:h-6"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-5 bg-linear-to-t from-background/40 to-transparent sm:h-8"
          aria-hidden
        />

        {/* Optional foreground content / overlays */}
        {children && <div className="relative z-10">{children}</div>}
      </div>
    </div>
  )
}
