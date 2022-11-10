import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import ReactMarkdown from "react-markdown"
import { motion, useAnimation, useWillChange } from "framer-motion"

interface SkillItemProps {
  title: string
  description: string
}

export default function SkillsItem(props: SkillItemProps) {
  const controls = useAnimation()
  const willChange = useWillChange()

  const [ref, inView] = useInView({
    rootMargin: "-50px 0px -120px 0px"
  })

  const slideEm = {
    hidden: { opacity: 0, top: 80 },
    visible: {
      opacity: 1,
      top: 0,
      transition: { duration: 0.75, type: "spring" }
    }
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={slideEm}
      style={{ willChange }}
      className="h-full relative rounded-lg flex flex-col gap-2 m-0.5 w-full shadow-2xl shadow-sona-royalblue-900
			-z-1 bg-gradient-to-tl from-sona-borahae-500 to-sona-skycyan-700"
    >
      <div className="bg-borahae-dark p-7 rounded-lg h-full m-[0.1rem]">
        <strong className="text-xl font-inter">{props.title}</strong>
        <ReactMarkdown>{props.description}</ReactMarkdown>
      </div>
    </motion.div>
  )
}
