import styles from "@/styles/StaticHeader.module.scss"
import Image from "next/image"

interface IProjectHeaderProps {
	title: string
	dateString: string
	backdropImg?: string | any
	img?: string
}

export default function ProjectHeader({
	title,
	dateString,
	img,
	backdropImg
}: IProjectHeaderProps) {
	return (
		<div id={styles["static-header"]}>
			<div id={styles.backdrop}>
				{backdropImg && (
					<Image
						id={styles["backdrop-img"]}
						layout="fill"
						objectFit="cover"
						src={backdropImg}
						alt={`Backdrop Image for ${title}`}
					/>
				)}
			</div>
			<div id={styles["image-wrapper"]}>
				<img src={img} alt={`Image for ${title}`} />
			</div>
			<div id={styles["static-header-contents"]}>
				<span
					className="bg-borahaealt-700"
					id={styles["static-header-tag"]}
					style={{ fontSize: "85%" }}
				>
					PROJECT
				</span>
				<h2>{title}</h2>
				<div className="flex gap-x-2">
					<span className="bd__item-title">Date started</span>
					<span>{dateString}</span>
				</div>
			</div>
		</div>
	)
}
