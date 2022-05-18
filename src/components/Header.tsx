import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Header.module.scss";

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
				<nav className="flex flex-row gap-x-8">
					<div id="nav-item">
						<span>Contents</span>
						<div id="dropdown-container">
							<div id="dropdown-item">
								<h3>Developer Projects</h3>
								<ul>
									<li>Paco Drawing Stats</li>
									<li>Majira VS Code Theme</li>
									<li>Tungsten</li>
									<li>Sonamoji</li>
								</ul>
							</div>
							<div id="dropdown-item">
								<h3>I contributed</h3>
								<ul>
									<li>MyFursona</li>
									<li>Searchpets</li>
								</ul>
							</div>
						</div>
					</div>
					<Link href="/portfolio" passHref>
						<a
							id="nav-item"
							className={router.pathname === "/portfolio" ? "active" : ""}
						>
							<span>Portfolio</span>
						</a>
					</Link>
					<Link href="/discography" passHref>
						<a
							id="nav-item"
							className={router.pathname === "/discography" ? "active" : ""}
						>
							<span>Discography</span>
						</a>
					</Link>
					<Link href="/about" passHref>
						<a id="nav-item">
							<span>About</span>
						</a>
					</Link>
				</nav>
			</div>
		</header>
	);
}
