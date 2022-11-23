import { Container } from "@/components/Base"
import { HomeHero } from "@/components/Heros"
import { AboutMeSection, ProjectsSection } from "@/components/Sections"

export default function Home() {
  const t = "kurofusky"
  const d =
    "A 20-year-old self-taught and independent hobbyist from the Philippines"

  return (
    <Container title={t} description={d}>
			<HomeHero />
			<ProjectsSection />
			{/* <AboutMeSection /> */}
    </Container>
  )
}
