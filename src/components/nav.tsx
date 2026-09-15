import React from "react"
import type { Route } from "next"
import Link from "next/link"

import type { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

export function Nav({
  items,
  activeId,
  className,
  exactMatch = false,
}: {
  items: NavItem<Route>[]
  activeId?: string
  className?: string
  exactMatch?: boolean
}) {
  return (
    <nav
      data-active-id={activeId}
      className={cn("flex items-center gap-4", className)}
    >
      {items.map(({ title, href }) => {
        const isActive = exactMatch
          ? activeId === href
          : activeId === href ||
            (href === "/" // Home page
              ? ["/", "/index"].includes(activeId || "")
              : activeId?.startsWith(href))

        return (
          <NavItem
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
          >
            {title}
          </NavItem>
        )
      })}
    </nav>
  )
}

export function NavItem({
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "rounded-md px-1 py-0.5 text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none aria-[current=page]:font-semibold aria-[current=page]:text-foreground",
        className
      )}
      {...props}
    />
  )
}
