import styles from "@/styles/PreviousWorks.module.scss"
import { useEffect, useRef, useState } from "react"
import YouTube from "../embeds/YouTube"

export default function PreviousWorks() {
  return (
    <section className={styles.divider}>
      <div className={styles.wrapper}>
        <h1 className="mt-8 mb-2">Previous Works</h1>
        <div className="grid grid-cols-5 gap-2 w-[80%]">
          <div className="col-span-3 p-4">
            {/* <YouTube id="S2knoMlP1rw" rounded /> */}
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
  const [isOpen, setIsOpen] = useState(true)
  const [currentHeight, setCurrentHeight] = useState(50)
  const heightRef = useRef<HTMLDivElement>(null)

  const tall = () => (!isOpen ? setIsOpen(true) : setIsOpen(false))

  useEffect(() => {
    !isOpen
      ? setCurrentHeight(50)
      : setCurrentHeight(heightRef.current?.offsetWidth ?? 50)

    console.log(heightRef.current?.offsetWidth)
  }, [isOpen])

  return (
    <div suppressHydrationWarning>
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
            asdasdasd
          </div>
        </div>
      )}
    </div>
  )
}
