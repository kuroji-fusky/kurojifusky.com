import { hobbies } from "./HeroContents"
import styles from "./Hobbies.module.scss"
import HobbyItem from "./HobbyItem"

export function Hobbies() {
  return (
    <section className={styles.wrapper}>
      <h2>What Hobbies I do</h2>
      <div className="grid grid-cols-3 gap-4">
        {hobbies.map((hobby, index) => (
          <HobbyItem
            key={index}
            title={hobby.title}
            description={hobby.description}
            link={hobby.link}
            linkName={hobby.linkName}
          />
        ))}
      </div>
    </section>
  )
}
