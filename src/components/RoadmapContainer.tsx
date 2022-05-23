import styles from "@/styles/Roadmap.module.scss";

export default function RoadmapContainer({
	children
}: {
	children: React.ReactNode;
}) {
	return <div id={styles.container}>{children}</div>;
}
