import dynamic from "next/dynamic"
import Section from "./Section"
import { CardSkeleton } from "@/components/projects/ProjectCard"
import styles from "@/styles/Home.module.scss"
import { projects } from "@/models/Contents"

const ProjectCard = dynamic(() => import("@/components/projects/ProjectCard"), {
	loading: () => <CardSkeleton />,
	ssr: false
})

export default function Projects() {
	return (
		<div className="layout-seperator z-3 relative" id="projects">
			<div className="layout-item-wrapper">
				<Section heading="Projects" emojiKey="✨" sectionId={styles.showcase}>
					{projects.map((project, index) => (
						<ProjectCard
							key={index}
							projectTitle={project.projectTitle}
							description={project.description}
							img={project.img}
							techIcons={project.techIcons}
							repoLink={project.repoLink}
							pageLink={project.pageLink}
							extLink={project.extLink}
						/>
					))}
				</Section>
			</div>
		</div>
	)
}
