import dynamic from "next/dynamic"
import Section from "./Section"
import { CardSkeleton } from "@/components/landing/ProjectCard"
import styles from "@/styles/Home.module.scss"

const ProjectCard = dynamic(() => import("@/components/landing/ProjectCard"), {
	loading: () => <CardSkeleton />,
	ssr: false
})

export default function Projects() {
	return (
		<div className="layout-seperator z-3 relative" id="projects">
			<div className="layout-item-wrapper">
				<Section heading="Projects" emojiKey="✨" sectionId={styles.showcase}>
					<ProjectCard
						image="/static/projects/paco-yt-icon.jpg"
						title="Paco Drawing Stats"
						description="A repository that collects a bunch drawing data from Paco Panda, written in FastAPI and Next.js"
						pageLink="/projects/pandapaco-drawing-stats"
						repoLink="skepfusky/pandapaco-drawing-stats"
						techIcons={[
							"nextjs-plain",
							"typescript-plain colored",
							"python-plain colored",
							"fastapi-plain colored"
						]}
					/>
					<ProjectCard
						image="/static/projects/searchpets-icon.png"
						title="Searchpets!"
						description="A website that searches characters from a furry comic, Housepets!"
						repoLink="OpenFurs/searchpets"
						pageLink="/projects/searchpets"
						extLink="https://searchpets.xyz"
						techIcons={[
							"nextjs-plain",
							"typescript-plain colored",
							"python-plain colored",
							"flask-plain"
						]}
					/>
					<ProjectCard
						image="/static/projects/majira-vscode.png"
						title="Majira Strawberry VS Code Theme"
						description="Increase your coding productivity by 69% with this beautiful theme!"
						repoLink="skepfusky/majira-strawberry-vscode"
						techIcons={["vscode-plain colored"]}
					/>
					<ProjectCard
						image="/static/projects/scammerino-lol.jpg"
						title="Scammerino"
						description="Play with scammers' feelings with a game of Bingo or rating their patience"
						repoLink="skepfusky/scammerino"
						techIcons={[
							"electron-original",
							"vuejs-plain",
							"typescript-plain colored"
						]}
					/>
					<ProjectCard
						image="/static/projects/myfursona.png"
						title="MyFursona"
						pageLink="/projects/myfursona"
						description="An open source project where you an manage your fursona(s)"
						repoLink="MyFursona-Project/MyFursona"
						extLink="https://www.myfursona.art"
						techIcons={[
							"nextjs-plain",
							"typescript-plain colored",
							"go-plain colored"
						]}
					/>
				</Section>
			</div>
		</div>
	)
}
