import mongoose, { Schema } from "mongoose";

const spotPostSchema = mongoose.Schema({
	spotId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Spot",
		required: true,
	},
	description: {
		type: String,
	},
	media: [
		{
			type: Schema.Types.Mixed,
		},
	],
	title: {
		type: String,
		trim: true,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	time: {
		type: String,
		required: true,
	},
	eventStart: {
		type: Date,
		required: true,
	},
	eventEnd: {
		type: Date,
		required: true,
	},
	entrance: {
		type: String,
		enum: ["free", "ticket", "dress code"],
		default: "free",
	},
	reactions: [
		{
			userId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
			reaction: {
				type: String,
				enum: ["like", "fire", "dislike"],
			},
		},
	],
	instructions: [
		{
			type: String,
		},
	],
});

const SpotPost = mongoose.model("SpotPost", spotPostSchema);

export default SpotPost;
