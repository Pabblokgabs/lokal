import { StyleSheet } from "react-native";
import { SIZES, TEXT } from "../constance/sizes";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		gap: 20,
		marginTop: 30,
	},
	text: {
		fontSize: TEXT.xlarge,
		fontWeight: "700",
	},
	inputsContainer: {
		width: "100%",
		flex: 1,
		flexDirection: "column",
		gap: 10,
	},
});

export default styles;
