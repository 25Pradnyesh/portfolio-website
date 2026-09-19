import { Suspense } from "react"
import type { Metadata } from "next"
import type { Blog, WithContext } from "schema-dts"

import { JSON_LD_ID } from "@/config/json-ld"
import { X_HANDLE } from "@/config/site"
import { jsonLdBreadcrumbList, JsonLdScript } from "@/lib/json-ld"
import { absoluteUrl } from "@/lib/utils"
import { PostSearchInput } from "@/features/blog/components/post-search-input"
import { getBlogPosts } from "@/features/doc/data/documents"

const title = "Blog"
const description =
  "A collection of articles on development, design, and ideas."

const ogImage = `/og/simple?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    url: "/blog",
    type: "website",
    images: {
      url: ogImage,
      width: 1200,
      height: 630,
      alt: title,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: X_HANDLE,
    creator: X_HANDLE,
    images: [ogImage],
  },
}

function getBlogJsonLd(
  posts: { slug: string; metadata: { title: string; createdAt: string } }[]
): WithContext<Blog> {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": absoluteUrl("/blog"),
    name: title,
    description,
    url: absoluteUrl("/blog"),
    isPartOf: { "@id": JSON_LD_ID.website },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      "@id": absoluteUrl(`/blog/${post.slug}`),
      headline: post.metadata.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: new Date(post.metadata.createdAt).toISOString(),
    })),
  }
}

export default function Page() {
  const allPosts = getBlogPosts()

  return (
    <>
      <JsonLdScript data={getBlogJsonLd(allPosts)} />

      <JsonLdScript
        data={jsonLdBreadcrumbList([
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Blog",
            href: "/blog",
          },
        ])}
      />

      <div className="-mt-12">
        <div className="stripe-divider h-8" />

        <div className="min-h-svh">
          <div className="screen-line-bottom flex h-14 items-center px-4">
            <h1 className="font-heading text-3xl leading-none font-semibold tracking-tight">
              Blog
            </h1>
          </div>

          <div className="p-4">
            <p className="font-mono text-sm text-balance text-muted-foreground">
              A collection of articles on development, design, and ideas.
            </p>
          </div>

          <div className="screen-line-top screen-line-bottom p-2">
            <Suspense
              fallback={
                <div className="flex h-9 w-full rounded-lg border border-input dark:bg-input/30" />
              }
            >
              <PostSearchInput />
            </Suspense>
          </div>

          <div className="relative pt-4">
            <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
              <div className="border-r border-line" />
              <div className="border-l border-line" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="screen-line-top screen-line-bottom col-span-full flex min-h-40 items-center justify-center p-4">
                <p className="font-mono text-sm text-muted-foreground">
                  Coming soon.
                </p>
              </div>
            </div>
          </div>

          <div className="h-4" />
        </div>
      </div>
    </>
  )
}
