import { Container } from "@/components/Base"
import Hero, { Projects } from "@/components/Hero"

export default function Home() {
  const title = "skepfusky"
  const description = "yeet"
  return (
    <Container
      className="overflow-hidden"
      title={title}
      description={description}
    >
      <Hero />
      <Projects />
    </Container>
  )
}
