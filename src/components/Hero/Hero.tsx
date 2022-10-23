import { useContext } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Parallax, useParallax } from "react-scroll-parallax"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import { NavbarScrollContext } from "@/utils/Context"
import { BtnLink } from "../Buttons"
import Backdrop from "../Backdrop"
import styles from "./Hero.module.scss"
import bdStyles from "../Backdrop/Backdrop.module.scss"

export default function Hero() {
	const { scrolled, isScrolled } = useContext(NavbarScrollContext)

	const { ref: intersectRef } = useInView({
		rootMargin: "-55px 150px 0px 0px",
		onChange(inView) {
			isScrolled(!inView)
		}
	})

	const parallax = useParallax<HTMLDivElement>({
		translateY: [0, 450],
		disabled: scrolled,
		shouldAlwaysCompleteAnimation: true
	})

	const sonas = {
		img: "https://res.cloudinary.com/skepfusky-dookie/image/upload/w_720/v1662975456/fursonas/comm_for_davey_g2_i3nmhp.png",
		artist: "catastrophe#6282",
		icon: faDiscord
	}

	return (
		<section ref={intersectRef} className={styles["hero-wrapper"]}>
			<div
				ref={parallax.ref}
				className={styles["parallax-wrapper"]}
			>
				<div className={styles.content}>
					<h2 className={styles["gradient-wm-wrapper"]}>
						Hi, I'm&nbsp;
						<span className={styles["gradient-wm"]}>skepfusky</span>!
					</h2>
					<h3 className={styles.subheading}>
						A 20-year-old self-taught, self-employed, and independent fox-husky
						Filipino hobbyist from the Philippines
					</h3>
					<div className={styles.artwork}>
						<span
							className="flex gap-x-1.5 items-center"
							aria-label={`Art by ${sonas.artist}`}
						>
							Art by <FontAwesomeIcon icon={sonas.icon} />
							<strong>{sonas.artist}</strong>
						</span>
						<div className="flex gap-4">
							<BtnLink emojiFix ariaList link="/fursona" name="🦊 Fursona" />
							<BtnLink emojiFix ariaList link="/about" name="🤵 About me" />
						</div>
					</div>
				</div>
				<div className={styles.img}>
					<Image
						src={sonas.img}
						alt={`Drawn by ${sonas.artist}`}
						layout="fill"
						objectFit="cover"
						priority
					/>
				</div>
			</div>
			<div className={styles["gradient-transition"]} aria-hidden="true"></div>
			<Backdrop className={bdStyles["heading-left"]} />
			<Backdrop className={bdStyles["heading-right"]} />
		</section>
	)
}
