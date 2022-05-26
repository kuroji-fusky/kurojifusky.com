import { Posts } from "@/models/Posts";
import Link from "next/link";

export default function StaticItems({ post }: { post: Posts }) {
	const { slug, metadata } = post;
	const { title, img, dateString,  excerpt } = metadata;
	return (
		<div>
			<div>{title}</div>
      <img src={img} alt={title} />
			<div>{dateString}</div>
			<div>{excerpt}</div>
      <Link href={`/projects/${slug}`} passHref>
        <a>Read More</a>
      </Link>
		</div>
	);
}
