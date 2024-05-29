import { useContext } from "react";
import { AdviceContext } from "./context/advice.context";
import "./App.scss";

const App = () => {
	const { advice, fetchAdvice } = useContext(AdviceContext);

	const clickHandler = () => fetchAdvice();

	return (
		<>
			<div className="app">
				<div className="card">
					<h1 className="advice">{advice}</h1>
					<button onClick={clickHandler}>Get an Advice</button>
				</div>
			</div>
		</>
	);
};

export default App;
