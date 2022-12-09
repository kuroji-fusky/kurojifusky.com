import dynamic from "next/dynamic"
import { Container } from "@/components/Base"
import { SkillsSection } from "@/components/Sections/AboutHero/SkillsSection"

const AboutHeroSection = dynamic(
  () => import("@/components/Sections/AboutHero/AboutHeroSection"),
  { suspense: true }
)

export default function About() {
  const title = "About"
  const description =
    "About skepfusky and his experiences and struggles as a self-taught individual"

  return (
    <Container title={title} description={description} className="px-10">
      <AboutHeroSection />
      <SkillsSection />
      <section
        id="skills"
        className="max-w-[1280px] xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto"
      >
        <h1 className="py-5">Branding</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <p>TBA</p>
        </div>
      </section>
    </Container>
  )
}
