interface ITracklistItemProps {
  trackNumber: number;
  title: string;
  length: string;
}

export default function TracklistItem({trackNumber, title, length}: ITracklistItemProps) {
  return(
    <div id="tracklist-item">
      <div className="track-number">{trackNumber}</div>
      <div className="track-title">{title}</div>
      <div className="track-length">{length}</div>
    </div>
  )
};
