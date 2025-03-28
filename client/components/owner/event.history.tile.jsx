import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import reusableStyles from "../reusable/styles";

const EventHistoryTile = ({ item }) => {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const type = ["Dance", "Music"];

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("event-details", { item })}
			style={{
				padding: 10,
				borderRadius: 10,
				flexDirection: "row",
				alignItems: "center",
				backgroundColor: themeColor.secondBg,
				gap: 10,
			}}
		>
			<View style={{ width: "40%", height: 150 }}>
				<Image
					source={require("../../assets/images/img2.jpg")}
					style={{
						resizeMode: "cover",
						borderRadius: 10,
						width: "100%",
						height: "100%",
					}}
				/>
			</View>
			<View style={{ flex: 1, gap: 5 }}>
				
      <Text style={[reusableStyles.text, { color: themeColor.link, marginBottom: 5 }]}>
					Upcoming
				</Text>

				<Text style={[reusableStyles.header, { color: themeColor.text, marginBottom: 5 }]}>
					{item.name}
				</Text>

				<View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
					<MaterialIcons
						name="calendar-month"
						size={18}
						color={themeColor.btn}
					/>
					<Text
						style={[
							reusableStyles.text,
							{
								color: themeColor.secondText,
								flexDirection: "row",
								alignItems: "center",
							},
						]}
					>
						{item.date}, {item.time}
					</Text>
				</View>

				<View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
					<Text style={[reusableStyles.text, { color: themeColor.secondText }]}>
						Entrance:
					</Text>
					<Text
						style={[
							reusableStyles.text,
							{ color: themeColor.btn, fontWeight: "700" },
						]}
					>
						{item.entrance}
					</Text>
				</View>

				<View
					style={{
            marginTop: 5,
						flexDirection: "row",
						alignItems: "center",
						gap: 5,
						padding: 5,
            paddingVertical: 10,
						borderRadius: 5,
						backgroundColor: themeColor.cont,
					}}
				>
					<Text style={[reusableStyles.text, { color: themeColor.secondText }]}>
						Organiser:
					</Text>
					<Text
						numberOfLines={1}
						lineBreakMode="tail"
						style={[
							reusableStyles.text,
							{ color: themeColor.btn, fontWeight: "700" },
						]}
					>
						Pabblo kgabs
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default EventHistoryTile;
