import { createContext, useState } from "react";
import countries from "../countries";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [registerOption, setRegisterOption] = useState(false);
	const country = countries.map((x) => ({ label: x.label, value: x.label }));

	const [formData, setFormData] = useState({
		user_name: "",
		date_of_birth: "",
		gender: "",
		country: "",
		city: "",
	});

	return (
		<AuthContext.Provider
			value={{ registerOption, setRegisterOption, setFormData, formData, country }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
