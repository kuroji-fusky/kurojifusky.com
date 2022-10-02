import { Container } from "@/components/Base";
import Hero from "@/components/Hero";

export default function Home() {
  const title = "skepfusky";
  const description = "yeet";
  return (
    <Container
      className="grid place-items-center h-screen overflow-hidden"
      title={title}
      description={description}
    >
      <Hero />
    </Container>
  );
}
