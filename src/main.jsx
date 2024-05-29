import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AdviceProvider } from "./context/advice.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AdviceProvider>
			<App />
		</AdviceProvider>
	</React.StrictMode>
);
