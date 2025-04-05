import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import reusableStyles from "../reusable/styles";
import { useNavigation } from "@react-navigation/native";

const Preferences = ({ item }) => {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("preference", { item })}
			style={{
				height: 45,
				backgroundColor: "white",
				borderRadius: 20,
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
				paddingHorizontal: 15,
			}}
		>
			<View
				style={{
					position: "absolute",
					height: "100%",
					width: "100%",
					backgroundColor: themeColor.btn,
					opacity: 0.1,
					borderRadius: 20,
				}}
			/>
			<View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
				{item.icon}
				<Text
					style={[
						reusableStyles.text,
						{ color: "black", fontWeight: "600" },
					]}
				>
					{item.label}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Preferences;
