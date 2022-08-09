import Container from "@/components/base/Container"
import HeaderHero from "@/components/home/HeaderHero"
import Hobbies from "@/components/home/Hobbies"
import PreviousWorks from "@/components/home/PreviousWorks"
import Projects from "@/components/home/Projects"

export default function Home() {
  return (
    <Container noWrapper>
      <HeaderHero />
      <Hobbies />
      <PreviousWorks />
      <Projects />
    </Container>
  )
}
