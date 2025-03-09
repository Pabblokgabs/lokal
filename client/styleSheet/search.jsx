import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	searchWrapper: {
		flexDirection: "column",
		gap: 20,
		width: "100%",
		marginTop: 20,
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
