import styles from "@/styles/Roadmap.module.scss";

interface IRoadmapItemProps {
	title: string;
	children: React.ReactNode;
	img?: string;
  imgAlt?: string;
}

export default function RoadmapItem({title, children, img, imgAlt}: IRoadmapItemProps) {
	return (
		<div id={styles.item}>
			<div id={styles.img}>
				<img src={img} alt={imgAlt} />
			</div>
			<div id={styles.contents}>
				<h2>{title}</h2>
				{children}
			</div>
		</div>
	);
}
