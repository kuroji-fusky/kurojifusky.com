import Backdrop from "@/components/Backdrop"
import { Container } from "@/components/Base"
import SoftWrap from "@/components/SoftWrap"
import { cloudinary } from "@/utils/ImgProviders"
import Image from "next/image"
import { motion } from "framer-motion"
import SkillItem from "@/components/SkillItem"
import { skills } from "contents/AboutMe"

export default function About() {
  const title = "About me"
  const description =
    "About skepfusky and his experiences and struggles as a self-taught individual"

  return (
    <Container title={title} description={description}>
      {/* AboutHero */}
      <section id="heading" className="relative h-screen grid place-items-center">
        <motion.div
          className="absolute blur-[45px] rounded-full pointer-events-none bottom-[9%] left-5 h-[320px] bg-gradient-to-r from-sona-yellow-600 via-sona-skycyan-400 to-sona-borahae-600 -rotate-6"
          initial={{ opacity: 0, width: "45%" }}
          animate={{ opacity: 0.35, width: "69%" }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute blur-[45px] rounded-full pointer-events-none bottom-[18%] right-5 h-[300px] bg-gradient-to-r from-sona-royalblue-600  to-sona-borahaealt-400 rotate-6"
          initial={{ opacity: 0, width: "45%" }}
          animate={{ opacity: 0.35, width: "69%" }}
          transition={{ duration: 1 }}
        />
        <article className="flex flex-col items-center text-center gap-y-5 relative z-1">
          <motion.div
            className="relative w-[18.5rem] h-[18.5rem] mb-10 rounded-md overflow-hidden shadow-2xl shadow-sona-borahae-600"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.75, type: "spring", delay: 1 * 0.12 }}
          >
            <Image
              src={cloudinary({
                rootDir: "fursonas",
                fileName: "skep-formal_wakrir.png"
              })}
              layout="fill"
              priority
              alt="Not a cutie"
            />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, type: "spring", delay: 2 * 0.12 }}
          >
            I'm a hobbyist individual lol
          </motion.h1>
          <motion.p
            className="text-base md:text-xl w-[90%] md:w-[60%]"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, type: "spring", delay: 3 * 0.12 }}
          >
            My full name is <strong>Kerby Keith Aquino</strong> (pronounce my
            first name as <em>Kirby</em>, from a video game series); I'm
            currently 20 years old and I reside from the mountainous regions in
            the Philippines. My peers go by me as skepfusky, or just simply Skep
            — and also going by my stage name <em>Kokoro Husky</em>.
          </motion.p>
        </article>
      </section>
      {/* Shitty skills lol */}
      <section
        id="skills"
        className="max-w-[1280px] xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto"
      >
        <h1 className="py-5">Current Hobbies or Skills</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {skills.map((item, index) => (
            <motion.div key={index}>
              <SkillItem title={item.title} description={item.description} />
            </motion.div>
          ))}
        </div>
      </section>
    </Container>
  )
}
