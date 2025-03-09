import { StyleSheet } from "react-native";
import { SIZES } from "../constance/sizes";

const styles = StyleSheet.create({
	topContainer: {
		width: "100%",
		flexDirection: "row",
		gap: 50,
		marginTop: 20,
	},
	img: {
		height: 100,
		width: 100,
		borderRadius: 50,
		objectFit: "cover",
	},
	editIcon: {
		position: "absolute",
		padding: 5,
		borderRadius: "50%",
		bottom: 0,
		left: 70,
	},
	topContainerRight: {
		flexDirection: "column",
		justifyContent: "center",
		gap: 10,
	},
	tokenFollowContainer: {
		flexDirection: "row",
		gap: 50,
	},
	bottomContainer: {
		flex: 1,
		flexDirection: "column",
		gap: 20,
		marginTop: 50,
	},
	emailModalContainer: {
		flex: 1,
		paddingHorizontal: 20,
	},
	otpTextInputContainer: {
		marginBottom: 10,
	},
	timeContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 5,
		marginTop: 10,
	},
	changeProfileWrapper: {
		flexDirection: "column-reverse",
		height: SIZES.height,
		width: SIZES.width,
		flex: 1,
	},
	changeProfileContainerPressable: {
		position: "absolute",
		top: 0,
		left: 0,
		height: SIZES.height,
		width: SIZES.width,
		opacity: 0.5,
		zIndex: -1,
	},
	changeProfileContainer: {
		height: "30%",
		width: '100%',
		paddingHorizontal: 15,
	},
});

export default styles;
