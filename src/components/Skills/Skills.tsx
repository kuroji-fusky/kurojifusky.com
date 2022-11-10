import { motion } from "framer-motion"
import { skills } from "contents/AboutMe"
import SkillsItem from "./SkillsItem"

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-[1280px] xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto"
    >
      <h1 className="py-5">Current Hobbies or Skills</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {skills.map((item, index) => (
          <motion.div key={index}>
            <SkillsItem title={item.title} description={item.description} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
