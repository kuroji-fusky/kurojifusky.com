import React from "react";
import dynamic from "next/dynamic";
import { ContainerBaseSEO } from "../components/Container";
import { ProjectCard, CardSkeleton } from "../components/Cards";
import ShowcaseSection from "../components/ShowcaseSection";

// const ProjectCard = dynamic(() => import("../components/Cards"), {
//   loading: () => <CardSkeleton />,
//   ssr: false,
// });

export default function Home() {
	const skills = [
		"Full-stack web development",
		"Web and UI/UX Design",
		"Indie music artist",
		"Experienced video editor",
		"Filmmaker",
		"Novice VFX artist"
	];
	return (
		<ContainerBaseSEO>
			<ShowcaseSection
				heading="Stuff I made"
				emojiKey="✨"
				sectionId="project-grid"
			>
				<ProjectCard
					image="/static/projects/paco-yt-icon.jpg"
					title="Paco Drawing Stats"
					description="A repository that collects a bunch drawing data from Paco Panda, written in Python and Next.js"
					pageLink="/portfolio/paco-drawing-stats"
					repoLink="skepfusky/pandapaco-drawing-stats"
				/>
				<ProjectCard
					image="/static/avatars/08.png"
					title="This awful website"
					description="This terrible website you're currently browsing written in Next.js"
					repoLink="skepfusky/skepfusky-website"
				/>
				{/* <ProjectCard
            image="/static/projects/myfursona.png"
            title="MyFursona"
            description="An open source project where you an manage your fursona(s)"
            repoLink="MyFursona-Project/MyFursona"
            extLink="https://www.myfursona.art"
          /> */}
			</ShowcaseSection>
			<hr />
			<ShowcaseSection heading="About me" emojiKey="🦊" sectionId="hero-bio">
				<article>
					<p>
						Heya, I'm <span id="highlight">skepfusky</span> or just simply{" "}
						<span id="highlight">Skep</span>, or also known by my stage name{" "}
						<span id="highlight">Kokoro Husky</span> on streaming platforms --
						I'm a 20-year-old self-employed and self-taught hobbyist from the
						Philippines!
					</p>
					<p>
						I'm not trying to be a celebrity, or even a{" "}
						<strong>
							<em>popufur...</em>
						</strong>{" "}
						I'm just trying to get my name out there as I'm extremely passionate
						about sharing and possibly inspiring future generations through my
						broad set of skills, talent, and art as a self-taught individual.
					</p>
					<div id="skill-inline">
						{skills.map((skill, i) => (
							<div id="skill-item" key={i}>
								{skill}
							</div>
						))}
					</div>
				</article>
				<div id="hero-bio-svg">
					{/* todo: cringe svg here */}
					<img
						src="/static/avatars/07.png"
						alt="Skepfusky avatar"
						className="rounded-full w-[16rem]"
					/>
				</div>
			</ShowcaseSection>
			<div className="section hero-bio"></div>
		</ContainerBaseSEO>
	);
}
