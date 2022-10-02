import { Container } from "@/components/Base";
import { PortfolioItem } from "@/components/Items";

export default function PortfolioPage() {
  const title = "Portfolio";
  const description = "lmao";

  return (
    <Container wrap title={title} description={description}>
      <h1>Portfolio</h1>
      <div className="grid grid-cols-3 gap-5">
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
      </div>
    </Container>
  );
}
