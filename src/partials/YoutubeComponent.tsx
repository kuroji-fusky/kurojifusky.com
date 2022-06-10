import Image from "next/image"

export function YoutubeEmbed({ id }: { id: string }) {
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

export function YoutubeThumbnail({ id, alt }: { id: string; alt: string }) {
	return (
		<div className="relative" style={{ aspectRatio: "16/9" }}>
			<Image
				layout="fill"
				itemType="thumbnail"
				objectFit="contain"
				src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
				alt={alt}
			/>
		</div>
	)
}
