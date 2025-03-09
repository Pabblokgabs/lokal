import jwt from "jsonwebtoken";

export const verifyOTP = async (token, code, res) => {
	const verifiedUser = jwt.verify(token, process.env.EMAIL_ACTIVATION_SECRET);

	if (verifiedUser.token !== code) {
		return res.status(400).json({
			success: false,
			message: "Code is not correct or expired",
		});
	} else {
		res.status(201).json({
			success: true,
			message: "Code verified succesfull",
		});
	}
};
