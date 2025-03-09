import RegisterType from "./common-screens/registration.type";
import Search from "./user-screens/search";
import Welcome from "./common-screens/Welcome";
import Login from "./user-screens/auth/login";
import Email from "./user-screens/auth/signup/Email";
import OTPVerification from "./user-screens/auth/signup/OTPVerification";
import Registration from "./user-screens/auth/signup/Registration";
import SetPassword from "./user-screens/auth/signup/setPassword";
import UserProfile from "./user-screens/profile";
import OwnerEmailVerification from "./owner-screens/owner.auth/email.verification";
import PersonalInfo from "./owner-screens/owner.auth/personal.info";
import ResetPassword from "./user-screens/auth/resetpassword/Reset.password";
import BottomTabNavigator from "./user-screens/tab.screen";
import ResetPasswordOTPVerification from "./user-screens/auth/resetpassword/Reset.password.otp";
import EmailVerification from "./user-screens/auth/resetpassword/EmailVerification";
import OwnerBottomTabNavigator from "./owner-screens/owner.tab.screens";
import ProfilePhoto from "./user-screens/auth/signup/profile.photo";
import SpotInformation from "./owner-screens/owner.auth/spot.info";
import Photos from "./owner-screens/owner.auth/photos";
import FinalStage from "./owner-screens/owner.auth/final.stage";
import SettingUpProfile from "./user-screens/auth/signup/final.stage";
import Filter from "./user-screens/filter";
import Recommendations from "./user-screens/recommendations";
import SpotDetails from "./user-screens/spot.details";
import PostDetails from "./user-screens/post.details";
import SendFeedback from "./owner-screens/feedback";
import OwnerProfile from "./owner-screens/menu/profile";

export {
	OwnerProfile,
	SendFeedback,
	PostDetails,
	SpotDetails,
	Recommendations,
	Filter,
	RegisterType,
	FinalStage,
	OTPVerification,
	Registration,
	Email,
	Search,
	Welcome,
	Login,
	SetPassword,
	UserProfile,
	OwnerEmailVerification,
	PersonalInfo,
	SpotInformation,
	ResetPassword,
	BottomTabNavigator,
	ResetPasswordOTPVerification,
	EmailVerification,
	OwnerBottomTabNavigator,
	ProfilePhoto,
	Photos,
	SettingUpProfile,
};
