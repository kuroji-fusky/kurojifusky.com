import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { ProjectItems } from "@/components/StaticItems";
import { ProjectPages } from "@/models/ParseMyAss";

export default function ProjectPage({
	items
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="layout-item-wrapper px-6">
			<h1>Project Page</h1>
			<div className="project-item-container">
				{items.map((item: ProjectPages, i: number) => (
					<ProjectItems key={i} items={item} />
				))}
			</div>
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const articleDir = path.join("content/projects");

	const files = fs.readdirSync(articleDir);

	const projectItem = files.map((fileName: string) => {
		const slug = fileName.replace(".mdx", "");
		const article = fs.readFileSync(path.join("content/projects", fileName));
		const { data: metadata } = matter(article);
		return { slug, metadata };
	});

	return { props: { items: projectItem } };
};
