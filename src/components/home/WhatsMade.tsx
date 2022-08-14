import { faExternalLinkAlt, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "@/styles/WhatsMade.module.scss"
import Button from "../base/Button"
import WhatsMadeItem from "../items/WhatsMadeItem"

export default function WhatsMade() {
  return (
    <section className={styles.divider}>
      <div className={styles.wrapper}>
        <h2 className={styles["section-heading"]}>
          Made with
          <FontAwesomeIcon
            icon={faHeart}
            style={{ marginInline: "1rem" }}
            size="sm"
          />
          in
        </h2>
        <div className={styles["icon-row"]}>
          <WhatsMadeItem icon="react" name="React" link="https://reactjs.org" />
          <WhatsMadeItem
            icon="nextjs"
            name="Next.js"
            link="https://nextjs.org"
          />
          <WhatsMadeItem icon="sass" name="Sass" link="https://sass-lang.com" />
          <WhatsMadeItem
            icon="tailwindcss"
            name="Tailwind CSS"
            link="https://tailwindcss.com"
          />
          <WhatsMadeItem
            icon="typescript"
            name="TypeScript"
            link="https://www.typescriptlang.org/"
          />
        </div>
        <div className="mx-auto mt-10">
          <Button newTab link="https://github.com/skepfusky/skepfusky.xyz">
            View source code on GitHub
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              size="sm"
              style={{ marginLeft: "0.5rem" }}
            />
          </Button>
        </div>
      </div>
    </section>
  )
}
