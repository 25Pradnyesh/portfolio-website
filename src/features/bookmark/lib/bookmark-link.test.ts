import { describe, expect, it } from "vitest"

import { UTM_PARAMS } from "@/config/site"

import { getBookmarkExternalHref } from "./bookmark-link"

describe("getBookmarkExternalHref", () => {
  it("appends utm_source", () => {
    expect(getBookmarkExternalHref("https://example.com/page")).toBe(
      `https://example.com/page?utm_source=${UTM_PARAMS.utm_source}`
    )
  })

  it("preserves params already on the url", () => {
    const href = getBookmarkExternalHref("https://example.com?atp=test")

    expect(href).toContain("atp=test")
    expect(href).toContain(`utm_source=${UTM_PARAMS.utm_source}`)
    expect(href.indexOf("atp=test")).toBeLessThan(
      href.indexOf(`utm_source=${UTM_PARAMS.utm_source}`)
    )
  })

  it("returns invalid urls unchanged", () => {
    expect(getBookmarkExternalHref("not a url")).toBe("not a url")
  })

  it("normalizes bare origins with a trailing slash", () => {
    expect(getBookmarkExternalHref("https://animations.dev")).toBe(
      `https://animations.dev/?utm_source=${UTM_PARAMS.utm_source}`
    )
  })
})
