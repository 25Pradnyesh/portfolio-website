import type { Activity } from "@/registry/components/contribution-graph"

type GitHubContributionsResponse = {
  contributions: Activity[]
}

// Fetch contributions fresh on every request (revalidate: 0) so the graph
// always reflects current GitHub activity rather than stale build-time data.
// Returns an empty array on any network or API failure — the Suspense boundary
// and GitHubContributionFallback handle the loading/empty state gracefully.
export async function getCachedContributions(
  username: string
): Promise<Activity[]> {
  const apiUrl = process.env.NEXT_PUBLIC_GITHUB_CONTRIBUTIONS_API_URL
  if (!apiUrl) {
    return []
  }

  try {
    const res = await fetch(`${apiUrl}/${username}?y=last`, {
      next: { revalidate: 0 },
    })
    if (!res.ok) {
      return []
    }
    const data = (await res.json()) as GitHubContributionsResponse
    return data.contributions ?? []
  } catch {
    return []
  }
}
