import BottomTabNavigator from "./user-screens/tab.screen";
import Preference from "./user-screens/preference";
import Profile from "./user-screens/profile";
import HelpCenter from "./common/help.center";
import Review from "./user-screens/rating";
import Feedback from "./common/feedback";
import ContactUs from "./common/contactUs";
import SpotDetails from "./user-screens/spot.details";
import Search from "./user-screens/search";
import EventView from "./user-screens/event.view";
import Inbox from "././common/inbox";
import Notification from "./common/notification";
import Recommended from "./user-screens/recommended";
import Popular from "./user-screens/popular";
import Messages from "./common/messages";
import OnBoarding from "./common-screens/onBoarding";
import SignIn from "./common-screens/signIn";
import ForgotPassword from "./common-screens/forgot.password.jsx";
import ResetPassword from "./common-screens/reset.password.jsx";
import Email from "./user-screens/auth/email.jsx";
import PersonalInfo from "./user-screens/auth/personal.info.jsx";
import SelectPreferences from "./user-screens/auth/select.preferences.jsx";
import SetPassword from "./user-screens/auth/setPassword.jsx";
import FinalStage from "./user-screens/auth/final.stage.jsx";

export {
	/* user main screens */
	BottomTabNavigator,
	Preference,
	Profile,
	HelpCenter,
	Review,
	Feedback,
	ContactUs,
	SpotDetails,
	Search,
	EventView,
	Inbox,
	Notification,
	Popular,
	Recommended,
	Messages,

	/* User auth routes */
	Email,
	PersonalInfo,
	SelectPreferences,
	SetPassword,
	FinalStage,

	/* common auth */
	OnBoarding,
	SignIn,
	ForgotPassword,
	ResetPassword,

	/* Owner screens */
};
