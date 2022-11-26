import { cloudinary } from "@/utils/ImgProviders"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { SectionContainer } from "./SectionContainer"
import styles from "./SectionContainer.module.scss"
import projStyles from "../projects.module.scss"
import { ProjectItem } from "./ProjectItem"

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
    repo: "kuroji-fusky/art-biro-redesign"
  },
  {
    title: "Paco Drawing Stats",
    image: cImg("paco-drawing-stats_m0e91x.png"),
    description:
      "A data visualization project that collects drawing data from characters, styles, etc. from a furry artist Paco Panda. Written in Python and MIT Licensed. Still work in progress!",
    repo: "kuroji-fusky/pacopanda-drawing-stats"
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
    repo: "biro-design-system"
  }
]

export function ProjectsSection() {
  return (
    <SectionContainer className={styles.projects}>
      <h1 className={styles["info-heading"]}>Open-Source Projects</h1>
      <div className={projStyles["grid-container"]}>
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
    </SectionContainer>
  )
}

interface FlatBtnProps {
  type: "source" | "deployment"
  link?: string
}

export function FlatBtn(props: FlatBtnProps) {
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
