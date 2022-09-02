import styles from "@/styles/sections/PreviousWorks.module.scss"
import { useEffect, useRef, useState } from "react"
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
            <WorksItem title="ey">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium repudiandae natus illum a placeat quo sint
                asperiores officia. Ut doloremque tempore animi error
                cupiditate. Accusantium, ipsa consequuntur! Expedita, blanditiis
                tempore.
              </p>
            </WorksItem>
            <WorksItem title="ey">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium repudiandae natus illum a placeat quo sint
                asperiores officia. Ut doloremque tempore animi error
                cupiditate. Accusantium, ipsa consequuntur! Expedita, blanditiis
                tempore.
              </p>
            </WorksItem>
            <WorksItem title="ey">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                quas minus cumque corporis ea praesentium consequatur, debitis
                obcaecati deserunt voluptatem commodi quo dolores adipisci
                laborum illo quia culpa. Optio nulla totam quasi aliquam
                laboriosam quia sint quod minus atque, dolore cumque iste eaque
                delectus obcaecati nostrum illum voluptate suscipit sapiente
                tenetur? Eos sequi, voluptates blanditiis pariatur et quia
                consectetur!
              </p>
            </WorksItem>
          </aside>
        </div>
      </div>
    </section>
  )
}

export function WorksItem({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentHeight, setCurrentHeight] = useState(50)
  const heightRef = useRef<HTMLDivElement>(null)

  const expandItem = () => (!isOpen ? setIsOpen(true) : setIsOpen(false))

  useEffect(() => {
    !isOpen
      ? setCurrentHeight(50)
      : setCurrentHeight(heightRef.current!.scrollHeight)
  }, [isOpen])

  return (
    <div>
      {typeof window && (
        <div
          ref={heightRef}
          className="text-left ml-6 p-3 bg-neutral-900 rounded-md overflow-y-hidden transition-all"
          style={{ height: currentHeight }}
          aria-label={title}
        >
          <strong
            className="font-inter text-xl block cursor-default select-none"
            onClick={expandItem}
          >
            {title}
          </strong>
          <div className="text-sm">{children}</div>
        </div>
      )}
    </div>
  )
}
