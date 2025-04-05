import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	ScrollView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Switch, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import reusableStyles from "../../../components/reusable/styles";
import Btn from "../../../components/btn";
import { event } from "../../../lib/dommyData";
import EventHistoryTile from "../../../components/owner/event.history.tile";

function Home() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [isEnabled, setISEnabled] = useState(true);
	const [isModal, setIsModal] = useState(false);

	const prevIsEnabled = useRef(isEnabled);

	const toggleSwitch = () => {
		setISEnabled((prev) => !prev);
	};

	useEffect(() => {
		if (prevIsEnabled.current !== isEnabled) {
			setIsModal(true);
		}

		prevIsEnabled.current = isEnabled;
	}, [isEnabled]);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
			<View style={reusableStyles.wrapper}>
				<View
					style={{
						gap: 15,
						paddingHorizontal: 15,
						paddingVertical: 20,
						backgroundColor: themeColor.btn,
					}}
				>
					<View
						style={{
							gap: 10,
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<Text style={[reusableStyles.header, { color: themeColor.text }]}>
							Shipping Lifestyle
						</Text>

						<TouchableOpacity
							onPress={() => navigation.navigate("notification")}
						>
							<Ionicons
								name="notifications-outline"
								size={24}
								color={"white"}
							/>
							<View
								style={{
									padding: 2,
									backgroundColor: "red",
									position: "absolute",
									top: -5,
									right: -2,
									borderRadius: 10,
								}}
							>
								<Text
									style={[
										reusableStyles.otherText,
										{
											color: "white",
										},
									]}
								>
									0
								</Text>
							</View>
						</TouchableOpacity>
					</View>

					<View
						style={{
							gap: 10,
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: themeColor.bg,
							borderRadius: 20,
							padding: 10,
						}}
					>
						<Text
							style={[reusableStyles.text, { color: themeColor.text, flex: 1 }]}
						>
							{isEnabled ? "Online" : "Offline"}
						</Text>

						<Switch
							value={isEnabled}
							onValueChange={toggleSwitch}
							color={themeColor.link}
							thumbColor={"red"}
							trackColor={{ false: themeColor.cont, true: themeColor.cont }}
						/>
					</View>
				</View>

				<ScrollView showsVerticalScrollIndicator={false}>
					<FlatList
						data={[1, 2]}
						keyExtractor={(item) => item}
						numColumns={2}
						renderItem={({ item }) => (
							<View
								style={{
									flex: 1,
									gap: 40,
									margin: 15,
									padding: 10,
									borderColor: themeColor.border,
									borderWidth: 1,
									borderBottomWidth: 5,
									borderBottomColor: themeColor.btn,
								}}
							>
								<View
									style={{
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "space-between",
										gap: 10,
									}}
								>
									<Text
										style={[
											reusableStyles.lgHeader,
											{ color: themeColor.text, fontSize: 35 },
										]}
									>
										0
									</Text>

									<MaterialCommunityIcons
										name="nature-people"
										size={30}
										color={themeColor.icon}
									/>
								</View>
								<Text
									style={[
										reusableStyles.text,
										{ color: themeColor.secondText },
									]}
								>
									Plan
								</Text>
							</View>
						)}
					/>

					<View style={{ marginTop: 20, marginBottom: 100 }}>
						<Text
							style={[
								reusableStyles.header,
								{ color: themeColor.text, paddingHorizontal: 15 },
							]}
						>
							Event History
						</Text>

						<View style={{ height: 20 }} />

						<FlatList
							data={event}
							keyExtractor={(item) => item.eventId}
							renderItem={({ item }) => (
								<View style={{ paddingHorizontal: 15, marginBottom: 20 }}>
									<EventHistoryTile item={item} />
								</View>
							)}
						/>
					</View>
				</ScrollView>
			</View>

			<Modal
				isVisible={isModal}
				onBackdropPress={() => setIsModal(false)}
				onBackButtonPress={() => setIsModal(false)}
				animationIn="zoomIn"
				animationOut="zoomOut"
				onSwipeComplete={() => setIsModal(false)}
				backdropOpacity={0.5}
				style={{ justifyContent: "center", alignItems: "center" }}
			>
				<View
					style={{
						padding: 15,
						backgroundColor: themeColor.secondBg,
						width: "85%",
						gap: 10,
						borderRadius: 10,
					}}
				>
					<View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
						<Text
							style={[
								reusableStyles.header,
								{ color: themeColor.text, textAlign: "center", flex: 1 },
							]}
						>
							Your spot is now {isEnabled ? "Online" : "offline"}
						</Text>

						<TouchableOpacity onPress={() => setIsModal(false)}>
							<Ionicons name="close" size={24} color={themeColor.btn} />
						</TouchableOpacity>
					</View>

					<Text
						style={[
							reusableStyles.text,
							{ color: themeColor.secondText, textAlign: "center" },
						]}
					>
						This will change automatically by its operation time. Press the
						button below if you wish to change the status manually
					</Text>

					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							gap: 10,
							marginTop: 10,
						}}
					>
						<View style={{ flex: 1 }}>
							<Btn text={"Change Manually"} />
						</View>
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	);
}

export default Home;
