import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface ICardProps {
  title: string;
  description: string;
  image?: string;
  pageLink?: string;
  repoLink?: string;
  extLink?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  repoLink,
  pageLink,
  extLink
}: ICardProps) {
  return (
    <section className="featured-project-card">
      <div className="featured-project-image">
        <img src={image} alt={`Image for a project, ${title}.`} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="py-2 flex justify-center gap-x-2">
        {repoLink && (
          <Link href={`https://github.com/${repoLink}`} passHref>
            <a className="link-button__global" target="_blank">
              Code
            </a>
          </Link>
        )}
        {pageLink && (
          <Link href={pageLink} passHref>
            <a className="link-button__global">About</a>
          </Link>
        )}
        {extLink && (
          <Link href={extLink} passHref>
            <a className="link-button__global">
              Website{" "}
              <FontAwesomeIcon icon={faExternalLink} />
            </a>
          </Link>
        )}
      </div>
    </section>
  );
};

export function ChannelCard({ image, title, description }: ICardProps) {
  return (
    <section className="featured-project-card">
      <div className="featured-project-image">
        <img src={image} alt={`The icon for my youtube channel, ${title}.`} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
}

export function CardSkeleton() {
  return (
    <div className="featured-project-loading-card">
      <div className="featured-project-loading-image"></div>
      <div className='featured-project-loading-title'></div>
      <div className='featured-project-loading-description'></div>
      <div className="py-2 flex justify-center gap-x-2"></div>
    </div>
  );
};
