import { StyleSheet, Dimensions, Platform } from "react-native";
const { height, width } = Dimensions.get("window");

const fontFamily = Platform.OS === "android" ? "Roboto" : "Helvetica";

const reusableStyles = StyleSheet.create({
	wrapper: {
		flex: 1,
		minHeight: height,
		maxHeight: height,
		width: width,
	},
	header: {
		fontSize: 20,
		fontFamily: fontFamily,
		fontWeight: "700",
	},
	lgHeader: {
		fontSize: 25,
		fontFamily: fontFamily,
		fontWeight: "700",
	},
	text: {
		fontSize: 16,
		fontFamily: fontFamily,
	},
	lgText: {
		fontSize: 25,
		fontFamily: fontFamily,
	},
	otherText: {
		fontFamily: fontFamily,
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
	dot: {
		width: 5,
		height: 5,
		borderRadius: 2.5,
		flexDirection: "row",
		alignItems: "center",
	},
});

export default reusableStyles;
