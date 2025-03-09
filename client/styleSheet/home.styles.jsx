import { StyleSheet } from "react-native";
import { SIZES, TEXT } from "../constance/sizes";

const styles = StyleSheet.create({
	topLeftWrapper: {
		position: "relative",
		flexDirection: "row",
		marginRight: 15,
		alignItems: "center",
		gap: 10,
	},
	topLeftContainer: {},
	topLeftText: {
		position: "absolute",
		fontWeight: "900",
		fontSize: TEXT.xxlarge,
		top: -25,
		right: 2,
	},
	container: {
		flex: 1,
		minHeight: SIZES.height,
		paddingHorizontal: 15,
	},
});

export default styles;
