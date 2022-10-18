import { useRouter } from "next/router"
import { Container } from "@/components/Base"
import { Btn } from "@/components/Buttons"

export default function PageNotFound() {
  const router = useRouter()
  const goBack = () => router.back()

  return (
    <Container
      title="404 Not Found"
      description=""
      className="h-screen grid place-items-center"
    >
      <div className="text-center px-10 flex flex-col gap-y-6">
        <h1 className="text-7xl">404</h1>
        <hr className="mx-[10rem]" />
        <p className="max-w-[650px]">
          Looks like you've stumbled on a haha 404 page, this website is still
          under construction, so most of the links will redirect you to this
          page.
        </p>
        <div>
          <Btn name="Go back to your mom and cry about it" onClick={goBack} />
        </div>
      </div>
    </Container>
  )
}
