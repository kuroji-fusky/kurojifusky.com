interface IHomeHeadingProps {
	title: string
	emojiKey: string
	className?: string
}

export default function HomeHeading({
	title,
	emojiKey = "👀",
	className = "bg-borahae-500"
}: IHomeHeadingProps) {
	return (
		<div className="flex gap-x-4 items-center mt-8">
			<span className={`p-4 rounded-md bg-opacity-60 ${className}`}>
				{emojiKey}
			</span>
			<h3 className="uppercase font-extrabold text-xl">{title}</h3>
		</div>
	)
}
