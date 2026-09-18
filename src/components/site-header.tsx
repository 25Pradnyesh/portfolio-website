import dynamic from "next/dynamic"
import Link from "next/link"

import { Separator } from "@/components/base/ui/separator"
import { NavItem } from "@/components/nav"
import { NavItemGitHub } from "@/components/nav-item-github"
import { ThemeToggle } from "@/components/theme-toggle"
import blocks from "@/registry/__blocks__.json"
import { BOOKMARKS } from "@/features/bookmark/data"
import { sortBookmarksNewestFirst } from "@/features/bookmark/lib/sort"
import type { BookmarkPreview } from "@/features/bookmark/types"
import { getAllDocs } from "@/features/doc/data/documents"
import type { DocPreview } from "@/features/doc/types/document"
import { USER } from "@/features/portfolio/data/user"

const CommandMenu = dynamic(() => import("@/components/command-menu"))

export function SiteHeader() {
  const docs = getAllDocs()

  // Minimize data serialized to client component - only send necessary fields
  const docPreviews: DocPreview[] = docs.map((doc) => ({
    slug: doc.slug,
    title: doc.metadata.title,
    category: doc.metadata.category,
  }))

  const bookmarkPreviews: BookmarkPreview[] = sortBookmarksNewestFirst(
    BOOKMARKS
  ).map((bookmark) => ({
    title: bookmark.title,
    url: bookmark.url,
  }))

  return (
    <header className="sticky top-0 z-50 max-w-screen overflow-x-clip bg-background px-4 sm:px-6">
      <div className="screen-line-top screen-line-bottom mx-auto flex h-(--header-height) items-center gap-2 border-x screen-line-bottom-border screen-line-top-border px-4 group-has-data-[slot=layout-wide]/layout:container after:z-1 sm:gap-4 sm:px-5 md:max-w-3xl">
        {/* Brand lock-up */}
        <Link
          href="/"
          aria-label={`${USER.displayName} — Home`}
          className="group flex items-center gap-2 outline-none"
        >
          {/* Initials tile */}
          <span className="flex h-7 w-8 shrink-0 items-center justify-center rounded-md border border-line bg-muted/30 font-mono text-[0.6875rem] font-bold tracking-widest text-foreground transition-colors group-hover:border-foreground/30 group-hover:bg-muted/60 group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-1">
            PS
          </span>
          {/* Name label — hidden below md */}
          <span className="hidden text-sm font-medium tracking-tight text-foreground/75 transition-colors group-hover:text-foreground md:block">
            {USER.displayName}
          </span>
        </Link>

        <div className="flex-1" />

        <div className="flex items-center gap-4 max-sm:hidden">
          <NavItem href="/#about">About</NavItem>
          <NavItem href="/#work">Work</NavItem>
          <NavItem href="/#experience">Experience</NavItem>
        </div>

        <div className="flex items-center max-sm:*:data-[slot=command-menu-trigger]:hidden">
          <Separator
            orientation="vertical"
            className="mr-2 max-sm:hidden data-vertical:h-5 data-vertical:self-center"
          />
          <NavItemGitHub />
          <Separator
            orientation="vertical"
            className="mx-2 max-sm:hidden data-vertical:h-5 data-vertical:self-center"
          />
          <NavItem href="/#contact" className="mr-2 max-sm:hidden">
            Contact
          </NavItem>
          <Separator
            orientation="vertical"
            className="mr-2 max-sm:hidden data-vertical:h-5 data-vertical:self-center"
          />
          <CommandMenu
            docs={docPreviews}
            blocks={blocks}
            bookmarks={bookmarkPreviews}
            enabledHotkeys
          />
          <Separator
            orientation="vertical"
            className="mx-2 data-vertical:h-5 data-vertical:self-center"
          />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
