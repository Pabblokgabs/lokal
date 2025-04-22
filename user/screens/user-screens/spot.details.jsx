import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	Pressable,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
	AntDesign,
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import reusableStyles from "../../components/reusable/styles";
import Render from "../../components/user/spot.details/render";

function SpotDetails() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [activeOption, setActiveOption] = useState("About");
	const options = ["About", "Events", "Reviews"];

	const [stuck, setStuck] = useState(false);

	const handleScroll = (event) => {
		const scrollY = event.nativeEvent.contentOffset.y;

		if (scrollY > 15 && !stuck) {
			setStuck(true);
		} else if (scrollY <= 10 && stuck) {
			setStuck(false);
		}
	};

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
						onPress={() => navigation.goBack()}
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
							<AntDesign
								name="addusergroup"
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
				style={{ backgroundColor: themeColor.bg }}
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
						onPress={() => navigation.goBack()}
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
							<AntDesign
								name="addusergroup"
								size={24}
								color={themeColor.text}
							/>
						</TouchableOpacity>
					</View>
				</View>

				<View
					style={{
						top: -15,
						paddingHorizontal: 15,
						backgroundColor: themeColor.bg,
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
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
					<View style={{ height: 100, width: 160 }}>
						<View style={{ position: "absolute", bottom: 0 }}>
							<Pressable
								style={{
									padding: 7,
									borderRadius: "100%",
									backgroundColor: themeColor.secondBg,
								}}
							>
								<Image
									source={require("../../assets/images/img2.jpg")}
									style={{
										resizeMode: "cover",
										height: 150,
										width: 150,
										borderRadius: 75,
									}}
								/>
							</Pressable>
						</View>
					</View>
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

				<View
					style={{ borderBottomColor: themeColor.border, borderBottomWidth: 1 }}
				>
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
							Shipping lifestyle
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
								New York, Usa
							</Text>
						</View>
					</View>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						{options.map((item) => (
							<Pressable
								key={item}
								onPress={() => setActiveOption(item)}
								style={{
									paddingVertical: 10,
									flex: 1,
									borderBottomWidth: 3,
									borderBottomColor:
										item === activeOption ? themeColor.btn : "transparent",
								}}
							>
								<Text
									style={[
										reusableStyles.text,
										{
											fontSize: 18,
											textAlign: "center",
											color:
												item === activeOption
													? themeColor.btn
													: themeColor.text,
										},
									]}
								>
									{item}
								</Text>
							</Pressable>
						))}
					</View>
				</View>

				<View
					style={[
						{ padding: 15, gap: 10 },
						activeOption === "Reviews" && { paddingHorizontal: 0 },
					]}
				>
					<Render active={activeOption} isStuck={stuck} />
				</View>
			</ScrollView>
		</View>
	);
}

export default SpotDetails;
