import styles from "@/styles/components/LoadingCube.module.scss"

export default function LoadingCube({
  hidden,
  size
}: {
  hidden?: boolean
  size?: string
}) {
  return (
    <div
      className={
        hidden !== true
          ? styles.wrapper.toString()
          : styles["wrapper-hidden"].toString()
      }
      style={size ? ({ "--cube-size": size } as React.CSSProperties) : {}}
    >
      <div className={styles.clip}>
        <div className={styles.gradient}></div>
      </div>
    </div>
  )
}
