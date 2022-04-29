/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from '../../styles/Layout.module.scss'

interface IProjectCardProps {
  title: string;
  description: string;
  image?: string;
  pageLink?: string;
  repoLink?: string;
  extLink?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  repoLink,
  pageLink,
  extLink
}: IProjectCardProps) {
  return (
    <section className={styles["featured-project-card"]}>
      <div className={styles["featured-project-image"]}>
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

export function ProjectCardSkeleBoi() {
  return (
    <div className={styles["featured-project-loading-card"]}>
      <div className={styles["featured-project-loading-image"]}></div>
      <div className={styles['featured-project-loading-title']}></div>
      <div className={styles['featured-project-loading-description']}></div>
      <div className="py-2 flex justify-center gap-x-2"></div>
    </div>
  );
};
