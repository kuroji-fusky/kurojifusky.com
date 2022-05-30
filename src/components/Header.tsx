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
		{
			img: "/static/avatars/02.png",
			link: "/projects/pandapaco-drawing-stats",
			title: "Paco Drawing Stats"
		},
		{
			img: "/static/avatars/02.png",
			link: "/projects/floofy-clicker",
			title: "Floofy Clicker"
		},
		{
			img: "/static/avatars/02.png",
			link: "/projects/scammerino",
			title: "Scammerino"
		},
		{
			img: "/static/avatars/02.png",
			link: "/projects/cookie-clicker-afk",
			title: "Cookie Clicker AFK"
		},
		{
			img: "/static/avatars/02.png",
			link: "/projects/biro-ui",
			title: "Biro UI"
		}
	];

	const projectsContributed = [
		{
			img: "/static/avatars/02.png",
			link: "/projects/searchpets",
			title: "Searchpets"
		},
		{
			img: "/static/avatars/02.png",
			link: "/projects/myfursona",
			title: "MyFursona"
		}
	];

	const aboutMe = [
		{
			link: "/about/roadmap",
			title: "Roadmap"
		}
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
					<Link href="/">
						<a>
							<span>&lt;</span>
							<span id="only-highlightable">skepfusky</span>
							<span>&#47;&gt;</span>
						</a>
					</Link>
				</strong>
			</div>
			<nav className="header-nav">
				<span className="header-nav-item">
					<a href="#">Projects</a>
					<div className="dropdown">
						<ul className="dropdown-item">
							<li>
								<h4>Stuff I made</h4>
							</li>
							{projectsDropdown.map((project, index) => (
								<li key={index}>
									<Link href={project.link}>
										<a>
											<img
												src={project.img}
												alt={`A small project image for ${project.title}`}
											/>
											<span>{project.title}</span>
										</a>
									</Link>
								</li>
							))}
						</ul>
						<ul className="dropdown-item">
							<li>
								<h4>Stuff I've contributed</h4>
							</li>
							{projectsContributed.map((project, index) => (
								<li key={index}>
									<Link href={project.link}>
										<a>
											<img
												src={project.img}
												alt={`A small project image for ${project.title}`}
											/>
											<span>{project.title}</span>
										</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</span>
				<span className="header-nav-item">
					<span>Media</span>
					<div className="dropdown">
						<ul className="dropdown-item">
							<li>
								<h4>Discography</h4>
							</li>
						</ul>
					</div>
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
					<div className="dropdown">
						<ul className="dropdown-item">
							{aboutMe.map((about, index) => (
								<li key={index}>
									<Link href={about.link} passHref>
										<a>{about.title}</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
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
