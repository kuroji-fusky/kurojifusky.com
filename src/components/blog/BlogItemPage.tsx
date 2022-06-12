import Link from "next/link"
import { BlogPages } from "@/models/Interfaces"

export function BlogItems({ items }: { items: BlogPages }) {
	const { slug, metadata } = items
	const { title, dateString, excerpt, tags } = metadata
	return (
		<div>
			<div>{title}</div>
			<div>{dateString}</div>
			<div>{excerpt}</div>
			<div>{tags}</div>
			<Link href={`/blog/${slug}`} passHref>
				<a>Read More</a>
			</Link>
		</div>
	)
}
