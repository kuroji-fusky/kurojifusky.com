import dynamic from "next/dynamic"
import { Container } from "@/components/Base"
import HeroSection from "@/components/Sections/Hero/HeroSection"

const t = "kurofusky"
const d =
  "A 20-year-old self-taught and independent hobbyist from the Philippines"

const AboutMeSection = dynamic(
  () => import("@/components/Sections/AboutMe/AboutMeSection"),
  { suspense: true }
)

const ProjectsSection = dynamic(
  () => import("@/components/Sections/Projects/ProjectsSection"),
  { suspense: true }
)

const FAQSection = dynamic(
  () => import("@/components/Sections/FAQ/FAQSection"),
  { suspense: true, ssr: false }
)

const SupportSection = dynamic(
  () => import("@/components/Sections/SupportSection"),
  { suspense: true, ssr: false }
)

export default function Home() {
  return (
    <Container title={t} description={d}>
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <FAQSection />
      <SupportSection />
    </Container>
  )
}
