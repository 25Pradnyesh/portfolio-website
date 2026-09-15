import Image from "next/image"
import { GraduationCapIcon, LightbulbIcon, MapPinIcon } from "lucide-react"

import { CalIcon, GitHubIcon } from "@/components/icons"
import { USER } from "@/features/portfolio/data/user"

import { CurrentLocalTimeItem } from "./overview/current-local-time-item"
import { EmailItem } from "./overview/email-item"
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./overview/intro-item"
import { RollingRoleTag } from "./rolling-role-tag"
import { VerifiedIcon } from "./verified-icon"

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom overflow-hidden border-x screen-line-bottom-border">
      {/* PRIMARY HERO IDENTITY */}
      <div className="flex flex-col items-start gap-6 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8 md:gap-10 md:p-10">
        {/* LEFT: PROFILE PICTURE */}
        <div className="relative shrink-0 select-none">
          <div className="relative size-28 overflow-hidden rounded-full border border-line bg-muted/20 p-1 shadow-xs ring-1 ring-border/60 ring-offset-2 ring-offset-background sm:size-38 md:size-40">
            <Image
              src={USER.avatar}
              alt={`${USER.displayName} - Profile Photo`}
              width={160}
              height={160}
              priority
              quality={95}
              className="size-full rounded-full object-cover contrast-[1.05] transition-transform duration-500 hover:scale-105"
            />
          </div>
          <span
            className="absolute right-1 bottom-1 flex size-3.5 items-center justify-center rounded-full border-2 border-background bg-emerald-500 sm:right-2 sm:bottom-2 sm:size-4"
            title="Available / Building"
            aria-label="Active status indicator"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-white" />
          </span>
        </div>

        {/* RIGHT: IDENTITY CONTENT */}
        <div className="min-w-0 flex-1 space-y-3.5 sm:space-y-4">
          {/* NAME, VERIFIED BADGE, ROLLING ROLE TAG */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl leading-none font-bold tracking-tight text-foreground sm:text-4xl md:text-[42px]">
                {USER.displayName}
              </h1>
              <VerifiedIcon
                className="size-5 shrink-0 self-center text-sky-500 select-none sm:size-5.5"
                aria-label="Verified profile"
              />
            </div>
            <RollingRoleTag interval={3} />
          </div>

          {/* PRIMARY TAGLINE */}
          <div className="pt-0.5">
            <p className="font-mono text-base font-semibold tracking-tight text-foreground/90 sm:text-lg">
              &ldquo;Failing fast, building faster.&rdquo;
            </p>
          </div>

          {/* PROFESSIONAL DESCRIPTION */}
          <div>
            <p className="max-w-2xl text-sm/relaxed text-pretty text-muted-foreground sm:text-[15px]/relaxed">
              Founder of Travel AI and independent product builder focused on
              Machine Learning, Generative AI, and intelligent product
              experiences.
            </p>
          </div>

          {/* METADATA ROW */}
          <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2 pt-1 font-mono text-xs text-muted-foreground/90">
            <span className="flex items-center gap-1.5">
              <MapPinIcon className="size-3.5 shrink-0 text-muted-foreground" />
              <span>Mumbai & Pune, India</span>
            </span>
            <span
              className="text-muted-foreground/50 select-none"
              aria-hidden="true"
            >
              •
            </span>
            <span className="flex items-center gap-1.5">
              <GraduationCapIcon className="size-3.5 shrink-0 text-muted-foreground" />
              <span>Savitribai Phule Pune University (SPPU)</span>
            </span>
            <span
              className="text-muted-foreground/50 select-none"
              aria-hidden="true"
            >
              •
            </span>
            <span className="font-semibold text-foreground/90">2023–2027</span>
          </div>
        </div>
      </div>

      {/* SECONDARY INFORMATION BLOCK (FOUNDER METADATA PANEL) */}
      <div className="border-t border-line bg-muted/5 p-6 sm:p-8">
        <h2 className="sr-only">Founder Information & Metadata</h2>
        <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {/* ROLE */}
          <IntroItem>
            <IntroItemIcon>
              <LightbulbIcon className="size-3.5 text-amber-500" />
            </IntroItemIcon>
            <IntroItemContent>
              Founder / Product Engineer <span aria-label="at">@</span>{" "}
              <IntroItemLink
                href="https://github.com/25Pradnyesh"
                className="font-medium"
              >
                Travel AI
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          {/* LOCATION */}
          <IntroItem>
            <IntroItemIcon>
              <MapPinIcon className="size-3.5" />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Mumbai & Pune, India")}`}
                aria-label="Location: Mumbai & Pune, India"
              >
                Mumbai & Pune, India
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          {/* LOCAL TIME */}
          <CurrentLocalTimeItem timeZone={USER.timeZone} />

          {/* EMAIL */}
          <EmailItem emailB64={USER.emailB64} />

          {/* GITHUB */}
          <IntroItem>
            <IntroItemIcon>
              <GitHubIcon className="size-3.5" />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href="https://github.com/25Pradnyesh"
                aria-label="GitHub profile: github.com/25Pradnyesh"
              >
                github.com/25Pradnyesh
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          {/* CAL */}
          <IntroItem>
            <IntroItemIcon>
              <CalIcon className="size-3.5" />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href="https://cal.com/pradnyesh"
                aria-label="Book a call on cal.com/pradnyesh"
              >
                cal.com/pradnyesh
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>
        </div>
      </div>
    </div>
  )
}
