import styles from "@/styles/sections/Hobbies.module.scss"
import Image from "next/image"

export function HobbiesItem({ title, description, image }: IHobbiesCardProps) {
  return (
    <li className={styles.item}>
      <div className={styles["img-wrapper"]}>
        <Image
          aria-label={title}
          src={`/static/${image}`}
          layout="fill"
          objectFit="cover"
          alt={title}
          loading="lazy"
          quality={82}
        />
      </div>
      <article className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
      </article>
    </li>
  )
}
