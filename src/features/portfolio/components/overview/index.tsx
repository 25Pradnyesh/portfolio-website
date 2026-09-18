import {
  BriefcaseIcon,
  CalendarIcon,
  Code2Icon,
  GlobeIcon,
  MailIcon,
  MapPinIcon,
  UserIcon,
} from "lucide-react"

import { USER } from "@/features/portfolio/data/user"

import { CurrentLocalTimeField } from "./current-local-time-item"

export function Overview() {
  return (
    <div className="border-y border-white/[0.08] px-5 py-6 sm:px-6 sm:py-8">
      <h2 className="sr-only">Overview</h2>

      <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        {/* Column 1 */}
        <div className="flex flex-col gap-4">
          {/* 1. Primary Role */}
          <div className="flex items-center gap-2.5 font-mono text-[13px] text-white/60 sm:text-sm">
            <BriefcaseIcon
              className="size-4 shrink-0 text-white/40"
              aria-hidden
            />
            <span className="truncate text-white/80">{USER.jobTitle}</span>
          </div>

          {/* 2. Secondary Role */}
          <div className="flex items-center gap-2.5 font-mono text-[13px] text-white/60 sm:text-sm">
            <Code2Icon className="size-4 shrink-0 text-white/40" aria-hidden />
            <span className="truncate">Full-Stack Developer</span>
          </div>

          {/* 3. Location */}
          <div className="flex items-center gap-2.5 font-mono text-[13px] text-white/60 sm:text-sm">
            <MapPinIcon className="size-4 shrink-0 text-white/40" aria-hidden />
            <span className="truncate">Mumbai · Pune, India</span>
          </div>

          {/* 4. Booking / Calendar link */}
          <div className="flex items-center gap-2.5 font-mono text-[13px] text-white/60 sm:text-sm">
            <CalendarIcon
              className="size-4 shrink-0 text-white/40"
              aria-hidden
            />
            <a
              href="https://cal.com/pradnyesh"
              target="_blank"
              rel="noopener noreferrer"
              className="truncate text-white/70 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
            >
              cal.com/pradnyesh
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4">
          {/* 1. Local Time (Live) */}
          <CurrentLocalTimeField timeZone={USER.timeZone} />

          {/* 2. Email */}
          <div className="flex items-center gap-2.5 font-mono text-[13px] text-white/60 sm:text-sm">
            <MailIcon className="size-4 shrink-0 text-white/40" aria-hidden />
            <a
              href="mailto:workspace.pradnyesh@gmail.com"
              className="truncate text-white/70 transition-colors hover:text-white"
            >
              workspace.pradnyesh@gmail.com
            </a>
          </div>

          {/* 3. Website / Portfolio URL */}
          <div className="flex items-center gap-2.5 font-mono text-[13px] text-white/60 sm:text-sm">
            <GlobeIcon className="size-4 shrink-0 text-white/40" aria-hidden />
            <a
              href={USER.website}
              target="_blank"
              rel="noopener noreferrer"
              className="truncate text-white/70 transition-colors hover:text-white"
            >
              github.com/25Pradnyesh
            </a>
          </div>

          {/* 4. Pronouns */}
          <div className="flex items-center gap-2.5 font-mono text-[13px] text-white/60 sm:text-sm">
            <UserIcon className="size-4 shrink-0 text-white/40" aria-hidden />
            <span>{USER.pronouns}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
