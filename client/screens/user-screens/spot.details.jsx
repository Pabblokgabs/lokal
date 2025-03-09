import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import ReusableStyles from "../../components/reausable/reusableStyles";
import TopBar from "../../components/topBar";
import { AntDesign } from "@expo/vector-icons";

function SpotDetails() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();
	const data = useRoute().params?.item.item;

	return (
		<ScrollView style={{ backgroundColor: themeColor.background, flex: 1 }}>
			<View>
				<Image
					source={require("../../assets/images/img2.jpg")}
					style={{
						width: "100%",
						height: 400,
						objectFit: "cover",
						borderBottomLeftRadius: 20,
						borderBottomRightRadius: 20,
					}}
				/>
				<View
					style={{
						position: "absolute",
						top: 15,
						left: 15,
						right: 15,
						flexDirection: "row",
						justifyContent: "flex-start",
					}}
				>
					<TouchableOpacity
						onPress={() => navigation.goBack()}
						style={{
							padding: 5,
							backgroundColor: themeColor.background,
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
							borderRadius: "50%",
						}}
					>
						<AntDesign name="arrowleft" size={24} color={themeColor.icon} />
					</TouchableOpacity>
				</View>
			</View>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<View
					style={{
						position: "absolute",
						top: -40,
						padding: 10,
						backgroundColor: themeColor.secondaryBackground,
						width: '80%',
						borderRadius: 10,
						flexDirection: "column",
						gap: 10,
						shadowOffset: {
							width: 2,
							height: 2,
						},
						shadowOpacity: 0.25,
						shadowRadius: 4,
						elevation: 5,
					}}
				>
					<Text style={[ReusableStyles.header, { color: themeColor.text }]}>
						{data.name}
					</Text>
					<Text
						style={[ReusableStyles.text, { color: themeColor.secondaryText }]}
					>
						{data.address}
					</Text>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<Text
							style={[ReusableStyles.text, { color: themeColor.secondaryText }]}
						>
							{data.operationTime}
						</Text>
						<Text style={[ReusableStyles.text, { color: themeColor.secondaryText }]}>
							<AntDesign name="star" size={20} color={themeColor.red} />
							{data.rating}
						</Text>
					</View>
				</View>
			</View>
			<View style={{height: 90}} />
			<Text style={[ReusableStyles.text, { color: themeColor.secondaryText, paddingHorizontal: 15 }]}>
				{data.description}
			</Text>
		</ScrollView>
	);
}

export default SpotDetails;
