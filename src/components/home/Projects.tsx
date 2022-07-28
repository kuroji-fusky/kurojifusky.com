import styles from "@/styles/Projects.module.scss"
import { IProjectCardProps } from "@/utils/Interface"
import Image from "next/image"

export default function Projects() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles["section-heading"]}>Projects</h1>
      <div className="flex justify-center gap-x-6">
        <div className="flex gap-3 py-5">
          <ProjectNibblet />
          <ProjectNibblet />
          <ProjectNibblet />
          <ProjectNibblet />
          <ProjectNibblet />
        </div>
        <aside className="flex flex-col md:flex-row text-center md:text-left items-center gap-x-3 gap-y-1 p-5 border-2 border-white rounded-lg">
          <div className="relative">
            <Image
              width={100}
              height={100}
              objectFit="cover"
              alt=""
              src="/static/projects/time.jpg"
            />
          </div>
          <div>
            <h1>Title</h1>
            <p>Description</p>
            <div className={styles["btn-wrapper"]}>
              <button>view project</button>
              <button>visit</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export function ProjectNibblet({ image = "", onClick }: IProjectCardProps) {
  return (
    <div className="rounded-xl p-4 grid place-items-center h-min leading-3 border-2 border-white hover:-translate-y-1" onClick={onClick}>
      <Image
        width={48}
        height={48}
        objectFit="cover"
        alt=""
        src="/static/projects/mutahar-funny.jpg"
      />
    </div>
  )
}
