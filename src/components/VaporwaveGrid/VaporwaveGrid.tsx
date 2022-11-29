import React from "react"
import { motion } from "framer-motion"
import styles from "./VaporwaveGrid.module.scss"

export default function VaporwaveGrid() {
  const col = 20
  const row = 5

  return (
    <div id={styles.wrapper} aria-hidden>
      <div className={styles["gradient-blanket-top"]}></div>
      <div className={styles["skew-pov"]}>
        <div className={styles["horizontal-line-wrapper"]}>
          {[...Array(col)].map((_, i) => (
            <div key={i} className={styles["horizontal-line"]}></div>
          ))}
        </div>
        <div
          className={styles["vertical-line-wrapper"]}
        >
          {[...Array(row)].map((_, i) => (
            <div key={i} className={styles["vertical-line"]}></div>
          ))}
        </div>
      </div>
      <div className={styles["gradient-blanket-bottom"]}></div>
    </div>
  )
}
