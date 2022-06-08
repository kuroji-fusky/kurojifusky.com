import AlbumItem from "../AlbumItem"
import Section from "../Section"

export default function MusicSection() {
	return (
		<div className="layout-seperator z-3 relative">
			<div className="layout-item-wrapper">
				<Section heading={"Music"} emojiKey="🎵">
					<div>
						<p className="mt-4">
							I started to produce music independently in 2017. Initially,
							making hip-hop/rap music, then switched to alternative/indie music
							in 2020, and I've released 2 albums and 2 EPs so far. The DAW I
							currently use is FL Studio, and I'm hopefully making a transition
							to use Cubase soon, who knows? I'm also master my own music and
							I've currently taken a break from producing music at the moment.
						</p>
					</div>
					<div className="flex justify-around pt-3 pb-[3.5rem]">
						<AlbumItem
							title="Recursion"
							cover="Recursion_cover.png"
							albumType="album"
							date="2022"
							className="hidden sm:flex"
						/>
						<AlbumItem
							title="A New Life"
							cover="A New Life_cover.png"
							albumType="album"
							date="Dec 2021"
							className="hidden sm:flex"
						/>
						<AlbumItem
							title="Horizon"
							cover="Horizon_cover.png"
							albumType="album"
							date="May 2021"
							className="hidden md:flex"
						/>
						<AlbumItem
							title="Dreaming"
							cover="Dreaming_cover.png"
							albumType="single"
							date="Apr 2021"
							className="hidden lg:flex"
						/>
						<AlbumItem
							title="Origins"
							cover="Origins_cover.png"
							albumType="single"
							date="Aug 2020"
							className="hidden xl:flex"
						/>
					</div>
				</Section>
			</div>
		</div>
	)
}
