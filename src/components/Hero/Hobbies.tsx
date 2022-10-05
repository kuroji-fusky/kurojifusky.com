import styles from "./Hobbies.module.scss"
import HobbyItem from "./HobbyItem"

export function Hobbies() {
  const hobbies = [
    { title: "Video editing & Film", description: "Lazy" },
    { title: "Photography", description: "Lazy" },
    { title: "Music production", description: "Shit music", link: "#" },
    { title: "Full stack web development", description: "Lazy" }
  ]

  return (
    <section className={styles.wrapper}>
      <h2>What I do</h2>
      <div className="grid grid-cols-3 gap-4">
        {hobbies.map((hobby) => (
          <HobbyItem
            // @ts-ignore
            key={hobby}
            title={hobby.title}
            description={hobby.description}
            link={hobby.link}
          />
        ))}
      </div>
    </section>
  )
}
