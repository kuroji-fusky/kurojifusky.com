import Link from "next/link";
import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <header className="bg-slate-600">
      <div className={styles.wrapper}>
        <div>
          <Link href="/">
            skepfuskylol
          </Link>
        </div>
        <nav className="flex gap-x-4">
          <Link href="/projects" passHref>PROJECTS</Link>
          <Link href="/works" passHref>
            <a>WORKS</a>
          </Link>
          <Link href="/contact" passHref>BLOG</Link>
          <Link href="/about-me" passHref>ABOUT THIS LOSER</Link>
        </nav>
      </div>
    </header>
  );
}
