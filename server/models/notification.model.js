import mongoose from "mongoose";

const followingNotificationSchema = new mongoose.Schema(
	{
		from: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		to: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Spot",
			required: true,
		},
		type: {
			type: String,
			required: true,
			enum: ["follow", "unfollow"],
		},
		read: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const FollowingNotification = mongoose.model(
	"FollowingNotification",
	followingNotificationSchema
);

export default FollowingNotification;
