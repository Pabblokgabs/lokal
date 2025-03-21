import { Text, TouchableOpacity } from "react-native";
import React from "react";
import reusableStyles from "./reusable/styles";
import { useTheme } from "react-native-paper";

const Btn = ({
	onPress,
	backgroundColor,
	borderWidth,
	text,
	fontWeight,
	color,
	width,
	borderColor,
	opacity,
	disabled,
}) => {
	const themeColor = useTheme().colors;

	return (
		<TouchableOpacity
			onPress={onPress}
			disabled={disabled}
			style={{
				height: 45,
				paddingHorizontal: 20,
				backgroundColor: backgroundColor ? backgroundColor : themeColor.btn,
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
				borderRadius: 10,
				width: width,
				borderWidth: borderWidth ? borderWidth : 1,
				borderColor: borderColor ? borderColor : themeColor.btn,
				opacity: opacity,
			}}
		>
			<Text
				style={[
					reusableStyles.text,
					{
						fontSize: 18,
						fontWeight: fontWeight,
						color: color ? color : "white",
						textAlign: "center",
					},
				]}
			>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

export default Btn;
