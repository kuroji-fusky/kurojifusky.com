import { faInfoCircle, faTimesCircle, faW, faWarning } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface NoticeProps {
	title?: string
	content?: string
	type?: "warning" | "error"
}

export default function Notice(props: NoticeProps) {
	const states = () => {
		const statesObj = {
			info: {
				CSS: "bg-sona-royalblue-500 border-sona-royalblue-300",
				icon: faInfoCircle
			},
			warning: {
				CSS: "bg-yellow-500 border-yellow-300",
				icon: faWarning
			},
			error: {
				CSS: "bg-red-500 border-red-300",
				icon: faTimesCircle
			},
		}

		return statesObj[props.type ?? "info"]
	}

	return (
		<div
			id="notice"
			className={`px-6 py-4 flex gap-x-4 items-center rounded-md border bg-opacity-20 ${states().CSS}`}
		>
			<FontAwesomeIcon icon={states().icon} size={props.title !== undefined ? "xl" : undefined} />
			<div className="flex flex-col gap-y-0.5">
				<strong className="block">{props.title}</strong>
				<span>{props.content}</span>
			</div>
		</div>
	)
}
