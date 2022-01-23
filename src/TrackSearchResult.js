export default function TrackSearchResult({ track, chooseTrack }) {
	function handlePlay() {
		chooseTrack(track);
	}

	return (
		<div
			className="d-flex m-2 align-items-center"
			style={{ cursor: "pointer" }}
			onClick={handlePlay}
		>
			<img
				src={track.albumUrl}
				alt="img"
				style={{ width: "64px", height: "64px", marginRight: "1rem" }}
			/>

			<div className="ml-3">
				<div>{track.title}</div>
				<div className="text-muted">{track.artist}</div>
			</div>
		</div>
	);
}
