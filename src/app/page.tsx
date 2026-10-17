import About from "@/components/sections/about"
import Contact from "@/components/sections/contact"
import Hero from "@/components/sections/hero"
import Projects from "@/components/sections/projects"
import { GITHUB_LOGIN } from "@/data/site"
import { getContributions } from "@/lib/github-contributions"

export default async function Home() {
  const contributions = await getContributions(GITHUB_LOGIN)

  return (
    <main>
      <Hero contributions={contributions} />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}
