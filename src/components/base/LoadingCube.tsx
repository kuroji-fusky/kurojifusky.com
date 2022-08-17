import styles from "@/styles/components/LoadingCube.module.scss"

export default function LoadingCube({ hidden }: { hidden?: boolean }) {
  return <div className={styles.wrapper}>
    <div className={styles.gradient}></div>
  </div>
}
