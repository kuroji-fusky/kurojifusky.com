import { Container } from "@/components/Base"
import { Experience, Profile } from "@/components/About"

export default function About() {
  const title = "About me"
  const description = "About me yes"

  return (
    <Container wrap title={title} description={description}>
      <Profile />
      <Experience />
    </Container>
  )
}
