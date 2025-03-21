import {
	View,
	Text,
	ScrollView,
	Pressable,
	TouchableOpacity,
	Image,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../components/reusable/styles";
import {
	AntDesign,
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
} from "@expo/vector-icons";
import Btn from "../../components/btn";

function EventView() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [stuck, setStuck] = useState(false);

	const handleScroll = (event) => {
		const scrollY = event.nativeEvent.contentOffset.y;

		if (scrollY > 15 && !stuck) {
			setStuck(true);
		} else if (scrollY <= 10 && stuck) {
			setStuck(false);
		}
	};

	const type = ["Music", "Dance", "Foodie"];
	const going = [1, 2, 3, 4];

	return (
		<View style={reusableStyles.wrapper}>
			{stuck && (
				<View
					style={{
						position: "absolute",
						top: 0,
						width: "100%",
						padding: 15,
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						backgroundColor: themeColor.bg,
						zIndex: 1000000,
						borderBottomWidth: 0.5,
						borderBottomColor: themeColor.border,
					}}
				>
					<TouchableOpacity
						style={{
							padding: 10,
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: themeColor.cont,
							borderRadius: "50%",
						}}
					>
						<AntDesign name="arrowleft" size={24} color={themeColor.text} />
					</TouchableOpacity>

					<View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
						<TouchableOpacity
							style={{
								padding: 7,
								alignItems: "center",
								justifyContent: "center",
								backgroundColor: themeColor.cont,
								borderRadius: "50%",
							}}
						>
							<MaterialCommunityIcons
								name="share-variant"
								size={24}
								color={themeColor.text}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							style={{
								padding: 7,
								alignItems: "center",
								justifyContent: "center",
								backgroundColor: themeColor.cont,
								borderRadius: "50%",
							}}
						>
							<Ionicons
								name="heart-outline"
								size={24}
								color={themeColor.text}
							/>
						</TouchableOpacity>
					</View>
				</View>
			)}

			<ScrollView
				onScroll={handleScroll}
				scrollEventThrottle={16}
				showsVerticalScrollIndicator={false}
				style={{ flex: 1, backgroundColor: themeColor.bg }}
			>
				<Image
					source={require("../../assets/images/img2.jpg")}
					style={{ resizeMode: "cover", height: 300, width: "100%" }}
				/>

				<View
					style={{
						position: "absolute",
						top: 30,
						left: 0,
						paddingHorizontal: 15,
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						width: "100%",
					}}
				>
					<TouchableOpacity
						style={{
							padding: 10,
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: themeColor.secondBg,
							borderRadius: "50%",
						}}
					>
						<AntDesign name="arrowleft" size={24} color={themeColor.text} />
					</TouchableOpacity>

					<View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
						<TouchableOpacity
							style={{
								padding: 7,
								alignItems: "center",
								justifyContent: "center",
								backgroundColor: themeColor.secondBg,
								borderRadius: "50%",
							}}
						>
							<MaterialCommunityIcons
								name="share-variant"
								size={24}
								color={themeColor.text}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							style={{
								padding: 7,
								alignItems: "center",
								justifyContent: "center",
								backgroundColor: themeColor.secondBg,
								borderRadius: "50%",
							}}
						>
							<Ionicons
								name="heart-outline"
								size={24}
								color={themeColor.text}
							/>
						</TouchableOpacity>
					</View>
				</View>

				<View
					style={{
						position: "absolute",
						top: 140,
						left: 0,
						paddingHorizontal: 15,
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						width: "100%",
					}}
				>
					<TouchableOpacity
						style={{
							paddingHorizontal: 20,
							paddingVertical: 10,
							flexDirection: "row",
							gap: 10,
							backgroundColor: "white",
							borderRadius: 10,
						}}
					>
						<AntDesign name="picture" size={24} color={themeColor.secondBtn} />
						<Text
							style={[
								reusableStyles.text,
								{ color: themeColor.secondBtn, fontSize: 22 },
							]}
						>
							View All
						</Text>
					</TouchableOpacity>
				</View>

				<View
					style={{
						top: -20,
						backgroundColor: themeColor.bg,
						borderTopRightRadius: 20,
						borderTopLeftRadius: 20,
						paddingHorizontal: 15,
						paddingVertical: 20,
						gap: 20,
					}}
				>
					<View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
						{type.map((item) => (
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
								<Text style={[reusableStyles.text, { color: themeColor.btn }]}>
									{item}
								</Text>
							</View>
						))}
					</View>

					<Text style={[reusableStyles.lgHeader, { color: themeColor.text }]}>
						Dijong Life Style
					</Text>

					<View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
						<View
							style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
						>
							<Ionicons name="location" size={20} color={themeColor.btn} />

							<Text
								style={[reusableStyles.text, { color: themeColor.secondText }]}
							>
								Polokwane, SA
							</Text>
						</View>

						<View
							style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
						>
							<Ionicons name="time" size={20} color={themeColor.btn} />

							<Text
								style={[reusableStyles.text, { color: themeColor.secondText }]}
							>
								Sep 29 - 10:00PM
							</Text>
						</View>
					</View>

					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							{going.length !== 0 && (
								<>
									<Image
										source={require("../../assets/images/img.jpg")}
										style={{
											resizeMode: "cover",
											height: 40,
											width: 40,
											borderRadius: "50%",
										}}
									/>
									{going.slice(1).map((item, index) => (
										<Image
											key={index}
											source={require("../../assets/images/img.jpg")}
											style={{
												resizeMode: "cover",
												height: 40,
												width: 40,
												borderRadius: "50%",
											}}
										/>
									))}
								</>
							)}

							<TouchableOpacity
								style={{
									padding: 7,
									borderRadius: "50%",
									backgroundColor: themeColor.btn,
								}}
							>
								<Ionicons name="add" size={24} color={"white"} />
							</TouchableOpacity>

							<Text
								style={[
									reusableStyles.header,
									{ color: themeColor.text, marginLeft: 10 },
								]}
							>
								600+
							</Text>
						</View>

						<Pressable>
							<Text
								style={[
									reusableStyles.text,
									{ color: themeColor.btn, fontSize: 20 },
								]}
							>
								View All
							</Text>
						</Pressable>
					</View>

					<Text style={[reusableStyles.header, { color: themeColor.text }]}>
						About Event
					</Text>

					<Text style={[reusableStyles.text, { color: themeColor.secondText }]}>
						A cozy café with a great selection of artisan coffee. A cozy café
						with a great selection of artisan coffee. A cozy café with a great
						selection of artisan coffee. A cozy café with a great selection of
						artisan coffee. A cozy café with a great selection of artisan
						coffee. A cozy café with a great selection of artisan coffee. A cozy
						café with a great selection of artisan coffee.
					</Text>

					<Text style={[reusableStyles.header, { color: themeColor.text }]}>
						Organiser:
					</Text>

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
								source={require("../../assets/images/img.jpg")}
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
									Manager
								</Text>
							</View>
						</View>
						<View
							style={{ flexDirection: "row", gap: 10, alignItem: "center" }}
						>
							<TouchableOpacity
								style={{
									padding: 10,
									backgroundColor: themeColor.cont,
									borderRadius: "50%",
								}}
							>
								<MaterialIcons name="phone" size={24} color={themeColor.btn} />
							</TouchableOpacity>

							<TouchableOpacity
								style={{
									padding: 10,
									backgroundColor: themeColor.cont,
									borderRadius: "50%",
								}}
							>
								<MaterialIcons
									name="message"
									size={24}
									color={themeColor.btn}
								/>
							</TouchableOpacity>
						</View>
					</View>

					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							borderBottomColor: themeColor.border,
							borderBottomWidth: 1,
							paddingBottom: 10,
						}}
					>
						<Text style={[reusableStyles.header, { color: themeColor.text }]}>
							Address
						</Text>

						<Pressable>
							<Text style={[reusableStyles.text, { color: themeColor.btn }]}>
								View On Map
							</Text>
						</Pressable>
					</View>
				</View>
			</ScrollView>

			<View
				style={{
					paddingHorizontal: 15,
					paddingVertical: 20,
					shadowOffset: { width: 0, height: -5 },
					shadowOpacity: 0.1,
					shadowRadius: 5,
					elevation: 1,
					backgroundColor: themeColor.tab,
					shadowColor: themeColor.tabBrd,
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<View>
					<Text style={[reusableStyles.text, { color: themeColor.text }]}>
						Entrance:
					</Text>

					<Text
						style={[
							reusableStyles.text,
							{ color: themeColor.btn, fontSize: 20 },
						]}
					>
						Free
					</Text>
				</View>
				<Btn text={"Join Now"} />
			</View>
		</View>
	);
}

export default EventView;
