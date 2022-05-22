export default function TracklistContainer({
	children
}: {
	children: React.ReactNode;
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
	);
}
