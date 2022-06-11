import Link from "next/link"
import btnStyles from "@/styles/partials/Button.module.scss"

interface ButtonProps {
	link: string
	newTab?: boolean
	className?: string
	children?: string | React.ReactNode
}

export default function Button({
	link = "",
	newTab,
	children,
	className = ""
}: ButtonProps) {
	return (
		<Link href={link} passHref>
			{newTab ? (
				<a
					className={`${btnStyles["link-btn"]} ${className}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					{children}
				</a>
			) : (
				<a className={`${btnStyles["link-btn"]} ${className}`}>{children}</a>
			)}
		</Link>
	)
}
