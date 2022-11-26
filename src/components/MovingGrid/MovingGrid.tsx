import React from "react"
import { motion } from "framer-motion"
import styles from "./3d-grid.module.scss"

export default function MovingGrid() {
  const col = 20
  const row = 5

  return (
    <div id={styles.wrapper} aria-hidden>
      <div className={styles["gradient-blanket"]}></div>
      <div className={styles["skew-pov"]}>
        <div className={styles["horizontal-grid-wrapper"]}>
          {[...Array(col)].map((_, i) => (
            <div
              key={i}
              className="border-2 border-transparent border-r-sona-borahaealt-500"
            ></div>
          ))}
        </div>
        <motion.div
          className={styles["vertical-grid-wrapper"]}
          style={{ y: 0, willChange: "transform" }}
          animate={{ y: 83 }}
          transition={{ ease: "linear", duration: 2.75, repeat: Infinity }}
        >
          {[...Array(row)].map((_, i) => (
            <div
              key={i}
              className="border-2 border-transparent border-b-sona-borahaealt-500"
            ></div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
