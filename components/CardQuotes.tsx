import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Cards.module.scss";

interface ICardQuotesProps {
  quote: string;
  author: string;
  authorImg?: string;
  authorSocial?: string;
  authorLink?: string | any;
  authorSocialIcon?: string[] | any;
}

export default function CardQuotes({
  quote,
  author,
  authorImg,
  authorSocial,
  authorLink = "https://www.youtube.com/",
  authorSocialIcon = ["fab", "fa-twitter"],
}: ICardQuotesProps) {
  return (
    <blockquote className={styles.quote}>
      <q>{quote}</q>
      <div className={styles.author}>
        <img src={authorImg} alt={`The avatar of ${author}.`} />
        <div className={styles["author-container"]}>
            <span className={styles["author-name"]}>{author}</span>
          <a href={authorLink} className={styles["author-social"]}>
            <FontAwesomeIcon icon={authorSocialIcon} />
            <span>{authorSocial}</span>
          </a>
        </div>
      </div>
    </blockquote>
  );
}

export function CardQuoteSkeleton() {
  return (
    <div className="skeleton blockquote">
      <div className="skeleton quote-container">
        <span className="skeleton quote"></span>
        <span className="skeleton quote"></span>
        <span className="skeleton quote"></span>
      </div>
      <div className="skeleton author-container">
        <div className="skeleton author-img"></div>
        <span className="skeleton author-item"></span>
        <span className="skeleton author-item"></span>
      </div>
    </div>
  );
}
