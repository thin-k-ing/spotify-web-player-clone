import React, { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player({ accessToken, trackUri }) {
	const [play, setPlay] = useState(false);

	useEffect(() => {
		setPlay(true);
	}, [trackUri]);

	if (!accessToken) return <div></div>;
	return (
		<SpotifyPlayer
			showSaveIcon
			token={accessToken}
			uris={trackUri ? [trackUri] : []}
			callback={(state) => {
				if (!state.isPlaying) setPlay(false);
			}}
			play={play}
		/>
	);
}
