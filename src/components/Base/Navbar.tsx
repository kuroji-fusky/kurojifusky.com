import Link from "next/link"
import { useState } from "react"
import { BtnLink } from "../Buttons"
import styles from "./Navbar.module.scss"

export default function Navbar() {
  const [expand, setExpand] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.logo}>skepfusky</a>
        </Link>
        <button
          onClick={() => setExpand(!expand)}
          id={styles["menu-btn"]}
          className={styles[!expand ? "closed" : "open"]}
        ></button>
        <div className="absolute top-[4.35rem] left-0 right-0 px-9">
          <div className="mx-auto max-w-screen-2xl rounded-md bg-neutral-600 grid grid-cols-4 grid-flow-col">
            <div className="px-5 py-5" style={{ gridColumn: "1 / 3"}}>
              <h2 className="uppercase text-lg pb-2">Portfolio</h2>
              <div role="list" className="grid gap-y-2">
                <BtnLink name="Item 1" link="#" />
                <BtnLink name="Item 2" link="#" />
              </div>
            </div>
            <div className="px-5 py-5">
              <h2 className="uppercase text-lg pb-2">More on this idiot</h2>
              <div role="list" className="grid gap-y-2">
                <BtnLink name="Item 2" link="#" />
                <BtnLink name="Item 2" link="#" />
              </div>
            </div>
            <div className="px-5 py-5 bg-neutral-500">
              socials and contact stuff
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
