import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../components/reusable/styles";
import TopBar from "../../components/topBar";
import TextInputContainer from "../../components/reusable/text.input";
import { Ionicons } from "@expo/vector-icons";
import { messages } from "../../lib/dommyData";

function Inbox() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const renderComponent = (role, item) => {
		switch (role) {
			case "me":
				return messageStyling(role, item);
			case "notMe":
				return messageStyling(role, item);
		}
	};

	const messageStyling = (value, item) => {
		return (
			<View
				style={{
					width: "100%",
					flexDirection: "row",
					justifyContent: value === "me" ? "flex-end" : "flex-start",
				}}
			>
				<View style={{ maxWidth: "80%" }}>
					<View
						style={{
							padding: 10,
							backgroundColor:
								value !== "me" ? themeColor.cont : themeColor.btn,
							borderRadius: 10,
						}}
					>
						<Text
							style={[
								reusableStyles.text,
								{ color: value === "me" ? "white" : themeColor.text },
							]}
						>
							{item.message}
						</Text>
					</View>
					<View
						style={{
							flexDirection: value === "me" ? "row-reverse" : "row",
							alignItems: "center",
							justifyContent: "space-between",
							marginTop: 10,
						}}
					>
						<View
							style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
						>
							{/* <Image
								source={require("../../assets/images/img.jpg")}
								style={{
									borderRadius: "50%",
									height: 40,
									width: 40,
									resizeMode: "cover",
								}}
							/>
							<Text style={[reusableStyles.text, { color: themeColor.text }]}>
								John Doe
							</Text> */}
						</View>
						<Text
							style={[reusableStyles.text, { color: themeColor.secondText }]}
						>
							{item.time}
						</Text>
					</View>
				</View>
			</View>
		);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
			<View style={reusableStyles.wrapper}>
				<View style={{ paddingHorizontal: 15 }}>
					<TopBar isArrow={true} I_icon={"ellipsis-vertical"} py={20} arrowPress={() => navigation.goBack()}>
						<View
							style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
						>
							<Image
								source={require("../../assets/images/img.jpg")}
								style={{
									borderRadius: "50%",
									height: 40,
									width: 40,
									resizeMode: "cover",
								}}
							/>
							<View>
								<Text style={[reusableStyles.text, { color: themeColor.text }]}>
									John Doe
								</Text>
								<Text style={[reusableStyles.text, { color: themeColor.btn }]}>
									Online
								</Text>
							</View>
						</View>
					</TopBar>
				</View>

				<View style={{ flex: 1 }}>
					<View style={{ flex: 1, backgroundColor: themeColor.secondBg }}>
						<FlatList
							data={messages}
							keyExtractor={(item, index) => index}
							renderItem={({ item }) => (
								<View style={{ paddingHorizontal: 15, marginVertical: 20 }}>
									{renderComponent(
										item.role === "owner" ? "me" : "notMe",
										item
									)}
								</View>
							)}
						/>
					</View>

					<View
						style={{
							paddingHorizontal: 15,
							paddingTop: 20,
							paddingBottom: 15,
							shadowOffset: { width: 0, height: -5 },
							shadowOpacity: 0.1,
							shadowRadius: 5,
							elevation: 1,
							shadowColor: themeColor.bg,
						}}
					>
						<View
							style={{
								backgroundColor: themeColor.cont,
								flexDirection: "row",
								alignItems: "flex-end",
								padding: 10,
								borderRadius: 10,
							}}
						>
							<View style={{ flex: 1 }}>
								<TextInputContainer
									borderColor={"transparent"}
									placeholder={"Type a message here..."}
									height={40}
								/>
							</View>
							<TouchableOpacity
								style={{
									paddingHorizontal: 20,
									height: "100%",
									backgroundColor: themeColor.btn,
									alignItems: "center",
									justifyContent: "center",
									borderRadius: 10,
								}}
							>
								<Ionicons name="send" size={24} color={"white"} />
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default Inbox;
