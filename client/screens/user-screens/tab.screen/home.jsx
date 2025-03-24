import {
	View,
	Text,
	ScrollView,
	Image,
	Pressable,
	VirtualizedList,
	Dimensions,
	FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import reusableStyles from "../../../components/reusable/styles";
import { recommended } from "../../../lib/options";
import TopBar from "../../../components/topBar";
import Preferences from "../../../components/user/preference";
import PopularTile from "../../../components/user/popular.tile";
import { event, spot } from "../../../lib/dommyData";
import RecommendedSpot from "../../../components/user/recommended.spot";
import MustKnowSpot from "../../../components/user/must.know.spot";

function Home() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();
	const { width } = Dimensions.get("window");

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View
				style={[
					reusableStyles.wrapper,
					{ backgroundColor: themeColor.bg, paddingHorizontal: 15 },
				]}
			>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={{ height: 10 }} />

					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<View
							style={{
								flexDirection: "column",
								gap: 5,
							}}
						>
							<Text
								style={[reusableStyles.text, { color: themeColor.secondText }]}
							>
								Current location
							</Text>
							<View
								style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
							>
								<Ionicons name="location" size={22} color={themeColor.btn} />
								<Text
									style={[
										reusableStyles.header,
										{ color: themeColor.text, fontWeight: "semibold" },
									]}
								>
									Tafelkop, RSA
								</Text>
							</View>
						</View>

						<View
							style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
						>
							<Pressable
								onPress={() => navigation.navigate("notification")}
								style={{
									padding: 10,
									borderRadius: "50%",
									backgroundColor: themeColor.cont,
								}}
							>
								<Ionicons
									name="notifications"
									size={24}
									color={themeColor.icon}
								/>
							</Pressable>

							<Pressable onPress={() => navigation.navigate("profile")}>
								<Image
									source={require("../../../assets/avatar/1.svg")}
									style={{
										height: 45,
										width: 45,
										borderRadius: "50%",
										backgroundColor: themeColor.cont,
									}}
								/>
							</Pressable>
						</View>
					</View>

					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							height: 45,
							marginVertical: 30,
							gap: 10,
						}}
					>
						<Pressable
							onPress={() => navigation.navigate("search")}
							style={{
								flex: 1,
								borderRadius: 10,
								borderWidth: 0.5,
								borderColor: themeColor.border,
								height: "100%",
								padding: 15,
								flexDirection: "row",
								alignItems: "center",
								gap: 10,
								backgroundColor: themeColor.secondBg,
							}}
						>
							<AntDesign name="search1" size={24} color={themeColor.btn} />
							<Text
								style={[reusableStyles.text, { color: themeColor.secondText }]}
							>
								Search Spot, Events
							</Text>
						</Pressable>
						<Pressable
							style={{
								backgroundColor: themeColor.btn,
								justifyContent: "center",
								alignItems: "center",
								paddingHorizontal: 15,
								height: "100%",
								borderRadius: 10,
							}}
						>
							<MaterialIcons name="filter-list" size={24} color={"white"} />
						</Pressable>
					</View>

					<View
						style={{
							flexDirection: "column",
							padding: 10,
							gap: 10,
							backgroundColor: themeColor.secondBg,
							borderRadius: 10,
						}}
					>
						<View>
							<Text style={[reusableStyles.text, { color: themeColor.text }]}>
								Want to cash in some POINTS? Invite spot owner, every spot
								registered through your link you get 10 Points. Press the below
								links to get started start
							</Text>
						</View>
						<View style={{ flexDirection: "row", justifyContent: "center" }}>
							<Pressable
								style={{
									borderBottomColor: themeColor.link,
									borderBottomWidth: 0.5,
								}}
							>
								<Text style={{ color: themeColor.link }}>Generate link</Text>
							</Pressable>
						</View>
					</View>

					<TopBar
						fontWeight={"600"}
						isArrow={false}
						title={"Preferences"}
						textAlign={"left"}
						py={20}
						I_icon={"list"}
						I_press={() => navigation.navigate("preference")}
					/>

					<VirtualizedList
						data={recommended}
						horizontal
						keyExtractor={(item) => item.label}
						showsHorizontalScrollIndicator={false}
						getItemCount={(data) => data.length}
						getItem={(data, index) => data[index]}
						renderItem={({ item }) => (
							<View style={{ marginRight: 15 }}>
								<Preferences item={item} />
							</View>
						)}
					/>

					<View style={{ height: 40 }} />

					<MustKnowSpot />

					<View style={{ height: 10 }} />

					<TopBar
						fontWeight={"600"}
						isArrow={false}
						title={"Recommended Spot"}
						textAlign={"left"}
						py={20}
						I_icon={"list"}
						I_press={() => navigation.navigate("recommended")}
					/>

					<FlatList
						data={spot}
						horizontal
						keyExtractor={(item) => item.ownerId}
						showsHorizontalScrollIndicator={false}
						renderItem={({ item }) => (
							<View
								style={{ marginRight: 15, width: width <= 375 ? 320 : 350 }}
							>
								<RecommendedSpot item={item} />
							</View>
						)}
					/>

					<View style={{ height: 10 }} />

					<TopBar
						fontWeight={"600"}
						isArrow={false}
						title={"Popular Events"}
						textAlign={"left"}
						py={20}
						I_icon={"list"}
						I_press={() => navigation.navigate("popular")}
					/>

					<FlatList
						data={event}
						horizontal
						keyExtractor={(item) => item.spotId}
						showsHorizontalScrollIndicator={false}
						renderItem={({ item }) => (
							<View
								style={{ marginRight: 15, width: width <= 375 ? 320 : 350 }}
							>
								<PopularTile item={item} />
							</View>
						)}
					/>

					<View style={{ height: 100 }} />
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

export default Home;
