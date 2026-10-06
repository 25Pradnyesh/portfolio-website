import fs from "node:fs"
import path from "node:path"
import { spawn } from "node:child_process"
import puppeteer from "puppeteer"

const chromePath = fs.existsSync("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe")
  ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
  : "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"

async function waitForServer(url: string, maxAttempts = 60): Promise<boolean> {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const res = await fetch(url)
      if (res.status === 200) return true
    } catch {}
    await new Promise((r) => setTimeout(r, 500))
  }
  return false
}

async function main() {
  const port = 3456
  const baseUrl = `http://localhost:${port}`
  const targetUrl = `${baseUrl}/resume`
  const outputPath = path.resolve(process.cwd(), "resume-pradnyesh.pdf")

  console.log(`Starting Next.js production server on port ${port}...`)
  const server = spawn("npx", ["next", "start", "-p", String(port)], {
    shell: true,
    stdio: "inherit",
  })

  try {
    const isReady = await waitForServer(targetUrl)
    if (!isReady) {
      throw new Error(`Server did not become ready at ${targetUrl}`)
    }
    console.log(`Server ready. Launching Chrome at ${chromePath}...`)

    const browser = await puppeteer.launch({
      executablePath: chromePath,
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    })

    try {
      const page = await browser.newPage()
      await page.setViewport({ width: 1200, height: 1600 })
      await page.goto(targetUrl, { waitUntil: "networkidle0" })

      // Emulate print media so print styles apply
      await page.emulateMediaType("print")

      console.log(`Generating PDF to ${outputPath}...`)
      await page.pdf({
        path: outputPath,
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true,
      })

      console.log(`PDF saved successfully to ${outputPath}`)
      fs.copyFileSync(outputPath, path.resolve(process.cwd(), "resume-prad.pdf"))
      console.log(`Synced to resume-prad.pdf`)

      // Verify PDF contents for hyperlinks
      const pdfBuffer = fs.readFileSync(outputPath)
      const pdfText = pdfBuffer.toString("latin1")
      const checkUrls = [
        "https://github.com/25Pradnyesh",
        "https://www.linkedin.com/in/pradnyesh-s/",
        "https://x.com/Pradnyesh_25",
        "https://pradnyesh.vercel.app",
        "https://cal.com/pradnyesh",
      ]

      console.log("\n--- Checking PDF Hyperlinks ---")
      for (const url of checkUrls) {
        const found = pdfText.includes(url)
        console.log(`  [${found ? "✓" : "✗"}] ${url}: ${found ? "FOUND" : "NOT FOUND"}`)
      }

      // Check page count in PDF
      const pageMatches = pdfText.match(/\/Type\s*\/Page\b/g)
      const pageCount = pageMatches ? pageMatches.length : 1
      console.log(`\n--- PDF Page Count: ${pageCount} ---`)
    } finally {
      await browser.close()
    }
  } finally {
    if (server.pid) {
      spawn("taskkill", ["/pid", String(server.pid), "/f", "/t"], {
        shell: true,
      })
    }
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
