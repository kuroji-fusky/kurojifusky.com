import { useState, useRef } from "react"
import { motion } from "framer-motion"
import ReactMarkdown from "react-markdown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import styles from "./FAQItem.module.scss"

interface FAQProps {
  question: string
  answer: string
}

export default function FAQItem(props: FAQProps) {
  const ref = useRef<HTMLElement>(null)
  const [toggle, setToggle] = useState(false)

  const toggleAnimation = {
    height: !toggle ? 0 : ref.current?.scrollHeight,
    opacity: !toggle ? 0 : 1,
    y: !toggle ? 0 : -6
  }

  return (
    <div
      id={styles["wrapper"]}
      className={!toggle ? "border-kuro-purple-600" : "border-kuro-skycyan-400"}
    >
      <button
        className={styles["question-toggle"]}
        onClick={() => setToggle(!toggle)}
      >
        <h2 className={styles["question-heading"]}>{props.question}</h2>
        <FontAwesomeIcon
          icon={!toggle ? faPlus : faMinus}
          size="lg"
          rotation={!toggle ? undefined : 180}
          className="transition-[transform] duration-300"
        />
      </button>
      <motion.article
        ref={ref}
        className={`overflow-hidden${!toggle ? " pointer-events-none" : ""}`}
        initial={{ height: 0 }}
        animate={toggleAnimation}
        transition={{ duration: 0.2 }}
      >
        <ReactMarkdown
          className={styles["md-wrapper"]}
          components={{
            a: ({ node, ...props }) => (
              <Link
                href={props.href ?? ""}
                passHref
                {...props}
                className={styles["md-links"]}
              ></Link>
            )
          }}
        >
          {props.answer}
        </ReactMarkdown>
      </motion.article>
    </div>
  )
}
