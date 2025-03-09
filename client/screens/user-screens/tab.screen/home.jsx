import {
	View,
	TouchableOpacity,
	Text,
	Pressable,
	ScrollView,
	FlatList,
	VirtualizedList,
	Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Feather, Ionicons } from "@expo/vector-icons";
import ReusableStyles from "../../../components/reausable/reusableStyles";
import Preferences from "../../../components/modal/preferences.modal";
import TopBar from "../../../components/topBar";
import Notification from "../../../components/modal/notification.model";
import RefDisplay from "../../../components/home/reference.display";
import { data } from "../../../lib/options";
import ReusableTile from "../../../components/reausable/Reusable.tile";
import { event, spot } from "../../../lib/dommyData";

function Home() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();
	const { width } = Dimensions.get("window");

	const [ads, setAds] = useState(true);
	const display = event[0];

	const [preferencesVisible, setPreferencesVisible] = useState(false);
	const [notificationVisible, setNotificationVisible] = useState(false);

	return (
		<SafeAreaView>
			<Notification
				visible={notificationVisible}
				setVisible={setNotificationVisible}
			/>
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<Preferences
					visible={preferencesVisible}
					setVisible={setPreferencesVisible}
				/>
				<TopBar
					text={"Lokal"}
					name1={"notifications-outline"}
					name2={"search-outline"}
					onPress2={() => navigation.navigate("search")}
					onPress1={() => setNotificationVisible(true)}
				/>
				<ScrollView showsVerticalScrollIndicator={false}>
					{ads && (
						<>
							<View style={{ height: 20 }} />
							<View
								style={{
									padding: 15,
									width: "100%",
									flexDirectio: "column",
									gap: 10,
									backgroundColor: themeColor.secondaryBackground,
									borderRadius: 10,
								}}
							>
								<View style={{ flexDirection: "row", alignContent: "center" }}>
									<Text
										style={[
											ReusableStyles.secHeader,
											{ color: themeColor.text, flex: 1 },
										]}
									>
										Want to cash in some points!
									</Text>
									<TouchableOpacity
										onPress={() => setAds(false)}
										style={{ marginTop: -5 }}
									>
										<Ionicons
											name="close"
											size={24}
											color={themeColor.icon}
											style={{ opacity: 0.5 }}
										/>
									</TouchableOpacity>
								</View>
								<Text
									style={[
										ReusableStyles.secondText,
										{ color: themeColor.secondaryText, flex: 1 },
									]}
								>
									Press the "Generate Link" below to generate your link. Every
									spot registered through your link, you cash in 10Points
								</Text>
							</View>
						</>
					)}

					<View style={{ height: ads ? 25 : 0 }} />

					<TopBar text={"Preferences"} />

					<VirtualizedList
						data={data}
						horizontal
						keyExtractor={(item) => item.label}
						showsHorizontalScrollIndicator={false}
						getItemCount={(data) => data.length}
						getItem={(data, index) => data[index]}
						renderItem={({ item, index }) => (
							<View style={{ marginRight: 10 }}>
								<RefDisplay data={item} color={themeColor.text} />
							</View>
						)}
					/>

					<View style={{ height: 20 }} />

					{display ? (
						<View
							style={{
								padding: 15,
								width: "100%",
								flexDirectio: "column",
								gap: 10,
								backgroundColor: themeColor.secondaryBackground,
								borderRadius: 10,
							}}
						>
							<Text
								style={[
									ReusableStyles.secondText,
									{
										color: themeColor.text,
										padding: 5,
										marginBottom: 20,
										backgroundColor: themeColor.red,
									},
								]}
							>
								CLEAR YOUR SCHEDULE FOR THE UPCOMING EVENT
							</Text>
							<View style={{ flexDirection: "row", gap: 15 }}>
								<View style={{ flex: 1, flexDirection: "column", gap: 10 }}>
									<Text
										style={[
											ReusableStyles.secHeader,
											{ color: themeColor.text },
										]}
									>
										{display.title}
									</Text>

									<Text
										style={[
											ReusableStyles.text,
											{ color: themeColor.secondaryText },
										]}
									>
										One of the events you liked is in 5 day time
									</Text>
								</View>
								<View
									style={{
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<TouchableOpacity
										onPress={() =>
											navigation.navigate("post-details", { display })
										}
										style={{
											paddingHorizontal: 10,
											paddingVertical: 15,
											borderRadius: 10,
											borderWidth: 1,
											borderColor: themeColor.borderColor,
											backgroundColor: themeColor.background,
										}}
									>
										<Text
											style={[
												ReusableStyles.text,
												{
													color: themeColor.text,
													marginRight: 20,
													marginLeft: 20,
												},
											]}
										>
											View
										</Text>
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
								<Pressable
									onPress={() => navigation.navigate("Favorites")}
									style={{
										borderBottomWidth: 0.5,
										borderBottomColor: themeColor.secondBorderColor,
									}}
								>
									<Text style={{ marginTop: 20, color: themeColor.text }}>
										View My Favorites
									</Text>
								</Pressable>
							</View>
						</View>
					) : (
						""
					)}

					<View style={{ height: 20 }} />

					<TopBar text={"Recommendations"} textAlign={"start"}>
						<Feather
							name="list"
							size={24}
							color={themeColor.icon}
							onPress={() => navigation.navigate("recommendations")}
						/>
					</TopBar>

					<FlatList
						data={spot}
						horizontal
						keyExtractor={(item) => item.ownerId}
						showsHorizontalScrollIndicator={false}
						renderItem={(item) => (
							<View
								style={{ marginRight: 10, width: width <= 375 ? 320 : 350 }}
							>
								<ReusableTile
									data={item}
									onPress={() => navigation.navigate("spot-details", { item })}
								/>
							</View>
						)}
					/>
					<View style={{ height: 20 }} />
					<View
						style={{
							flexDirection: "column",
							gap: 10,
							alignItems: "center",
							paddingTop: 50,
							paddingBottom: 150,
						}}
					>
						<Text style={[ReusableStyles.header, { color: themeColor.text }]}>
							Lokal
						</Text>
						<Text
							style={[ReusableStyles.text, { color: themeColor.secondaryText }]}
						>
							Dicover. Explore. Lokal
						</Text>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

export default Home;
