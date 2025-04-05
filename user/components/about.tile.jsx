import { Pressable, Text, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import reusableStyles from './reusable/styles';

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
				backgroundColor: backgroundColor  ? backgroundColor : 'transparent',
			}}
		>
			<View style={{ flexDirection: "column", gap: 10, flex: 1 }}>
				<Text
					style={[
						reusableStyles.header,
						{
							color: themeColor.text,
						},
					]}
				>
					{title}
				</Text>
				<Text
					style={[
						reusableStyles.text,
						{
							color: themeColor.secondText,
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

export default AboutTile