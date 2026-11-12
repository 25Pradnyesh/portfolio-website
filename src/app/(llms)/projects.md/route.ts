import { PROJECTS } from "@/features/portfolio/data/projects"

const content = `# Projects

${PROJECTS.map((item) => {
  const links = [
    item.link ? `Project URL: ${item.link}` : "",
    item.repository ? `Repository URL: ${item.repository}` : "",
  ]
    .filter(Boolean)
    .join("\n\n")
  const linkSection = links ? `\n\n${links}` : ""
  const skills = `\n\nSkills: ${item.skills.join(", ")}`
  const description = item.description ? `\n\n${item.description.trim()}` : ""
  return `## ${item.title}${linkSection}${skills}${description}`
}).join("\n\n")}
`

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
