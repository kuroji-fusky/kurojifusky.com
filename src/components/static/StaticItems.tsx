import { BlogPages, DiscographyPages, ProjectPages } from "@/models/ParseMyAss"
import { faAngleRight, faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"

export function ProjectItems({ items }: { items: ProjectPages }) {
	const { slug, metadata } = items
	const { title, img, dateString, excerpt } = metadata
	return (
		<div id="static-item">
			<div id="static-item__img-wrapper">
				<Image layout="fill" objectFit="contain" src={img} alt={title} />
			</div>
			<div id="static-item__contents">
				<h3>{title}</h3>
				<span id="static-item__date">{dateString}</span>
				<div id="static-item__description">{excerpt}</div>
				<Link href={`/projects/${slug}`} passHref>
					<a className="link-btn mr-auto mt-1">
						Read More
						<FaIcon icon={faAngleRight} size="sm" className="ml-2" />
					</a>
				</Link>
			</div>
		</div>
	)
}

export function AlbumItems({ items }: { items: DiscographyPages }) {
	const { slug, metadata } = items
	const { title, albumType, length, releaseDate, year, albumArt, trackNum } =
		metadata
	return (
		<div>
			<div>{title}</div>
			<img src={albumArt} alt={title} />
			<div>{releaseDate}</div>
			<div>{year}</div>
			<div>{length}</div>
			<div>{albumType}</div>
			<div>{trackNum} track(s)</div>
			<Link href={`/discography/${slug}`} passHref>
				<a>Read More</a>
			</Link>
		</div>
	)
}

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
