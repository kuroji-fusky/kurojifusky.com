import { Container } from "@/components/Base"
import { CldVideo } from "@/components/Videos"

export default function About() {
  const title = "About me"
  const description = "About me yes"

  return (
    <Container wrap title={title} description={description}>
      Coming soon lol Video testing
      <CldVideo src="jin-woo-short_dpxqbj.webm" size={500} />
      <CldVideo src="school-proj-short_aogugs.webm" size={500} />
    </Container>
  )
}
