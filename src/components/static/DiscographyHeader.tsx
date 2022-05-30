import styles from "@/styles/StaticHeader.module.scss";
import Image from "next/image";

interface IDiscographyHeaderProps {
	title: string;
	img?: string;
	backdropImg?: string;
	albumType: string;
	length: string;
	dateString: string;
  genre: string;
	copyright: string;
	trackNum: number;
}

export default function DiscographyHeader({
	img,
	backdropImg,
	title,
	albumType,
	trackNum,
	length,
	dateString,
	copyright,
  genre
}: IDiscographyHeaderProps) {
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
					className="bg-skycyan-700 uppercase"
					id={styles["static-header-tag"]}
					style={{ fontSize: "85%" }}
				>
					{albumType}
				</span>
				<h2>{title}</h2>
				<div className="flex gap-x-2">
					<span className="bd__item-title">Release date</span>
					<span>{dateString}</span>
				</div>
				<div className="flex gap-x-2">
					<span className="bd__item-title">Genre</span>
					<span>{genre}</span>
				</div>
				<div className="flex gap-x-2">
					<span className="bd__item-title">Track count</span>
					<span>{trackNum}</span>
				</div>
				<div className="flex gap-x-2">
					<span className="bd__item-title">Length</span>
					<span>{length}</span>
				</div>
				<span>&copy; {copyright}</span>
			</div>
		</div>
	);
}
