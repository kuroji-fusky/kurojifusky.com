import Image from "next/image"
import styles from "@/styles/AlbumItem.module.scss"

interface IAlbumItemProps {
	title: string
	albumType: string
	cover: string
	date: string
	className?: string
}

export default function AlbumItem({
	title,
	albumType,
	cover,
	date,
	className
}: IAlbumItemProps) {
	return (
		<div className={`${styles["album-container"]} ${className}`}>
			<div className={styles["album-aside"]}>
				<Image
					layout="fill"
					src={`/static/album-covers/${cover}`}
					alt={`Album cover for ${title}`}
					className="rounded-xl"
				/>
			</div>
			<div id={styles.contents}>
				<h3>{title}</h3>
				<ul>
					{albumType === "album" ? (
						<li>Album</li>
					) : albumType === "ep" ? (
						<li>EP</li>
					) : albumType === "single" ? (
						<li>Single</li>
					) : (
						<li>Error</li>
					)}
					<li>&bull;</li>
					<li>{date}</li>
				</ul>
			</div>
		</div>
	)
}
