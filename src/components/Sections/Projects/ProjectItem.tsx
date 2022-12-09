import { LazyImg } from "@/components/UI"
import { cloudinary } from "@/utils/ImgProviders"
import { FlatBtn } from "./FlatBtn"
import styles from "./ProjectItem.module.scss"

interface ProjectItemProps {
  spotlight?: boolean
  hideOnMobile?: boolean
  title: string
  img?: string
  description: NonNullable<React.ReactNode> | string
  code?: string
  project?: string
}

export function ProjectItem(props: ProjectItemProps) {
  return (
    <div className={styles[props.spotlight ? "item-spotlight" : "item"]}>
      <div id={styles["img-wrapper"]}>
        <div className={styles["img-responsive"]}>
          <LazyImg
            src={
              props.img ?? cloudinary({ rootDir: "", fileName: "sample.jpg" })
            }
            className={styles["cover"]}
            objectFit="cover"
            alt={props.title}
          />
        </div>
      </div>
      <article className={styles["contents"]}>
        <h2 className={styles["content-heading"]}>{props.title}</h2>
        <p className={styles["content-description"]}>{props.description}</p>
        <div className={styles["button-wrapper"]}>
          {props.code && (
            <FlatBtn type="source" link={`https://github.com/${props.code}`} />
          )}
          {props.project && <FlatBtn type="deployment" link={props.project} />}
        </div>
      </article>
    </div>
  )
}
