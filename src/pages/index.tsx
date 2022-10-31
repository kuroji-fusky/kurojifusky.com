import { Container } from "@/components/Base"
import { Hero } from "@/components/Hero"

export default function Home() {
  const t = "skepfusky"
  const d =
    "A 20-year-old self-taught and independent hobbyist from the Philippines"

  return (
    <Container title={t} description={d}>
			<Hero />
    </Container>
  )
}
