import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
	FontAwesomeIcon,
	FontAwesomeIconProps
} from "@fortawesome/react-fontawesome";
import {
	faBars,
	faClose,
	faExternalLinkAlt,
	faLightbulb
} from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faInstagram,
	faItunesNote,
	faSoundcloud,
	faSpotify,
	faTwitter,
	faYoutube
} from "@fortawesome/free-brands-svg-icons";

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
			<div className="wrapper-interactive">
				<button
					id="burger-menu"
					className={isOpen ? "burger-active" : ""}
					onClick={toggleMenu}
				>
					<FontAwesomeIcon icon={isOpen ? faClose : faBars} />
				</button>
				<strong id="site-wordmark">
					<Link href="/">skepfusky</Link>
				</strong>
			</div>
			{/* Big ass toggle menu */}
			<div
				id="toggle-menu-container"
				className={isOpen ? "toggled-menu-open" : "toggled-menu-closed"}
			>
				<div id="toggle-menu-wrapper">
					<h2>Site navigation</h2>
					<hr />
					<nav id="toggle-nav-menu">
						<div id="toggle-nav-item">
							<h2>Projects</h2>
							<h3>Web</h3>
							<ul>
								<MenuItem
									itemLabel="Paco Drawing Stats"
									itemLink="/projects/pandapaco-drawing-stats"
									onClick={toggleMenu}
								/>
								<MenuItem
									itemLabel="Art & Biro Recreated"
									itemLink="/projects/art-and-biro-recreated"
									onClick={toggleMenu}
								/>
								<MenuItem
									itemLabel="Unofficial Plainrock124 Website"
									itemLink="/projects/unofficial-plainrock124-site"
									onClick={toggleMenu}
								/>
								<MenuItem
									itemLabel="Floofy Cuddles"
									itemLink="/projects/floofy-cuddles"
									onClick={toggleMenu}
								/>
								{/* <MenuItem itemLabel="Sonamoji" itemLink="/projects/sonamoji" /> */}
							</ul>
							<h3>Cross-platform</h3>
							<ul>
								<MenuItem
									itemLabel="Tungsten"
									itemLink="/projects/tungsten"
									onClick={toggleMenu}
								/>
							</ul>
							<h3>Miscellaneous</h3>
							<ul>
								<MenuItem
									itemLabel="Biro Design System"
									itemLink="#"
									isExternal={true}
									onClick={toggleMenu}
								/>
								<MenuItem
									itemLabel="Modern Voicemeeter UI Concept"
									itemLink="/projects/modern-voicemeeter-ui-concept"
									onClick={toggleMenu}
								/>
							</ul>
							<h3>Stuff I've contributed</h3>
							<ul>
								<MenuItem
									itemLabel="Searchpets"
									itemLink="/projects/searchpets"
									onClick={toggleMenu}
								/>
								{/* <li>MyFursona</li> */}
								{/* <li>FurDevs Website</li> */}
								{/* <li>Fursuit Detector</li> */}
							</ul>
						</div>
						<div id="toggle-nav-item">
							<h2>Portfolio</h2>
							<h3>Content</h3>
							<ul>
								<MenuItem itemLabel="YTPs" itemLink="/shows/ytps" />
								<MenuItem
									itemLabelEm="Jin Woo's Adventure"
									itemLink="/shows/jin-woos-adventure"
								/>
								<MenuItem itemLabel="See more..." itemLink="/shows" />
							</ul>
							<h3>Albums</h3>
							<ul>
								<MenuItem itemLabelEm="Horizon" itemLink="/albums/horizon" />
								<MenuItem
									itemLabelEm="A New Life"
									itemLink="/albums/a-new-life"
								/>
								<MenuItem
									itemLabelEm="Recursion"
									itemLink="/albums/recursion"
								/>
							</ul>
							<h2>About me</h2>
							<ul>
								<MenuItem itemLabel="Contact" itemLink="/contact" />
								<MenuItem
									itemLabel="Project Status"
									itemLink="/project-status"
								/>
								<MenuItem itemLabel="Fursona" itemLink="/about/fursona" />
								<MenuItem
									itemLabel="Tools & Technologies"
									itemLink="/tech-stack"
								/>
								<MenuItem itemLabel="Hobby Roadmap" itemLink="/roadmap" />
								<MenuItem itemLabel="Quotes" itemLink="/quotes" />
								<MenuItem
									itemLabel="Background/Biography"
									itemLink="/biography"
								/>
							</ul>
						</div>
						<div id="toggle-nav-item">
							<h2>Social Media</h2>
							<ul>
								<SocialItem
									itemIcon={faYoutube}
									itemLabel="skepfusky"
									itemLink="#"
								/>
								<SocialItem
									itemIcon={faYoutube}
									itemLabel="codefusky"
									itemLink="#"
								/>
								<SocialItem
									itemIcon={faTwitter}
									itemLabel="@skepfuskyjs"
									itemLink="#"
								/>
								<SocialItem
									itemIcon={faInstagram}
									itemLabel="@skepfuskyjs"
									itemLink="#"
								/>
								<SocialItem
									itemIcon={faGithub}
									itemLabel="skepfusky"
									itemLink="#"
								/>
							</ul>
							<h3>On streaming platforms</h3>
							<ul>
								<SocialItem
									itemIcon={faSpotify}
									itemLabel="Spotify"
									itemLink="#"
								/>
								<SocialItem
									itemIcon={faItunesNote}
									itemLabel="Apple Music/iTunes"
									itemLink="#"
								/>
								<SocialItem
									itemIcon={faSoundcloud}
									itemLabel="SoundCloud"
									itemLink="#"
								/>
							</ul>
							<h2>Contact</h2>
							<span>TBA</span>
						</div>
					</nav>
					<div id="toggle-lower-third">
						<span id="desktop-esc-info">
							<FontAwesomeIcon icon={faLightbulb} className="pr-2" />
							Protip: You can press{" "}
							<span className="px-1  mx-1 text-sm rounded-md border-neutral-200 border-2">
								ESC
							</span>{" "}
							to close the menu
						</span>
						<div className="flex justify-between items-center">
							<span>
								V5: Contentful &bull; Copyright &copy; 2014-
								{new Date().getFullYear()} Fusky & Co., LLC. All rights
								reserved.
							</span>
							<span>
								<button id="theme-toggle">
									<FontAwesomeIcon icon={faLightbulb} className="mr-2" />
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

interface IItemProps {
	itemIcon?: FontAwesomeIconProps["icon"] | any;
	itemLabel?: string;
	itemLabelEm?: string;
	itemLink: string;
	isExternal?: boolean;
	props?: any;
}

export function SocialItem({ itemIcon, itemLabel, itemLink }: IItemProps) {
	return (
		<li>
			<Link href={itemLink}>
				<a id="nav-item">
					<FontAwesomeIcon icon={itemIcon} className="pr-2" />
					<span>{itemLabel}</span>
				</a>
			</Link>
		</li>
	);
}

export function MenuItem({
	isExternal,
	itemLabel,
	itemLabelEm,
	itemLink,
	props
}: IItemProps | any) {
	return (
		<li>
			<Link href={itemLink}>
				<a id="nav-item" {...props}>
					{itemLabelEm ? (
						<span>
							<em>{itemLabelEm}</em>
						</span>
					) : (
						<span>{itemLabel}</span>
					)}
					{isExternal && (
						<FontAwesomeIcon
							icon={faExternalLinkAlt}
							className="pl-2"
							size="sm"
						/>
					)}
				</a>
			</Link>
		</li>
	);
}
