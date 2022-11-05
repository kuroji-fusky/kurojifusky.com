import { Container } from "@/components/Base"
import SoftWrap from "@/components/SoftWrap"
import { CldVideo } from "@/components/Videos"
import { cloudinary } from "@/utils/ImgProviders"

export default function About() {
  const title = "About me"
  const description = "About me yes"

  console.log(
    cloudinary({
      type: "video",
      quality: "auto",
      fileName: "jin-woo-short_dpxqbj.webm"
    })
  )

  return (
    <Container title={title} description={description}>
      <div id="heading" className="h-[40vh]">
        {/* <div className="absolute top-0 left-0 right-0 h-[40vh] overflow-y-hidden grid place-items-center">
          <CldVideo src="jin-woo-short_dpxqbj.webm" size="100%" />
        </div> */}
      </div>
      <SoftWrap>
        Coming soon lol Video testing
        {/* <CldVideo src="jin-woo-short_dpxqbj.webm" size={500} /> */}
        {/* <CldVideo src="school-proj-short_aogugs.webm" size={500} /> */}
      </SoftWrap>
    </Container>
  )
}
