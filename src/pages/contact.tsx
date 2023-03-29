import Backdrop from "@/components/Backdrop"
import { Container } from "@/components/Base"

export default function About() {
  const t = "Contact"
  const d = "lol"

  return (
    <Container title={t} description={d} className="h-[70vh]">
      <Backdrop className="top-0 right-12 h-[21rem] bg-gradient-to-r from-kuro-skycyan-500 via-kuro-magenta-500 to-kuro-royalblue-600 w-[69%] -rotate-[4deg] opacity-40" />
      <section className="relative z-2 mt-[7em] mb-10 max-w-screen-2xl text-center items-center mx-auto px-5 flex flex-col gap-y-3">
        <h1 className="text-5xl xl:text-6xl bg-gradient-to-br from-kuro-lavender-300 to-white bg-clip-text text-transparent">
          Contact
        </h1>
        <article className="text-base xl:text-xl w-full md:w-[50%] px-5 flex flex-col gap-y-2">
          <p>
            I'm extremely busy with stuff, but I do frequently check my socials
            and emails first thing in the morning, here are ways that you can
            reach me out
          </p>
        </article>
				<div className="w-full bg-kuro-dark bg-opacity-75 rounded-md p-6 mt-5">
					TBA
				</div>
      </section>
    </Container>
  )
}
