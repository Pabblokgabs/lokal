import { StyleSheet } from "react-native";
import { TEXT } from "../constance/sizes";

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
		flexDirection: "column",
		gap: 10,
	},
	headerText: {
		fontWeight: "700",
		fontSize: TEXT.xlarge,
		marginBottom: 5,
	},
	childText: {
		flex: 1,
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		fontSize: TEXT.medium,
		fontWeight: "300",
	},
});

export default styles;
