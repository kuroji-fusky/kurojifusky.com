import { useContext } from "react"
import { NavbarScrollContext } from "@/utils/Context"
import { InView } from "react-intersection-observer"
import styles from "@/styles/components/HeaderHero.module.scss"

export default function HeaderHeroItem({
  children,
  wrap
}: IHeaderHeroItemProps) {
  const { isScrolled } = useContext(NavbarScrollContext)

  const contentWrapped = () => {
    if (!wrap) return styles["header-hero"].toString()
    return styles["header-hero-wrapped"].toString()
  }

  return (
    <InView
      onChange={(inView) => isScrolled(inView)}
      rootMargin="-100px 0px 0px 0px"
      className={contentWrapped()}
    >
      {children}
    </InView>
  )
}
