import { useState, useEffect } from "react";
import "./App.scss";

const App = () => {
	const [advice, setAdvice] = useState("");

	const fetchAdvice = async () => {
		try {
			const fetchAdvice = await fetch("https://api.adviceslip.com/advice");
			const adviceRes = await fetchAdvice.json();

			setAdvice(adviceRes.slip.advice);
		} catch (error) {
			console.log("Failed to get advice: ", error);
		}
	};

	useEffect(() => {
		fetchAdvice();
	}, []);

	return (
		<>
			<div className="app">
				<div className="card">
					<h1 className="advice">{advice}</h1>
					<button onClick={() => fetchAdvice()}>Get an Advice</button>
				</div>
			</div>
		</>
	);
};

export default App;
