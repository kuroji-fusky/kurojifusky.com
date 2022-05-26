import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { BlogItems } from "@/components/StaticItems";
import { BlogPages } from "@/models/ParseMyAss";

export default function DiscographyPage({
	items
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="project-item-container">
			{items.map((item: BlogPages, i: number) => (
				<BlogItems key={i} items={item} />
			))}
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const articleDir = path.join("content/blog");

	const files = fs.readdirSync(articleDir);

	const projectItem = files.map((fileName: string) => {
		const slug = fileName.replace(".mdx", "");
		const article = fs.readFileSync(path.join("content/blog", fileName));
		const { data: metadata } = matter(article);
		return { slug, metadata };
	});

	return { props: { items: projectItem } };
};
