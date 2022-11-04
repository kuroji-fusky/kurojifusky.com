import { Container } from "@/components/Base"
import { cloudinary } from "@/utils/global"

export default function About() {
  const title = "About me"
  const description = "About me yes"

  console.log(
    cloudinary({ type: "video", fileName: "Vlogs_And_Shit-1_umuumw.mp4" })
  )

  return (
    <Container wrap title={title} description={description}>
			Coming soon lol
      {/* <video width="500" height="500" muted autoPlay loop>
        <source
          src={cloudinaryVid(
            "/v1667523173/sf-website/Vlogs_And_Shit-1_umuumw.mp4"
          )}
        />
      </video>
      <video width="500" height="500" muted autoPlay loop>
        <source
          src={cloudinaryVid("/v1667523163/sf-website/Jin_Woo-1_v1dlre.mp4")}
        />
      </video>
      <video width="500" height="500" muted autoPlay loop>
        <source
          src={cloudinaryVid(
            "/v1667523819/sf-website/School_Shit-1_1_nq5flk.mp4"
          )}
        />
      </video> */}
    </Container>
  )
}
