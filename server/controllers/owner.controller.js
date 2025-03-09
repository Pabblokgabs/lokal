import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";

import Owner from "../models/owner.model.js";
import { generateOTP } from "../lib/utils/generateAndSendCode.js";

export const getOwnerProfile = async (res, req) => {
	const { id } = req.params;

	try {
		const user = await Owner.findOne({ id }).select("-password");

		if (!user) {
			return res.status(404).json({ success: false, error: "User not found" });
		}

		res.status(200).json(user);
	} catch (error) {
		console.log("Error in getUserProfile", error.message);
		res.status(500).json({ error: error.message });
	}
};

export const updateOwnerProfile = async (res, req) => {
	const { current_password, new_password } = req.body;
	const ownerId = req.user._id;

	try {
		let owner = await Owner.findById({ ownerId });

		if (!owner) return res.status(400).json({ error: "User not found" });

		if (current_password && !new_password)
			return res
				.status(400)
				.json({ error: "You need to provide a new password" });

		if (!current_password && new_password)
			return res
				.status(400)
				.json({ error: "You need to provide your current password" });

		if (current_password === new_password)
			return res.status(400).json({
				error: "Your new password must not be the same as current password",
			});

		if (current_password && new_password) {
			const isPasswordMatch = await bcrypt.compare(
				current_password,
				owner.password
			);

			if (!isPasswordMatch)
				return res
					.status(400)
					.json({ error: "Current password is not correct" });

			if (new_password.length < 8)
				return res
					.status(400)
					.json({ error: "Your new password must be at least 8 characters" });

			const salt = await bcrypt.genSalt(10);
			owner.password = await bcrypt.hash(new_password, salt);
		}

		owner.password = new_password || owner.password;

		owner = await owner.save();
		owner.password = null;
		return res.status(200).json(owner);
	} catch (error) {
		console.log("Error in updateOwnerProfile", error.message);
		res.status(500).json({ error: error.message });
	}
};

export const changeEmailOTP = async (res, req) => {
	const { current_email, new_email } = req.body;

	try {
		const owner = Owner.findOne({ email: current_email });

		if (!owner) return res.status(400).json({ error: "Invalid email address" });

		if (current_email === new_email)
			res.status(400).json({
				error:
					"New email address must not be the same as current email address",
			});

		if (current_email === owner.email) {
			generateOTP(current_email, res);
		} else {
			res.status(400).json({ error: "Invalid email address" });
		}
	} catch (error) {
		console.log("Error in changeEmailOTP", error.message);
		res.status(500).json({ error: error.message });
	}
};

export const verifyChangeEmailOtp = async (res, req) => {
	const { token, code, new_email } = req.body;
	const ownerId = req.user._id;

	try {
		const verifiedUser = jwt.verify(token, process.env.EMAIL_ACTIVATION_SECRET);

		if (verifiedUser.token !== code) {
			return res.status(400).json({
				success: false,
				error: "Code is not correct or expired",
			});
		} else {
			let owner = await Owner.findById({ ownerId });

			owner.email = new_email || owner.email;

			owner = await owner.save();
			owner.password = null;
			return res.status(200).json(owner);
		}
	} catch (error) {
		console.log("Error in verifychangeEmailOTP", error.message);
		res.status(500).json({ error: error.message });
	}
};

export const changePhoneNumber = async (res, req) => {
	const { new_number, password } = req.body;
	const ownerId = user.res._id;

	try {
		let owner = await Owner.findById({ ownerId });
		if (!owner) return res.status(400).json({ error: "User not found" });

		const isPasswordMatch = await bcrypt.compare(password, owner.password);

		if (!isPasswordMatch) {
			return res.status(400).json({ error: "Incorrect password" });
		} else {
			owner.phone_number = new_number || owner.phone_number;

			owner = await owner.save();
			owner.password = null;
			return res.status(200).json(owner);
		}
	} catch (error) {
		console.log("Error in changePhoneNumber", error.message);
		res.status(500).json({ error: error.message });
	}
};
