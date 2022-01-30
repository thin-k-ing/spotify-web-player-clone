const CLIENT = {
	ID: "7786349b54a845f0b0fc0b78de8a3ba9",
	SECRET: "cba2a2184f6f40c994774f6fd4906147",
};

const BASE_URL = "https://confident-boyd-50f277.netlify.app";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT.ID}&response_type=code&redirect_uri=${BASE_URL}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

const Header = (props) => {
	return (
		<div className="header">
			<div className="headerItem">
				<h2>
					<i class="fab fa-spotify fa-lg"></i> Spotify
				</h2>
			</div>

			<div className="headerItem navBar">
				<a
					href="https://www.spotify.com/in-en/premium/"
					className="navItem"
				>
					Premium
				</a>
				<a href={AUTH_URL} className="navItem">
					Log in
				</a>
			</div>
		</div>
	);
};

export default Header;
