import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeftIcon, MailIcon, MapPinIcon } from "lucide-react"

import { Button } from "@/components/base/ui/button"
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"
import { EDUCATION } from "@/features/portfolio/data/education"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

import { ResumePrintButton } from "./resume-print-button"

export const metadata: Metadata = {
  title: "Resume — Pradnyesh",
  description:
    "Curriculum Vitae and engineering background of Pradnyesh. AI builder, full-stack engineer, and SPPU engineering student.",
}

export default function ResumePage() {
  return (
    <div className="px-5 py-8 sm:px-8">
      {/* Navigation / Action Bar */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Button
          variant="ghost"
          size="sm"
          className="gap-1.5 px-2 font-mono text-xs text-muted-foreground hover:text-foreground"
          nativeButton={false}
          render={
            <Link href="/">
              <ArrowLeftIcon className="size-3.5" />
              <span>Back to home</span>
            </Link>
          }
        />

        <div className="flex items-center gap-2">
          <ResumePrintButton />
        </div>
      </div>

      {/* Resume Content Sheet */}
      <article className="space-y-8 font-sans text-foreground">
        {/* Header */}
        <header className="border-b border-line pb-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {USER.displayName} Shejwal
              </h1>
              <p className="mt-1 font-mono text-sm font-medium text-foreground/90">
                AI Builder & Full-Stack Engineer
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPinIcon className="size-3 text-muted-foreground" />
                  {USER.address}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MailIcon className="size-3 text-muted-foreground" />
                  workspace.pradnyesh@gmail.com
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs print:hidden">
              <a
                href={SOCIAL.github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                <GitHubIcon className="size-3.5" />
                <span>GitHub</span>
              </a>
              <span>•</span>
              <a
                href={SOCIAL.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                <LinkedInIcon className="size-3.5" />
                <span>LinkedIn</span>
              </a>
              <span>•</span>
              <a
                href={SOCIAL.x.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                <XIcon className="size-3.5" />
                <span>X</span>
              </a>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="space-y-2">
          <h2 className="font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Summary
          </h2>
          <p className="text-sm/relaxed text-muted-foreground">
            Engineering student at Savitribai Phule Pune University (SPPU) and
            independent builder with hands-on experience developing autonomous
            AI agents, full-stack web applications, and developer tools. Winner
            of Monad Blitz hackathon with Penguin Protocol. Passionate about
            rapid prototyping, high-leverage product engineering, and taking
            software from zero to production.
          </p>
        </section>

        {/* Education */}
        <section className="space-y-4">
          <h2 className="font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Education
          </h2>
          <div className="space-y-4">
            {EDUCATION.map((edu) => (
              <div
                key={edu.id}
                className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between"
              >
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {edu.school}
                  </h3>
                  <p className="text-xs text-muted-foreground">{edu.degree}</p>
                </div>
                <div className="shrink-0 font-mono text-xs text-muted-foreground sm:text-right">
                  <span>
                    {edu.period.start} – {edu.period.end ?? "Present"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="space-y-3">
          <h2 className="font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Technical Skills
          </h2>
          <div className="grid gap-2 text-xs sm:grid-cols-2">
            <div className="rounded-md border border-line p-3">
              <span className="font-semibold text-foreground">Languages: </span>
              <span className="text-muted-foreground">
                TypeScript, JavaScript, Python, C++, HTML5, CSS3, SQL
              </span>
            </div>
            <div className="rounded-md border border-line p-3">
              <span className="font-semibold text-foreground">
                Frameworks & Tools:{" "}
              </span>
              <span className="text-muted-foreground">
                Next.js (App Router), React, Node.js, Express, FastAPI, Tailwind
                CSS
              </span>
            </div>
            <div className="rounded-md border border-line p-3">
              <span className="font-semibold text-foreground">
                Databases & Backend:{" "}
              </span>
              <span className="text-muted-foreground">
                Supabase, MongoDB, PostgreSQL, REST APIs, JSON-LD
              </span>
            </div>
            <div className="rounded-md border border-line p-3">
              <span className="font-semibold text-foreground">
                AI & Core Competencies:{" "}
              </span>
              <span className="text-muted-foreground">
                Autonomous Agents, LLM Orchestration, Rapid Prototyping, Git,
                Linux, Figma
              </span>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="space-y-4">
          <h2 className="font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Selected Projects
          </h2>
          <div className="space-y-4">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="rounded-lg border border-line bg-card/40 p-4 transition-colors"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-foreground">
                      {project.title}
                    </h3>
                    {project.id === "penguin-protocol" && (
                      <span className="rounded bg-amber-500/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-amber-500">
                        Monad Blitz Winner
                      </span>
                    )}
                    {project.id === "reclaim" && (
                      <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-500">
                        GenAI Hackathon Winner
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.period.start}
                    {project.period.end ? ` – ${project.period.end}` : ""}
                  </span>
                </div>
                <p className="mt-1.5 text-xs/relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-line bg-muted/30 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Honors & Hackathons */}
        <section className="space-y-3">
          <h2 className="font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Honors & Hackathon Awards
          </h2>
          <ul className="space-y-2.5 text-xs">
            <li className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="font-semibold text-foreground">
                  1st Place Winner — Monad Blitz Hackathon
                </span>
                <p className="text-muted-foreground">
                  Built Penguin Protocol, an autonomous agent syndicate protocol
                  on Monad
                </p>
              </div>
              <span className="shrink-0 font-mono text-muted-foreground">
                2024
              </span>
            </li>
            <li className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="font-semibold text-foreground">
                  Winner — FutureStack GenAI Hackathon
                </span>
                <p className="text-muted-foreground">
                  Built Reclaim, an autonomous digital footprint cleaner and
                  privacy agent
                </p>
              </div>
              <span className="shrink-0 font-mono text-muted-foreground">
                2024
              </span>
            </li>
            <li className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="font-semibold text-foreground">
                  Selected Finalist — Starknet Demo Day
                </span>
                <p className="text-muted-foreground">
                  Engineered high-performance protocol prototype on Starknet
                  ecosystem
                </p>
              </div>
              <span className="shrink-0 font-mono text-muted-foreground">
                2024
              </span>
            </li>
            <li className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="font-semibold text-foreground">
                  Selected Finalist — AIBoomi Startup Weekend
                </span>
                <p className="text-muted-foreground">
                  Engineered VoiceAds, a contextual voice-driven targeted ad
                  delivery pipeline
                </p>
              </div>
              <span className="shrink-0 font-mono text-muted-foreground">
                2024
              </span>
            </li>
          </ul>
        </section>

        {/* Builder Background */}
        <section className="space-y-4">
          <h2 className="font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Engineering & Builder Domains
          </h2>
          <div className="space-y-3">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="text-xs">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold text-foreground">
                    {exp.positions[0]?.title ?? exp.companyName} ·{" "}
                    <span className="font-normal text-muted-foreground">
                      {exp.companyName}
                    </span>
                  </h3>
                  <span className="shrink-0 font-mono text-muted-foreground">
                    {exp.positions[0]?.employmentPeriod.start}
                    {exp.positions[0]?.employmentPeriod.end
                      ? ` – ${exp.positions[0].employmentPeriod.end}`
                      : " – Present"}
                  </span>
                </div>
                {exp.positions[0]?.description && (
                  <p className="mt-1 whitespace-pre-line text-muted-foreground">
                    {exp.positions[0].description.replace(/^- /gm, "• ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}
