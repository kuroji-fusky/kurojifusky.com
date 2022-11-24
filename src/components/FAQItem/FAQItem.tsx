import { useState, useRef } from "react"
import { motion } from "framer-motion"
import ReactMarkdown from "react-markdown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { LinkUnderline } from "../Links"
import Link from "next/link"

interface FAQProps {
  question: string
  answer: string
}

export default function FAQItem(props: FAQProps) {
  const lul = useRef<HTMLElement>(null)
  const [toggle, setToggle] = useState(false)

  const toggleAnimation = {
    height: !toggle ? 0 : lul.current?.scrollHeight,
    opacity: !toggle ? 0 : 1
  }

  return (
    <div
      id="faq-item"
      className={`w-full rounded-md transition-all duration-300 border-2 ${
        !toggle ? "border-sona-borahae-600" : "border-sona-skycyan-400"
      }`}
    >
      <button
        className="p-5 lg:p-6 w-full flex justify-between items-center"
        onClick={() => setToggle(!toggle)}
      >
        <h2 className="text-2xl lg:text-[1.75rem] text-left mr-2">
          {props.question}
        </h2>
        <FontAwesomeIcon
          icon={faChevronDown}
          size="lg"
          rotation={!toggle ? undefined : 180}
        />
      </button>
      <motion.article
        ref={lul}
        className={`overflow-hidden${!toggle ? " pointer-events-none" : ""}`}
        animate={toggleAnimation}
        transition={{ duration: 0.2 }}
      >
        <ReactMarkdown
          className="px-6 pt-0 pb-5 text-base lg:text-lg flex flex-col gap-3"
          components={{
            a: ({ node, ...props }) => (
              <Link href={props.href ?? ""} passHref>
                <a
                  {...props}
                  className="anchor-underline text-sona-borahaealt-200 inline-block relative w-fit
								hover:text-sona-borahaealt-300
								before:content-[''] before:bg-sona-borahaealt-300 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px]"
                ></a>
              </Link>
            )
          }}
        >
          {props.answer}
        </ReactMarkdown>
      </motion.article>
    </div>
  )
}
