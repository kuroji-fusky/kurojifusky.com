import { useEffect, useState } from "react";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
	const [theme, setTheme] = useState("");
	const [themeOverride, setThemeOverride] = useState("");

	const toggleTheme = () => {
		if (theme !== "dark") {
			setTheme("dark");
			document.body.setAttribute("sf-theme", "dark");
			localStorage.setItem("skepfuskyappTheme", "dark");
			return;
		}

		setTheme("light");
		document.body.setAttribute("sf-theme", "light");
		localStorage.setItem("skepfuskyappTheme", "light");
	};

	useEffect(() => {
		if (localStorage.getItem("skepfuskyappTheme") === "dark") {
			setTheme("dark");
			document.body.setAttribute("sf-theme", "dark");
		} else {
			setTheme("light");
			document.body.setAttribute("sf-theme", "light");
		}

		if (localStorage.getItem("skepfuskyappTheme") !== null) {
			setThemeOverride("(overidden)");
			return;
		}

		setThemeOverride("(system default)");

		// If it is null then find the system default
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
			document.body.setAttribute("sf-theme", "dark");
		} else {
			setTheme("light");
			document.body.setAttribute("sf-theme", "light");
		}
	}, []);

	return (
		<button id="theme-toggle" onClick={toggleTheme}>
			<FaIcon icon={faAdjust} />
			<span id="tooltip">
				Current Theme:{" "}
				<strong>
					{theme !== "dark" ? "AAAAAAA" : "Eye-saver :3"}
					{`  ${themeOverride}`}
				</strong>
				<hr className="my-2" />
				<span>
					⚠️ Light theme on this site is still in the works, some elements will
					not display its correct color but feel free to blind yourself lol
				</span>
			</span>
		</button>
	);
}
