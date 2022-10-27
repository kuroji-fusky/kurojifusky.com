export default function MovingGrid() {
  return (
    <div
      aria-hidden="true"
      className="
			relative pointer-events-none w-screen overflow-y-hidden h-[195px] vaporwave-wrap
			"
    >
      <div className="absolute top-0 left-0 right-0 z-3 w-screen h-[10rem] bg-gradient-to-b from-borahae-dark to-transparent"></div>
      <div className="relative vaporwave opacity-40">
        <div className="absolute top-0 left-0 right-0 flex justify-center gap-[5.5rem] h-screen">
          <div className="border-2 border-transparent border-r-sona-borahae-300"></div>
          <div className="border-2 border-transparent border-r-sona-borahae-300"></div>
          <div className="border-2 border-transparent border-r-sona-borahae-300"></div>
          <div className="border-2 border-transparent border-r-sona-borahae-300"></div>
          <div className="border-2 border-transparent border-r-sona-borahae-300"></div>
          <div className="border-2 border-transparent border-r-sona-borahae-300"></div>
          <div className="border-2 border-transparent border-r-sona-borahae-300"></div>
          <div className="border-2 border-transparent border-r-sona-borahae-300"></div>
          <div className="border-2 border-transparent border-r-sona-borahae-300"></div>
          <div className="border-2 border-transparent border-r-sona-borahae-300"></div>
        </div>
        <div className="animate-rows absolute inset-0 flex flex-col gap-10">
          <div className="border-2 border-transparent border-b-sona-borahae-300"></div>
          <div className="border-2 border-transparent border-b-sona-borahae-300"></div>
          <div className="border-2 border-transparent border-b-sona-borahae-300"></div>
          <div className="border-2 border-transparent border-b-sona-borahae-300"></div>
          <div className="border-2 border-transparent border-b-sona-borahae-300"></div>
          <div className="border-2 border-transparent border-b-sona-borahae-300"></div>
        </div>
      </div>
    </div>
  )
}
