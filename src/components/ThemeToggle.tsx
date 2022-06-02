import { useEffect, useState } from "react";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
	const [theme, setTheme] = useState("dark");

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
			<FaIcon icon={faLightbulb} />
      <span>
        Current Theme: {theme !== "dark" ? "AAAAA" : "Eye-saver"}
      </span>
		</button>
	);
}
