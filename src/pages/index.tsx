import dynamic from "next/dynamic"

import Container from "@/ui/Container"
import ContactSection from "@/ui/sections/ContactSection"
import VaporwaveHero from "@/ui/sections/VaporwaveHero"

const Skills = dynamic(() => import("@/ui/sections/SkillsSection"))
const Projects = dynamic(() => import("@/ui/sections/ProjectsSection"))

export default function HomePage() {
  return (
    <Container t="kurofusky">
      <VaporwaveHero />
      <Skills />
      <Projects />
      <ContactSection />
    </Container>
  )
}
