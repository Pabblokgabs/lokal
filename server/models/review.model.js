import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
	{
		text: {
			type: String,
		},
		rating: {
			type: Number,
			requred: true,
		},
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
	},
	{ timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;
