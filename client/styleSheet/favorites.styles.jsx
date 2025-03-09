import { StyleSheet } from "react-native";
import { SIZES, TEXT } from "../constance/sizes";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		minHeight: SIZES.height,
		paddingHorizontal: 15,
	},
	modalView: {
		position: "absolute",
		width: 150,
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
	},
	modalText: {
		textAlign: "left",
		fontSize: TEXT.medium,
	},
});

export default styles;
