import { StyleSheet } from "react-native";
import { SIZES } from "../constance/sizes";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		minHeight: SIZES.height,
		paddingHorizontal: 15,
	},
	searchContainer: {
		flexDirection: "row",
		gap: 10,
		alignItems: "center",
		height: 40,
		flex: 1,
		borderRadius: 15,
	},
	textInput: {
		flex: 1,
		height: "100%",
		borderColor: "transparent",
		borderWidth: 0,
		outlineStyle: "none",
		shadowColor: "transparent",
		paddingHorizontal: 10,
	},
	btn: {
		margin: 5,
		padding: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 15,
	},
});

export default styles;
