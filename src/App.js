import Login from "./Login";
import Dashboard from "./Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

export const CLIENT = {
	id: "7786349b54a845f0b0fc0b78de8a3ba9",
	secret: "cba2a2184f6f40c994774f6fd4906147",
};

const code = new URLSearchParams(window.location.search).get("code");

function App() {
	return code ? <Dashboard code={code} /> : <Login />;
}

export default App;
