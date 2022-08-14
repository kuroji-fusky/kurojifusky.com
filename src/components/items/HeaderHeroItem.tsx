import styles from "@/styles/components/HeaderHero.module.scss"

export default function HeaderHeroItem({
  children,
  wrap
}: IHeaderHeroItemProps) {
  const contentWrapped = () => {
    if (!wrap) return styles["header-hero"].toString()
    return styles["header-hero-wrapped"].toString()
  }

  return <div className={contentWrapped()}>{children}</div>
}
