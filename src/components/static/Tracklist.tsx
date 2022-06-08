export default function TracklistContainer({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div id="tracklist">
			<div id="tracklist-head">
				<strong className="track-number head">#</strong>
				<strong className="track-title head">Track title</strong>
				<strong className="track-length head">Length</strong>
			</div>
			{children}
		</div>
	)
}

interface ITracklistItemProps {
	trackNumber: number
	title: string
	length: string
}

export function TracklistItem({
	trackNumber,
	title,
	length
}: ITracklistItemProps) {
	return (
		<div id="tracklist-item">
			<div className="track-number">{trackNumber}</div>
			<div className="track-title">{title}</div>
			<div className="track-length">{length}</div>
		</div>
	)
}
