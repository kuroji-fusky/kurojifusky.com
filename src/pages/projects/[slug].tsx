import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import ProjectHeader from "@/components/ProjectHeader";
import SEOHead from "@/components/SEOHead";

const components = { ProjectHeader, SEOHead };

export default function Project({
	source
}: {
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
}): InferGetStaticPropsType<typeof getStaticProps> {
	return (
		<div className="layout-item-wrapper">
			<MDXRemote {...source} components={components} />
		</div>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const articlePath = path.join("content/projects");
	const files = fs.readdirSync(articlePath);
	const paths = files.map((fileName: string) => ({
		params: { slug: fileName.replace(".mdx", "") }
	}));

	return {
		paths,
		fallback: false
	};
};

type Params = {
	[param: string]: any;
};

export const getStaticProps: GetStaticProps<Params> = async ({
	params: { slug }
}: Params) => {
	const articlePath: any = fs.readFileSync(path.join("content/projects", `${slug}.mdx`)
	);

	const { data: metaData, content } = matter(articlePath);
	const mdxSrc = await serialize(content, { scope: metaData });
	return { props: { source: mdxSrc } };
};
