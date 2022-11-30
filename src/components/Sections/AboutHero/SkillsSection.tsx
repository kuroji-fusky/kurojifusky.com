import { skills } from "contents/AboutMe"
import SkillsItem from "../../SkillItem/SkillsItem"

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="max-w-[1280px] xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto"
    >
      <h1 className="py-5">Current Hobbies or Skills</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {skills.map((item, index) => (
          <SkillsItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}
