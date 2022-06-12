import Image from "next/image"
import { ProjectPages } from "@/models/Interfaces"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome"
import Button from "@/components/partials/Button"

export function ProjectItems({ items }: { items: ProjectPages }) {
	const { slug, metadata } = items
	const { title, img, dateString, excerpt } = metadata
	return (
		<div id="static-item">
			<div id="static-item__img-wrapper">
				<Image layout="fill" objectFit="contain" src={img} alt={title} />
			</div>
			<div id="static-item__contents">
				<h3>{title}</h3>
				<span id="static-item__date">{dateString}</span>
				<div id="static-item__description">{excerpt}</div>
				<Button link={`/projects/${slug}`} className="mr-auto mt-1">
					Read More
					<FaIcon icon={faAngleRight} size="sm" className="ml-2" />
				</Button>
			</div>
		</div>
	)
}
