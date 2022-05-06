import CardQuotes, { CardQuoteSkeleton } from "../components/CardQuotes";
import Container from "../components/Container";
import UnderConstruction from "../components/UnderConstruction";

export default function QuotePage() {
  const quotes = [
    {
      quote: "yo mama",
      author: "me",
      authorImg: "07.png",
      authorSocial: "@me",
      authorLink: "https://www.youtube.com/",
      authorSocialIcon: ["fab", "fa-twitter"],
    },
    {
      quote: "MAMA LUIGI",
      author: "me",
      authorImg: "07.png",
      authorSocial: "@me",
      authorLink: "https://www.youtube.com/",
      authorSocialIcon: ["fab", "fa-twitter"],
    },
  ];

  return (
    <Container title="Quotes" description="ily guys sm 💜">
      <UnderConstruction />
      <h1>Quotes</h1>
      <div id="quotes-grid">
        {quotes.map((quotes, i) => (
          <CardQuotes
            key={i}
            quote={quotes.quote}
            author={quotes.author}
            authorImg={`/static/avatars/${quotes.authorImg}`}
            authorSocial={quotes.authorSocial}
            authorLink={quotes.authorLink}
            authorSocialIcon={quotes.authorSocialIcon}
          />
        ))}

        {/* <CardQuotes
          quote="ur gey lol"
          authorImg="/static/avatars/07.png"
          author="skepfusky"
          authorLink="https://twitter.com/skepfuskyjs"
          authorSocial="@skepfuskyjs"
          authorSocialIcon={["fab", "fa-twitter"]}
        /> */}
        <CardQuoteSkeleton />
      </div>
    </Container>
  );
}
