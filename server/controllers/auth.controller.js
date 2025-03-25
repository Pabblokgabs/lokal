import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../lib/utils/generateTokenAndSetCookie.js";
import { generateOTP } from "../lib/utils/generateAndSendCode.js";

export const sendingEmailOTP = async (res, req) => {
	try {
		const { email } = req.body;

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailRegex.test(email)) {
			return res
				.status(400)
				.json({ success: false, error: "Invalid email format" });
		}

		const existingEmail = await User.findOne({ email });

		if (existingEmail) {
			return res
				.status(400)
				.json({ success: false, message: "Email is already taken" });
		}

		generateOTP(email, res);
	} catch (error) {
		console.log("Error in sendingEmailOtp controller", error.message);
		res.status(500).json({ error: "Something went wrong. Please try again" });
	}
};

export const verifyOTP = async (res, req) => {
	const [token, code, email] = req.body;

	try {
		const verifiedUser = jwt.verify(token, process.env.EMAIL_ACTIVATION_SECRET);

		if (verifiedUser.email !== email)
			return res.status(400).json({
				success: false,
				error: "Code is not correct",
			});

		if (verifiedUser.code !== code) {
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

export const registration = async (res, req) => {
	try {
		const { email, user_name, password, age, country, city, gender, avatar } =
			req.body;
		const phone_number = req.body?.phone_number;
		let { profile_image } = req.body;

		if (password.length < 8) {
			return res
				.status(400)
				.json({ error: "Password must be at least 8 characters long" });
		}

		if (profile_image) {
			const uploaded = await cloudinary.uploader.upload(profile_image);
			profile_image = uploaded.secure_url;
		}

		const salt = await bcrypt.genSalt(10);

		const hashPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			email,
			user_name,
			phone_number: phone_number || "",
			age,
			country,
			city,
			gender,
			password: hashPassword,
			profile_image,
			avatar,
		});

		if (newUser) {
			generateTokenAndSetCookie(newUser._id, res);
			await newUser.save();

			res.status(201).json({
				_id: newUser._id,
				user_name: newUser.user_name,
				email: newUser.email,
				following: newUser.following,
				profileImage: newUser.profileImage,
				age: newUser.age,
				city: newUser.city,
				gender: newUser.gender,
				country: newUser.country,
				role: newUser.role,
				phone_number: newUser.phone_number,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Something went wrong. Please try again" });
	}
};

export const getMe = async (req, res) => {
	try {
		const user = await User.findById(req.user._id).select("-password");
		res.status(200).json(user);
	} catch (error) {
		console.log("Error in getMe controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
