import Owner from "../models/owner.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../lib/utils/generateTokenAndSetCookie.js";
import { generateOTP } from "../lib/utils/generateAndSendCode.js";

export const sendingEmailVCode = async (res, req) => {
	try {
		const { email } = req.body;

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailRegex.test(email)) {
			return res
				.status(400)
				.json({ success: false, error: "Invalid email format" });
		}

		const existingEmail = await Owner.findOne({ email });

		if (existingEmail) {
			return res
				.status(400)
				.json({ success: false, message: "Email is already taken" });
		}

		generateOTP(email, res);
	} catch (error) {
		console.log("Error in sendingVcode controller", error.message);
		res.status(500).json({ error: "Something went wrong. Please try again" });
	}
};

export const verifyOTP = async (res, req) => {
	const [token, code, email] = req.body;

	try {
		const verifiedOwner = jwt.verify(
			token,
			process.env.EMAIL_ACTIVATION_SECRET
		);

		if (verifiedOwner.email !== email)
			return res.status(400).json({
				success: false,
				error: "Unauthorized: Token is manipulated",
			});

		if (verifiedOwner.code !== code) {
			return res.status(400).json({
				success: false,
				error: "Code is not correct or expired",
			});
		} else {
			res.status(201).json({
				success: true,
				message: "Code verified succesfull",
			});
		}
	} catch (error) {
		console.log("Error in verifying the otp controller", error.message);
		res.status(500).json({ error: "Something went wrong. Please try again" });
	}
};

export const signUp = async (res, req) => {
	try {
		const { first_name, last_name, IdNumber, phone_number, password, email } =
			req.body;

		const isIdExist = await Owner.IdNumber.findOne({ IdNumber });

		if (isIdExist) {
			return res.status(400).json({
				error: "Your ID number already exist",
			});
		}

		if (password.length < 8) {
			return res
				.status(400)
				.json({ error: "Password must be at least 8 characters long" });
		}

		const salt = await bcrypt.genSalt(10);

		const hashPassword = await bcrypt.hash(password, salt);

		const newOwner = new Owner({
			first_name,
			last_name,
			email,
			IdNumber: Id,
			phone_number,
			password: hashPassword,
		});

		if (newOwner) {
			generateTokenAndSetCookie(newOwner._id, res);
			await newOwner.save();

			res.status(201).json({
				_id: newOwner._id,
				first_name: newOwner.first_name,
				last_name: newOwner.last_name,
				email: newOwner.email,
				phone_number: newOwner.phone_number,
				role: newOwner.role,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
	} catch (error) {
		console.log("Error in owner signup controller", error.message);
		res.status(500).json({ error: "Something went wrong. Please try again" });
	}
};

export const forgotPasswordEmail = async (res, req) => {
	try {
		const { email } = req.body;

		const user = await Owner.findOne({ email });

		if (!user)
			return res.status(400).json({
				success: false,
				message: "User not found. Please create an account",
			});

		generateOTP(email, res);
	} catch (error) {
		console.log("Error in owner forgotPasswordEmail controller", error.message);
		res.status(500).json({ error: "Something went wrong. Please try again" });
	}
};

export const verifyForgotPasswordCode = async (res, req) => {
	const [token, code, email] = req.body;

	try {
		const verifiedOwner = jwt.verify(
			token,
			process.env.EMAIL_ACTIVATION_SECRET
		);

		const user = await Owner.findOne({ email });

		if (user.email !== verifiedOwner.email)
			return res.status(400).json({
				success: false,
				error: "Invalid token",
			});

		if (verifiedOwner.code !== code) {
			return res.status(400).json({
				success: false,
				error: "Code is not correct or expired",
			});
		} else {
			res.status(201).json({
				success: true,
				message: "Code verified succesfull",
			});
		}
	} catch (error) {
		console.log(
			"Error in owner verifyForgotPasswordCode the otp controller",
			error.message
		);
		res.status(500).json({ error: "Something went wrong. Please try again" });
	}
};

export const resetPassword = async (res, req) => {
	const { email, new_password } = req.body;

	try {
		const user = await Owner.findOne({ email });

		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(new_password, salt);

		user = await user.save();
		user.password = null;
		return res.status(200).json(user);

	} catch (error) {
		console.log("Error in owner resetPassword controller", error.message);
		res.status(500).json({ error: "Something went wrong. Please try again" });
	}
};
