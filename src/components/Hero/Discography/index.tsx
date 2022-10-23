import { useRef } from "react"
import { HomeSection } from "@/components/Sections"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { discography } from "../HeroContents"
import { DiscographyItem } from "./DiscographyItem"

export function Discography() {
	const rackRef = useRef<HTMLDivElement>(null)

	const node = rackRef.current
	const scrollLeft = () => {
		if (node) {
			rackRef.current.scrollBy({
				top: 0,
				left: -320,
				behavior: "smooth"
			})
		}
	}

	const scrollRight = () => {
		if (node) {
			rackRef.current.scrollBy({
				top: 0,
				left: 320,
				behavior: "smooth"
			})
		}
	}

	return (
		<HomeSection
			id="music"
			title="Discography"
			expandContent
			className="relative"
		>
			<div
				ref={rackRef}
				className="grid grid-flow-col overflow-x-auto gap-x-4 snap-x snap-mandatory scrollbar-none px-[3rem] 2xl:px-[19.5rem]" >
				<div className="absolute left-0 right-0 top-[45%] px-10 flex justify-between max-w-screen-2xl mx-auto">
					<button
						className="z-4 my-auto py-10 px-4 rounded-md bg-sona-borahaealt-900 hover:bg-sona-borahaealt-700 transition-color duration-300 shadow-2xl shadow-black"
						onClick={scrollLeft}
					>
						<FontAwesomeIcon icon={faAngleLeft} size="xl" />
					</button>
					<button
						className="z-4 my-auto py-10 px-4 rounded-md bg-sona-borahaealt-900 hover:bg-sona-borahaealt-700 transition-color duration-300 shadow-2xl shadow-black"
						onClick={scrollRight}
					>
						<FontAwesomeIcon icon={faAngleRight} size="xl" />
					</button>
				</div>
				<div
					className="absolute top-[3.5rem] inset-0 flex justify-between pointer-events-none"
					aria-hidden="true"
				>
					<div className="relative z-3 top-0 bottom-0 w-[275px] bg-gradient-to-l from-transparent to-borahae-dark"></div>
					<div className="relative z-3 top-0 bottom-0 w-[275px] bg-gradient-to-r from-transparent to-borahae-dark"></div>
				</div>
				{discography.slice(0, 9).map((item, index) => (
					<DiscographyItem
						key={index}
						title={item.name}
						release={item.release}
						image={item.image}
						type={item.type}
					/>
				))}
			</div>
		</HomeSection>
	)
}
