import { createContext, useState } from "react";

const OnBoardingContext = createContext(null);

const OnBoardingProvider = ({ children }) => {
	const [registerOption, setRegisterOption] = useState(false);

	return (
		<OnBoardingContext.Provider value={{ registerOption, setRegisterOption }}>
			{children}
		</OnBoardingContext.Provider>
	);
};

export { OnBoardingContext, OnBoardingProvider };
