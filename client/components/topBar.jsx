import { View, Text, Platform, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import reusableStyles from "./reusable/styles";

const TopBar = ({
	py,
	arrowPress,
	title,
	children,
	textAlign,
	I_icon,
	I_press,
	M_icon,
	M_press,
	A_icon,
	A_press,
	isArrow,
	fontWeight,
	add_icon,
	add_press,
}) => {
	const backIcon = Platform.OS === "ios" ? "left" : "arrowleft";
	const themeColor = useTheme().colors;

	return (
		<View
			style={{
				flexDirection: "row",
				alignItems: "center",
				paddingVertical: py || 10,
			}}
		>
			{isArrow || (
				<TouchableOpacity onPress={arrowPress}>
					<AntDesign name={backIcon} size={24} color={themeColor.icon} />
				</TouchableOpacity>
			)}

			<View
				style={{
					flex: 1,
					flexDirection: "row",
					alignItems: "center",
					marginLeft: isArrow && 15,
				}}
			>
				{title ? (
					<Text
						style={[
							reusableStyles.header,
							{
								color: themeColor.text,
								fontSize: 22,
								fontWeight: fontWeight ? fontWeight : "700",
								textAlign: textAlign
									? textAlign
									: Platform.OS === "ios"
									? "center"
									: "left",
							},
						]}
					>
						{title}
					</Text>
				) : (
					children
				)}
			</View>

			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<TouchableOpacity onPress={I_press}>
					<Ionicons
						name={I_icon}
						size={24}
						color={themeColor.icon}
						style={{ marginRight: I_icon && (M_icon || A_icon) ? 15 : 0 }}
					/>
				</TouchableOpacity>

				<TouchableOpacity onPress={M_press}>
					<MaterialIcons name={M_icon} size={24} color={themeColor.icon} />
				</TouchableOpacity>

				<TouchableOpacity onPress={A_press}>
					<AntDesign
						name={A_icon}
						size={24}
						color={themeColor.icon}
						style={{ marginLeft: A_icon && M_icon ? 15 : 0 }}
					/>
				</TouchableOpacity>

				<TouchableOpacity onPress={add_press}>
					<Ionicons
						name={add_icon}
						size={24}
						color={themeColor.icon}
						style={{ marginLeft: add_icon ? 15 : 0 }}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default TopBar;
