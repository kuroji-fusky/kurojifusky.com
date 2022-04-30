import Link from "next/link";
import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <header>
      <div className={styles.wrapper}>
        <div>
          <Link href="/">skepfuskylol</Link>
        </div>
        <nav className="flex gap-x-8">
          <div id={styles["nav-item"]}>
            <span>PROJECTS</span>
            {/* <div id={styles["dropdown-container"]}>
              <div id={styles["dropdown-item"]}>
                <h4>Shit I made</h4>
                <ul>
                  <li>Paco Drawing Stats</li>
                  <li>Majira VS Code Theme</li>
                </ul>
              </div>
              <div id={styles["dropdown-item"]}>
                <h4>I contributed</h4>
                <ul>
                  <li>MyFursona</li>
                </ul>
              </div>
            </div> */}
          </div>
          <div id={styles["nav-item"]}>
            <span>WORKS</span>
            {/* <div id={styles["dropdown-container"]}>
              <div id={styles["dropdown-item"]}>
                <h4>Shit I made</h4>
                <ul>
                  <li>Paco Drawing Stats</li>
                  <li>Majira VS Code Theme</li>
                </ul>
              </div>
              <div id={styles["dropdown-item"]}>
                <h4>I contributed</h4>
                <ul>
                  <li>MyFursona</li>
                </ul>
              </div>
            </div> */}
          </div>
          <Link href="/blog" passHref>
            <a id={styles["nav-item"]}>
              <span>SHIT BLOG</span>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
