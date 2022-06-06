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

export function UnderConstruction() {
	return (
		<Card
			title="This page is under construction"
			description="Some or most of the content is either missing or currently in the works!"
		/>
	)
}

export function UnderConstructionArticle() {
	return (
		<Card
			title="This article is under construction"
			description="Some or most of the content is either missing or currently in the works!"
		/>
	)
}

export function AnyMistakes() {
	return (
		<Card
			title="Any mistakes?"
			description="If you have any questions or concerns, you may fix it by contacting me on Twitter or GitHub!"
		/>
	)
}
