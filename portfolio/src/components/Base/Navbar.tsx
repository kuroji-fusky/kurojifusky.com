"use client"

import { MenuIcon } from "lucide-react"

export default function Navbar() {
  return (
    <>
      <header className="bg-kuro-dark1 bg-opacity-80 backdrop-blur-sm sticky top-0 py-4 px-8 z-10 h-20 flex items-center border-b border-kuro-lavender-200">
        <div>kuro svg</div>
      </header>
      <button className="fixed top-5 right-8 p-1 z-30">
        <MenuIcon aria-hidden strokeWidth={1} size={32} />
      </button>
      <div className="fixed z-20"></div>
    </>
  )
}
