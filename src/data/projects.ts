export type Project = {
  title: string
  description: string
  stack: string[]
  href: string
}

export const projects: Project[] = [
  {
    title: "NakTahu AI",
    description:
      "Malaysian-focused bilingual (BM/EN) AI answer engine with vertical agents and a metered developer API. Hybrid-search RAG over Malaysian government sources, with a confidence check that asks for clarification instead of guessing.",
    stack: ["Next.js", "FastAPI", "LangGraph", "Supabase pgvector", "Redis"],
    href: "https://github.com/timothylee58/naktahu-AI",
  },
  {
    title: "This portfolio",
    description:
      "The site you're on: Next.js, Tailwind and shadcn/ui, with a canvas-based Contribution Skyline that morphs a year of GitHub activity from a heat map into a 3D skyline.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    href: "https://github.com/timothylee58/All-About-Timothy-Lee",
  },
]
