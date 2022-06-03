import { useEffect, useState } from "react";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
	const [theme, setTheme] = useState("");

	const toggleTheme = () => {
		if (theme !== "dark") {
			setTheme("dark");
			document.body.setAttribute("sf-theme", "dark");
			localStorage.setItem("skepfuskyappTheme", "dark");
		} else {
			setTheme("light");
			document.body.setAttribute("sf-theme", "light");
			localStorage.setItem("skepfuskyappTheme", "light");
		}
	};

	useEffect(() => {
		if (localStorage.getItem("skepfuskyappTheme") === "dark") {
			setTheme("dark");
			document.body.setAttribute("sf-theme", "dark");
		} else {
			setTheme("light");
			document.body.setAttribute("sf-theme", "light");
		}

		if (localStorage.getItem("skepfuskyappTheme") === null) {
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				setTheme("dark");
				document.body.setAttribute("sf-theme", "dark");
			} else {
				setTheme("light");
				document.body.setAttribute("sf-theme", "light");
			}
		}
	}, []);

	return (
		<button id="theme-toggle" onClick={toggleTheme}>
			<FaIcon icon={faAdjust} />
			<span id="tooltip">
				Current Theme:{" "}
				<strong>
					{theme !== "dark" ? "AAAAAAA" : "Eye-saver :3"}
          {/* // ! Found the damn culpit for that stupid hydration error lmfao */}
					{/* {typeof window !== "undefined" &&
					localStorage.getItem("skepfuskyappTheme") !== null
						? " (overidden)"
						: " (system default)"} */}
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
