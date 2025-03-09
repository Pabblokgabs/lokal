import mongoose from "mongoose";

const spotSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		ownerId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Owner",
			required: true,
		},
		plan: {
			type: String,
			enum: ["basic", "premium", "enterprise"],
			default: "basic",
		},
		isVerified: {
			type: Boolean,
			default: false,
		},
		isOnline: {
			type: Boolean,
			default: false,
		},
		photos: [
			{
				type: String,
			},
		],
		operationDayTime: [
			{
				type: String,
			},
		],
		rating: {
			type: Number,
			default: 0,
		},
		reviews: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Review",
			},
		],
		decription: {
			type: String,
			trim: true,
		},
		address: {
			type: String,
			required: true,
			trim: true,
		},
		location: {
			latitude: {
				type: Number,
				required: true,
			},
			longitude: {
				type: Number,
				required: true,
			},
		},
		spotType: [
			{
				type: String,
				required: true,
				enum: [
					"foodie",
					"wellness",
					"creative",
					"bar",
					"restaurant",
					"clubs",
					"religion",
					"sport",
				],
			},
		],
		socialType: [
			{
				type: String,
				required: true,
				enum: ["group", "small_group", "solo"],
			},
		],
		country: {
			type: String,
			trim: true,
		},
		city: {
			type: String,
			default: "",
		},
		followers: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
				default: [],
			},
		],
		links: [
			{
				platform: {
					type: String,
					enum: ["facebook", "tiktok", "x", "youtube", "instagram", "linkedin"],
				},
				url: String,
			},
		],
		preferredGender: {
			type: String,
			enum: ["female", "male", "any"],
		},
		preferredAge: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

spotSchema.index({ location: "2dsphere" });

const Spot = mongoose.model("Spot", spotSchema);

export default Spot;
