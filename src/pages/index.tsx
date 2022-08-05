import Container from "@/components/base/Container"
import Codefusky from "@/components/home/Codefusky"
import HeaderHero from "@/components/home/HeaderHero"
import Hobbies from "@/components/home/Hobbies"
import MoreInfo from "@/components/home/MoreInfo"
import Projects from "@/components/home/Projects"

export default function Home() {
  return (
    <Container noWrapper>
      <HeaderHero />
      <Hobbies />
      {/* <Codefusky /> */}
      {/* <MoreInfo /> */}
      <Projects />
    </Container>
  )
}
