import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { TEXT } from "../../constance/sizes";

function SettingsTile({
	text,
	iconName,
	onPress,
	children,
	right,
	bbw,
	value,
	size
}) {
	const themeColor = useTheme().colors;

	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				width: "100%",
				paddingVertical: 15,
				flexDirection: "row",
				gap: iconName ? 20 : 0,
				alignItems: "center",
				borderBottomWidth: bbw,
				borderBottomColor: themeColor.borderColor,
			}}
		>
			{children ? (
				children
			) : (
				<Ionicons
					name={iconName}
					size={size ? size : 22}
					color={themeColor.icon}
					style={{ opacity: 0.7 }}
				/>
			)}
			<Text
				style={{
					fontWeight: "400",
					color: themeColor.secondaryText,
					fontSize: TEXT.medium,
					flex: 1,
				}}
			>
				{text}
			</Text>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<Text style={{ color: themeColor.text, marginRight: 10 }}>{value}</Text>
				<AntDesign
					name={right}
					size={20}
					color={themeColor.icon}
					style={{ opacity: 0.5 }}
				/>
			</View>
		</TouchableOpacity>
	);
}

export default SettingsTile;
