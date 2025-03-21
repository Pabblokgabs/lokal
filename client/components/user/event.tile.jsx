import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import reusableStyles from "../reusable/styles";

const EventTile = ({ item, isLikeIcon, onEventPress }) => {
	const themeColor = useTheme().colors;

	const type = ["Dance", "Music"];

	return (
		<TouchableOpacity
			onPress={onEventPress}
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
				{isLikeIcon !== undefined ? (
					<></>
				) : (
					<TouchableOpacity
						style={{
							position: "absolute",
							top: 10,
							right: 10,
							backgroundColor: themeColor.secondBg,
							padding: 7,
							borderRadius: "50%",
						}}
					>
						<Ionicons name="heart" size={24} color={themeColor.btn} />
					</TouchableOpacity>
				)}
			</View>
			<View style={{ flex: 1, gap: 5 }}>
				<View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
					{type.map((item, index) => (
						<View
							key={index}
							style={{
								paddingHorizontal: 10,
								paddingVertical: 5,
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<View
								style={{
									position: "absolute",
									width: "100%",
									height: "100%",
									left: 0,
									backgroundColor: themeColor.btn,
									opacity: 0.1,
									borderRadius: 10,
								}}
							/>
							<Text style={[reusableStyles.text, { color: themeColor.btn }]}>
								{item}
							</Text>
						</View>
					))}
				</View>

				<Text style={[reusableStyles.header, { color: themeColor.text }]}>
					{item.name}
				</Text>

				<View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
					<Ionicons name="location" size={18} color={themeColor.btn} />
					<Text style={[reusableStyles.text, { color: themeColor.secondText }]}>
						{"rakabe, room 5"}
					</Text>
				</View>

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
			</View>
		</TouchableOpacity>
	);
};

export default EventTile;
