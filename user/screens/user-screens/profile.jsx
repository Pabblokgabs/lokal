import {
	View,
	Text,
	ScrollView,
	Image,
	TouchableOpacity,
	Pressable,
	PanResponder,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import reusableStyles from "../../components/reusable/styles";
import TopBar from "../../components/topBar";
import ProfileTile from "../../components/profile.tile";
import Btn from "../../components/btn";
import ChangeEmail from "../../components/user/modal/profile/change.email";
import ChangeNumber from "../../components/user/modal/profile/change.number";

export default function Profile() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [isPicModal, setIsPicModal] = useState(false);
	const [isChangeEmail, setIsChangeEmail] = useState(false);
	const [isChangeNumber, setIsChangeNumber] = useState(false);

	const panResponder = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onPanResponderMove: (evt, gestureState) => {
			if (gestureState.dy > 20) {
				setIsPicModal(false);
			}
		},

		onPanResponderRelease: () => {
			setIsPicModal(false);
		},
	});

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
			<ChangeEmail visible={isChangeEmail} setVisible={setIsChangeEmail} />
			<ChangeNumber visible={isChangeNumber} setVisible={setIsChangeNumber} />

			<View style={[reusableStyles, { paddingHorizontal: 15 }]}>
				<TopBar
					title={"My Profile"}
					isArrow={true}
					arrowPress={() => navigation.goBack()}
					py={10}
				/>

				<View style={{ height: 20 }} />

				<ScrollView>
					<View
						style={{
							flexDirection: "column",
							gap: 20,
							alignItems: "center",
							marginBottom: 20,
						}}
					>
						<View>
							<Image
								source={require("../../assets/images/img.jpg")}
								style={{
									height: 150,
									width: 150,
									resizeMode: "cover",
									borderRadius: "50%",
								}}
							/>
							<View
								style={{
									position: "absolute",
									right: -5,
									bottom: -5,
									padding: 3,
									backgroundColor: themeColor.bg,
									borderRadius: "50%",
								}}
							>
								<TouchableOpacity
									onPress={() => setIsPicModal(true)}
									style={{
										backgroundColor: themeColor.btn,
										padding: 10,
										borderRadius: "50%",
									}}
								>
									<MaterialIcons name="edit" size={24} color={"white"} />
								</TouchableOpacity>
							</View>
						</View>

						<Text style={[reusableStyles.lgHeader, { color: themeColor.text }]}>
							Pabblo Kgabs
						</Text>

						<View
							style={{
								flexDirection: "row",
								gap: 20,
								justifyContent: "space-between",
								width: "80%",
								marginTop: 20,
								marginBottom: 20,
							}}
						>
							<View style={{ gap: 10, alignItems: "center" }}>
								<Text
									style={[reusableStyles.lgHeader, { color: themeColor.text }]}
								>
									0
								</Text>

								<Text
									style={[
										reusableStyles.text,
										{ color: themeColor.secondText },
									]}
								>
									Followings
								</Text>
							</View>

							<View style={{ width: 1, backgroundColor: themeColor.border }} />

							<View style={{ gap: 10, alignItems: "center" }}>
								<Text
									style={[reusableStyles.lgHeader, { color: themeColor.text }]}
								>
									0
								</Text>

								<Text
									style={[
										reusableStyles.text,
										{ color: themeColor.secondText },
									]}
								>
									Tokens
								</Text>
							</View>
						</View>
					</View>

					<View style={{ height: 20 }} />

					<ProfileTile
						M_icon={"mail-outline"}
						title={"Email Address"}
						value={"Pabblo@Kgabs.com"}
						iconColor={themeColor.btn}
						edit={"edit"}
						onPress={() => setIsChangeEmail(true)}
					/>

					<View style={{ height: 20 }} />

					<ProfileTile
						M_icon={"person-outline"}
						title={"Phone number"}
						value={"+2881234567890"}
						iconColor={themeColor.btn}
						edit={"edit"}
						onPress={() => setIsChangeNumber(true)}
					/>

					<View style={{ height: 20 }} />

					<ProfileTile
						M_icon={"person-outline"}
						title={"Gender"}
						value={"Male"}
						iconColor={themeColor.btn}
					/>

					<View style={{ height: 20 }} />

					<ProfileTile
						M_icon={"person-outline"}
						title={"Age"}
						value={"33"}
						iconColor={themeColor.btn}
					/>
				</ScrollView>
			</View>
			<Modal
				isVisible={isPicModal}
				onBackdropPress={() => setIsPicModal(!isPicModal)}
				onBackButtonPress={() => setIsPicModal(!isPicModal)}
				animationIn="slideInUp"
				animationOut="slideOutDown"
				swipeDirection="down"
				onSwipeComplete={() => setIsPicModal(!isPicModal)}
				backdropOpacity={0.5}
				style={{ justifyContent: "flex-end", margin: 0 }}
			>
				<View
					style={{
						height: "50%",
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
					<View
						style={{
							padding: 15,
							marginTop: 20,
							flex: 1,
							width: "100%",
						}}
					>
						<View style={{ flex: 1 }}>
							
						</View>
						<Btn backgroundColor={themeColor.btn} text={"Update"} />
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	);
}
