import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import { TEXT } from "../../constance/sizes";

function ProfileTile({ title, value, iconName, onPress, edit }) {
	const themeColor = useTheme().colors;

	return (
		<View
			style={{
				width: "100%",
				flexDirection: "row",
				gap: 30,
				alignItems: "center",
			}}
		>
			<View
				style={{
					height: "100%",
					alignItems: "flex-start",
					paddingTop: 10,
				}}
			>
				<Ionicons
					name={iconName}
					size={24}
					color={themeColor.icon}
					style={{ opacity: 0.7 }}
				/>
			</View>
			<View style={{ flex: 1, flexDirection: "column", gap: 10 }}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Text
						numberOfLines={1}
						ellipsizeMode="tail"
						style={{
							color: themeColor.secondaryText,
							opacity: 0.7,
							fontSize: TEXT.medium,
						}}
					>
						{title}
					</Text>
					<TouchableOpacity style={{ padding: 5 }} onPress={onPress}>
						<MaterialIcons name={edit} size={24} color={themeColor.btn} />
					</TouchableOpacity>
				</View>
				<Text
					numberOfLines={2}
					ellipsizeMode="tail"
					style={{
						color: themeColor.text,
						fontWeight: "600",
						fontSize: TEXT.medium,
					}}
				>
					{value}
				</Text>
			</View>
		</View>
	);
}

export default ProfileTile;
