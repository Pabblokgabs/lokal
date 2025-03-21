import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../components/reusable/styles";
import TopBar from "../../components/topBar";
import { MaterialIcons } from "@expo/vector-icons";

function Notification() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
			<View style={reusableStyles.wrapper}>
				<FlatList
					data={[1, 2, 3, 4]}
					keyExtractor={(item) => item.reviewId}
					ListHeaderComponent={
						<View style={{ paddingHorizontal: 15 }}>
							<TopBar
								isArrow={true}
								title={"Notification"}
								py={20}
								arrowPress={() => navigation.goBack()}
							/>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between",
									marginBottom: 40,
								}}
							>
								<Text style={[reusableStyles.text, { color: themeColor.text }]}>
									2 New Messages
								</Text>

								<TouchableOpacity>
									<Text
										style={[reusableStyles.text, { color: themeColor.btn }]}
									>
										Mark all as read
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					}
					renderItem={({ item }) => (
						<View
							style={{
								paddingHorizontal: 15,
								marginBottom: 15,
								paddingBottom: 20,
								borderBottomWidth: 1,
								borderBottomColor: themeColor.border,
							}}
						>
							<View
								style={{ flexDirection: "row", gap: 20, alignItems: "center" }}
							>
								<View
									style={{
										backgroundColor: themeColor.secondBg,
										borderRadius: "50%",
									}}
								>
									<View
										style={{
											position: "absolute",
											height: "100%",
											width: "100%",
											backgroundColor: themeColor.btn,
											opacity: 0.1,
											borderRadius: "50%",
										}}
									/>
									<MaterialIcons
										name="calendar-today"
										size={24}
										color={themeColor.btn}
										style={{ margin: 20 }}
									/>
								</View>
								<View style={{ gap: 10, flex: 1 }}>
									<View
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}
									>
										<Text
											numberOfLines={1}
                      lineBreakMode="tail"
											style={[
												reusableStyles.header,
												{ color: themeColor.text, flex: 1 },
											]}
										>
											Dancing Event Neaby You
										</Text>
										<Text
											style={[
												reusableStyles.text,
												{ color: themeColor.secondText, marginLeft: 20 },
											]}
										>
											1h
										</Text>
									</View>
									<Text
                  numberOfLines={3}
                  lineBreakMode="tail"
										style={[
											reusableStyles.text,
											{ color: themeColor.secondText },
										]}
									>
										Dancing Event Neaby You, Dancing Event Neaby You, Dancing
										Event Neaby You, Dancing Event Neaby You, Dancing Event
										Neaby You, Dancing Event Neaby You, Dancing Event Neaby You,
										Dancing Event Neaby You, Dancing Event Neaby You,
									</Text>
								</View>
							</View>
						</View>
					)}
				/>
			</View>
		</SafeAreaView>
	);
}

export default Notification;
