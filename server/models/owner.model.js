import mongoose from "mongoose";

const ownerSchema = mongoose.Schema(
	{
		first_name: {
			type: String,
			required: true,
			trim: true,
		},
		last_name: {
			type: String,
			required: true,
			trim: true,
		},
		phone_number: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			default: "owner",
		},
		ownedSpot: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Spot",
		},
		IdNumber: {
			type: number,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		profileImage: {
			type: String,
			default: "",
		},
	},
	{ timestamps: true }
);

const Owner = mongoose.model("owner", ownerSchema);

export default Owner;
