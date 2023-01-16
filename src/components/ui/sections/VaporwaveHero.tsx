export default function VaporwaveHero() {
  return (
    <section className="h-screen m-auto max-w-screen-2xl">
      <div className="flex items-center justify-center h-full gap-x-6">
        <div>logo; triangle svg absolute</div>
        <aside>
          <article className="w-[80%]">
            <p>
              Hi I'm <span>kuro</span> lmao
            </p>
            <p>
              I'm an independent developer and creative artist from the
              Philippines
            </p>
          </article>
          <div className="grid gap-3">
            <button className="p-4 text-left border border-white rounded-md">
              Projects
            </button>
            <button className="p-4 text-left border border-white rounded-md">
              About me
            </button>
          </div>
        </aside>
      </div>
    </section>
  )
}
