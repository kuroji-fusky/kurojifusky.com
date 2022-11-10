import { Container } from "@/components/Base"
import { AboutHero } from "@/components/Heros/AboutHero"
import Skills from "@/components/Skills"

export default function About() {
  const title = "About Me"
  const description =
    "About skepfusky and his experiences and struggles as a self-taught individual"

  return (
    <Container title={title} description={description} className="px-10">
      <AboutHero />
      <Skills />
    </Container>
  )
}
