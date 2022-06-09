import { ParallaxProvider } from "react-scroll-parallax"
import DefaultLayout from "@/layouts/Default"
import SEOHead from "@/partials/SEOHead"
import HeroHeader from "@/components/home/HeroHeader"
import ProjectsSection from "@/components/home/ProjectsSection"
import MusicSection from "@/components/home/MusicSection"
import VideoSection from "@/components/home/VideoSection"
import SectionSeparator from "@/components/home/SectionSeparator"

export default function Home() {
	return (
		<ParallaxProvider>
			<SEOHead image="/static/avatars/07.png" />
			<HeroHeader />
			<SectionSeparator />
			<ProjectsSection />
			<SectionSeparator clipPath="polygon(0 0, 100% 86%, 100% 100%, 0 100%)" />
			<MusicSection />
			<SectionSeparator />
			<VideoSection />
		</ParallaxProvider>
	)
}

Home.PageLayout = DefaultLayout
