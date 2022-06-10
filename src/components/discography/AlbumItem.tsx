import Image from "next/image"
import styles from "@/styles/AlbumItem.module.scss"
import Link from "next/link"
import { AlbumItemProps } from "@/models/Interfaces"

export default function AlbumItem({
	title,
	albumType,
	cover,
	date
}: AlbumItemProps) {
	return (
		<div className={styles["album-container"]}>
			<Link href={`/discography/${title.toLowerCase().replace(/\s+/g, "-")}`}>
				<a className={styles["album-aside"]}>
					<Image
						layout="fill"
						src={`/static/album-covers/${cover}`}
						alt={`Album cover for ${title}`}
						className="rounded-xl"
					/>
				</a>
			</Link>
			<div id={styles.contents}>
				<h3>{title}</h3>
				<ul>
					<li>{albumType}</li>
					<li>{date}</li>
				</ul>
			</div>
		</div>
	)
}
