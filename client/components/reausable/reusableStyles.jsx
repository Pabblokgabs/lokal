import { Platform, StyleSheet } from "react-native";
import { SIZES, TEXT } from "../../constance/sizes";

const ReusableStyles = StyleSheet.create({
	wrapper: {
		flex: 1,
		minHeight: SIZES.height,
		maxHeight: SIZES.height,
		paddingHorizontal: 15,
		width: SIZES.width,
	},
	container: {
		flex: 1,
	},
	header: {
		fontSize: TEXT.large,
		fontWeight: "700",
		fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
	},
	secHeader: {
		fontSize: TEXT.medium,
		fontWeight: "700",
		fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
	},
	text: {
		fontSize: TEXT.small,
		fontWeight: "400",
		fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
	},
	secondText: {
		fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
	},
	otpTextInput: {
		borderColor: "transparent",
		borderWidth: 0,
		borderRadius: 6,
		height: 50,
		borderWidth: 1,
		borderBottomWidth: 0.4,
		textAligh: "center",
		outlineStyle: "none",
		shadowColor: "transparent",
	},
	otpTextInputContainerStyle: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 20,
	},
	dot: {
		width: 5,
		height: 5,
		borderRadius: "50%",
		marginRight: 10,
	},
	modalView: {
		position: "absolute",
		right: 15,
		top: 50,
		borderRadius: 10,
		padding: 15,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		gap: 10,
	},
	modalTitle: {
		marginBottom: 5,
		textAlign: "left",
		fontWeight: "700",
		fontSize: TEXT.medium,
		fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
	},
	modalText: {
		textAlign: "left",
		fontSize: TEXT.medium,
		fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
	},
});

export default ReusableStyles;
