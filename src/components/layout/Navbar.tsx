import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef, useState } from "react"
import { Button } from "../ui"

export default function Navbar() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div ref={rootRef} id="navbar-root">
      <header className="fixed top-0 left-0 right-0 flex justify-between px-8 py-5 z-5">
        <div>logo</div>
        <Button
          uiType="minimal"
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-4"
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
      </header>
      <div
        aria-hidden
        id="blur-toggle-handler"
        className="fixed inset-0 pointer-events-none z-4"
      ></div>
    </div>
  )
}
