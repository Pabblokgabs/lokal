import mongoose from "mongoose";

const userSchema = mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		user_name: {
			type: String,
			required: true,
		},
		phone_number: {
			type: String,
			default: "",
		},
		date_of_birth: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
		},
		password: {
			type: String,
			required: true,
		},
		profileImage: {
			type: String,
			default: "",
		},
		avatar: {
			type: String,
			default: "",
		},
		gender: {
			type: String,
			required: true,
			enum: ["male", "female", "not_to_say"],
		},
		coutry: {
			type: String,
			trim: true,
		},
		city: {
			type: String,
			default: "",
		},
		token: {
			type: Number,
			default: 0,
		},
		preferences: {
			activity: [
				{
					type: String,
					enum: [
						"foodie",
						"wellness",
						"creative",
						"bar",
						"restaurant",
						"clubs",
						"religion",
					],
				},
			],
			social: [
				{
					type: String,
					enum: ["group", "small_group", "solo"],
				},
			],
		},
		role: {
			type: String,
			default: "user",
			enum: ["user", "manager"],
		},
		following: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Spot",
				default: [],
			},
		],
		favorite: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "SpotPost",
				default: [],
			},
		],
	},
	{ timestanps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
