import React, { CSSProperties } from "react"
import styles from "@/styles/Home.module.scss"

interface ISectionProps {
	heading: string
	emojiKey: string
	sectionClassName?: string
	sectionStyles?: CSSProperties
	sectionId?: string
	children?: any
}

export default function Section({
	heading,
	emojiKey = "😳",
	sectionClassName,
	sectionStyles,
	sectionId,
	children
}: ISectionProps) {
	return (
		<section className={styles["section"]}>
			<div className={styles["section-header"]}>
				<h3 style={{ "--emoji-key": `"${emojiKey}"` } as React.CSSProperties}>
					{heading}
				</h3>
			</div>
			<div className={sectionClassName} style={sectionStyles} id={sectionId}>
				{children}
			</div>
		</section>
	)
}
