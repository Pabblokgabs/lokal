import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	Image,
	PanResponder,
	Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { AntDesign } from "@expo/vector-icons";
import reusableStyles from "../../../components/reusable/styles";
import TopBar from "../../../components/topBar";
import LinkTile from "../../../components/reusable/link.tile";
import SettingModal from "../../../components/user/modal/setting.modal";
import LogoutCom from "../../../components/modals/logout";

export default function Menu() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [settings, setSettings] = useState(false);
	const [logout, setLogout] = useState(false);

	const panResponder = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onPanResponderMove: (evt, gestureState) => {
			if (gestureState.dy > 20) {
				setLogout(false);
			}
		},

		onPanResponderRelease: () => {
			setLogout(false);
		},
	});

	return (
		<SafeAreaView>
			<SettingModal visible={settings} setVisible={setSettings} />

			<View
				style={[reusableStyles.wrapper, { backgroundColor: themeColor.bg }]}
			>
				<View style={{ paddingHorizontal: 15 }}>
					<TopBar
						I_icon={"notifications-outline"}
						A_icon={"setting"}
						py={20}
						A_press={() => setSettings(true)}
					/>
				</View>

				<ScrollView showsVerticalScrollIndicator={false}>
					<TouchableOpacity
						onPress={() => navigation.navigate("profile")}
						style={{
							flexDirection: "row",
							gap: 20,
							paddingBottom: 20,
							borderBottomWidth: 0.5,
							borderBottomColor: themeColor.border,
							paddingHorizontal: 15,
						}}
					>
						<Image
							source={require("../../../assets/images/img.jpg")}
							style={{
								height: 80,
								width: 80,
								resizeMode: "cover",
								borderRadius: "50%",
							}}
						/>
						<View
							style={{
								flexDirection: "column",
								justifyContent: "center",
								flex: 1,
							}}
						>
							<Text style={[reusableStyles.header, { color: themeColor.text }]}>
								Pabblo Kgabs
							</Text>
							<View>
								<Text style={[reusableStyles.text, { color: themeColor.text }]}>
									pabblo@kabs.com
								</Text>
								<View
									style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
								>
									<Text
										style={[
											reusableStyles.secondText,
											{ color: themeColor.text },
										]}
									>
										Personal details
									</Text>
									<Text
										style={[
											reusableStyles.dot,
											{ backgroundColor: themeColor.text },
										]}
									></Text>
									<Text
										style={[
											reusableStyles.secondText,
											{ color: themeColor.secondText },
										]}
									>
										edit account
									</Text>
									<AntDesign name="right" size={14} color={themeColor.icon} />
								</View>
							</View>
						</View>
					</TouchableOpacity>

					<View style={{ height: 20 }} />

					<View style={{ paddingHorizontal: 15 }}>
						<LinkTile title={"Notifications"} />
						<LinkTile title={"Manage history"} />
						<LinkTile title={"Payment Methods"} />
						<LinkTile title={"Followings"} />
						<LinkTile title={"Messages"} />
					</View>

					<View style={{ paddingHorizontal: 15 }}>
						<Text
							style={[
								reusableStyles.header,
								{
									color: themeColor.text,
									marginTop: 20,
									marginBottom: 15,
									fontSize: 24,
								},
							]}
						>
							More
						</Text>
					</View>

					<View style={{ paddingHorizontal: 15 }}>
						<LinkTile
							title={"Help center"}
							I_icon={"help-circle-outline"}
							onPress={() => navigation.navigate("help-center")}
						/>
						<LinkTile
							title={"Send Feedback"}
							I_icon={"information-circle-outline"}
							onPress={() => navigation.navigate("feedback")}
						/>
						<LinkTile
							title={"Contact Us"}
							I_icon={"chatbox-ellipses-outline"}
							onPress={() => navigation.navigate("contact-us")}
						/>
						<LinkTile title={"Privacy Policy"} A_icon={"lock"} />
						<LinkTile title={"Invite Friends"} I_icon={"share-outline"} />
						<LinkTile
							title={"Sign out"}
							I_icon={"log-out-outline"}
							onPress={() => setLogout(true)}
						/>
					</View>

					<View style={{ height: 100 }} />
				</ScrollView>
			</View>

			<Modal
				isVisible={logout}
				onBackdropPress={() => setLogout(false)}
				onBackButtonPress={() => setLogout(false)}
				animationIn="slideInUp"
				animationOut="slideOutDown"
				swipeDirection="down"
				onSwipeComplete={() => setLogout(false)}
				backdropOpacity={0.5}
				style={{ justifyContent: "flex-end", margin: 0 }}
			>
				<View
					style={{
						bottom: 0,
						backgroundColor: themeColor.secondBg,
						borderTopRightRadius: 15,
						borderTopLeftRadius: 15,
					}}
				>
					<View
						style={{
							marginTop: 10,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Pressable
							{...panResponder.panHandlers}
							style={{
								height: 5,
								backgroundColor: themeColor.border,
								width: "40%",
							}}
						/>
					</View>
					<LogoutCom isVisible={setLogout} />
				</View>
			</Modal>
		</SafeAreaView>
	);
}
