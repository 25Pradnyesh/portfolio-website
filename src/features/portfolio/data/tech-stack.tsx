import {
  BotIcon,
  BrainIcon,
  Code2Icon,
  CpuIcon,
  DatabaseIcon,
  EyeIcon,
  LayersIcon,
  NetworkIcon,
  PaletteIcon,
  SparklesIcon,
  TerminalIcon,
} from "lucide-react"

import {
  CssIcon,
  GitHubIcon,
  JsIcon,
  MongoDbIcon,
  OpenAIIcon,
  ReactIcon,
  SupabaseIcon,
  TailwindCssIcon,
  TsIcon,
} from "@/components/icons"

import type { TechStack } from "../types/tech-stack"

export const TECH_STACK: TechStack[] = [
  // --- Languages ---
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Languages"],
  },
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
    icon: <TsIcon />,
    categories: ["Languages"],
  },
  {
    key: "javascript",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <JsIcon />,
    categories: ["Languages"],
  },
  {
    key: "cpp",
    title: "C++",
    href: "https://isocpp.org",
    icon: <Code2Icon />,
    categories: ["Languages"],
  },
  {
    key: "java",
    title: "Java",
    href: "https://www.java.com",
    icon: <Code2Icon />,
    categories: ["Languages"],
  },
  {
    key: "sql",
    title: "SQL",
    href: "https://en.wikipedia.org/wiki/SQL",
    icon: <DatabaseIcon />,
    categories: ["Languages"],
  },

  // --- AI / ML ---
  {
    key: "openai",
    title: "OpenAI API",
    href: "https://openai.com",
    icon: <OpenAIIcon />,
    categories: ["AI / ML"],
  },
  {
    key: "cerebras",
    title: "Cerebras & Llama",
    href: "https://cerebras.ai",
    icon: <CpuIcon />,
    categories: ["AI / ML"],
  },
  {
    key: "ai-agents",
    title: "AI Agents",
    href: "https://en.wikipedia.org/wiki/Intelligent_agent",
    icon: <BotIcon />,
    categories: ["AI / ML"],
  },
  {
    key: "llms",
    title: "LLMs & Prompt Architecture",
    href: "https://en.wikipedia.org/wiki/Large_language_model",
    icon: <SparklesIcon />,
    categories: ["AI / ML"],
  },
  {
    key: "computer-vision",
    title: "Computer Vision & OCR",
    href: "https://en.wikipedia.org/wiki/Computer_vision",
    icon: <EyeIcon />,
    categories: ["AI / ML"],
  },
  {
    key: "huggingface",
    title: "Hugging Face",
    href: "https://huggingface.co",
    icon: <LayersIcon />,
    categories: ["AI / ML"],
  },
  {
    key: "pytorch",
    title: "PyTorch",
    href: "https://pytorch.org",
    icon: <BrainIcon />,
    categories: ["AI / ML"],
  },

  // --- Frontend ---
  {
    key: "react",
    title: "React",
    href: "https://react.dev",
    icon: <ReactIcon />,
    categories: ["Frontend"],
  },
  {
    key: "nextjs",
    title: "Next.js",
    href: "https://nextjs.org",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.66 18.06l-4.9-7.05v7.05h-1.63V7.94h1.63l5.06 7.3V7.94h1.63v10.12h-1.79z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Frontend"],
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    icon: <TailwindCssIcon />,
    categories: ["Frontend"],
  },
  {
    key: "html5",
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    icon: <Code2Icon />,
    categories: ["Frontend"],
  },
  {
    key: "css3",
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: <CssIcon />,
    categories: ["Frontend"],
  },

  // --- Backend ---
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org",
    icon: <TerminalIcon />,
    categories: ["Backend"],
  },
  {
    key: "fastapi",
    title: "FastAPI",
    href: "https://fastapi.tiangolo.com",
    icon: <NetworkIcon />,
    categories: ["Backend"],
  },
  {
    key: "rest-apis",
    title: "RESTful APIs",
    href: "https://restfulapi.net",
    icon: <NetworkIcon />,
    categories: ["Backend"],
  },

  // --- Databases ---
  {
    key: "supabase",
    title: "Supabase",
    href: "https://supabase.com",
    icon: <SupabaseIcon />,
    categories: ["Databases"],
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com",
    icon: <MongoDbIcon />,
    categories: ["Databases"],
  },
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
    icon: <DatabaseIcon />,
    categories: ["Databases"],
  },

  // --- Tools & Design ---
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com",
    icon: <TerminalIcon />,
    categories: ["Tools & Design"],
  },
  {
    key: "github",
    title: "GitHub",
    href: "https://github.com",
    icon: <GitHubIcon />,
    categories: ["Tools & Design"],
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com",
    icon: <LayersIcon />,
    categories: ["Tools & Design"],
  },
  {
    key: "vscode",
    title: "VS Code",
    href: "https://code.visualstudio.com",
    icon: <Code2Icon />,
    categories: ["Tools & Design"],
  },
  {
    key: "figma",
    title: "Figma",
    href: "https://www.figma.com",
    icon: <PaletteIcon />,
    categories: ["Tools & Design"],
  },
]
