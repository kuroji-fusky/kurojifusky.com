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
			if (event.key === "Escape") {
				setIsOpen(false);
			}
		};
		document.addEventListener("keydown", gtfo);
		return () => document.removeEventListener("keydown", gtfo);
	}, []);

	const [stickyClass, setStickyClass] = useState("");

	useEffect(() => {
		window.addEventListener("scroll", stickNavbar);
		return () => window.removeEventListener("scroll", stickNavbar);
	}, []);

	const stickNavbar = () => {
		let windowHeight = window.scrollY;
		if (window !== undefined)
			windowHeight > 1 ? setStickyClass("gradient-toggle") : setStickyClass("");
	};

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
				<Link href="/projects" passHref>
					<a className="header-nav-item">Projects</a>
				</Link>
				<span className="header-nav-item">Media</span>
				<Link href="/blog" passHref>
					<a className="header-nav-item">Blog</a>
				</Link>
				<Link href="/about" passHref>
					<a className="header-nav-item">About</a>
				</Link>
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
					<div id="toggle-lower-third">
						<div className="flex justify-between items-center">
							<span id="desktop-esc-info">
								<FaIcon icon={faLightbulb} className="pr-2" />
								Protip: You can press{" "}
								<span className="px-1 mx-1 text-sm rounded-md border-neutral-200 border-2">
									ESC
								</span>{" "}
								to close the menu.
							</span>
							<span>
								<button id="theme-toggle">
									<FaIcon icon={faLightbulb} className="mr-2" />
									Theme: Dark
								</button>
							</span>
						</div>
					</div>
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
