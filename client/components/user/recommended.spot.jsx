import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "react-native-paper";
import reusableStyles from "../reusable/styles";
import { Ionicons } from "@expo/vector-icons";

function RecommendedSpot({ data, onSpotPress }) {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();
	// const item = data.item;
	const item = data;

	return (
		<TouchableOpacity
		onPress={onSpotPress}
			style={{
				flexDirection: "row",
				gap: 10,
				padding: 10,
				backgroundColor: themeColor.secondBg,
				borderRadius: 10,
			}}
		>
			<Image
				source={require("../../assets/images/img2.jpg")}
				style={{
					height: 100,
					width: 120,
					resizeMode: "cover",
					borderRadius: 10,
				}}
			/>

			<View
				style={{
					flexDirection: "column",
					gap: 5,
					flex: 1,
				}}
			>
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

				<Text
					numberOfLines={1}
					lineBreakMode="tail"
					style={[reusableStyles.text, { color: themeColor.text }]}
				>
					{item.address}
				</Text>

				<Text
					numberOfLines={1}
					lineBreakMode="tail"
					style={[reusableStyles.text, { color: themeColor.text }]}
				>
					Mon - Sun
				</Text>

				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						gap: 5,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							paddingVertical: 5,
							paddingHorizontal: 10,
							borderRadius: 7,
						}}
					>
						<View
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								height: "100%",
								width: "100%",
								backgroundColor: themeColor.btn,
								opacity: 0.2,
								borderRadius: 7,
							}}
						/>
						<Text style={[reusableStyles.text, { color: themeColor.text }]}>
							{item.spotType[0].substring(0, 1).toUpperCase() +
								item.spotType[0].substring(1)}
						</Text>
					</View>

					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: themeColor.btn,
							padding: 5,
							paddingBottom: 7,
							borderRadius: 7,
							gap: 5,
						}}
					>
						<Ionicons name="star" size={16} color={"white"} />
						<Text style={{ color: "white", fontWeight: "700" }}>
							{item.rating}
						</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}

export default RecommendedSpot;
