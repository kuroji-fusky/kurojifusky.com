import styles from "@/styles/Roadmap.module.scss";

export default function RoadmapContainer({
	children
}: {
	children: React.ReactNode;
}) {
	return <div id={styles.container}>{children}</div>;
}

interface IRoadmapItemProps {
	title: string;
	children: React.ReactNode;
	img?: string;
	imgAlt?: string;
}

export function RoadmapItem({
	title,
	children,
	img,
	imgAlt
}: IRoadmapItemProps) {
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
