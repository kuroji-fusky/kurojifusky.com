import CardQuotes from "../components/CardQuotes";
import Container from "../components/Container";
import styles from "../styles/Layout.module.scss"

export default function QuotePage() {
  return(
    <Container title="Quotes" description="ily guys sm 💜">
      <h1>Quotes</h1>
      <div id={styles.grid}>
        <CardQuotes quote={"asdsd"} author={"ddd"} />
      </div>
    </Container>
  )
};
