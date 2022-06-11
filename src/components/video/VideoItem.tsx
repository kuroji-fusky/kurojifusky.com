import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { VideoItemProps } from "@/models/Interfaces"
import { YoutubeThumbnail } from "@/components/partials/YoutubeComponent"
import styles from "@/styles/Home.module.scss"

export function VideoItem({ id, title, description, date }: VideoItemProps) {
	const { ref, inView } = useInView({
		threshold: 0,
		triggerOnce: true,
		delay: 600,
		rootMargin: "-150px 0px -200px 0px"
	})

	return (
		<div
			ref={ref}
			className={
				inView ? styles["io-viewport-outside"] : styles["io-viewport-enter"]
			}
		>
			<div
				id={styles["video-item-container"]}
				itemScope
				itemType="http://schema.org/CreativeWork"
			>
				<Link href={`https://youtu.be/${id}`} passHref>
					<a>
						<YoutubeThumbnail id={id} alt={`Thumbnail for ${title}`} />
					</a>
				</Link>
				<article id={styles["video-item-details"]}>
					<h3>{title}</h3>
					<p id={styles["video-description"]}>{description}</p>
					<p>
						Filmed in: <span itemProp="datePublished">{date}</span>
					</p>
				</article>
			</div>
		</div>
	)
}
