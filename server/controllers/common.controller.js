import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import Owner from "../models/owner.model.js";
import { generateTokenAndSetCookie } from "../lib/utils/generateTokenAndSetCookie.js";

export const getMe = async (req, res) => {
	try {
		const owner = await Owner.findById(req.user._id).select("-password");
		const user = await User.findById(req.user._id).select("-password");

		if (!owner && !user)
			return res.status(400).json({ error: "User not fount" });

		if (!owner && user) {
			res.status(200).json(user);
		}

		if (owner && !user) {
			res.status(200).json(owner);
		}
	} catch (error) {
		console.log("Error in getMe controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const login = async (res, req) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });
		const owner = await Owner.findOne({ email });

		if (!user && !owner)
			res
				.status(400)
				.json({ error: "User not found. Please create an account" });

		if (user && !owner) {
			const isPasswordCorrect = await bcrypt.compare(
				password,
				user?.password || ""
			);

			if (!isPasswordCorrect) {
				res.status(400).json({ error: "Password is not correct" });
			}

			generateTokenAndSetCookie(user._id, res);

			res.status(200).json({
				_id: user._id,
				user_name: user.user_name,
				email: user.email,
				following: user.following,
				profileImage: user.profileImage,
				age: user.age,
				city: user.city,
				gender: user.gender,
				country: user.country,
				role: user.role,
				phone_number: user.phone_number,
			});
		}

		if (owner && !user) {
			const isPasswordCorrect = await bcrypt.compare(
				password,
				owner?.password || ""
			);

			if (!isPasswordCorrect) {
				res.status(400).json({ error: "Password is not correct" });
			}

			generateTokenAndSetCookie(owner._id, res);

			res.status(200).json({
				_id: owner._id,
				first_name: owner.first_name,
				last_name: owner.last_name,
				email: owner.email,
				profileImage: owner.profileImage,
				role: owner.role,
				phone_number: owner.phone_number,
			});
		}
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Something went wrong. Please try again" });
	}
};

export const logout = async (res, req) => {
	try {
		res.cookie("accessToken", "", { maxAge: 0 });
		res.status(200).json({ success: true, message: "logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Something went wrong. Please try again" });
	}
};
