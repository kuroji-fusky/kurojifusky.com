import Backdrop from "@/components/Backdrop"
import { Container } from "@/components/Base"
import { useState } from "react"
import { InView } from "react-intersection-observer"
import ReactMarkdown from "react-markdown"

export default function Resume() {
  const skills = [
    {
      title: "Video editor",
      description:
        "With a decade of experience as far as back in 2010, currently transitioned to Premiere Pro since 2017, with intermediate After Effects knowledge"
    },
    {
      title: "Filmmaking",
      description:
        "Along side editing videos, filmmaking has became my hobbies and to expand my way of storytelling with entriguing and high-quality visuals"
    },
    {
      title: "Indie music producer",
      description:
        "ave an okay-ish experience with FL Studio since 2017, especially for mastering, production, and a bit of audio engineerin"
    },
    {
      title: "SFM 3D animations",
      description:
        "Not much of a serious hobby: it's a phase when FNAF was a big thing I swear lol"
    },
    {
      title: "Full stack web development",
      description:
        "A recent side-hussle for transitioning writing Fandom wiki pages since August 2021; I know a decent amount of JavaScript, TypeScipt, and Python"
    },
    {
      title: "Embedded and systems programming",
      description:
        "I have a niche interest on how computers work on a hardware-level and would love to get into Arudino tinkering - eager in learning C++ and Rust"
    },
    {
      title: "UI/UX and graphic design",
      description:
        "Something that translates well with both editing videos, photos, and web development"
    }
    // { title: "", description: "" },
    // { title: "", description: "" },
  ]

  const t = "Resume"
  const d =
    "Skep's resume consists of over a decade of video editing experience and more, all entirely self-taught"
  return (
    <Container title={t} description={d}>
      <Backdrop className="top-[5rem] left-5 h-[21rem] bg-gradient-to-r from-sona-yellow-600 via-sona-skycyan-400 to-sona-borahae-600 w-[75%] -rotate-6 opacity-40" />
      <section className="relative z-2 mt-[7em] mb-10 max-w-screen-2xl text-center items-center mx-auto px-5 flex flex-col gap-y-3">
        <h1 className="text-5xl xl:text-6xl bg-gradient-to-br from-sona-royalblue-200 to-white bg-clip-text text-transparent">
          Resume
        </h1>
        <p className="text-base xl:text-xl w-[65%]">
          Most of the skills I've learnt are 100% self-taught. Here's all my
          experiences and technologies I use for all my works
        </p>
      </section>
      <div className="max-w-[1280px] xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto relative z-5 px-10">
        <div className="mt-[4rem] mb-[8rem]">
          <h1 className="py-5">Current Hobbies or Skills</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {skills.map((item, index) => (
              <SkillItem
                key={index}
                animStagger={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <h1 className="py-5">Technologies I use</h1>
        <p>Under construction, finding SVG icons for stuff is hard</p>
      </div>
    </Container>
  )
}

interface SkillItemProps {
  title: string
  description: string
  animStagger?: number
}

function SkillItem(props: SkillItemProps) {
  const [show, setShow] = useState(false)

  const moveBaby = !show ? "-translate-x-10 opacity-0" : "translate-x-0 opacity-100"

  return (
    <InView
      onChange={(inView) => (!inView ? setShow(false) : setShow(true))}
      id="skill-item"
      className={moveBaby}
      style={{ "--stagger": props.animStagger } as any}
    >
      <div
        className="p-7 relative rounded-lg flex flex-col gap-2 bg-borahae-dark m-0.5 w-full shadow-2xl shadow-sona-royalblue-900
			before:content-[''] before:absolute before:-inset-[0.1rem] before:-z-1
			before:bg-gradient-to-tl before:from-sona-borahae-500 before:to-sona-skycyan-700 before:rounded-lg"
      >
        <strong className="text-xl font-inter">{props.title}</strong>
        <ReactMarkdown>{props.description}</ReactMarkdown>
      </div>
    </InView>
  )
}
