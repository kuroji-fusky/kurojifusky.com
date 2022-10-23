import LazyImg from "@/components/LazyImg";

interface DiscographyItemProps {
	title?: string
	image?: string
	release?: string
	type: "Single" | "EP" | "Album" | string
}

export function DiscographyItem(props: DiscographyItemProps) {
	return (
		<div className="group snap-center flex flex-col gap-y-5 my-5 px-5 py-6 rounded-md min-w-[235px]
		bg-gradient-to-tr from-sona-borahaealt-900 relative
		before:content-[''] before:rounded-[inherit] before:absolute before:inset-0 before:bg-gradient-to-tr before:from-sona-borahae-700 before:to-sona-skycyan-500 before:opacity-0 before:hover:opacity-[0.45] before:transition-opacity before:duration-300">
			<div className="relative w-full aspect-square group-hover:-translate-y-1 transition-transform duration-300">
				<LazyImg
					src={props.image ?? "https://res.cloudinary.com/skepfusky-dookie/image/upload/v1665156812/sample.jpg"}
					alt={props.title}
					className="rounded-md drop-shadow-md"
				/>
			</div>
			<article className="flex flex-col gap-y-0.5 relative z-2">
				<span className="uppercase text-xs px-2 py-0.5 border rounded-md w-fit">{props.type}</span>
				<strong className="text-lg">{props.title}</strong>
				<p className="text-sm">{props.release}</p>
			</article>
		</div>
	)
}