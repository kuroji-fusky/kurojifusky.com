import styles from "./SectionContainer.module.scss"

interface SectionContainerProps extends Components {
  expandContent: boolean
}

export function SectionContainer(props: Partial<SectionContainerProps>) {
  const expandClasses = !props.expandContent ? `${styles["screen-limit"]} ` : ""
  const containClass = !props.className ? "" : props.className

  return (
    <section className={`${expandClasses}${containClass}`} style={props.style}>
      {props.children}
    </section>
  )
}
