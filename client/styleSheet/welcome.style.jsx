import { StyleSheet } from "react-native";
import { SIZES } from "../constance/sizes";

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		minHeight: SIZES.height,
		width: SIZES.width,
		paddingHorizontal: 15,
	},
	imgContainer: {
		height: 250,
		marginLeft: -15,
		width: SIZES.width,
		objectFit: "cover",
	},
	infoContainer: {
		display: "flex",
		flexDirection: "column",
		gap: 10,
		alignItems: "center",
	},
});

export default styles;
