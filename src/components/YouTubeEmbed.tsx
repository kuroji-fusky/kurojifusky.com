export default function YouTubeEmbed({ id }: { id: string }) {
	return (
		<div className="aspect-video">
			<iframe
				className="rounded-md"
				width="100%"
				height="100%"
				src={`https://www.youtube.com/embed/${id}`}
				frameBorder="0"
				allow="encrypted-media;"
			></iframe>
		</div>
	)
}
