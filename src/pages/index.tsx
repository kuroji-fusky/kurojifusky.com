import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Section from "@/components/Section";
import { CardSkeleton } from "@/components/landing/ProjectCard";
import SEOHead from "@/components/SEOHead";
import styles from "@/styles/Home.module.scss";
import DefaultLayout from "@/layouts/Default";
import Image from "next/image";

const ProjectCard = dynamic(() => import("@/components/landing/ProjectCard"), {
	loading: () => <CardSkeleton />,
	ssr: false
});

export default function Home() {
	const skills = [
		"Experienced video editor",
		"Indie musician",
		"Filmmaker",
		"Full-stack web developer",
		"Web and UI/UX designer",
		"Novice VFX artist"
	];

	const [removeCringe, isRemovedCringe] = useState("");

	useEffect(() => {
		window.addEventListener("scroll", removeDatCringe);
		return () => window.removeEventListener("scroll", removeDatCringe);
	}, []);

	const removeDatCringe = () => {
		if (window !== undefined) {
			if (window.scrollY > 200) {
				isRemovedCringe("opacity-0 pointer-events-none");
			}
		}
	};

	return (
		<ParallaxProvider>
			<SEOHead
				title="Home"
				description="Hi! I'm skepfusky (or Kokoro Husky), I'm a 20-year-old self-employed and self-taught hobbyist from the Philippines!"
				image="/static/avatars/07.png"
			/>
			<div className="h-viewport flex gap-6 items-center justify-between mx-auto my-0 max-w-[960px] lg:max-w-[1500px] p-8">
				<div className="flex flex-col gap-y-2">
					<span className="text-[2.5rem] lg:text-5xl md:text-4xl flex items-center font-ubuntu-mono">
						<span>&lt;</span>
						<span id="highlight">skepfusky</span>
						<span>&#47;&gt;</span>
					</span>
					<article className="w-[70%] text-lg lg:text-xl">
						<p>
							Hi, I'm <strong>skepfusky</strong>, simply known as{" "}
							<strong>Skep</strong>, also known by my stage name{" "}
							<strong>Kokoro Husky</strong> on streaming platforms -- I'm a
							20-year-old self-employed and self-taught hobbyist from the
							Philippines!
						</p>
						<p className="mt-2">
							I'm just trying to get my name out there as I'm extremely
							passionate about sharing and possibly inspiring future generations
							through my broad set of skills, talent, and art as a self-taught
							individual.
						</p>
					</article>
					<div className="w-[60%] flex flex-wrap gap-2 uppercase">
						{skills.map((skill, index) => (
							<span
								key={index}
								className="rounded-md bg-borahae-600 px-3 py-1 cursor-default"
							>
								{skill}
							</span>
						))}
					</div>
				</div>
				<div className="relative h-[23rem] w-[23rem]">
					<div className="absolute -left-14 z-3 -2 flex items-center">
						<Parallax speed={-34} className="relative h-[21rem] w-[21rem] z-1">
							<Image
								src="/static/avatars/FormalAvatar-SVG.svg"
								alt="Skepfusky"
								objectFit="contain"
								layout="fill"
								priority={true}
							/>
						</Parallax>
					</div>
					<Parallax
						speed={-30}
						className="absolute -left-14 h-[21rem] w-[21rem] rounded-full bg-stone-700 z-0"
					></Parallax>
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
			<div className="layout-seperator z-3 relative">
				<div className="mx-auto my-0 max-w-[1536px] relative">good shit</div>
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
					<Section heading="About me" emojiKey="🦊">
						<div className={styles.section} id={styles["bio"]}></div>
					</Section>
				</div>
			</div>
		</ParallaxProvider>
	);
}

Home.PageLayout = DefaultLayout;
