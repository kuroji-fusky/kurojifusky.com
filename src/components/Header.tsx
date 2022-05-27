import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faClose,
	faLightbulb
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
	const router = useRouter();

	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(!isOpen);

	// If isOpen is true add a style to the body element to make the menu appear
	useEffect(() => {
		isOpen
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "visible");
	}, [isOpen]);

	// Detect of the ESC key is pressed anywhere on the document
	useEffect(() => {
		const gtfo = (event: KeyboardEvent) => {
			if (event.key === "Escape") return setIsOpen(false);
		};
		document.addEventListener("keydown", gtfo);
		return () => document.removeEventListener("keydown", gtfo);
	}, []);

	const [stickyClass, setStickyClass] = useState("");

	const stickNavbar = () => {
		let windowHeight = window.scrollY;
		windowHeight > 21 ? setStickyClass("gradient-toggle") : setStickyClass("");
	};

	useEffect(() => {
		window.addEventListener("scroll", stickNavbar);
		return () => window.removeEventListener("scroll", stickNavbar);
	}, []);

	const projectsDropdown = [
		{ link: "/projects/pandapaco-drawing-stats", title: "Paco Drawing Stats" },
		{ link: "/projects/biro-ui", title: "Biro UI" },
		{ link: "/projects/searchpets", title: "Searchpets" },
		{ link: "/projects/myfursona", title: "MyFursona" },
		{ link: "/projects/floofy-clicker", title: "Floofy Clicker" }
	];

	return (
		<header className={`${stickyClass} ${isOpen ? "header-active" : ""}`}>
			<div className="header-logo">
				<button
					id="burger-menu"
					className={isOpen ? "burger-active" : ""}
					onClick={toggleMenu}
				>
					<FaIcon icon={isOpen ? faClose : faBars} />
				</button>
				<strong id="site-wordmark">
					<Link href="/">skepfusky</Link>
				</strong>
			</div>
			<nav className="header-nav">
				<span className="header-nav-item">
					<a href="#">Projects</a>
					<div className="dropdown">
						<ul className="dropdown-item">
							{projectsDropdown.map((project, index) => (
								<li key={index}>
									<Link href={project.link}>
										<a>{project.title}</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</span>
				<span className="header-nav-item">
					Media
					<div className="dropdown">{/* contents */}</div>
				</span>
				<span className="header-nav-item">
					<Link href="/blog" passHref>
						Blog
					</Link>
				</span>
				<span className="header-nav-item">
					<Link href="/about" passHref>
						About
					</Link>
					<div className="dropdown">{/* contents */}</div>
				</span>
				<button id="theme-toggle">
					<FaIcon icon={faLightbulb} />
				</button>
			</nav>
			{/* Big ass toggle menu */}
			<div
				id="toggle-menu-container"
				className={isOpen ? "toggled-menu-open" : "toggled-menu-closed"}
			>
				<div id="toggle-menu-wrapper">
					<h2>Site navigation</h2>
					<hr />
					<nav id="toggle-nav-menu">
						<NavItem
							title="Projects"
							link="/projects"
							icon="👀"
							onClick={toggleMenu}
						/>
						<NavItem
							title="Discography"
							link="/discography"
							icon="💽"
							onClick={toggleMenu}
						/>
						<NavItem title="Blog" link="/blog" icon="📝" onClick={toggleMenu} />
						<NavItem
							title="About"
							link="/about"
							icon="🦊"
							onClick={toggleMenu}
						/>
					</nav>
				</div>
			</div>
		</header>
	);
}

interface INavItemProps {
	title: string;
	icon: string;
	link: string;
}

export function NavItem({ title, icon, link, ...props }: INavItemProps | any) {
	return (
		<Link href={link}>
			<a id="nav-item" {...props}>
				<div id="nav-icon">{icon}</div>
				<span>{title}</span>
			</a>
		</Link>
	);
}
