import mongoose, { Schema } from "mongoose";

const eventSchema = mongoose.Schema({
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
	name: {
		type: String,
		trim: true,
		required: true,
	},
	modelType: {
		type: String,
		required: true,
		default: "event",
	},
	date: {
		type: String,
		required: true,
	},
	time: {
		type: String,
		required: true,
	},
	entrance: {
		type: String,
		enum: ["free", "ticket", "dress code"],
		default: "free",
	},
	join: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
				default: [],
			},
		},
	],
	instructions: [
		{
			type: String,
		},
	],
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
