import Image from "next/image"
import { hobbies } from "./HeroContents"
import styles from "./Hobbies.module.scss"
import HobbyItem from "./HobbyItem"

export function Hobbies() {
  return (
    <section className={styles.wrapper}>
      <h2>What stuff I do</h2>
      <div className="flex flex-col gap-[6.5rem]">
        {hobbies.map((hobby, index) => (
          <section key={index} id={styles["hobby-section"]}>
            <div className={styles["hs-container"]}>
              <div className={styles["hs-img-wrapper"]}>
                <Image
                  src="https://res.cloudinary.com/skepfusky-dookie/image/upload/v1665156812/sample.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div className={styles["gradient-border"]}></div>
            </div>
            <HobbyItem
              title={hobby.title}
              subtitle={hobby.subtitle}
              description={hobby.description}
              link={hobby.link}
              linkName={hobby.linkName}
            />
          </section>
        ))}
      </div>
    </section>
  )
}
