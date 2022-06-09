import { useContext, useEffect, useState } from "react"
import { ParallaxDisable } from "@/models/Context"
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome"
import {
	faAdjust,
	faDisplay,
	faMoon,
	faSun
} from "@fortawesome/free-solid-svg-icons"
import styles from "@/styles/base/Header.module.scss"

export default function ThemeToggle() {
	const [theme, setTheme] = useState("")
	const [themeOverride, setThemeOverride] = useState("")

	const toggleTheme = () => {
		if (theme !== "dark") {
			setTheme("dark")
			document.body.setAttribute("sf-theme", "dark")
			localStorage.setItem("skepfuskyappTheme", "dark")
			return
		}

		setTheme("light")
		document.body.setAttribute("sf-theme", "light")
		localStorage.setItem("skepfuskyappTheme", "light")
	}

	useEffect(() => {
		if (localStorage.getItem("skepfuskyappTheme") === "dark") {
			setTheme("dark")
			document.body.setAttribute("sf-theme", "dark")
		} else {
			setTheme("light")
			document.body.setAttribute("sf-theme", "light")
		}

		if (localStorage.getItem("skepfuskyappTheme") !== null) {
			setThemeOverride("(overidden)")
			return
		}

		setThemeOverride("(system default)")

		// If it is null then find the system default
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark")
			document.body.setAttribute("sf-theme", "dark")
		} else {
			setTheme("light")
			document.body.setAttribute("sf-theme", "light")
		}
	}, [])

	const { disableParallax, setDisableParallax } = useContext(ParallaxDisable)

	return (
		<span className={styles["header-nav-item"]}>
			<span>
				<FaIcon icon={faAdjust} className="mx-3" />
			</span>
			<div className={styles.dropdown}>
				<div className="flex items-center justify-between w-full">
					<span className="text-base uppercase flex items-center gap-x-2">
						<FaIcon icon={faAdjust} /> Current theme
					</span>
					<span>
						<strong>{theme !== "dark" ? "AAAAAAA" : "Eye-saver :3"}</strong>
						{/* <button id={styles["theme-button-toggle"]} onClick={toggleTheme}>
							<FaIcon icon={theme !== "dark" ? faSun : faMoon} />
						</button>
             */}
						<button sf-theme-set="true">
							<FaIcon icon={faDisplay} />
						</button>
						<button sf-theme-set="false">
							<FaIcon icon={faMoon} />
						</button>
						<button sf-theme-set="false">
							<FaIcon icon={faSun} />
						</button>
					</span>
				</div>
				<div className="flex items-center justify-between w-full">
					<span className="text-base uppercase flex items-center gap-x-2">
						<FaIcon icon={faDisplay} /> Parallax
					</span>
					<button
						onClick={() => setDisableParallax(!disableParallax)}
						className="p-1 bg-neutral-300"
					>
						<div id="switch-toggle-inner"></div>
					</button>
				</div>
				<hr className="my-1" />
				<span className="w-[24rem] text-base">
					⚠️ Light theme on this site is still in the works, some elements will
					not display its correct color but feel free to blind yourself lol
				</span>
			</div>
		</span>
	)
}
