import dynamic from "next/dynamic"
import { Container } from "@/components/Base"
import { PortfolioItemSkeleton } from "@/components/PortfolioItem"
import { PortfolioItems as portfolio } from "@/utils/PortfolioItems"
import Backdrop from "@/components/Backdrop"

const PortfolioItem = dynamic(() => import("@/components/PortfolioItem"), {
  loading: () => <PortfolioItemSkeleton />
})

export default function Portfolio() {
  const t = "Portfolio"
  const d = "All works created by skepfusky"
  return (
    <Container title={t} description={d}>
      <Backdrop
        fixed
        className="top-[12.5rem] left-5 h-[21rem] bg-gradient-to-r from-sona-royalblue-600 via-sona-borahae-400 to-sona-yellow-600 w-[75%] -rotate-6 opacity-50"
      />
      <section className="relative z-2 mt-[7em] mb-10 max-w-screen-2xl text-center items-center mx-auto px-5 flex flex-col gap-y-3">
        <h1 className="text-5xl xl:text-6xl bg-gradient-to-br from-sona-borahaealt-300 to-white bg-clip-text text-transparent">
          Portfolio
        </h1>
        <p className="text-base xl:text-xl w-[50%]">
          All of my public and open source works of videos, music, and web apps
          neatly categorized
        </p>
      </section>
      <div
        role="list"
        className="relative z-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 max-w-screen-2xl mx-auto px-5"
      >
        {portfolio.map((item, _) => (
          <PortfolioItem
            key={item.title}
            title={item.title}
            category={item.category}
            description={item.description}
            link={item.link}
            img={item.img}
          />
        ))}
      </div>
      <div className="flex flex-col items-center text-center px-5 pt-10">
        <span className="font-inter font-semibold text-3xl my-3">
          More stuff coming soon
        </span>
        <span className="w-[75%]">
          The list is still incomplete but should be enough to showcase my
          multi-talented skills lol
        </span>
      </div>
    </Container>
  )
}
