import React from "react";
import Container from "@/components/Container";
import ProjectCard from "@/components/Cards";
import ShowcaseSection from "@/components/ShowcaseSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import styles from "@/styles/Home.module.scss";

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
		<Container
			title="Home"
			description="Hi! I'm skepfusky, I'm a 20-year-old self-employed and self-taught hobbyist from the Philippines!"
		>
			{/* <UnderConstruction /> */}
			<div className="layout-item-wrapper">
				<div className={styles.section} id={styles["hero-bio"]}>
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
							I'm just trying to get my name out there as I'm extremely
							passionate about sharing and possibly inspiring future generations
							through my broad set of skills, talent, and art as a self-taught
							individual.
						</p>
						<div id={styles["skill-inline"]}>
							{skills.map((skill, i) => (
								<div id={styles["skill-item"]} key={i}>
									{skill}
								</div>
							))}
						</div>
					</article>
					<div id={styles["hero-bio-svg"]}>
						{/* todo: cringe svg here */}
						<img
							src="/static/avatars/07.png"
							alt="Skepfusky avatar"
							className="rounded-full w-[16rem]"
						/>
					</div>
					<a href="#showcase" id={styles["scroll-down"]}>
						<span>Scroll down for cringe</span>
						<FontAwesomeIcon icon={faAngleDown} size="lg" />
					</a>
				</div>
			</div>

			<div className="layout-seperator" id="showcase">
				<div className="layout-item-wrapper">
					<ShowcaseSection
						heading="Projects I've made or contributed"
						emojiKey="✨"
						sectionId={styles.showcase}
					>
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
							pageLink="/projects/paco-drawing-stats"
							repoLink="skepfusky/pandapaco-drawing-stats"
						/>
						<ProjectCard
							image="/static/projects/majira-vscode.png"
							title="Majira Strawberry VS Code Theme"
							pageLink="/projects/majira-strawberry-vscode"
							description="Increase your coding productivity by 69% with this beautiful theme!"
							repoLink="skepfusky/majira-strawberry-vscode"
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
					</ShowcaseSection>
				</div>
			</div>
		</Container>
	);
}
