import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import styles from "./ProjectItem.module.scss"

interface FlatBtnProps {
  type: "source" | "deployment"
  link?: string
}

export function FlatBtn(props: FlatBtnProps) {
  return (
    <Link
      href={props.link ?? "#"}
      passHref
      role="button"
      className={styles["flat-button"]}
      target="_blank"
      rel="noreferrer noopener"
    >
      {props.type == "source" && (
        <>
          <FontAwesomeIcon icon={faGithub} />
          <span>Source code</span>
        </>
      )}
      {props.type == "deployment" && (
        <>
          <span>View project</span>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </>
      )}
    </Link>
  )
}
