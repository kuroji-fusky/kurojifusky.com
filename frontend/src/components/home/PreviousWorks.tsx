import styles from "@/styles/sections/PreviousWorks.module.scss"
import { useLayoutEffect, useRef, useState } from "react"
import YouTube from "../embeds/YouTube"

export default function PreviousWorks() {
  return (
    <section className={styles.divider}>
      <div className={styles.wrapper}>
        <h1 className="mt-8 mb-2">Previous Works</h1>
        <div className="grid grid-cols-5 gap-2 w-[80%]">
          <div className="col-span-3 p-4">
            <YouTube id="S2knoMlP1rw" rounded />
          </div>
          <aside className="col-span-2 flex flex-col gap-y-3 overflow-x-hidden p-3 bg-neutral-400">
            <WorksItem />
            <WorksItem />
            <WorksItem />
          </aside>
        </div>
      </div>
    </section>
  )
}

export function WorksItem() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentHeight, setCurrentHeight] = useState(50)
  const heightRef = useRef<HTMLDivElement>(null)

  const tall = () => (!isOpen ? setIsOpen(true) : setIsOpen(false))

  useLayoutEffect(() => {
    !isOpen
      ? setCurrentHeight(50)
      : setCurrentHeight(heightRef.current?.scrollHeight || 50)

    console.log(currentHeight)
  }, [isOpen, currentHeight])

  return (
    <div suppressHydrationWarning={true}>
      {typeof window && (
        <div
          className="text-left ml-6 p-3 bg-neutral-900 rounded-md overflow-y-hidden transition-all"
          ref={heightRef}
          style={{ height: currentHeight }}
        >
          <strong className="font-inter text-xl block" onClick={tall}>
            Heading
          </strong>
          <div className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            voluptates ex quod totam! Distinctio corporis error, omnis voluptas
            excepturi tempora saepe cum deleniti qui, reiciendis facere iusto
            alias soluta laudantium molestias atque eaque fuga odio dolores
            illo? Quibusdam corrupti aspernatur porro saepe odio natus non
            exlorem ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur error quae culpa et dolorum?
          </div>
        </div>
      )}
    </div>
  )
}
