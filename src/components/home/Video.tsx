import Section from "./Section"
import { YouTubeThumbnail } from "@/partials/YoutubeComponent"
import styles from "@/styles/Home.module.scss"
import Link from "next/link"

export default function Video() {
	return (
		<div id="videos" className="layout-seperator z-3 relative">
			<div className="layout-item-wrapper">
				<Section heading={"Videos and Filmmaking"} emojiKey="🎬">
					<article>
						<p>
							I Initially had a passion for video editing and filmmaking back
							back in 2018 until 2020 came around and had to resort to making
							music
						</p>
					</article>
					<div className="grid grid-cols-3 gap-4">
						<VideoItem
							id="5SybfjVntTw"
							title="DFC Day 2019 - School Edit"
							date="Oct 4, 2019; Nov 9, 2019; Dec 12-13, 2019"
						>
							The highlights on my previous school DFCIS in 2019 - filmed on a
							Canon EOS M50 and GoPro.
						</VideoItem>
						<VideoItem
							id="zIPay0PwumY"
							title="School Project - Philippine Tourism"
							date="May 2019"
						>
							A school video project on Philippine tourism filmed at a skating
							rink and Diplomat Hotel.
						</VideoItem>
						<VideoItem
							id="Jiydcwo0CeI"
							title="School Field Trip Edit (2018)"
							date="May 2018"
						>
							A school field trip in 2018 filmed at Riverview Resort on a GoPro
							for the first time.
						</VideoItem>
						<VideoItem
							id="vioAgEgk2O0"
							title="Solitude - Music Video"
							date="April-May 2020"
						>
							Music video for "Solitude" recorded in the midst of the 2020
							pandemic. Re-released in 2021.
						</VideoItem>
						<VideoItem
							id="Z2KV_Lag7bE"
							title="A New Beginning - Music Video"
							date="Jan 2020; 2019"
						>
							Music video for "A New Beginning" from my debut self-produced
							album Horizon. Filmed sometime before the pandemic hit.
						</VideoItem>
						<VideoItem
							id="4uUjRlgUEnY"
							title="Itogon Vlog Edit"
							date="May 2019"
						>
							Just a family vacation vlog edit in Itogon, Philippines.
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
			<Link href={`https://youtu.be/${id}`} passHref>
				<a>
					<YouTubeThumbnail id={id} />
				</a>
			</Link>
			<section
				id={styles["video-item-details"]}
				itemScope
				itemType="http://schema.org/CreativeWork"
			>
				<h3>{title}</h3>
				<p id={styles["video-description"]}>{children}</p>
				<p itemProp="datePublished">{`Filmed in: ${date}`}</p>
			</section>
		</div>
	)
}
