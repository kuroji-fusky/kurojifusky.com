import { Container } from "@/components/Base"
import Hero, { Projects, Hobbies, Videos } from "@/components/Hero"

export default function Home() {
  const title = "skepfusky"
  const description = "A 20-year-old self-taught hobbyist from the Philippines"

  return (
    <Container title={title} description={description}>
      <Hero />
      <Hobbies />
      <Projects />
      <Videos />
    </Container>
  )
}
