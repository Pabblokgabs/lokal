import bcrypt from "bcryptjs";
import { v2 as cloudinary } from "cloudinary";

import User from "../models/user.model.js";
import Spot from "../models/spot.model.js";
import FollowingNotification from "../models/notification.model.js";
import SpotPost from "../models/spot.post.model.js";

export const getSpotProfile = async (req, res) => {
	const { id } = req.params;

	try {
		const spot = await Spot.findById({ id });

		if (!spot) {
			return res.status(404).json({ success: false, error: "Spot not found" });
		}

		res.status(200).json(spot);
	} catch (error) {
		console.log("Error in getSpotProfile", error.message);
		res.status(500).json({ error: error.message });
	}
};

export const getEventDetails = async (req, res) => {
	const { id } = req.params;

	try {
		const event = await SpotPost.findById({ id });

		if (!event) {
			return res.status(404).json({ success: false, error: "Event not found" });
		}

		res.status(200).json(event);
	} catch (error) {
		console.log("Error in getEventDetails", error.message);
		res.status(500).json({ error: error.message });
	}
};

export const followUnfollow = async (req, res) => {
	try {
		const { id } = req.params;

		const spotToFollow = await Spot.findById(id);
		const followingUser = await User.findById(req.user._id);

		if (id === req.user._id.toString()) {
			return res.status(400).json({ error: "You can not follow yourself" });
		}

		if (!spotToFollow) return res.status(400).json({ error: "Spot not found" });

		if (!followingUser) {
			return res.status(400).json({ error: "User not found" });
		}

		const isFollowing = spotToFollow.followers.includes(req.user._id);

		if (isFollowing) {
			await Spot.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
			await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });
			res.status(200).json({ message: "Spot unfollowed successfully" });
		} else {
			await Spot.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
			await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });
			/* set notification */
			const newNotification = new FollowingNotification({
				type: "follow",
				from: req.user._id,
				to: id,
			});

			await newNotification.save();
			res.status(200).json({ message: "Spot followed successfully" });
		}
	} catch (error) {
		console.log("Error in followUnfollow", error.message);
		res.status(500).json({ error: error.message });
	}
};

export const favorUnfavor = async (req, res) => {
	try {
		const { id } = req.params;

		const eventToLike = await SpotPost.findById(id);
		const likingUser = await User.findById(req.user._id);

		if (id === req.user._id.toString()) {
			return res.status(400).json({ error: "You can not like your event" });
		}

		if (!eventToLike) return res.status(400).json({ error: "Event not found" });

		if (!likingUser) {
			return res.status(400).json({ error: "User not found" });
		}

		const isLiking = likingUser.favorite.includes(id);

		if (isLiking) {
			await User.findByIdAndUpdate(req.user._id, { $pull: { favorite: id } });
			res
				.status(200)
				.json({ message: "Event removed from favorites successfully" });
		} else {
			await User.findByIdAndUpdate(req.user._id, { $push: { favorite: id } });

			await newNotification.save();
			res
				.status(200)
				.json({ message: "Event added to favorites successfully" });
		}
	} catch (error) {
		console.log("Error in favorUnfavor", error.message);
		res.status(500).json({ error: error.message });
	}
};

export const updateUserProfile = async (req, res) => {
	const { user_name, current_password, new_password, avatar } = req.body;
	const userId = req.user._id;

	try {
		let user = await User.findById({ userId });

		if (!user) return res.status(400).json({ error: "User not found" });

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
				user.password
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
			user.password = await bcrypt.hash(new_password, salt);
		}
		user.user_name = user_name || user.user_name;
		user.password = new_password || user.password;
		user.avatar = avatar || user.avatar;

		user = await user.save();
		user.password = null;
		return res.status(200).json(user);
	} catch (error) {
		console.log("Error in updateUserProfile", error.message);
		res.status(500).json({ error: error.message });
	}
};

export const updateProfileImage = async (req, res) => {
	let { profile_image } = req.body;
	const userId = req.user._id;

	try {
		const user = await User.findById({ userId });
		if (!user) return res.status(404).json({ message: "User not found" });

		if (profile_image) {
			if (user.profile_image) {
				await cloudinary.uploader.destroy(
					user.profile_image.split("/").pop().split(".")[0]
				);
			}
			const uploaded = await cloudinary.uploader.upload(profile_image);
			profile_image = uploaded.secure_url;
		}

		user.profile_image = profile_image || user.profile_image;
		user = await user.save();
		user.password = null;
		return res.status(200).json(user);
	} catch (error) {
		console.log("Error in updateProfileImage", error.message);
		res.status(500).json({ error: error.message });
	}
};

export const changeEmailOTP = async (res, req) => {
	const { current_email, new_email } = req.body;

	try {
		const user = User.findOne({ email: current_email });

		if (!user) return res.status(400).json({ error: "Invalid email address" });

		if (current_email === new_email)
			res.status(400).json({
				error:
					"New email address must not be the same as current email address",
			});

		if (current_email === user.email) {
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
	const userId = req.user._id;

	try {
		const verifiedUser = jwt.verify(token, process.env.EMAIL_ACTIVATION_SECRET);

		if (verifiedUser.token !== code) {
			return res.status(400).json({
				success: false,
				error: "Code is not correct or expired",
			});
		} else {
			let email = verifiedUser.email;

			if (!email) return res.status(400).json({ error: "Invalid token" });

			let user = await User.findOne(email);

			if (!user) return res.status(400).json({ error: "No user found" });

			user.email = new_email || user.email;

			user = await user.save();
			user.password = null;
			return res.status(200).json(user);
		}
	} catch (error) {
		console.log("Error in verifychangeEmailOTP", error.message);
		res.status(500).json({ error: error.message });
	}
};

export const changePhoneNumber = async (res, req) => {
	const { new_number, password } = req.body;
	const userId = req.user._id;

	try {
		let user = await User.findById({ userId });
		if (!user) return res.status(400).json({ error: "User not found" });

		const isPasswordMatch = await bcrypt.compare(password, user.password);

		if (!isPasswordMatch) {
			return res.status(400).json({ error: "Incorrect password" });
		} else {
			user.phone_number = new_number || user.phone_number;

			user = await user.save();
			user.password = null;
			return res.status(200).json(user);
		}
	} catch (error) {
		console.log("Error in changePhoneNumber", error.message);
		res.status(500).json({ error: error.message });
	}
};

export const suggestions = async (req, res) => {
	try {
	} catch (error) {}
};

export const mightLike = async (req, res) => {
	try {
	} catch (error) {}
};
