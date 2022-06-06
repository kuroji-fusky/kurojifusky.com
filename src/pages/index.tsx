import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ParallaxProvider } from "react-scroll-parallax";
import Section from "@/components/Section";
import { CardSkeleton } from "@/components/landing/ProjectCard";
import SEOHead from "@/components/SEOHead";
import styles from "@/styles/Home.module.scss";
import DefaultLayout from "@/layouts/Default";
import HeroHeader from "@/components/layouts/HeroHeader";
import HomeHeading from "@/components/HomeHeading";

const ProjectCard = dynamic(() => import("@/components/landing/ProjectCard"), {
	loading: () => <CardSkeleton />,
	ssr: false
});

export default function Home() {
	return (
		<ParallaxProvider>
			<SEOHead
				title="Home"
				description="Hi! I'm skepfusky (or Kokoro Husky), I'm a 20-year-old self-employed and self-taught hobbyist from the Philippines!"
				image="/static/avatars/07.png"
			/>
			<HeroHeader />
			<div
				className="layout-clip z-3 relative"
				style={
					{
						"--clip-path-layout": "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)"
					} as React.CSSProperties
				}
			></div>
			<div className="layout-seperator z-3 relative">
				<div className="my-0 mx-auto max-w-[1440px] px-6">
					<div className="flex gap-x-3 justify-between">
						<div>
							<HomeHeading title="Editing videos lol" emojiKey="👀" />
							<p className="mt-2">
								I've been making videos on YouTube for nearly decade with
								varying in terms of quality and my editing style. Previously, I
								used Sony Vegas to edit on my crappy laptop. Now I use Adobe
								products such as Premiere Pro and After Effects for the most of
								my video work.
							</p>
							<p className="mt-2">
								Strangely, my inspiration to begin in filmography and music is
								through a handful of YouTube vloggers in mid-2017, and as a
								desire to learn filmmaking - I recieved my first camera which is
								a GoPro HERO+LCD, and a mirrorless DSLR camera, Canon EOS M50 --
								the sole reason I picked this specific camera is that it has the
								ability to shoot videos in 4K lol -- and naturally, begin to tap
								into intermediate photography as well!
							</p>
						</div>
						<div>contents</div>
					</div>
				</div>

				<div className="my-0 mx-auto max-w-[1440px] px-6">
					<div className="flex gap-x-3 justify-between">
						<div>
							<HomeHeading title="music lmfaooo" emojiKey="😂" />
							<p className="mt-2">
								I started to produce music independently in 2017. Initally,
								making hip-hop/rap music, then changed to alternative/indie
								music in 2020, and I've released 2 albums and 2 EPs so far. The
								DAW I currently use is FL Studio, and I'm hopefully making a
								transition to use Cubase soon, who knows? I'm also master my own
								music and planning to join a record label, AWAL, to expand my
								reach.
							</p>
						</div>
						<div>contents</div>
					</div>
				</div>
			</div>
			<div
				className="layout-clip z-3 relative"
				style={
					{
						"--clip-path-layout": "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)"
					} as React.CSSProperties
				}
			></div>
			<div className="layout-seperator z-3 relative" id="showcase">
				<div className="layout-item-wrapper">
					<Section heading="Projects" emojiKey="✨" sectionId={styles.showcase}>
						<ProjectCard
							image="/static/avatars/08.png"
							title="This awful website"
							description="This terrible website you're currently browsing is written in Next.js"
							repoLink="skepfusky/skepfusky-website"
						/>
						<ProjectCard
							image="/static/projects/paco-yt-icon.jpg"
							title="Paco Drawing Stats"
							description="A repository that collects a bunch drawing data from Paco Panda, written in Python and Next.js"
							pageLink="/projects/pandapaco-drawing-stats"
							repoLink="skepfusky/pandapaco-drawing-stats"
						/>
						<ProjectCard
							image="/static/projects/searchpets-icon.png"
							title="Searchpets!"
							description="A website that searches characters from a furry comic, Housepets!"
							repoLink="OpenFurs/searchpets"
							pageLink="/projects/searchpets"
							extLink="https://searchpets.xyz"
						/>
						<ProjectCard
							image="/static/projects/majira-vscode.png"
							title="Majira Strawberry VS Code Theme"
							description="Increase your coding productivity by 69% with this beautiful theme!"
							repoLink="skepfusky/majira-strawberry-vscode"
						/>
						<ProjectCard
							image="/static/projects/scammerino-lol.jpg"
							title="Scammerino"
							description="Play with scammers' feelings with a game of Bingo or rating their patience"
							repoLink="skepfusky/scammerino"
						/>
						<ProjectCard
							image="/static/projects/myfursona.png"
							title="MyFursona"
							pageLink="/projects/myfursona"
							description="An open source project where you an manage your fursona(s)"
							repoLink="MyFursona-Project/MyFursona"
							extLink="https://www.myfursona.art"
						/>
						<ProjectCard
							image="/static/projects/tessinator.png"
							title="Tessinator"
							description="An awful Discord bot when I barely knew anything about Node.js"
							repoLink="skepfusky/tessinator"
						/>
					</Section>
				</div>
			</div>
		</ParallaxProvider>
	);
}

Home.PageLayout = DefaultLayout;
