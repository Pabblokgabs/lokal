import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ReusableStyles from "./reusableStyles";

function SpotPostTile({ data, onPress, onHeartPress }) {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();
	const post = data.item;

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("post-details", { post })}
		>
			<View
				style={{
					flexDirection: "column",
					gap: 10,
					borderBottomWidth: 0.5,
					borderBottomColor: themeColor.borderColor,
				}}
			>
				<View>
					{post.media.length > 0 ? (
						<Image
							source={require('../../assets/images/img2.jpg')}
							style={{ width: "100%", height: 250, resizeMode: "cover" }}
						/>
					) : (
						""
					)}
					<View
						style={{
							position: "absolute",
							right: 15,
							top: 15,
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "flex-end",
						}}
					>
						<TouchableOpacity
							onPress={onHeartPress}
							style={{
								backgroundColor: themeColor.secondaryBackground,
								padding: 5,
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "center",
								borderRadius: "50%",
							}}
						>
							<Ionicons name="heart" size={24} color={themeColor.btn} />
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={{
						padding: 10,
						flexDirection: "column",
						gap: 5 /* backgroundColor: themeColor.red  */,
					}}
				>
					<View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
						<Text
							style={[ReusableStyles.secHeader, { color: themeColor.text }]}
						>
							{post.title}
						</Text>
					</View>

					<View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
						<Text style={[ReusableStyles.text, { color: themeColor.text }]}>
							Entrance:
						</Text>
						<Text
							numberOfLines={1}
							ellipsizeMode="..."
							style={[ReusableStyles.text, { color: themeColor.secondaryText }]}
						>
							{post.entrance}
						</Text>
					</View>

					<View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
						<Text style={[ReusableStyles.text, { color: themeColor.text }]}>
							Date:
						</Text>
						<Text
							numberOfLines={1}
							ellipsizeMode="..."
							style={[ReusableStyles.text, { color: themeColor.secondaryText }]}
						>
							{post.date}
						</Text>
					</View>

					<View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
						<Text style={[ReusableStyles.text, { color: themeColor.text }]}>
							Time:
						</Text>
						<Text
							numberOfLines={1}
							ellipsizeMode="..."
							style={[ReusableStyles.text, { color: themeColor.secondaryText }]}
						>
							{post.time}
						</Text>
					</View>

					<View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
						<Text style={[ReusableStyles.text, { color: themeColor.text }]}>
							Place:
						</Text>
						<Text
							numberOfLines={1}
							ellipsizeMode="..."
							style={[ReusableStyles.text, { color: themeColor.secondaryText }]}
						>
							Urban Café (123 Main St, Cityville)
						</Text>
					</View>

					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<TouchableOpacity>
							<Text style={{ color: themeColor.secondaryText }}>like</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={{ color: themeColor.secondaryText }}>fire</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={{ color: themeColor.secondaryText }}>dislike</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}

export default SpotPostTile;
