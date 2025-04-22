import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	email_AD: (color) => ({
		color: color,
		textAlign: "center",
	}),
	image: {
		height: 150,
		width: 150,
		resizeMode: "cover",
		borderRadius: 75,
	},
	edit: (backgroundColor) => ({
		position: "absolute",
		right: -5,
		bottom: -5,
		padding: 3,
		backgroundColor: backgroundColor,
		borderRadius: "50%",
	}),
	edit_TO: (backgroundColor) => ({
		padding: 10,
		borderRadius: "50%",
		backgroundColor: backgroundColor,
	}),
	SP_Container: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 15,
	},
	select_Pressable: {
		borderRadius: 20,
		paddingHorizontal: 13,
		paddingVertical: 8,
		borderWidth: 1,
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
});

export default styles;
