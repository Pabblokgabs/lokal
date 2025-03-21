import About from "./about";
import Events from "./Events";
import Reviews from "./Reviews";

export default RenderItem = ({ active }) => {
	switch (active) {
		case "About":
			return <About />;
		case "Events":
			return <Events />;
		case "Reviews":
			return <Reviews />;
		default:
			return <About />;
	}
};

export const platformIcon = (platform) => {
	switch (platform) {
		case "facebook":
			return "logo-facebook";
		case "tiktok":
			return "logo-tiktok";
		case "x":
			return "logo-twitter";
		case "youtube":
			return "logo-youtube";
		case "instagram":
			return "logo-instagram";
		case "linkedin":
			return "logo-linkedin";
		default:
			return "";
	}
};
