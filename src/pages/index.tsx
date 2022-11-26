import { Container } from "@/components/Base"
import {
  HeroSection,
  AboutMeSection,
  FAQSection,
  ProjectsSection,
  SupportSection,
  TechStackSection
} from "@/components/Sections"

export default function Home() {
  const t = "kurofusky"
  const d =
    "A 20-year-old self-taught and independent hobbyist from the Philippines"

  return (
    <Container title={t} description={d}>
      <HeroSection />
      <ProjectsSection />
      <FAQSection />
      <SupportSection />
      <TechStackSection />
    </Container>
  )
}
