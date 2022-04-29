import Link from "next/link";
import styles from '../../styles/Layout.module.scss'

interface IProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link: string;
}

export default function ProjectCard({title, description, image, link}: IProjectCardProps) {
  return (
    <div className={styles['featured-project-card']}>
      <div className={styles['featured-project-image']}>
        <img src={image} alt={`Image for ${title}`} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="py-2">
        <Link href={link} passHref>
          <a className="link-button" target="_blank">Source code on GitHub</a>
        </Link>
      </div>
    </div>
  );
};
