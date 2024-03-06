import { React } from "react";
import "./App.css";
import Finder from "./components/Finder";

function App() {
	return (
		<>
			<h1>Logo Finder</h1>
			<Finder />
			<a className="attribution" href="https://clearbit.com" target="_blank">
				Logos provided by Clearbit
			</a>
		</>
	);
}

export default App;
