import styles from "./sections.module.scss"

interface HomeSectionProps extends Components {
  expandContent: boolean
}

export function HomeSection(props: Partial<HomeSectionProps>) {
  const expandClasses = !props.expandContent ? `${styles["screen-limit"]} ` : ""
  const containClass = !props.className ? "" : props.className

  return (
    <section className={`${expandClasses}${containClass}`} style={props.style}>
      {props.children}
    </section>
  )
}
