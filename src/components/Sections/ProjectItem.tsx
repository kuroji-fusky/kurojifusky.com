import { cloudinary } from "@/utils/ImgProviders";
import LazyImg from "../LazyImg";
import projStyles from "../projects.module.scss";
import { FlatBtn } from "./ProjectsSection";

interface ProjectItemProps {
	spotlight?: boolean;
	hideOnMobile?: boolean;
	title: string;
	img?: string;
	description: NonNullable<React.ReactNode> | string;
	code?: string;
	project?: string;
}
export function ProjectItem(props: ProjectItemProps) {
	return (
		<div className={projStyles[props.spotlight ? "item-spotlight" : "item"]}>
			<div
				id="img-wrapper"
				className={`
				w-full md:w-[35%] lg:w-full xl:w-[35%]
				h-[15rem] md:h-auto ${!props.spotlight ? "lg:h-[15rem]" : "lg:h-full"} xl:h-auto
				`}
			>
				<div className="relative h-full w-full">
					<LazyImg
						src={props.img ?? cloudinary({ rootDir: "", fileName: "sample.jpg" })}
						objectFit="cover"
						alt={`Image for ${props.title} - ${props.description}`}
						className="overflow-hidden rounded-lg" />
				</div>
			</div>
			<aside className="w-full md:w-[65%] lg:w-full xl:w-[65%] flex flex-col gap-y-1 lg:gap-y-3 lg:h-auto xl:h-full">
				<h2
					className={`text-2xl ${!props.spotlight ? "lg:text-3xl" : "lg:text-3xl xl:text-[2.35rem]"}`}
				>
					{props.title}
				</h2>
				<p
					className={props.spotlight ? "text-base xl:text-lg mt-1.5 h-full" : "h-full"}
				>
					{props.description}
				</p>
				<div className="flex gap-4">
					{props.code && (
						<FlatBtn type="source" link={`https://github.com/${props.code}`} />
					)}
					{props.project && <FlatBtn type="deployment" link={props.project} />}
				</div>
			</aside>
		</div>
	);
}
