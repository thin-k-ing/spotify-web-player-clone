import React from "react";
import { Container } from "react-bootstrap";

const CLIENT = {
	ID: "7786349b54a845f0b0fc0b78de8a3ba9",
	SECRET: "cba2a2184f6f40c994774f6fd4906147",
};

const BASE_URL = "https://confident-boyd-50f277.netlify.app";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT.ID}&response_type=code&redirect_uri=${BASE_URL}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

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
