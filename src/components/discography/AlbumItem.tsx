import Image from "next/image"
import Link from "next/link"
import { AlbumItemProps, DiscographyPages } from "@/models/Interfaces"
import styles from "@/styles/AlbumItem.module.scss"

export function AlbumItem({
	albumTitle,
	albumType,
	albumCover,
	releaseDate
}: AlbumItemProps) {
	return (
		<div className={styles["album-container"]}>
			<Link
				href={`/discography/${albumTitle.toLowerCase().replace(/\s+/g, "-")}`}
			>
				<a className={styles["album-aside"]}>
					<Image
						layout="fill"
						blurDataURL={`/static/album-covers/${albumCover}`}
						src={`/static/album-covers/${albumCover}`}
						alt={`Album cover for ${albumTitle}`}
						className="rounded-xl"
					/>
				</a>
			</Link>
			<div id={styles.contents}>
				<h3>{albumTitle}</h3>
				<ul>
					<li>{albumType}</li>
					<li>{releaseDate}</li>
				</ul>
			</div>
		</div>
	)
}

export function AlbumItemPage({ items }: { items: DiscographyPages }) {
	const { slug, metadata } = items
	const {
		albumTitle,
		albumType,
		length,
		releaseDate,
		year,
		albumCover,
		trackNum
	} = metadata
	return (
		<div>
			<div>{albumTitle}</div>
			<img src={albumCover} alt={albumTitle} />
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
