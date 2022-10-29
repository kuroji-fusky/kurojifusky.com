import { Container } from "@/components/Base"
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false })

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
