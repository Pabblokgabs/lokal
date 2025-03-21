import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "react-native-paper";
import reusableStyles from "../reusable/styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Btn from "../btn";
import ImageStack from "../image.stack";

const PopularTile = ({ item }) => {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={{
				flexDirection: "column",
				gap: 10,
				padding: 10,
				backgroundColor: themeColor.secondBg,
				borderRadius: 10,
			}}
		>
			<Image
				source={require("../../assets/images/img2.jpg")}
				style={{
					height: 200,
					width: "100%",
					resizeMode: "cover",
					borderRadius: 10,
				}}
			/>
			<Text
				numberOfLines={1}
				lineBreakMode="tail"
				style={[
					reusableStyles.header,
					{ color: themeColor.text, fontWeight: "600" },
				]}
			>
				{item.name}
			</Text>

			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						gap: 5,
					}}
				>
					<MaterialIcons
						name="calendar-month"
						size={20}
						color={themeColor.btn}
					/>
					<Text style={[reusableStyles.text, { color: themeColor.secondText }]}>
						{item.date}
					</Text>
				</View>

				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						gap: 5,
					}}
				>
					<Ionicons name="location" size={20} color={themeColor.btn} />
					<Text style={[reusableStyles.text, { color: themeColor.secondText }]}>
						js street, rakabe
					</Text>
				</View>
			</View>

			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					marginTop: 10,
				}}
			>
				<View style={{ flex: 1, height: "100%" }}>
					<ImageStack images={[1, 2, 3, 4, 5, 6, 7]} />
				</View>
				<Btn
					text={"JOIN NOW"}
					backgroundColor={themeColor.secondBtn}
					borderColor={themeColor.secondBtn}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default PopularTile;
