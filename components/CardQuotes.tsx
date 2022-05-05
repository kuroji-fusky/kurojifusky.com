import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface ICardQuotesProps {
  quote: string;
  author: string;
  authorImg?: string;
  link?: string;
  icon?: string[] | string;
}

export default function CardQuotes({ quote, author, authorImg, link, icon = ['fab', 'fa-twitter'] }: ICardQuotesProps) {
  return(
    <blockquote>
      <q>{quote}</q>
      <div className="author">
        <img src={authorImg} alt={`The avatar of ${author}.`} />
        <Link href={link} passHref>
          <FontAwesomeIcon icon={icon} />
          <a id="author-name">{author}</a>
        </Link>
      </div>
    </blockquote>
  )
};
