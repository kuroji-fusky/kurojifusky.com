"use client"

import { MenuIcon } from "lucide-react"
import KuroWordmark from "./kuro_wm.svg"

export default function Navbar() {
  return (
    <>
      <header className="bg-kuro-dark2 bg-opacity-80 backdrop-blur-sm sticky top-0 py-4 px-8 z-10 h-20 flex items-center border-b border-kuro-lavender-200">
        <div>
          <KuroWordmark role="img" className="w-2/4" />
        </div>
      </header>
      <button className="fixed top-2 right-5 p-4 z-30">
        <MenuIcon aria-hidden strokeWidth={1} size={32} />
      </button>
      <div className="fixed z-20"></div>
    </>
  )
}
