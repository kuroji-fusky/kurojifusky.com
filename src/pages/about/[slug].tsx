import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import SEOHead from "@/partials/SEOHead"
import RoadmapContainer, {
	RoadmapItem
} from "@/components/roadmaps/RoadmapContainer"
import DefaultLayout from "@/layouts/Default"

const components = {
	SEOHead,
	RoadmapContainer,
	RoadmapItem
}

export default function SkepfuskySlug({
	source
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="px-6 rendered-static-content">
			<MDXRemote {...source} components={components} />
		</div>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const articlePath = path.join("content/skepfusky")
	const files = fs.readdirSync(articlePath)
	const paths = files.map((fileName: string) => ({
		params: { slug: fileName.replace(".mdx", "") }
	}))

	return {
		paths,
		fallback: false
	}
}

type Params = {
	[param: string]: any
}

export const getStaticProps: GetStaticProps<Params> = async ({
	params: { slug }
}: Params) => {
	const articlePath: any = fs.readFileSync(
		path.join("content/skepfusky", `${slug}.mdx`)
	)

	const { data: metaData, content } = matter(articlePath)
	const mdxSrc = await serialize(content, { scope: metaData })
	return { props: { source: mdxSrc } }
}

SkepfuskySlug.PageLayout = DefaultLayout
