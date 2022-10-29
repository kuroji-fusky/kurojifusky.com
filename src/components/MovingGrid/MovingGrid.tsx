import React from "react"

interface MovingGridProps {
  gridState: "running" | "paused"
}

export default function MovingGrid({ gridState = "running" }: MovingGridProps) {
  const col = 15
  const row = 14

  return (
    <div
      aria-hidden="true"
      className="block relative w-screen overflow-hidden h-[250px] vaporwave-wrap"
      style={{ "--scroll-animation-state": gridState } as React.CSSProperties}
    >
      <div className="absolute top-0 left-0 right-0 z-3 w-screen h-[10rem] bg-gradient-to-b from-borahae-dark to-transparent"></div>
      <div className="relative z-1 vaporwave opacity-50">
        <div className="scrollbar-none absolute top-0 left-0 right-0 flex justify-center gap-[9rem] h-screen">
          {[...Array(col)].map((_, i) => (
            <div
              key={i}
              className="border-2 border-transparent border-r-sona-borahae-400"
            ></div>
          ))}
        </div>
        <div
          className="scrollbar-none scroll-rows absolute inset-0 flex flex-col gap-[5rem]"
          style={
            {
              "--calculated": `calc(var(--scroll-initial) * ${row})`
            } as React.CSSProperties
          }
        >
          {[...Array(row)].map((_, i) => (
            <div
              key={i}
              className="border-2 border-transparent border-b-sona-borahae-400"
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
