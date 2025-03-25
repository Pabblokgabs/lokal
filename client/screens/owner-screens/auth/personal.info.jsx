import {
	PanResponder,
	Pressable,
	ScrollView,
	Text,
	View,
	Animated,
	TouchableOpacity,
	Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../../components/reusable/styles";
import TopBar from "../../../components/topBar";
import TextInputContainer from "../../../components/reusable/text.input";
import Btn from "../../../components/btn";
import {
	getRegistrationProgress,
	saveRegistrationProgress,
} from "../../../lib/utils/registration.utils";
import { MaterialIcons } from "@expo/vector-icons";
import SelectImage from "../../../components/select.image";

function OwnerPersonalInfo() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [formData, setFormData] = useState({
		profileImage: null,
		first_name: "",
		last_name: "",
		phone_number: "",
		IdNumber: "",
	});

	const [userFormData, setUserFormData] = useState({ ...formData });

	const [isPicModal, setIsPicModal] = useState(false);

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

	const handleFormData = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	useEffect(() => {
		getRegistrationProgress("ownerFormData").then((progressData) => {
			if (progressData) {
				console.log(progressData.formData);

				setFormData({
					...formData,
					profileImage: progressData.formData.profileImage,
					first_name: progressData.formData.first_name,
					last_name: progressData.formData.last_name,
					phone_number: progressData.formData.phone_number,
					IdNumber: progressData.formData.IdNumber,
				});
			}
		});
	}, []);

	useEffect(() => {
		const getAllScreenData = async () => {
			try {
				const screens = ["ownerEmail", "ownerPassword", "ownerFormData"];

				let userData = {};

				for (const screenName of screens) {
					const screenData = await getRegistrationProgress(screenName);

					if (screenData) {
						userData = { ...userData, ...screenData };
					}
				}

				setUserFormData([...userFormData, userData]);
				console.log(userFormData);
			} catch (error) {
				console.log("Error", error);
			}
		};

		getAllScreenData();
	}, []);
	const handleSubmit = () => {
		saveRegistrationProgress("ownerFormData", { formData });
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
			<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
				<TopBar arrowPress={() => navigation.goBack()} />

				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={{ marginVertical: 30, gap: 10 }}>
						<Text
							style={[
								reusableStyles.lgHeader,
								{ color: themeColor.text, textAlign: "center" },
							]}
						>
							Complete Your Profile
						</Text>

						<Text
							style={[
								reusableStyles.text,
								{ color: themeColor.secondText, textAlign: "center" },
							]}
						>
							To Enhance You Experience. Please Share The Below Information
						</Text>

						<View style={{ height: 20 }} />

						<View style={{ justifyContent: "center", alignItems: "center" }}>
							<View>
								<Image
									source={require("../../../assets/images/img.jpg")}
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
						</View>

						<View style={{ height: 20 }} />

						<TextInputContainer
							inputHint={"First Name"}
							placeholder={"Enter here"}
							onChangeText={(text) => handleFormData("first_name", text)}
							value={formData.first_name}
						/>

						<TextInputContainer
							inputHint={"Last Name"}
							placeholder={"Enter here"}
							onChangeText={(text) => handleFormData("last_name", text)}
							value={formData.last_name}
						/>

						<TextInputContainer
							inputHint={"Phone Number"}
							placeholder={"Enter here"}
							onChangeText={(text) => handleFormData("phone_number", text)}
							value={formData.phone_number}
						/>

						<TextInputContainer
							inputHint={"ID Number"}
							placeholder={"Enter here"}
							onChangeText={(text) => handleFormData("IdNumber", text)}
							value={formData.IdNumber}
						/>

						<View style={{ height: 2 }} />

						<SelectImage
							path={"files"}
							setImageSource={() => formData.profileImage}
						>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<Text
									style={[
										reusableStyles.text,
										{ color: themeColor.secondText },
									]}
								>
									ID Document
								</Text>

								<View
									style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
								>
									<MaterialIcons
										name="attachment"
										size={24}
										color={themeColor.btn}
									/>
									<Text
										style={[reusableStyles.text, { color: themeColor.btn }]}
									>
										Attach
									</Text>
								</View>
							</View>
						</SelectImage>

						<View style={{ height: 10 }} />

						<Btn text={"Submit"} onPress={() => handleSubmit()} />
					</View>
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

export default OwnerPersonalInfo;
