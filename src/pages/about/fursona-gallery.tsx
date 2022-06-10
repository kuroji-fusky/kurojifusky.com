import DefaultLayout from "@/layouts/Default"
import SEOHead from "@/components/partials/SEOHead"
import Image from "next/image"

export default function FursonaGallery() {
	return (
		<>
			<SEOHead title="Fursona Gallery" description="Drawings of me lol" />
			<div className="w-full my-[4.5rem] grid place-items-center">
				<h2>Fursona Gallery</h2>
				<span>Cause why not lol</span>
			</div>
			<div className="layout-item-wrapper grid grid-cols-5 gap-4">
				{/*// TODO: Make a for loop that loops from the public/static folder */}
				<GalleryItem
					img="/static/avatars/01.jpg"
					caption="First iteration; drawn beautifully on June 2020"
				/>
				<GalleryItem
					img="/static/avatars/02.png"
					caption="Traced in Photoshop; July 2021"
				/>
				<GalleryItem
					img="/static/avatars/03.png"
					caption="Purple eyes and glasses lol"
				/>
				<GalleryItem
					img="/static/avatars/04.png"
					caption="Redrawn in Illustrator; August 2021"
				/>
				<GalleryItem
					img="/static/avatars/05.png"
					caption="Y e s; September 2021"
				/>
				<GalleryItem
					img="/static/avatars/06.png"
					caption="Formal pose; November 2021"
				/>
				<GalleryItem
					img="/static/avatars/07.png"
					caption="Bigger glasses; December 2021"
				/>
				<GalleryItem
					img="/static/avatars/08.png"
					caption="Blushy virgin; January 2022"
				/>
				<GalleryItem
					img="/static/avatars/08_2.png"
					caption="Second channel variant"
				/>
				<GalleryItem
					img="/static/avatars/09.png"
					caption="Asexual flag minus blushing; June 2022"
				/>
			</div>
		</>
	)
}

export function GalleryItem({
	img,
	caption
}: {
	img: string
	caption: string
}) {
	return (
		<figure className="flex flex-col gap-y-2 items-center text-center">
			<div className="relative h-[16rem] w-[16rem]">
				<Image
					layout="fill"
					objectFit="contain"
					className="rounded-xl"
					src={img}
					alt={caption}
				/>
			</div>
			<figcaption>{caption}</figcaption>
		</figure>
	)
}

FursonaGallery.PageLayout = DefaultLayout
