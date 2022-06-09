import Image from "next/image"

export function YouTubeEmbed({ id }: { id: string }) {
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

export function YouTubeThumbnail({ id }: { id: string }) {
	return (
		<div className="aspect-video relative">
			<Image
				layout="fill"
				objectFit="contain"
				src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
				alt="youtube thumbnail"
			/>
		</div>
	)
}
