import dynamic from "next/dynamic"

import Container from "@/ui/Container"

const VaporwaveHero = dynamic(() =>
  import("@/ui/sections").then((c) => c.VaporwaveHero)
)

const SkillsSection = dynamic(() =>
  import("@/ui/sections").then((c) => c.SkillsSection)
)
const ProjectsSection = dynamic(() =>
  import("@/ui/sections").then((c) => c.ProjectsSection)
)
const ContactSection = dynamic(() =>
  import("@/ui/sections").then((c) => c.ContactSection)
)

export default function HomePage() {
  return (
    <Container t="kurofusky">
      <VaporwaveHero />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </Container>
  )
}
