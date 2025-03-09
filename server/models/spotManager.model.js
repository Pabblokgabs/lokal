import mongoose from "mongoose";

const spotManager = mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	spotId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Spot",
		required: true,
	},
});

const Manager = mongoose.model("Manager", spotManager);

export default Manager;
