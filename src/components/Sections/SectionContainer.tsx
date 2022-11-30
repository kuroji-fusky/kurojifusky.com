import styles from "./SectionContainer.module.scss"

interface SectionContainerProps extends Components {
	title?: string
  expandContent: boolean
}

export function SectionContainer(props: Partial<SectionContainerProps>) {
  const expandClasses = !props.expandContent ? `${styles["margin-set"]} ` : ""
  const containClass = !props.className ? "" : props.className

  return (
    <section id={props.id} className={`${expandClasses}${containClass}`} style={props.style}>
			{props.title && <h1 className={styles["info-heading"]}>{props.title}</h1>}
      {props.children}
    </section>
  )
}
