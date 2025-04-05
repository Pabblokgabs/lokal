export const emailRegex = (email, setError) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!emailRegex.test(email)) {
		setError("Invalid email format");
	} else {
		setError("");
	}
};

export const passwordRegex = (password, setError) => {
	const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

	if (passwordRegex.test(password)) {
		setError(null);
	} else {
		setError(
			"Password must container letters, number, and special characters and at least 8 characters long"
		);
	}
};
