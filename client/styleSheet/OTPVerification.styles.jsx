import { StyleSheet } from "react-native";
import { colors } from "../constance/theme";
import { SIZES, TEXT } from "../constance/sizes";

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: colors.white,
		minHeight: SIZES.height,
		paddingHorizontal: 15,
	},
	constainer: {
		flex: 1,
		flexDirection: "column",
		gap: 5,
	},
	text: {
		fontSize: TEXT.xlarge,
		fontWeight: "700",
	},
	otpTextInputContainer: {
		marginBottom: 10,
	},
	otpTextInput: {
		borderColor: "transparent",
		borderWidth: 0,
		borderRadius: 6,
		height: 45,
		borderWidth: 0.5,
		borderBottomWidth: 0.2,
		textAligh: "center",
		outlineStyle: "none",
		shadowColor: "transparent",
	},
	timeContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 5,
		marginTop: 10,
	},
});

export default styles;
