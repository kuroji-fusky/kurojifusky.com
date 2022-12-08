import Image from "next/image"
import { LazyMotion, domAnimation, m, useWillChange } from "framer-motion"
import { cloudinary } from "@/utils/ImgProviders"

export default function AboutHeroSection() {
  const willChange = useWillChange()

  const anims = {
    backdropInitial: { opacity: 0, width: "45%" },
    backdropAnimate: { opacity: 0.35, width: "69%" },
    heroInitial: { opacity: 0, y: 32 },
    heroAnimate: { opacity: 1, y: 0 }
  }

  return (
    <section className="relative h-screen grid place-items-center">
      <LazyMotion features={domAnimation}>
        <m.div
          className="absolute blur-[45px] rounded-full -z-1 pointer-events-none -bottom-[12%] left-5 h-[320px] bg-gradient-to-r from-sona-yellow-600 via-sona-skycyan-400 to-sona-borahae-600 -rotate-6"
          initial={anims.backdropInitial}
          animate={anims.backdropAnimate}
          transition={{ duration: 1 }}
          style={{ willChange }}
          aria-hidden="true"
        />
        <m.div
          className="absolute blur-[45px] rounded-full -z-1 pointer-events-none bottom-0 right-5 h-[300px] bg-gradient-to-r from-sona-royalblue-600  to-sona-borahaealt-400 rotate-6"
          initial={anims.backdropInitial}
          animate={anims.backdropAnimate}
          transition={{ duration: 1 }}
          style={{ willChange }}
          aria-hidden="true"
        />
        <article className="flex flex-col items-center text-center gap-y-5 relative z-1">
          <m.div
            className="relative w-[18.5rem] h-[18.5rem] mb-10 rounded-md overflow-hidden shadow-2xl shadow-sona-borahae-600"
            initial={anims.heroInitial}
            animate={anims.heroAnimate}
            transition={{ duration: 1, type: "spring", delay: 1 * 0.12 }}
            style={{ willChange }}
          >
            <Image
              src={cloudinary({
                rootDir: "fursonas",
                fileName: "skep-formal_wakrir.png"
              })}
              layout="fill"
              alt="Definitely not a cutie"
              priority
            />
          </m.div>
          <m.h1
            className="text-4xl md:text-5xl"
            initial={anims.heroInitial}
            animate={anims.heroAnimate}
            transition={{ duration: 1, type: "spring", delay: 2 * 0.12 }}
            style={{ willChange }}
          >
            I'm a hobbyist individual
          </m.h1>
          <m.p
            className="text-base md:text-xl w-[90%] md:w-[60%]"
            initial={anims.heroInitial}
            animate={anims.heroAnimate}
            transition={{ duration: 1, type: "spring", delay: 3 * 0.12 }}
            style={{ willChange }}
          >
            My full name is <strong>Kerby Keith Aquino</strong> (pronounce my
            first name as <em>Kirby</em>, from a video game series); I'm
            currently 20 years old and I reside from the mountainous regions in
            the Philippines. My peers go by me as Kuroji Fusky (previously
            skepfusky).
          </m.p>
        </article>
      </LazyMotion>
    </section>
  )
}
