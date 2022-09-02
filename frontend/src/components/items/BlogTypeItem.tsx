import styles from "@/styles/components/BlogTypeItem.module.scss"

export default function BlogTypeItem({ item }: { item: string }) {
  return <strong className={styles[`type-${item}`].toString()}>{item}</strong>
}
