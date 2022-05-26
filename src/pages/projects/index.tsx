import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import StaticItems from "@/components/StaticItems";
import { Posts } from "@/models/Posts";

export default function ProjectPage({
	posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div>
			<h1>Project Page</h1>
			<div className="project-item-container">
				{posts.map((post: Posts, i: number) => (
					<StaticItems key={i} post={post} />
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
		const { data: metadata, content } = matter(article);
		return { slug, metadata };
	});

	return { props: { posts: projectItem } };
};
