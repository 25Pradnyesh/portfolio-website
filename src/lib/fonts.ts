import {
  Caveat,
  IBM_Plex_Serif,
  Jacquarda_Bastarda_9,
  JetBrains_Mono,
  Open_Sans,
} from "next/font/google"
import { GeistSans } from "geist/font/sans"

import { cn } from "@/lib/utils"

const fontSans = GeistSans

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

const fontOpenSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

const fontSerif = IBM_Plex_Serif({
  weight: ["400"],
  display: "swap",
  variable: "--font-serif",
})

const fontHandwritten = Caveat({
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-handwritten",
})

const fontJacquarda = Jacquarda_Bastarda_9({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jacquarda",
})

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontOpenSans.variable,
  fontSerif.variable,
  fontHandwritten.variable,
  fontJacquarda.variable,
  "[--font-sans:var(--font-geist-sans)]",
  "[--font-mono:var(--font-jetbrains-mono)]"
)
