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
import ProjectsSection from "@/components/layouts/ProjectsSection"
import MusicSection from "@/components/layouts/MusicSection"
import VideoSection from "@/components/layouts/VideoSection"

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
			<ProjectsSection />
			<div
				className="layout-clip z-3 relative"
				style={
					{
						"--clip-path-layout": "polygon(0 0, 100% 86%, 100% 100%, 0 100%)"
					} as React.CSSProperties
				}
			></div>
			<MusicSection />
			<div
				className="layout-clip z-3 relative"
				style={
					{
						"--clip-path-layout": "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)"
					} as React.CSSProperties
				}
			></div>
			<VideoSection />
		</ParallaxProvider>
	)
}

Home.PageLayout = DefaultLayout
