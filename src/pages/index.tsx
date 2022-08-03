import Container from "@/components/base/Container"
import HeaderHero from "@/components/home/HeaderHero"
import OtherSection from "@/components/home/OtherSection"
import Projects from "@/components/home/Projects"

export default function Home() {
  return (
    <Container noWrapper>
      <HeaderHero />
      <OtherSection />
      <Projects />
    </Container>
  )
}
