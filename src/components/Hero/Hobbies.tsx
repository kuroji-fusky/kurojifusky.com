import Image from "next/image"
import ReactMarkdown from "react-markdown"
import { hobbies } from "./HeroContents"
import styles from "./Hobbies.module.scss"
import HobbyItem from "./HobbyItem"
import HobbySticky from "./HobbySticky"

export function Hobbies() {
  return (
    <>
      <h2 className={styles["heading-wrapper"]}>
        What hobbies, or side hussles I do
      </h2>
      <HobbySticky />
      <section className={styles.wrapper}>
        <div className={styles.container}>
          {hobbies.map((hobby, index) => (
            <section key={index} id={styles["hobby-section"]}>
              <figure className={styles["hs-container"]}>
                <div className={styles["hs-img-wrapper"]}>
                  <div className={styles["blend-on-hover"]}></div>
                  <Image
                    src={
                      hobby.img ??
                      "https://res.cloudinary.com/skepfusky-dookie/image/upload/v1665156812/sample.jpg"
                    }
                    layout="fill"
                    objectFit="cover"
                    alt={hobby.imgAlt ?? "Placeholder image"}
                    loading="lazy"
                  />
                </div>
                <figcaption className={styles.caption}>
                  <ReactMarkdown>
                    {hobby.imgAlt ?? "Placeholder image"}
                  </ReactMarkdown>
                </figcaption>
                <div className={styles["gradient-border"]}></div>
              </figure>
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
    </>
  )
}
