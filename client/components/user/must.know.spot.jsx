import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { spot } from "../../lib/dommyData";
import reusableStyles from "../reusable/styles";
import { Ionicons } from "@expo/vector-icons";

const MustKnowSpot = () => {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const item = spot[0];

	return (
		<View style={{ flexDirection: "column", gap: 20 }}>
			<Text style={[reusableStyles.lgText, { color: themeColor.text }]}>
				A MUST VISIT SPOT!
			</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("spot-details", { item })}
			>
				<Image
					source={require("../../assets/images/img2.jpg")}
					style={{ height: 300, width: "100%", borderRadius: 10 }}
				/>

				<View
					style={{
						position: "absolute",
						paddingHorizontal: 10,
						top: 15,
						width: "100%",
						alignItems: "flex-end",
					}}
				>
					<View
						style={{
							paddingVertical: 5,
							paddingHorizontal: 8,
							backgroundColor: themeColor.bg,
							flexDirection: "row",
							alignItems: "center",
							gap: 5,
							borderRadius: 8,
						}}
					>
						<Ionicons
							name="star"
							color={themeColor.btn}
							size={20}
							style={{ marginBottom: 5 }}
						/>
						<Text style={[reusableStyles.text, { color: themeColor.text }]}>
							4.9
						</Text>
					</View>
				</View>

				<View
					style={{
						position: "absolute",
						paddingHorizontal: 10,
						bottom: 15,
						gap: 10,
					}}
				>
					<Text
						numberOfLines={1}
						lineBreakMode="tail"
						style={[reusableStyles.header, { color: themeColor.text }]}
					>
						{item.name}
					</Text>
					<Text
						numberOfLines={1}
						lineBreakMode="tail"
						style={[reusableStyles.text, { color: themeColor.secondText }]}
					>
						{item.address}
					</Text>

					<View style={{ flexDirection: "row", gap: 10 }}>
						{item.spotType.map((item) => (
							<View
								key={item}
								style={{
									paddingHorizontal: 10,
									paddingVertical: 6,
									borderRadius: 10,
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<View
									style={{
										position: "absolute",
										width: "100%",
										height: "100%",
										backgroundColor: themeColor.btn,
										opacity: 0.5,
										borderRadius: 10,
									}}
								/>
								<Text style={[reusableStyles.text, { color: themeColor.text }]}>
									{item}
								</Text>
							</View>
						))}
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default MustKnowSpot;
