import { ParallaxProvider } from "react-scroll-parallax"
import DefaultLayout from "@/layouts/Default"
import SEOHead from "@/components/partials/SEOHead"
import HeroHeader from "@/components/home/HeroHeader"
import Projects from "@/components/home/Projects"
import Music from "@/components/home/Music"
import Video from "@/components/home/Video"
import Seperator from "@/components/home/Seperator"

export default function Home() {
	return (
		<ParallaxProvider>
			<SEOHead image="/static/avatars/07.png" />
			<HeroHeader />
			<Seperator />
			<Projects />
			<Seperator clipPath="polygon(0 0, 100% 86%, 100% 100%, 0 100%)" />
			<Music />
			<Seperator />
			<Video />
		</ParallaxProvider>
	)
}

Home.PageLayout = DefaultLayout
