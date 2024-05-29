import { createContext, useState, useEffect } from "react";

export const AdviceContext = createContext();

export const AdviceProvider = ({ children }) => {
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

	const value = { advice, fetchAdvice };

	return <AdviceContext.Provider value={value}>{children}</AdviceContext.Provider>;
};
