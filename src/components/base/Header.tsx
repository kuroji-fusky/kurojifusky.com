import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome"
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import ThemeToggle from "../base/ThemeToggle"
import styles from "@/styles/base/Header.module.scss"
import {
	projectsDropdown,
	projectsContributed,
	aboutMeDropdown
} from "@/models/Contents"

export default function Header() {
	const router = useRouter()

	// * Navbar stuff
	const [isOpen, setIsOpen] = useState(false)
	const toggleMenu = () => setIsOpen(!isOpen)

	// If isOpen is true add a style to the body element to make the menu appear
	useEffect(() => {
		isOpen
			? (document.body.style.overflowY = "hidden")
			: (document.body.style.overflowY = "scroll")
	}, [isOpen])

	// Detect of the ESC key is pressed anywhere on the document
	useEffect(() => {
		const gtfo = (event: KeyboardEvent) => {
			if (event.key === "Escape") return setIsOpen(false)
		}

		document.addEventListener("keydown", gtfo)
		return () => document.removeEventListener("keydown", gtfo)
	}, [])

	const [stickyClass, setStickyClass] = useState("")

	const stickNavbar = () => {
		window.scrollY > 21
			? setStickyClass(styles["gradient-toggle"])
			: setStickyClass("")
	}

	useEffect(() => {
		window.addEventListener("scroll", stickNavbar)
		return () => window.removeEventListener("scroll", stickNavbar)
	}, [])

	return (
		<header
			className={`${stickyClass} ${isOpen ? styles["header-active"] : ""}`}
			id={styles.container}
		>
			<div className={styles.wrapper}>
				<div className={styles["header-logo"]}>
					<button
						id={styles["burger-menu"]}
						className={isOpen ? "burger-active" : ""}
						onClick={toggleMenu}
					>
						<FaIcon icon={isOpen ? faClose : faBars} />
					</button>
					<strong id={styles["site-wordmark"]}>
						<Link href="/">
							<a>
								<span>&lt;</span>
								<span id={styles["only-highlightable"]}>skepfusky</span>
								<span>&#47;&gt;</span>
							</a>
						</Link>
					</strong>
				</div>
				<nav className={styles["header-nav"]}>
					<span className={styles["header-nav-item"]}>
						<Link href="/projects">
							<a
								className={router.pathname === "/projects" ? "page-active" : ""}
							>
								Dev Projects
							</a>
						</Link>
						<div className={styles.dropdown}>
							<ul className={styles["dropdown-item"]}>
								<li>
									<strong>Stuff I made</strong>
								</li>
								{projectsDropdown.map((project, index) => (
									<DropdownItem
										key={index}
										title={project.title}
										img={project.img}
										link={project.link}
									/>
								))}
							</ul>
							<ul className={styles["dropdown-item"]}>
								<li>
									<strong>Stuff I've contributed</strong>
								</li>
								{projectsContributed.map((project, index) => (
									<DropdownItem
										key={index}
										title={project.title}
										img={project.img}
										link={project.link}
									/>
								))}
							</ul>
						</div>
					</span>
					<span className={styles["header-nav-item"]}>
						<span>Media</span>
						{/* <div className={styles.dropdown}>
						<ul className={styles["dropdown-item"]}>
							<li>
                <strong>TBA</strong>
							</li>
						</ul>
					</div> */}
					</span>
					<span className={styles["header-nav-item"]}>
						<Link href="/blog" passHref>
							<a className={router.pathname === "/blog" ? "page-active" : ""}>
								Blog
							</a>
						</Link>
					</span>
					<span className={styles["header-nav-item"]}>
						<Link href="/about" passHref>
							<a className={router.pathname === "/about" ? "page-active" : ""}>
								About
							</a>
						</Link>
						<div className={styles.dropdown}>
							<ul className={styles["dropdown-item"]}>
								{aboutMeDropdown.map((about, index) => (
									<li key={index}>
										<Link href={about.link} passHref>
											<a>{about.title}</a>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</span>
					<ThemeToggle />
				</nav>
				{/* Big ass toggle menu */}
				<div
					id={styles["toggle-menu-container"]}
					className={
						isOpen ? styles["toggled-menu-open"] : styles["toggled-menu-closed"]
					}
				>
					<div id={styles["toggle-menu-wrapper"]}>
						<h2>Site navigation</h2>
						<hr />
						<ul id={styles["toggle-nav-menu"]} role="navigation">
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
							<NavItem
								title="Blog"
								link="/blog"
								icon="📝"
								onClick={toggleMenu}
							/>
							<NavItem
								title="About"
								link="/about"
								icon="🦊"
								onClick={toggleMenu}
							/>
						</ul>
					</div>
				</div>
			</div>
		</header>
	)
}

//* For smol ass nav menu
export function DropdownItem({
	title,
	link,
	img
}: {
	title: string
	link: string
	img?: string
}) {
	return (
		<li>
			<Link href={link}>
				<a>
					{img ? (
						<img src={img} alt={`A small project image for ${title}`} />
					) : (
						<span id={styles["nav-no-img"]} className="h-7 w-7"></span>
					)}
					<span>{title}</span>
				</a>
			</Link>
		</li>
	)
}

//* For big ass nav menu
export function NavItem({ title, icon, link, onClick }: string | any) {
	return (
		<li>
			<Link href={link}>
				<a id={styles["nav-item"]} {...onClick}>
					<div id={styles["nav-icon"]}>{icon}</div>
					<span>{title}</span>
				</a>
			</Link>
		</li>
	)
}
