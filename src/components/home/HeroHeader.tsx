import { useContext, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { Parallax } from "react-scroll-parallax"
import styles from "@/styles/Home.module.scss"

import { ParallaxDisable } from "@/models/Context"

export default function HeroHeader() {
	const skills = [
		"Experienced video editor",
		"Indie musician",
		"Filmmaker",
		"Amateur photographer",
		"Full-stack web developer",
		"Web and UI/UX designer",
		"Novice VFX artist"
	]

	const [removeCringe, isRemovedCringe] = useState("")

	useEffect(() => {
		window.addEventListener("scroll", removeDatCringe)
		return () => window.removeEventListener("scroll", removeDatCringe)
	}, [])

	const removeDatCringe = () => {
		if (window !== undefined) {
			if (window.scrollY > 200) {
				isRemovedCringe("opacity-0 pointer-events-none")
				// add aria-hidden to the navbar to prevent screen readers from reading the navbar
				const appendHidden: any = document.getElementById(
					`${styles["scroll-down"]}`
				)
				appendHidden.setAttribute("aria-hidden", "true")
			}
		}
	}

	const { disableParallax } = useContext(ParallaxDisable)

	return (
		<div className={styles["hero-header"]}>
			<Parallax
				speed={-35}
				disabled={disableParallax}
				className={styles["hero-contents"]}
			>
				<span className="text-[2.5rem] lg:text-6xl md:text-4xl flex items-center font-ubuntu-mono">
					<span>&lt;</span>
					<span id="highlight">skepfusky</span>
					<span>&#47;&gt;</span>
				</span>
				<div className="w-[60%] flex flex-wrap gap-2 uppercase">
					{skills.map((skill, index) => (
						<span key={index} id={styles["skill-item"]}>
							{skill}
						</span>
					))}
				</div>
				<div className="text-base">
					<span className="text-neutral-300 uppercase text-sm select-none">
						browse my portfolio
					</span>
					<div className="flex gap-x-5">
						<Link href="/#projects" passHref>
							<a className="gradient-link">Projects</a>
						</Link>
						<Link href="/#videos" passHref>
							<a className="gradient-link">Videos</a>
						</Link>
						<Link href="/#music" passHref>
							<a className="gradient-link">Music</a>
						</Link>
					</div>
				</div>
			</Parallax>
			<div className={styles["artwork-container"]}>
				<div className={styles["hero-parallax-container"]}>
					<Parallax
						speed={-35}
						disabled={disableParallax}
						className={styles["hero-parallax-avatar"]}
					>
						<Link href="https://youtu.be/5t53TcKIlMc" passHref>
							<a
								title="Don't you dare boop me!"
								className="block rounded-full z-mosttop absolute h-[2.65rem] w-[2.8rem] top-[53%] left-[145px]"
							></a>
						</Link>
						<Image
							src="/static/avatars/07-transparent.png"
							alt="Skepfusky fursona, drawn by @skepfuskyjs on Twitter"
							objectFit="contain"
							layout="fill"
							priority={true}
							className="pointer-events-none"
						/>
						<span className={styles["artwork-sublabel"]}>
							Art by{" "}
							<Link href="https://twitter.com/skepfuskyjs">
								<a className="gradient-link">
									<FaIcon icon={faTwitter} className="mx-1" size="sm" />
									@skepfuskyjs
								</a>
							</Link>
						</span>
					</Parallax>
				</div>
				<Parallax
					speed={-30}
					disabled={disableParallax}
					className={styles["hero-parallax-bg"]}
				></Parallax>
			</div>
			<div id={styles["scroll-down"]} className={removeCringe}>
				<span>Scroll down for cringe</span>
				<FaIcon icon={faAngleDown} size="lg" />
			</div>
		</div>
	)
}
