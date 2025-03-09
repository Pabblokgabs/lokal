import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { TEXT } from "../../constance/sizes";
import { colors } from "../../constance/theme";

const ReusableBtn = ({
	btnText,
	onPress,
	width,
	backgroundColor,
	borderColor,
	color,
	disabled,
	opacity,
	padding,
}) => {
	return (
		<TouchableOpacity
			disabled={disabled}
			onPress={onPress}
			style={styles.btnStyle(
				width,
				backgroundColor,
				borderColor,
				opacity,
				padding
			)}
		>
			<Text style={styles.btnText(color)}>{btnText}</Text>
		</TouchableOpacity>
	);
};

export default ReusableBtn;

const styles = StyleSheet.create({
	btnText: (color) => ({
		fontSize: TEXT.large,
		color: color ? color : colors.white,
		textAlign: "center",
	}),
	btnStyle: (width, backgroundColor, borderColor, opacity, padding) => ({
		width: width,
		backgroundColor: backgroundColor,
		alignItems: "center",
		justifyContent: "center",
		padding: padding,
		height: padding ? 0 : 45,
		borderRadius: 10,
		borderColor: borderColor,
		borderWidth: 1,
		opacity: opacity,
	}),
});
