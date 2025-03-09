import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import ReusableStyles from "./reusableStyles";

function ReusableTile({ data, onPress }) {
	const themeColor = useTheme().colors;
	const item = data.item;

	return (
		<TouchableOpacity key={item.ownerId} onPress={onPress}>
			<View
				style={{
					padding: 10,
					backgroundColor: themeColor.secondaryBackground,
					flexDirection: "row",
					gap: 10,
					borderRadius: 10,
				}}
			>
				<Image
					source={require('../../assets/images/img2.jpg')}
					style={{ width: 150, height: 100, borderRadius: 10, objectFit: "cover" }}
				/>
				<View style={{ flexDirection: "column", gap: 5, flex: 1 }}>
					<Text
						numberOfLines={1}
						ellipsizeMode="..."
						style={[ReusableStyles.secHeader, { color: themeColor.text }]}
					>
						{item.name}
					</Text>
					<Text
						numberOfLines={1}
						ellipsizeMode="..."
						style={[
							ReusableStyles.secondText,
							{ color: themeColor.secondaryText },
						]}
					>
						{item.address}
					</Text>
					<View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
						{item.spotType.map((item) => (
							<Text
								numberOfLines={1}
								ellipsizeMode="..."
								style={[
									ReusableStyles.secondText,
									{ color: themeColor.secondaryText },
								]}
								key={item}
							>
								{item},
							</Text>
						))}
					</View>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<Text
							numberOfLines={1}
							ellipsizeMode="..."
							style={[
								ReusableStyles.secondText,
								{ color: themeColor.secondaryText },
							]}
						>
							{item.operationTime[0]}
						</Text>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<AntDesign name="star" size={16} color={themeColor.red} />
							<Text
								numberOfLines={1}
								ellipsizeMode="..."
								style={{ color: themeColor.text }}
							>
								{item.rating}
							</Text>
						</View>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}

export default ReusableTile;
