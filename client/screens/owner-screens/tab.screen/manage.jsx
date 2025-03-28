import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import reusableStyles from "../../../components/reusable/styles";
import { useNavigation } from "@react-navigation/native";
import SelectImage from "../../../components/select.image";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { spot } from "../../../lib/dommyData";
import { platformIcon } from "../../../components/user/spot.details/render";
import TopBar from "../../../components/topBar";
import SearchUsers from "../../../components/owner/modal/search.to.add";

export default function Manage() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const item = spot[0];

	const [addModal, setAddModal] = useState(false);

	return (
		<>	
			<SearchUsers visible={addModal} setVisible={setAddModal} />
			<View
				style={[reusableStyles.wrapper, { backgroundColor: themeColor.bg }]}
			>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Image
						source={require("../../../assets/images/img2.jpg")}
						style={{ width: "100%", height: 300 }}
					/>

					<View style={{ height: 10 }} />

					{[1, 2].length !== 0 && (
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								gap: 10,
								flexWrap: "wrap",
								marginHorizontal: 15,
							}}
						>
							{[1, 2].map((item, index) => (
								<View key={index} style={{ width: "31.5%", height: 80 }}>
									<Image
										source={require("../../../assets/images/img2.jpg")}
										style={{
											width: "100%",
											height: "100%",
											resizeMode: "cover",
											borderRadius: 10,
										}}
									/>

									<TouchableOpacity
										style={{
											position: "absolute",
											right: 5,
											top: 5,
											backgroundColor: themeColor.secondBtn,
											padding: 5,
											borderRadius: "50%",
										}}
									>
										<MaterialIcons
											name="delete-forever"
											size={18}
											color={"white"}
										/>
									</TouchableOpacity>
								</View>
							))}

							{[1, 2].length < 3 && (
								<TouchableOpacity
									style={{
										width: "31.5%",
										height: 80,
										alignItems: "center",
										justifyContent: "center",
										borderColor: themeColor.btn,
										borderWidth: 0.5,
									}}
								>
									<View
										style={{
											position: "absolute",
											flex: 1,
											width: "100%",
											backgroundColor: themeColor.btn,
											opacity: 0.1,
										}}
									/>
									<SelectImage path={"images"} size={40} />
								</TouchableOpacity>
							)}
						</View>
					)}

					<View style={{ height: 20 }} />

					<View
						style={{
							alignItems: "center",
							justifyContent: "center",
							gap: 10,
							marginTop: 20,
							marginBottom: 30,
							paddingHorizontal: 15,
						}}
					>
						<Text
							numberOfLines={1}
							lineBreakMode="tail"
							style={[
								reusableStyles.header,
								{ color: themeColor.text, fontSize: 25 },
							]}
						>
							{item.name}
						</Text>

						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								gap: 5,
							}}
						>
							<Ionicons name="location" size={20} color={themeColor.btn} />
							<Text
								numberOfLines={1}
								lineBreakMode="tail"
								style={[reusableStyles.text, { color: themeColor.secondText }]}
							>
								{item.address}
							</Text>
						</View>
					</View>

					<View
						style={{
							paddingHorizontal: 15,
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							borderBottomColor: themeColor.border,
							borderBottomWidth: 1,
						}}
					>
						<View
							style={{
								height: 100,
								flex: 1,
								alignItems: "center",
								justifyContent: "center",
								gap: 7,
							}}
						>
							<Text
								style={[
									reusableStyles.header,
									{ color: themeColor.text, fontSize: 22 },
								]}
							>
								0
							</Text>

							<Text
								style={[reusableStyles.text, { color: themeColor.secondText }]}
							>
								followings
							</Text>
						</View>
						<View style={{ height: 100, width: 160 }}></View>
						<View
							style={{
								height: 100,
								flex: 1,
								alignItems: "center",
								justifyContent: "center",
								gap: 7,
							}}
						>
							<View
								style={{
									flexDirection: "row",
									gap: 5,
									alignItems: "center",
								}}
							>
								<Ionicons
									name="star"
									size={22}
									color={themeColor.btn}
									style={{ marginBottom: 5 }}
								/>
								<Text
									style={[
										reusableStyles.header,
										{ color: themeColor.text, fontSize: 22 },
									]}
								>
									0
								</Text>
							</View>

							<Text
								style={[reusableStyles.text, { color: themeColor.secondText }]}
							>
								Ratings
							</Text>
						</View>
					</View>

					<View style={{ paddingHorizontal: 15, gap: 10 }}>
						<View
							style={{
								flexDirection: "row",
								gap: 10,
								marginTop: 20,
								marginBottom: 10,
							}}
						>
							{item.spotType.map((item) => (
								<View
									key={item}
									style={{
										paddingHorizontal: 10,
										paddingVertical: 6,
										borderRadius: 10,
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<View
										style={{
											position: "absolute",
											width: "100%",
											height: "100%",
											backgroundColor: themeColor.btn,
											opacity: 0.1,
											borderRadius: 10,
										}}
									/>
									<Text
										style={[reusableStyles.text, { color: themeColor.btn }]}
									>
										{item}
									</Text>
								</View>
							))}
						</View>

						<Text style={[reusableStyles.header, { color: themeColor.text }]}>
							Description
						</Text>

						<Text
							style={[reusableStyles.text, { color: themeColor.secondText }]}
						>
							{item.description}
						</Text>

						<View style={{ height: 10 }} />

						<Text style={[reusableStyles.header, { color: themeColor.text }]}>
							Country:
						</Text>

						<Text
							style={[reusableStyles.text, { color: themeColor.secondText }]}
						>
							{item.country}, {item.city}
						</Text>

						<Text style={[reusableStyles.header, { color: themeColor.text }]}>
							Oparation time:
						</Text>

						{item.operationTime === "24/7" ? (
							<Text
								style={[reusableStyles.text, { color: themeColor.secondText }]}
							>
								{item.operationTime}
							</Text>
						) : (
							<View
								style={{
									gap: 10,
								}}
							>
								{item.operationTime.map((item, index) => (
									<View
										key={index}
										style={{
											flexDirection: "row",
											alignItems: "center",
											gap: 10,
										}}
									>
										<Text
											style={[reusableStyles.text, { color: themeColor.text }]}
										>
											{item.days}:
										</Text>

										<Text
											style={[
												reusableStyles.text,
												{ color: themeColor.secondText },
											]}
										>
											{item.time}
										</Text>
									</View>
								))}
							</View>
						)}

						<Text style={[reusableStyles.header, { color: themeColor.text }]}>
							Allowed gender:
						</Text>

						<Text
							style={[reusableStyles.text, { color: themeColor.secondText }]}
						>
							{item.gender}
						</Text>

						<Text style={[reusableStyles.header, { color: themeColor.text }]}>
							Allowed age:
						</Text>

						<Text
							style={[reusableStyles.text, { color: themeColor.secondText }]}
						>
							{item.preferredAge}
						</Text>

						{item.links.length !== 0 && (
							<>
								<Text
									style={[reusableStyles.header, { color: themeColor.text }]}
								>
									Social media:
								</Text>

								<View
									style={{
										gap: 10,
									}}
								>
									{item.links.map((item) => (
										<TouchableOpacity
											key={item.url}
											onPress={() => Linking.openURL(item.url)}
											style={{
												flexDirection: "row",
												alignItems: "center",
												gap: 10,
											}}
										>
											<Ionicons
												name={platformIcon(item.platform)}
												size={24}
												color={themeColor.btn}
											/>

											<Text
												numberOfLines={1}
												lineBreakMode="tail"
												style={[
													reusableStyles.text,
													{ color: themeColor.link },
												]}
											>
												{item.url}
											</Text>
										</TouchableOpacity>
									))}
								</View>
							</>
						)}

						<TopBar
							isArrow={true}
							title={"Members"}
							textAlign={"left"}
							I_icon={"add"}
							I_press={() => setAddModal(true)}
						/>

						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
								backgroundColor: themeColor.secondBg,
								padding: 10,
								borderRadius: 10,
							}}
						>
							<View
								style={{ flexDirection: "row", gap: 10, alignItem: "center" }}
							>
								<Image
									source={require("../../../assets/images/img.jpg")}
									style={{
										height: 50,
										width: 50,
										resizeMode: "cover",
										borderRadius: "50%",
									}}
								/>

								<View style={{ justifyContent: "center", gap: 3 }}>
									<Text
										style={[reusableStyles.header, { color: themeColor.text }]}
									>
										Pabblo kgabs
									</Text>

									<Text
										style={[
											reusableStyles.text,
											{ color: themeColor.secondText },
										]}
									>
										Owner
									</Text>
								</View>
							</View>

							<TouchableOpacity
								style={{
									padding: 10,
									borderRadius: "50%",
									backgroundColor: themeColor.cont,
								}}
							>
								<MaterialIcons name="edit" size={24} color={themeColor.btn} />
							</TouchableOpacity>
						</View>
					</View>

					<View style={{ height: 100 }} />
				</ScrollView>
			</View>
		</>
	);
}
