import { videos } from "@/models/Contents"
import Section from "./Section"
import { VideoItem } from "../video/VideoItem"

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
						{videos.map((video, index) => (
							<VideoItem
								key={index}
								id={video.id}
								title={video.title}
								description={video.description}
								date={video.date}
							/>
						))}
					</div>
				</Section>
			</div>
		</div>
	)
}
