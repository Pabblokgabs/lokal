import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { SIZES, TEXT } from "../constance/sizes";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import ReusableStyles from "./reausable/reusableStyles";

function TopBar({
	arrowName,
	text,
	name1,
	onPress1,
	name2,
	onPress2,
	name3,
	onPress3,
	textAlign,
	arrowOnPress,
	backgroundColor,
	children,
}) {
	const themeColor = useTheme().colors;

	return (
		<View
			style={{
				backgroundColor: backgroundColor ? backgroundColor : "transparent",
				height: 60,
				flexDirection: "row",
				justifyContent: "center",
			}}
		>
			<View
				style={{
					width: "100%",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					gap: 20,
				}}
			>
				<View
					style={{
						flexDirection: "row",
						flex: 1,
						alignItems: "center",
					}}
				>
					<AntDesign
						name={arrowName}
						size={24}
						color={themeColor.icon}
						style={{ marginRight: arrowName ? 15 : 0 }}
						onPress={arrowOnPress}
					/>
					<Text
						style={[
							ReusableStyles.header,
							{
								color: themeColor.text,
								flex: 1,
								textAlign: textAlign,
							},
						]}
					>
						{text}
					</Text>
				</View>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<TouchableOpacity onPress={onPress1} style={{ position: "relative" }}>
						<Ionicons
							name={name1}
							size={24}
							color={themeColor.icon}
							style={{ marginRight: (name1 && name2) || name3 ? 25 : 0 }}
						/>
						{name1 && (
							<Text
								style={{
									color: "red",
									position: "absolute",
									left: 10,
									bottom: 10,
									fontSize: TEXT.xxlarge,
									fontWeight: "900",
								}}
							>
								.
							</Text>
						)}
					</TouchableOpacity>
					<TouchableOpacity onPress={onPress2}>
						{children ? (
							children
						) : (
							<Ionicons
								name={name2}
								size={24}
								color={themeColor.icon}
								style={{ marginRight: name2 && name3 ? 25 : 0 }}
							/>
						)}
					</TouchableOpacity>
					<TouchableOpacity onPress={onPress3}>
						{name3 === "sort" ? (
							<MaterialIcons name={name3} size={24} color={themeColor.icon} />
						) : (
							<Ionicons name={name3} size={24} color={themeColor.icon} />
						)}
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

export default TopBar;
