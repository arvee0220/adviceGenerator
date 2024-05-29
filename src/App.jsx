import { useContext } from "react";
import { AdviceContext } from "./context/advice.context";
import "./App.scss";

const App = () => {
	const { advice, fetchAdvice } = useContext(AdviceContext);

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
