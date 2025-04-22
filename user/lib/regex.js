export const emailRegex = (email, setError) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (email && !emailRegex.test(email)) {
		setError("Please enter a valid email address");
	} else {
		setError("");
	}
};

export const passwordRegex = (password, setPasswordError) => {
	const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

	if (!passwordRegex.test(password)) {
		return setPasswordError(
			"Password must container letters, number, and special characters and it must be at least 8 characters"
		);
	} else {
		setPasswordError("");
	}
};
