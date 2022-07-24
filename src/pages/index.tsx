import Container from "@/components/base/Container"
import HeaderHero from "@/components/home/HeaderHero"
import OtherShit from "@/components/home/OtherShit"
import Projects from "@/components/home/Projects"

export default function Home() {
  return (
    <Container>
      <HeaderHero />
      {/* <Projects /> */}
      <OtherShit />
    </Container>
  )
}
