import { useState, useEffect, useRef, useContext } from "react"
import styles from "./Navbar.module.scss"
import { DropdownContext, NavbarScrollContext } from "@/utils/Context"
import { Logo } from "./Logo"
import { More, Portfolio, Summary } from "./DropdownSection"

export default function Navbar() {
  const [expand, setExpand] = useState(true)

  const { scrolled } = useContext(NavbarScrollContext)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const [height, setHeight] = useState(0)

  useEffect(() => {
    dropdownRef.current!.style.height = `${height ?? 0}px`

    const scrolledDefault = !scrolled ? 0 : 80
    const currentHeight = dropdownRef.current?.scrollHeight ?? scrolledDefault

    const handleHeight = () => {
      !expand ? setHeight(currentHeight) : setHeight(scrolledDefault)
    }

    handleHeight()

    const closeKeyboard = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (!expand) {
          setExpand(true)
        }
      }
    }

    window.addEventListener("resize", handleHeight)
    document.addEventListener("keydown", closeKeyboard)

    return () => {
      window.removeEventListener("resize", handleHeight)
      document.removeEventListener("keydown", closeKeyboard)
    }
  }, [expand, height, scrolled])

  const btnHandle = !expand ? "menu-btn-open" : "menu-btn-close"

  return (
    <header className="w-full fixed top-0 px-9 py-1 transition-colors duration-300 !z-[10]">
      <div className="mx-auto max-w-screen-2xl flex justify-between items-center">
        <DropdownContext.Provider value={{ expand, isExpanded: setExpand }}>
          <Logo />
          <button
            onClick={() => setExpand(!expand)}
            aria-label="Open/close menu"
            id={styles["menu-btn"]}
            className={`${btnHandle} relative px-2 py-3 h-[3.5rem] w-[3.75rem] rounded-md z-3`}
          ></button>
          <div
            ref={dropdownRef}
            className={styles[!expand ? "dd-container" : "dd-container-closed"]}
            style={{ height: "0px" }}
          >
            <div className="max-w-screen-2xl mx-auto px-0 pt-1 flex items-center">
              <Logo white />
            </div>
            <nav className={styles["dd-wrapper"]}>
              <Summary />
              <Portfolio />
              <More />
            </nav>
          </div>
        </DropdownContext.Provider>
      </div>
    </header>
  )
}
