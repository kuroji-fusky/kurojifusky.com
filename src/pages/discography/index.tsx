import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { AlbumItems } from "@/components/StaticItems";
import { DiscographyPages } from "@/models/ParseMyAss";

export default function DiscographyPage({
	items
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div>
			<h1>Project Page</h1>
			<div className="project-item-container">
				{items.map((item: DiscographyPages, i: number) => (
					<AlbumItems key={i} items={item} />
				))}
			</div>
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const articleDir = path.join("content/discography");

	const files = fs.readdirSync(articleDir);

	const projectItem = files.map((fileName: string) => {
		const slug = fileName.replace(".mdx", "");
		const article = fs.readFileSync(path.join("content/discography", fileName));
		const { data: metadata } = matter(article);
		return { slug, metadata };
	});

	return { props: { items: projectItem } };
};
