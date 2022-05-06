import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from '../styles/Header.module.scss';

export default function Header() {
  const router = useRouter();

  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 0 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };

  return (
    <header className={stickyClass}>
      <div className={styles.wrapper}>
        <div>
          <Link href="/">skepfusky</Link>
        </div>
        <nav className="flex gap-x-8">
          <div
            id="nav-item"
            style={{ "--emoji-key": '"💻"' } as React.CSSProperties}
          >
            <span>Dev Projects</span>
            {/* <div id="dropdown-container">
              <div id="dropdown-item">
                <h4>Shit I made</h4>
                <ul>
                  <li>Paco Drawing Stats</li>
                  <li>Majira VS Code Theme</li>
                </ul>
              </div>
              <div id="dropdown-item">
                <h4>I contributed</h4>
                <ul>
                  <li>MyFursona</li>
                </ul>
              </div>
            </div> */}
          </div>
          <Link href="/portfolio" passHref>
            <a
              id="nav-item"
              className={router.pathname === "/portfolio" ? "active" : ""}
              style={{ "--emoji-key": '"🖼️"' } as React.CSSProperties}
            >
              <span>Portfolio</span>
              {/* <div id="dropdown-container">
              <div id="dropdown-item">
                <h4>Shit I made</h4>
                <ul>
                  <li>Paco Drawing Stats</li>
                  <li>Majira VS Code Theme</li>
                </ul>
              </div>
              <div id="dropdown-item">
                <h4>I contributed</h4>
                <ul>
                  <li>MyFursona</li>
                </ul>
              </div>
            </div> */}
            </a>
          </Link>
          {/* <Link href="/tools" passHref>
            <a
              id="nav-item"
              className={router.pathname === "/tools" ? styles.active : ""}
            >
              <span>Tools</span>
            </a>
          </Link> */}
          <Link href="/about" passHref>
            <a
              id="nav-item"
              className={router.pathname === "/about" ? "active" : ""}
            >
              <span>About Me</span>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
