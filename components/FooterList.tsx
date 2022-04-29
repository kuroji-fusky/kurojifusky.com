import Link from 'next/link';
import styles from '../styles/Footer.module.scss';

interface IFooterListProps {
  title: string;
  linkItems: string[];
  nameItems: string[];
}

export default function FooterList({ title, linkItems, nameItems }: IFooterListProps) {
  return (
    <div className={styles["content-list"]}>
      <h3>{title}</h3>
      <ul>
        {linkItems.map((link, index) => (
          <li key={index}>
            <Link href={link}>
              <a className={styles["link-item"]}>
                {nameItems[index]}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
