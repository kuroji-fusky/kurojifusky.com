import { LayoutProps } from "../Base/Layout"

interface HomeSectionProps extends LayoutProps {
	className: string
	id: string
	title: string
	expandContent: boolean
}

export function HomeSection(props: Partial<HomeSectionProps>) {
	const expandClasses = !props.expandContent ? "max-w-screen-2xl mx-auto px-10" : ""
	const headingClasses = !props.expandContent ? "text-5xl my-4" : "max-w-screen-2xl mx-auto text-5xl my-4 px-10"

	return (
		<section id={props.id ?? undefined} className={`${expandClasses} ${props.className ?? ""}`}>
			{props.title && <h1 className={headingClasses}>{props.title}</h1>}
			{props.children}
		</section>
	)
}