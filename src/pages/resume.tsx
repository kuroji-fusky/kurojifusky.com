import Backdrop from "@/components/Backdrop"
import { Container } from "@/components/Base"
import ReactMarkdown from "react-markdown"

export default function Resume() {
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
        <p className="text-base xl:text-xl w-[75%]">
          Most of the skills I've learnt are 100% self-taught{" "}
          <span className="line-through">
            (mostly from YouTube and other resources)
          </span>
          . Here's all my experiences and technologies I use for all my works
        </p>
      </section>
      <div className="max-w-[1280px] xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-5 relative z-5">
        <h2 className="py-5">Profiency/Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SkillItem
            title="Video editor"
            description="With at least a decade of experience as far as back in 2010, currently transitioned to Premiere Pro since 2017"
          />
          <SkillItem
            title="Filmmaking"
            description="Along side editing videos, filmmaking has became my hobbies and to expand my way of storytelling with entriguing and high-quality visuals"
          />
          <SkillItem
            title="Indie music producer"
            description="Have an okay-ish experience with FL Studio since 2017, especially for mastering, production, and a bit of audio engineering"
          />
          <SkillItem
            title="Full stack web development"
            description="A recent side-hussle for transitioning writing Fandom wiki pages since August 2021"
          />
          <SkillItem
            title="UI/UX and graphic design"
            description="Something that translates well with both editing videos, photos, and web development"
          />
          <SkillItem
            title="SFM 3D animations"
            description="Not much of a serious hobby: it's a phase when FNAF was a big thing I swear lol"
          />
        </div>
        <h2 className="py-5">Technologies I use</h2>
        <p>Under construction, finding SVG icons for stuff is hard</p>
      </div>
    </Container>
  )
}

interface SkillItemProps {
  title: string
  description: string
}

function SkillItem(props: SkillItemProps) {
  return (
    <div className="p-6 relative rounded-lg flex flex-col gap-2 bg-borahae-dark">
      <strong className="text-xl">{props.title}</strong>
      <ReactMarkdown>{props.description}</ReactMarkdown>
    </div>
  )
}
