import { useEffect, useState } from "react";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
	const [theme, setTheme] = useState("dark");

	const toggleTheme = () => {
		if (typeof window !== "undefined") {
			if (theme === "dark") {
				setTheme("light");
				document.body.setAttribute("sf-theme", "light");
				localStorage.setItem("sf-theme", "light");
			} else {
				setTheme("dark");
				document.body.setAttribute("sf-theme", "dark");
				localStorage.setItem("sf-theme", "dark");
			}
		}
	};

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("sf-theme") === "light") {
        setTheme("light");
        document.body.setAttribute("sf-theme", "light");
      } else {
        setTheme("dark");
        document.body.setAttribute("sf-theme", "dark");
      }
    }
  }, []);

	return (
		<button id="theme-toggle" onClick={toggleTheme}>
			<FaIcon icon={faLightbulb} />
		</button>
	);
}
