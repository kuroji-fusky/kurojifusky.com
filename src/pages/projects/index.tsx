import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { ProjectItems } from "@/components/static/StaticItems"
import { ProjectPages } from "@/models/Interfaces"
import DefaultLayout from "@/layouts/Default"

export default function ProjectPage({
	items
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="layout-item-wrapper px-6 mt-20 mb-7">
			<h1 className="my-10 text-center">Projects</h1>
			<div className="item-container">
				{items.map((item: ProjectPages, i: number) => (
					<ProjectItems key={i} items={item} />
				))}
			</div>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const articleDir = path.join("content/projects")

	const files = fs.readdirSync(articleDir)

	const projectItem = files.map((fileName: string) => {
		const slug = fileName.replace(".mdx", "")
		const article = fs.readFileSync(path.join("content/projects", fileName))
		const { data: metadata } = matter(article)
		return { slug, metadata }
	})

	return { props: { items: projectItem } }
}

ProjectPage.PageLayout = DefaultLayout
