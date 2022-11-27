export default function CommandPalette() {
  return (
    <>
      <div
        tabIndex={1}
        className="fixed z-mosttop px-7 py-5 text-lg bg-neutral-700 border border-neutral-400 rounded-md w-[40%]"
        style={{ top: "calc(40% - 5% / 2.15)", left: "calc(50% - 40% / 2.15)" }}
      >
        Command palette
      </div>
      <div aria-hidden></div>
    </>
  )
}
