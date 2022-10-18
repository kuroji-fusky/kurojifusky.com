import { hobbies } from "../HeroContents"
import styles from "./Hobbies.module.scss"
import HobbyItem from "./HobbyItem"
import HobbySticky from "./HobbySticky"

export function Hobbies() {
  return (
    <>
      <h2 className="text-5xl max-w-[1320px] 2xl:max-w-screen-2xl mx-auto mt-[7.5rem] py-5 text-center">
        What hobbies, or side hussles I do
      </h2>
      <HobbySticky />
      <section className={styles.wrapper}>
        <div className={styles.container}>
          {hobbies.map((hobby, index) => (
            <HobbyItem
              key={index}
              title={hobby.title}
              subtitle={hobby.subtitle}
              description={hobby.description}
              img={hobby.img}
              imgAlt={hobby.imgAlt}
              link={hobby.link}
              linkName={hobby.linkName}
            />
          ))}
        </div>
      </section>
    </>
  )
}
