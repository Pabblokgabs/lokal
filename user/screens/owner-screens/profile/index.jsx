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
import reusableStyles from "../../../components/reusable/styles";
import TopBar from "../../../components/topBar";
import ProfileTile from "../../../components/profile.tile";
import Btn from "../../../components/btn";
import ChangeEmail from "./change.email";
import ChangeNumber from "./change.number";

function OwnerProfile() {
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
					arrowPress={() => navigation.goBack()}
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
								source={require("../../../assets/images/img.jpg")}
								style={{
									height: 150,
									width: 150,
									resizeMode: "cover",
									borderRadius: 75,
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
					</View>

					<View style={{ height: 20 }} />

					<ProfileTile
						M_icon={"person-outline"}
						title={"First Name"}
						value={"Pabblo"}
						iconColor={themeColor.btn}
					/>

					<View style={{ height: 20 }} />

					<ProfileTile
						M_icon={"person-outline"}
						title={"Last Name"}
						value={"kgabs"}
						iconColor={themeColor.btn}
					/>

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
						<View style={{ flex: 1 }}></View>
						<Btn backgroundColor={themeColor.btn} text={"Update"} />
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	);
}

export default OwnerProfile;
