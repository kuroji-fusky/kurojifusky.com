/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from '../../styles/Layout.module.scss'

interface IProjectCardProps {
  title: string;
  description: string;
  image?: string;
  pageLink?: string;
  repoLink: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  repoLink,
  pageLink = "/"
}: IProjectCardProps) {
  return (
    <div className={styles["featured-project-card"]}>
      <div className={styles["featured-project-image"]}>
        <img src={image} alt={`Image for ${title}`} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="py-2 flex justify-center gap-x-2">
        <Link href={`https://github.com/${repoLink}`} passHref>
          <a className="link-button" target="_blank">
            Code
          </a>
        </Link>
        <Link href={pageLink} passHref>
          <a className="link-button">About</a>
        </Link>
      </div>
    </div>
  );
};

export function ProjectCardSkeleBoi() {
  return (
    <div className={styles["featured-project-card-loading"]}>
      <div className={styles["featured-project-image-loading"]}></div>
      <div className={styles['featured-project-title-loading']}></div>
      <div className={styles['featured-project-description-loading']}></div>
      <div className="py-2 flex justify-center gap-x-2"></div>
    </div>
  );
};
