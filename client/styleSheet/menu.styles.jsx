import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	accountContainer: {
		flexDirection: "row",
		gap: 20,
    paddingBottom: 20,
    borderBottomWidth: 0.5,
	},
	img: {
		width: 80,
		height: 80,
		borderRadius: 40,
	},
	accountContainerInfo: {
		flexDirection: "column",
		justifyContent: "center",
		flex: 1,
	},
	edit: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},
	dot: {
		width: 5,
		height: 5,
		borderRadius: "50%",
		flexDirection: "row",
		alignItems: "center",
	},
});

export default styles;
