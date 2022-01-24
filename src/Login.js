import React from "react";
import { Container } from "react-bootstrap";

const BASE_URL = "https://confident-boyd-50f277.netlify.app";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=60edc3391b794b7aa3fe52f5a8ef6511&response_type=code&redirect_uri=${BASE_URL}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

export default function Login() {
	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{ minHeight: "100vh" }}
		>
			<a className="btn btn-success btn-lg" href={AUTH_URL}>
				Login with Spotify
			</a>
		</Container>
	);
}
