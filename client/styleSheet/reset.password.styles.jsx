import { StyleSheet } from "react-native";
import { SIZES, TEXT } from "../constance/sizes";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		minHeight: SIZES.height,
		paddingHorizontal: 15,
		gap: 10,
	},
	text: {
		fontSize: TEXT.xlarge,
		fontWeight: "700",
		textAlign: "center",
	},
});

export default styles;
