import styles from "@/styles/components/HeaderHero.module.scss"

export default function HeaderHero({
  children,
  wrapContent
}: {
  children: React.ReactNode
  wrapContent?: boolean
}) {
  const contentWrapped = () => {
    if (!wrapContent) return styles["header-hero"].toString()
    return styles["header-hero-wrapped"].toString()
  }

  return <div className={contentWrapped()}>{children}</div>
}
