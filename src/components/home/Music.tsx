import { albums } from "@/models/Contents"
import AlbumItem from "../discography/AlbumItem"
import Section from "./Section"

export default function Music() {
	return (
		<div id="music" className="layout-seperator z-3 relative">
			<div className="layout-item-wrapper">
				<Section heading={"Music"} emojiKey="🎵">
					<article>
						<p>
							I started to produce music independently in 2017. Initially,
							making hip-hop/rap music, then switched to alternative/indie music
							in 2020, and I've released 2 albums and 2 EPs so far.
						</p>
						<br />
						<p>
							The DAW I currently use is FL Studio, and I'm hopefully making a
							transition to use Cubase soon, who knows? I'm also master my own
							music and I've currently taken a break from producing music at the
							moment.
						</p>
					</article>
					<div className="flex justify-around pt-3 pb-[3.5rem]">
						{albums.map((album, index) => (
							<AlbumItem
								key={index}
								title={album.title}
								albumType={album.albumType}
								date={album.date}
								cover={album.cover}
							/>
						))}
					</div>
				</Section>
			</div>
		</div>
	)
}
