import dynamic from "next/dynamic"

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
      <div className="screen-line-top screen-line-bottom mx-auto flex h-(--header-height) items-center border-x screen-line-bottom-border screen-line-top-border px-4 group-has-data-[slot=layout-wide]/layout:container after:z-1 sm:px-5 md:max-w-3xl">
        <div className="flex-1" />

        <div className="flex items-center gap-3 sm:gap-4">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <CommandMenu
            docs={docPreviews}
            blocks={blocks}
            bookmarks={bookmarkPreviews}
            enabledHotkeys
          />
          <NavItemGitHub />
          <Separator
            orientation="vertical"
            className="data-vertical:h-5 data-vertical:self-center"
          />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
