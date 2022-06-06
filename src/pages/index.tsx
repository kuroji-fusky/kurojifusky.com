import React, { useContext, useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { ParallaxProvider } from "react-scroll-parallax"
import { CardSkeleton } from "@/components/landing/ProjectCard"
import DefaultLayout from "@/layouts/Default"
import SEOHead from "@/components/SEOHead"
import HeroHeader from "@/components/layouts/HeroHeader"
import HomeHeading from "@/components/HomeHeading"
import AlbumItem from "@/components/AlbumItem"
import Section from "@/components/Section"
import styles from "@/styles/Home.module.scss"

const ProjectCard = dynamic(() => import("@/components/landing/ProjectCard"), {
	loading: () => <CardSkeleton />,
	ssr: false
})

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
				<section className="my-0 mx-auto max-w-[1440px] px-6 flex flex-col gap-x-10 justify-between relative">
					<div>
						<HomeHeading title="music stuff" emojiKey="😂" />
						<p className="mt-4">
							I started to produce music independently in 2017. Initially,
							making hip-hop/rap music, then switched to alternative/indie music
							in 2020, and I've released 2 albums and 2 EPs so far. The DAW I
							currently use is FL Studio, and I'm hopefully making a transition
							to use Cubase soon, who knows? I'm also master my own music and
							I've currently taken a break from producing music at the moment.
						</p>
					</div>
					<div className="flex justify-around py-[3.5rem]">
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
				</section>
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
	)
}

Home.PageLayout = DefaultLayout
