import { cloudinary } from "@/utils/ImgProviders"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import LazyImg from "../LazyImg"
import { HomeSection } from "./HomeSection"

const cImg = (fileName: string) =>
  cloudinary({ dir: "projects", quality: "auto", fileName: fileName })

const projects = [
  {
    spotlight: true,
    title: "Art & Biro Site Redesign",
    image: cImg("anb-redesign_gwrupe.png"),
    width: 900,
    description:
      "A faithful redesign from a webcomic that's more lively design-wise to reflect more from the first chapter of the comic. Written in Next.js 13 with TypeScript, Tailwind CSS, Framer Motion, and Three.js. Still work in progress!",
    repo: "skepfusky/art-biro-redesign"
  },
  {
    title: "Paco Drawing Stats",
    image: cImg("paco-drawing-stats_khjf7s.png"),
    description:
      "A data visualization project that collects drawing data from characters, styles, etc. from a furry artist Paco Panda. Written in Python and MIT Licensed. Still work in progress!",
    repo: "skepfusky/pacopanda-drawing-stats"
  },
  {
    title: "Searchpets!",
    image: cImg("searchpets_jl5uaf.png"),
    description:
      "A search engine you can query comic strips and characters from the Housepets! webcomic series by Rick Griffin.",
    repo: "openfurs/searchpets",
    project: "https://v2.searchpets.xyz/search"
  },
  {
    title: "Biro Design System",
    image: cImg("Biro-Design-Banner_kqbrih.png"),
    description:
      "A UI library and work-in-progress design language I've created, heavily inspired by Fandom Wiki, Microsoft, Apple, and Google's Material UI",
    repo: "biro-design-system",
  }
]

export function ProjectsSection() {
  return (
    <HomeSection
      id="projects"
      className="flex flex-col items-center gap-y-16 py-12"
    >
      <h1 className="text-4xl xl:text-5xl">Open-Source Projects</h1>
      <div className="flex flex-col lg:grid grid-cols-2 gap-5 w-full">
        {projects.map((item, i) => (
          <ProjectItem
            key={i}
            title={item.title}
            spotlight={item.spotlight}
            img={item.image}
            description={item.description}
            code={item.repo}
            project={item.project}
          />
        ))}
      </div>
    </HomeSection>
  )
}

interface ProjectItemProps {
  spotlight?: Readonly<boolean>
  title: string
  img?: string
  description: NonNullable<React.ReactNode> | string
  code?: string
  project?: string
}

function ProjectItem(props: ProjectItemProps) {
  return (
    <div
      style={props.spotlight ? { gridColumn: "1 / span 2" } : {}}
      className={`bg-borahae-dark border-2 border-sona-borahae-700 rounded-xl gap-5 p-5${
        props.spotlight
          ? " flex flex-col md:flex-row xl:flex-row lg:p-7 lg:h-[21rem]"
          : " flex flex-col md:flex-row lg:flex-col xl:flex-row"
      }`}
    >
      <div
        id="img-wrapper"
        className={`
				w-full md:w-[35%] lg:w-full xl:w-[35%]
				h-[15rem] md:h-auto ${!props.spotlight ? "lg:h-[15rem]" : "lg:h-full"} xl:h-auto
				`}
      >
        <div className="relative h-full w-full">
          <LazyImg
            src={
              props.img ?? cloudinary({ rootDir: "", fileName: "sample.jpg" })
            }
            objectFit="cover"
            alt={`Image for ${props.title} - ${props.description}`}
            className="overflow-hidden rounded-lg"
          />
        </div>
      </div>
      <aside className="w-full md:w-[65%] lg:w-full xl:w-[65%] flex flex-col gap-y-1 lg:gap-y-3 lg:h-auto xl:h-full">
        <h2
          className={`text-2xl ${
            !props.spotlight ? "lg:text-3xl" : "lg:text-3xl xl:text-[2.35rem]"
          }`}
        >
          {props.title}
        </h2>
        <p
          className={
            props.spotlight ? "text-base xl:text-lg mt-1.5 h-full" : "h-full"
          }
        >
          {props.description}
        </p>
        <div className="flex gap-4">
          {props.code && (
            <FlatBtn type="source" link={`https://github.com/${props.code}`} />
          )}
          {props.project && <FlatBtn type="deployment" link={props.project} />}
        </div>
      </aside>
    </div>
  )
}

interface FlatBtnProps {
  type: "source" | "deployment"
  link?: string
}

function FlatBtn(props: FlatBtnProps) {
  return (
    <Link href={props.link ?? "#"} passHref>
      <a
        className="flex items-center gap-x-2 px-3 py-1.5 rounded-md font-jetbrains-mono border border-sona-borahae-600 hover:bg-sona-borahae-600 hover:bg-opacity-50 transition-colors duration-300"
        target="_blank"
        rel="noreferrer noopener"
      >
        {props.type == "source" && (
          <>
            <FontAwesomeIcon icon={faGithub} />
            <span className="text-[80%]">Source code</span>
          </>
        )}
        {props.type == "deployment" && (
          <>
            <span className="text-[80%]">View project</span>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </>
        )}
      </a>
    </Link>
  )
}
