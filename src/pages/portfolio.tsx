import { Container } from "@/components/Base"
import PortfolioItem from "@/components/PortfolioItem"
import { PortfolioItems as portfolio } from "@/utils/PortfolioItems"

export default function Portfolio() {
  const t = "Portfolio"
  const d = "All works created by skepfusky"
  return (
    <Container title={t} description={d}>
      <div className="mt-[6.75rem] mb-5 text-6xl max-w-screen-2xl mx-auto px-10">
        <h1>Portfolio</h1>
      </div>
      <div
        role="list"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-screen-2xl mx-auto px-10"
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
    </Container>
  )
}
