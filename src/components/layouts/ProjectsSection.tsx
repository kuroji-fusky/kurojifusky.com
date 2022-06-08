import ProjectCard from "../landing/ProjectCard"
import Section from "../Section"
import styles from "@/styles/Home.module.scss"

export default function ProjectsSection() {
	return (
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
	)
}
