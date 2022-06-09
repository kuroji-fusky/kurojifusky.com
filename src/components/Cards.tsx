import styles from "@/styles/Cards.module.scss"

interface ICardProps {
	emojiKey?: string
	title: string
	description: string
}

export default function Card({ emojiKey, title, description }: ICardProps) {
	return (
		<div id={styles.container}>
			{emojiKey && <span id={styles.icon}>{emojiKey}</span>}
			<div id={styles.contents}>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	)
}
