import {
	View,
	Switch,
	Text,
	ScrollView,
	Pressable,
	FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ReusableStyles from "../../../components/reausable/reusableStyles";
import TopBar from "../../../components/topBar";
import { AntDesign, Ionicons } from "@expo/vector-icons";

function Home() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();
	const [isOn, setIsOn] = useState(false);

	const data = [
		{ title: "Followings", value: 0, icon: "people-outline" },
		{ title: "Ratings", value: 0, icon: "star-outline" },
		{ title: "Appearance", value: 0, icon: "people-outline" },
		{ title: "Plan", value: "Basic", icon: "people-outline" },
	];

	const history = [];

	const handleSwitch = () => {
		setIsOn(!isOn);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.background }}>
			<View
				style={{
					backgroundColor: themeColor.btn,
					paddingHorizontal: 15,
					paddingBottom: 15,
				}}
			>
				<TopBar
					text={"Lokal"}
					name1={"notifications-outline"}
					onPress1={() => {}}
				/>

				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						padding: 10,
						paddingHorizontal: 15,
						backgroundColor: themeColor.background,
						borderRadius: 20,
						gap: 5,
					}}
				>
					<Text
						style={[
							ReusableStyles.text,
							{ color: isOn ? "green" : "red", fontWeight: "500" },
						]}
					>
						{isOn ? "On" : "Off"}
					</Text>

					<Text
						style={[
							ReusableStyles.text,
							{ color: themeColor.text, flex: 1, fontWeight: "500" },
						]}
					>
						{isOn ? "Your spot is now Open" : "Your spot is not closed"}
					</Text>

					<Switch />
				</View>
			</View>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{ paddingHorizontal: 15, marginTop: 20, flex: 1 }}
			>
				<FlatList
					data={data}
					numColumns={2}
					keyExtractor={(item) => item.title}
					showsHorizontalScrollIndicator={false}
					renderItem={(item) => (
						<View
							key={item.item.title}
							style={{
								width: "45%",
								height: 150,
								backgroundColor: themeColor.secondaryBackground,
								borderRadius: 10,
								borderBottomWidth: 5,
								borderBlockColor: themeColor.btn,
								flexDirection: "column",
								padding: 10,
								margin: 10,
							}}
						>
							<View
								style={{
									height: 40,
									flexDirection: "row",
									justifyContent: "space-between",
								}}
							>
								<Text
									style={[ReusableStyles.secHeader, { color: themeColor.btn }]}
								>
									{item.item.value}
								</Text>
								<Ionicons
									name={item.item.icon}
									size={30}
									color={themeColor.btn}
								/>
							</View>
							<View
								style={{
									flex: 1,
									flexDirection: "column",
									justifyContent: "flex-end",
								}}
							>
								<Text
									style={[
										ReusableStyles.modalTitle,
										{ color: themeColor.secondaryText },
									]}
								>
									{item.item.title}
								</Text>
							</View>
							<View style={{ height: 20 }}>
								<Pressable>
									<Text></Text>
								</Pressable>
							</View>
						</View>
					)}
				/>
				<View style={{ marginTop: 40 }}>
					<View
						style={{
							backgroundColor: themeColor.secondaryBackground,
							padding: 10,
							borderRadius: 10,
						}}
					>
						<Text
							style={[
								ReusableStyles.modalText,
								{ color: themeColor.text, marginBottom: 20 },
							]}
						>
							History
						</Text>
						{history.length !== 0 ? (
							<View></View>
						) : (
							<Text
								style={[
									ReusableStyles.text,
									{ color: themeColor.secondaryText },
								]}
							>
								You haven't created an event yet
							</Text>
						)}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default Home;
