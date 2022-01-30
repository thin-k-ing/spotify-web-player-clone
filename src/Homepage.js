import First from "./components/First";
import Footer from "./components/Footer";
import Fourth from "./components/Fourth";
import Header from "./components/Header";
import Second from "./components/Second";
import Third from "./components/Third";
import "./styles.css";

const Homepage = () => {
	return (
		<div className="App">
			<Header />
			<First />
			<Second />
			<Third />
			<Fourth />
			<Footer />
		</div>
	);
};

export default Homepage;
