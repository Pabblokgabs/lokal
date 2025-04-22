import { View, Text, Pressable } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import reusableStyles from "./styles";

const LinkTile = ({ value, onPress, title, A_icon, I_icon, M_icon }) => {
	const themeColor = useTheme().colors;

	return (
		<Pressable
			onPress={onPress}
			style={{
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
				gap: 10,
				paddingVertical: 15,
				borderBlockColor: themeColor.border,
				borderBottomWidth: 1,
			}}
		>
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					alignItems: "center",
					gap: 10,
				}}
			>
				{A_icon ? (
					<AntDesign name={A_icon} size={24} color={themeColor.btn} />
				) : I_icon ? (
					<Ionicons name={I_icon} size={24} color={themeColor.btn} />
				) : M_icon ? (
					<MaterialIcons name={M_icon} size={24} color={themeColor.btn} />
				) : (
					<></>
				)}
				<Text
					style={[
						reusableStyles.text,
						{ color: themeColor.text, fontWeight: "semibold" },
					]}
				>
					{title}
				</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					gap: 10,
				}}
			>
				<Text style={[reusableStyles.text, { color: themeColor.btn }]}>
					{value}
				</Text>
				<AntDesign name="right" size={24} color={themeColor.btn} />
			</View>
		</Pressable>
	);
};

export default LinkTile;
