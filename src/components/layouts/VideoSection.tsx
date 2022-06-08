import Section from "../Section"
import YouTubeEmbed from "../YouTubeEmbed"
import styles from "@/styles/Home.module.scss"

export default function VideoSection() {
	return (
		<div className="layout-seperator z-3 relative">
			<div className="layout-item-wrapper">
				<Section heading={"Videos and Filmmaking"} emojiKey="🎬">
					<article>
						<p>
							I Initially had a passion for video editing and filmmaking back
							back in 2018 until 2020 came around and had to resort to making
							music
						</p>
					</article>
					<div className="grid grid-cols-2 gap-2">
						<VideoItem
							id="5SybfjVntTw"
							title="DFC Day 2019 - School Edit"
							date="Multiple dates"
						>
							yeet
						</VideoItem>
						<VideoItem
							id="zIPay0PwumY"
							title="School Project - Philippine Tourism"
						>
							THESE ARE THE DAYS
						</VideoItem>
						<VideoItem
							id="Jiydcwo0CeI"
							title="School Field Trip Edit (2018)"
							date="May 2018"
						>
							It was all fun, filmed on a GoPro
						</VideoItem>
						<VideoItem
							id="WfeLfeTvf9E"
							title="Hundred Islands Vacation Highlights"
						>
							yes
						</VideoItem>
					</div>
				</Section>
			</div>
		</div>
	)
}

interface IVideoItemProps {
	id: string
	title?: string
	children?: React.ReactNode
	date?: string
}

export function VideoItem({ id, title, children, date }: IVideoItemProps) {
	return (
		<div id={styles["video-item-container"]}>
			<YouTubeEmbed id={id} />
			<section
				id={styles["video-item-details"]}
				itemScope
				itemType="http://schema.org/CreativeWork"
			>
				<h3>{title}</h3>
				<p>{children}</p>
				<p itemProp="datePublished">{`Filmed in: ${date}`}</p>
			</section>
		</div>
	)
}
