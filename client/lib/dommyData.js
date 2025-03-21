export const spot = [
	{
		modelType: "spot",
		name: "Urban Café",
		ownerId: "65f1a6cfa2b4c8e9b2d1a001",
		plan: "premium",
		isVerified: true,
		isOnline: true,
		photos: ["https://example.com/photo1.jpg"],
		operationTime: [
			{ days: "Mon-Fri", time: "06:00 AM - 10:00 PM" },
			{ days: "Sat & Sun", time: "06:00 AM - 17:00 PM" },
		],
		rating: 4.5,
		reviews: [],
		description: "A cozy café with a great selection of artisan coffee.",
		address: "123 Main St, Cityville",
		location: { latitude: 40.7128, longitude: -74.006 },
		spotType: ["foodie", "restaurant"],
		socialType: ["group"],
		country: "USA",
		city: "New York",

		followers: [],
		links: [
			{ platform: "instagram", url: "https://instagram.com/urbancafe" },
			{ platform: "facebook", url: "https://facebook.com/elitegym" },
		],
		gender: "any",
		preferredAge: "18-35",
	},
	{
		modelType: "spot",
		name: "Elite Gym",
		ownerId: "65f1a6cfa2b4c8e9b2d1a002",
		plan: "enterprise",
		isVerified: true,
		isOnline: false,
		photos: ["https://example.com/photo2.jpg"],
		operationTime: [
			{ days: "Mon-Fri", time: "06:00 AM - 10:00 PM" },
			{ days: "Sat & Sun", time: "06:00 AM - 17:00 PM" },
		],
		rating: 4.9,
		reviews: [],
		description: "State-of-the-art fitness center with expert trainers.",
		address: "456 Fitness Ave, FitCity",
		location: {
			latitude: 34.0522,

			longitude: -118.2437,
		},
		spotType: ["sport", "wellness"],
		socialType: ["solo"],
		country: "USA",
		city: "Los Angeles",
		followers: [],
		links: [{ platform: "facebook", url: "https://facebook.com/elitegym" }],
		gender: "any",
		preferredAge: "18-50",
	},
	{
		modelType: "spot",
		name: "Night Owl Club",
		ownerId: "65f1a6cfa2b4c8e9b2d1a003",
		plan: "basic",
		isVerified: false,
		isOnline: false,
		photos: ["https://example.com/photo3.jpg"],
		operationTime: ["09:00 PM - 04:00 AM"],
		rating: 4.2,

		reviews: [],
		description: "A vibrant nightlife experience with top DJs.",
		address: "789 Party St, Clubtown",
		location: { latitude: 51.5074, longitude: -0.1278 },
		spotType: ["clubs", "bar"],
		socialType: ["group"],
		country: "UK",
		city: "London",
		followers: [],
		links: [{ platform: "tiktok", url: "https://tiktok.com/nightowl" }],
		gender: "any",
		preferredAge: "21-40",
	},
	{
		modelType: "spot",
		name: "Zen Spa",
		ownerId: "65f1a6cfa2b4c8e9b2d1a004",
		plan: "premium",
		isVerified: true,

		isOnline: false,
		photos: ["https://example.com/photo4.jpg"],
		operationTime: ["10:00 AM - 08:00 PM"],
		rating: 4.8,
		reviews: [],
		description: "Relax and rejuvenate with our world-class spa treatments.",
		address: "321 Wellness Rd, Calmville",
		location: { latitude: 48.8566, longitude: 2.3522 },
		spotType: ["wellness"],
		socialType: ["solo", "small_group"],
		country: "France",
		city: "Paris",
		followers: [],
		links: [{ platform: "linkedin", url: "https://linkedin.com/zenspa" }],
		gender: "any",
		preferredAge: "25-60",
	},

	{
		modelType: "spot",
		name: "Street Art Hub",
		ownerId: "65f1a6cfa2b4c8e9b2d1a005",
		plan: "basic",
		isVerified: false,
		isOnline: true,
		photos: ["https://example.com/photo5.jpg"],
		operationTime: ["24/7"],
		rating: 4.3,
		reviews: [],
		description: "A collaborative space for street artists and creatives.",
		address: "987 Art St, Creatopia",
		location: { latitude: 35.6895, longitude: 139.6917 },
		spotType: ["creative"],
		socialType: ["group", "small_group"],
		country: "Japan",
		city: "Tokyo",
		followers: [],

		links: [{ platform: "x", url: "https://x.com/streetarthub" }],
		gender: "any",
		preferredAge: "16-45",
	},
];

export const event = [
	{
		modelType: "event",
		spotId: "65f1b2cfa2b4c8e9b2d1a001",
		eventId: "65f1b2cfa2b4c8e9b2d1a001",
		description: "Live jazz night with local artists.",
		media: ["https://example.com/event1.jpg"],
		name: "Jazz Night",
		date: "2025-03-15",
		time: "08:00 PM",
		eventStart: "2025-03-15T20:00:00Z",
		eventEnd: "2025-03-15T23:00:00Z",

		entrance: "ticket",
		reactions: [],
		instructions: ["No outside food or drinks"],
	},
	{
		modelType: "event",
		spotId: "65f1b2cfa2b4c8e9b2d1a002",
		eventId: "65f1b2cfa2b4c8e9b2d1a002",
		description: "Morning yoga session at the park.",
		media: ["https://example.com/event2.jpg"],
		name: "Sunrise Yoga",
		date: "2025-03-20",
		time: "06:00 AM",
		eventStart: "2025-03-20T06:00:00Z",
		eventEnd: "2025-03-20T07:30:00Z",
		entrance: "free",
		reactions: [],
		instructions: ["Bring your own yoga mat"],
	},

	{
		modelType: "event",
		spotId: "65f1b2cfa2b4c8e9b2d1a003",
		eventId: "65f1b2cfa2b4c8e9b2d1a003",
		description: "Art gallery opening night.",
		media: ["https://example.com/event3.jpg"],
		name: "Abstract Expression",
		date: "2025-04-05",
		time: "07:00 PM",
		eventStart: "2025-04-05T19:00:00Z",
		eventEnd: "2025-04-05T22:00:00Z",
		entrance: "free",
		reactions: [],
		instructions: ["Dress in smart casual attire"],
	},
];

export const reviews = [
	{
		reviewId: "lkhgvmkoiuhjbnmsdfghjkhjbnkjhb",
		userImage: "",
		userName: "pabblo kgabs",
		message:
			"Dress in smart casual attire, Dress in smart casual attire, Dress in smart casual attire. Dress in smart casual attire",
		ratings: 5.0,
		createdAt: "50 min ago",
		reviewImages: [],
	},
	{
		reviewId: "lkhgvmkoiuhjbnmklaesrytjnbjbnkjhb",
		userImage: "",
		userName: "pabblo kgabs",
		message:
			"Dress in smart casual attire, Dress in smart casual attire, Dress in smart casual attire. Dress in smart casual attire",
		ratings: 4.0,
		createdAt: "11 months ago",
		reviewImages: [1],
	},
	{
		reviewId: "lkhgvmkoiuwretyfhgvcjbnmklhjbnkjhb",
		userImage: "",
		userName: "pabblo kgabs",
		message:
			"Dress in smart casual attire, Dress in smart casual attire, Dress in smart casual attire. Dress in smart casual attire",
		ratings: 5.0,
		createdAt: "5 min ago",
		reviewImages: [1, 2],
	},
	{
		reviewId: "lkhgvmkoiuaew456ryfgdsbnmklhjbnkjhb",
		userImage: "",
		userName: "pabblo kgabs",
		message:
			"Dress in smart casual attire, Dress in smart casual attire, Dress in smart casual attire. Dress in smart casual attire",
		ratings: 1.0,
		createdAt: "5 weeks ago",
		reviewImages: [1],
	},
	{
		reviewId: "lkhgvmkoiew43546wyrstyqsjbnmklhjbnkjhb",
		userImage: "",
		userName: "pabblo kgabs",
		message:
			"Dress in smart casual attire, Dress in smart casual attire, Dress in smart casual attire. Dress in smart casual attire",
		ratings: 3.0,
		createdAt: "5 days ago",
		reviewImages: [1, 2],
	},
	{
		reviewId: "lkhgvmk86756e4rdfguhjbnmklhjbnkjhb",
		userImage: "",
		userName: "pabblo kgabs",
		message:
			"Dress in smart casual attire, Dress in smart casual attire, Dress in smart casual attire. Dress in smart casual attire",
		ratings: 5.0,
		createdAt: "5 months ago",
		reviewImages: [],
	},
	{
		reviewId: "lkhgvmkoi23545euthgwfjbnmklhjbnkjhb",
		userImage: "",
		userName: "pabblo kgabs",
		message:
			"Dress in smart casual attire, Dress in smart casual attire, Dress in smart casual attire. Dress in smart casual attire",
		ratings: 5.0,
		createdAt: "5 min ago",
		reviewImages: [1, 2],
	},
	{
		reviewId: "lkhgvmkoiuweq47uhgfqcweytjbnmklhjbnkjhb",
		userImage: "",
		userName: "pabblo kgabs",
		message:
			"Dress in smart casual attire, Dress in smart casual attire, Dress in smart casual attire. Dress in smart casual attire",
		ratings: 3.0,
		createdAt: "5 weeks ago",
		reviewImages: [1, 2],
	},
	{
		reviewId: "lkhgvmkoiuhjbnmklhjbnkjhb",
		userImage: "",
		userName: "pabblo kgabs",
		message:
			"Dress in smart casual attire, Dress in smart casual attire, Dress in smart casual attire. Dress in smart casual attire",
		ratings: 4.0,
		createdAt: "5 days ago",
		reviewImages: [1, 2],
	},
	{
		reviewId: "lkhgvmkoiuhj975853ewrygbvgtbnmklhjbnkjhb",
		userImage: "",
		userName: "pabblo kgabs",
		message:
			"Dress in smart casual attire, Dress in smart casual attire, Dress in smart casual attire. Dress in smart casual attire",
		ratings: 4.0,
		createdAt: "5 months ago",
		reviewImages: [1, 2],
	},
];

export const messages = [
	{
		role: "user",
		message: "Live jazz night with local artists.",
		time: "10:21 am",
	},

	{
		role: "owner",
		message:
			"Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.",
		time: "10:21 am",
	},

	{
		role: "user",
		message:
			"Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.",
		time: "10:21 am",
	},

	{
		role: "owner",
		message:
			"Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.",
		time: "10:21 am",
	},

	{
		role: "user",
		message:
			"Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.",
		time: "10:21 am",
	},

	{
		role: "user",
		message:
			"Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.",
		time: "10:21 am",
	},

	{
		role: "owner",
		message:
			"Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.",
		time: "10:21 am",
	},

	{
		role: "user",
		message:
			"Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.",
		time: "10:21 am",
	},

	{
		role: "owner",
		message:
			"Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.",
		time: "10:21 am",
	},

	{
		role: "user",
		message:
			"Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.",
		time: "10:21 am",
	},

	{
		role: "owner",
		message:
			"Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.",
		time: "10:21 am",
	},

	{
		role: "user",
		message:
			"Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.",
		time: "10:21 am",
	},

	{
		role: "owner",
		message:
			"Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.",
		time: "10:21 am",
	},

	{
		role: "user",
		message:
			"Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.",
		time: "10:21 am",
	},

	{
		role: "owner",
		message:
			"Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.",
		time: "10:21 am",
	},

	{
		role: "user",
		message:
			"Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.Live jazz night with local artists.",
		time: "10:21 am",
	},
];
