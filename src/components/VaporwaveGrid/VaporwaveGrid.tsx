import React from "react"
import { motion } from "framer-motion"
import styles from "./VaporwaveGrid.module.scss"

export default function VaporwaveGrid() {
  const col = 20
  const row = 5

  return (
    <div id={styles.wrapper} aria-hidden>
      <div className={styles["gradient-blanket"]}></div>
      <div className={styles["skew-pov"]}>
        <div className={styles["horizontal-line-wrapper"]}>
          {[...Array(col)].map((_, i) => (
            <div key={i} className={styles["horizontal-line"]}></div>
          ))}
        </div>
        <motion.div
          className={styles["vertical-line-wrapper"]}
          style={{ y: 0, willChange: "transform" }}
          animate={{ y: 83 }}
          transition={{ ease: "linear", duration: 2.75, repeat: Infinity }}
        >
          {[...Array(row)].map((_, i) => (
            <div key={i} className={styles["vertical-line"]}></div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
