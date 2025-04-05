import Spot from "../models/spot.model.js";

export const registerSpot = async (req, res) => {
	const {
		name,
		operationDayTime,
		rating,
		decription,
		address,
		latitude,
		longitude,
		country,
		city,
		links,
		spotType,
		preferredAge,
		preferredGender,
		photos,
	} = req.body;

	try {
		const isOwner = await Spot.ownerId.findById( req.user._id );

		if (isOwner)
			return res.status(400).json({ error: "User already register a spot" });

		const newSpot = new Spot({
			name,
			operationDayTime,
			rating,
			decription,
			address,
			latitude,
			longitude,
			country,
			city,
			links,
			spotType,
			preferredAge,
			preferredGender,
			ownerId: req.user._id,
			photos,
		});

		if (newSpot) {
			await newSpot.save();
			isOwner.ownedSpot = newSpot._id;

			res.status(201).json({
				_id: newSpot._id,
				name: newSpot.name,
				decription: newSpot.decription,
				rating: newSpot.rating,
				address: newSpot.address,
				operationDayTime: newSpot.operationDayTime,
				location: newSpot.location,
				country: newSpot.country,
				city: newSpot.city,
				links: newSpot.links,
				spotType: newSpot.spotType,
				preferredGender: newSpot.preferredGender,
				preferredAge: newSpot.preferredAge,
				ownerId: newSpot.ownerId,
				photos: newSpot.photos,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
	} catch (error) {
		console.log("Error in spot register controller", error.message);
		res.status(500).json({ error: "Something went wrong. Please try again" });
	}
};
