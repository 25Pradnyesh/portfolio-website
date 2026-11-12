"use client"

import { useEffect, useState, useSyncExternalStore } from "react"
import { useTheme } from "next-themes"

interface HeroDeskClockProps {
  className?: string
}

interface ClockTime {
  hours12: string
  hours24: string
  minutes: string
  seconds: string
  period: "AM" | "PM"
}

function getClockSnapshot(): ClockTime {
  const now = new Date()
  const rawHours = now.getHours()
  const rawMinutes = now.getMinutes()
  const rawSeconds = now.getSeconds()

  const period: "AM" | "PM" = rawHours >= 12 ? "PM" : "AM"
  const h12 = rawHours % 12 || 12

  return {
    hours12: String(h12).padStart(2, "0"),
    hours24: String(rawHours).padStart(2, "0"),
    minutes: String(rawMinutes).padStart(2, "0"),
    seconds: String(rawSeconds).padStart(2, "0"),
    period,
  }
}

// React 19 recommended hydration-safe mount subscription
const emptySubscribe = () => () => {}

export function HeroDeskClock({ className }: HeroDeskClockProps) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  const [is24Hour, setIs24Hour] = useState(false)
  const [time, setTime] = useState<ClockTime>(getClockSnapshot)

  useEffect(() => {
    const updateTime = () => {
      setTime(getClockSnapshot())
    }

    // 1-second update interval
    const timer = setInterval(updateTime, 1000)

    // Synchronize immediately when user returns to this browser tab
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        updateTime()
      }
    }

    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      clearInterval(timer)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [])

  const toggleFormat = () => {
    setIs24Hour((prev) => !prev)
  }

  const timeString12 = `${time.hours12}:${time.minutes}:${time.seconds}`
  const timeString24 = `${time.hours24}:${time.minutes}:${time.seconds}`
  const fullLabel = is24Hour ? timeString24 : `${timeString12} ${time.period}`

  // Match the pixel art aesthetic:
  // Dusk/Night: Cool neon cyan (#00f0ff)
  // Day/Sunset: Warm glowing amber (#ff9e2c)
  const ledColor = isDark ? "#00f0ff" : "#ff9e2c"
  const ledGlow = isDark
    ? "drop-shadow(0px 0px 1.5px rgba(0, 240, 255, 0.85))"
    : "drop-shadow(0px 0px 1.5px rgba(255, 158, 44, 0.85))"

  return (
    <div
      className={className ?? "absolute z-10 select-none"}
      style={{
        left: "23.59%",
        top: "73.78%",
        width: "5.51%",
        height: "3.72%",
      }}
      title={`Local Time: ${fullLabel} (click to toggle 12h/24h)`}
    >
      <button
        type="button"
        onClick={toggleFormat}
        className="group/clock relative block h-full w-full cursor-pointer overflow-hidden rounded-[2px] border-none bg-transparent p-0 outline-hidden"
        aria-label={`Current local system time: ${fullLabel}. Click to switch between 12-hour and 24-hour display.`}
      >
        <svg
          viewBox="0 0 92 35"
          className="h-full w-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          {/* Bezel screen backplate covering baked-in static art */}
          <rect
            width="92"
            height="35"
            rx="2"
            className="fill-[#080a14] dark:fill-[#04060c]"
          />

          {isMounted && (
            <g style={{ filter: ledGlow }}>
              {is24Hour ? (
                <text
                  x="46"
                  y="23"
                  textAnchor="middle"
                  fill={ledColor}
                  fontFamily="var(--font-jetbrains-mono), var(--font-mono), monospace"
                  fontWeight="800"
                  fontSize="15"
                  letterSpacing="0.4"
                >
                  {timeString24}
                </text>
              ) : (
                <>
                  <text
                    x="39"
                    y="23"
                    textAnchor="middle"
                    fill={ledColor}
                    fontFamily="var(--font-jetbrains-mono), var(--font-mono), monospace"
                    fontWeight="800"
                    fontSize="13.5"
                    letterSpacing="0.2"
                  >
                    {timeString12}
                  </text>
                  <text
                    x="76"
                    y="21"
                    textAnchor="middle"
                    fill={ledColor}
                    fontFamily="var(--font-jetbrains-mono), var(--font-mono), monospace"
                    fontWeight="700"
                    fontSize="8.5"
                    letterSpacing="0.3"
                  >
                    {time.period}
                  </text>
                </>
              )}
            </g>
          )}
        </svg>
      </button>
    </div>
  )
}
