import { Pressable, Text, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import ReusableStyles from "../reausable/reusableStyles";

const AboutTile = ({
	title,
	value,
	onPress,
	iconname,
	backgroundColor,
	padding,
}) => {
	const themeColor = useTheme().colors;

	return (
		<Pressable
			onPress={onPress}
			style={{
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				borderRadius: 10,
				gap: iconname ? 20 : 0,
				padding: padding,
				backgroundColor: backgroundColor,
			}}
		>
			<View style={{ flexDirection: "column", gap: 10, flex: 1 }}>
				<Text
					style={[
						ReusableStyles.secHeader,
						{
							color: themeColor.text,
						},
					]}
				>
					{title}
				</Text>
				<Text
					style={[
						ReusableStyles.text,
						{
							color: themeColor.secondaryText,
						},
					]}
				>
					{value}
				</Text>
			</View>
			<Ionicons name={iconname} size={30} color={themeColor.btn} />
		</Pressable>
	);
};

export default AboutTile;
