import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import reusableStyles from "./reusable/styles";

function ProfileTile({
	title,
	value,
	onPress,
	edit,
	I_icon,
	A_icon,
	MC_icon,
	M_icon,
  iconColor
}) {
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
				{A_icon ? (
					<AntDesign
						name={A_icon}
						size={24}
						color={iconColor ? iconColor : themeColor.icon}
					/>
				) : I_icon ? (
					<Ionicons
						name={I_icon}
						size={24}
						color={iconColor ? iconColor : themeColor.icon}
					/>
				) : M_icon ? (
					<MaterialIcons
						name={M_icon}
						size={24}
						color={iconColor ? iconColor : themeColor.icon}
					/>
				) : MC_icon ? (
					<MaterialCommunityIcons
						name={MC_icon}
						size={24}
						color={iconColor ? iconColor : themeColor.icon}
					/>
				) : (
					<></>
				)}
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
						style={[
							reusableStyles.text,
							{
								color: themeColor.secondText,
							},
						]}
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
					style={[
						reusableStyles.text,
						{
							color: themeColor.text,
							fontWeight: "600",
						},
					]}
				>
					{value}
				</Text>
			</View>
		</View>
	);
}

export default ProfileTile;
