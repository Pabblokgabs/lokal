import { Image, PanResponder, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../../components/reusable/styles";
import TopBar from "../../../components/topBar";
import TextInputContainer from "../../../components/reusable/text.input";
import Btn from "../../../components/btn";
import { saveRegistrationProgress } from "../../../lib/utils/registration.utils";
import { getRegisterValues } from "../../../lib/helper/user.register";
import { AuthContext } from "../../../lib/hooks/auth";
import CustomPicker from "../../../components/customPicker";
import { genders } from "../../../lib/options";
import { MaterialIcons } from "@expo/vector-icons";

function PersonalInfo() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();
	

	const { formData, setFormData, country } = useContext(AuthContext);

	const [countryModal, setCountryModal] = useState(false);
	const [date, setDate] = useState(new Date());
	const [showPicker, setShowPicker] = useState(false);

	const panResponder = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onPanResponderMove: (evt, gestureState) => {
			if (gestureState.dy > 20) {
				setCountryModal(false);
			}
		},

		onPanResponderRelease: () => {
			setCountryModal(false);
		},
	});

	const handleFormData = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	useEffect(() => {
		getRegisterValues(setFormData);
	}, []);

	const handleNext = () => {
		saveRegistrationProgress("FormData", { formData });

		navigation.navigate("preference");
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
							Tell us about yourself!
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
							inputHint={"User name"}
							placeholder={"Enter here"}
							onChangeText={(text) => handleFormData("user_name", text)}
							value={formData.user_name}
						/>

						<TextInputContainer
							inputHint={"Date of birth"}
							isHint={true}
							justifyContent={"space-between"}
							hintValue={"This helps us to find age specific spot and event"}
							placeholder={"jan 01, 2001"}
							KeyboardType={"numeric"}
							onChangeText={(text) => handleFormData("date_of_birth", text)}
							value={formData.date_of_birth}
						></TextInputContainer>

						<TextInputContainer
							inputHint={"Gender"}
							isHint={true}
							justifyContent={"space-between"}
							hintValue={"This helps us to find gender specific spot and event"}
							editable={false}
						>
							<View
								style={{
									width: "100%",
									justifyContent: "center",
								}}
							>
								<CustomPicker
									items={genders.slice(0, 2)}
									placeholder={{
										label: "Select your gender",
										value: null,
									}}
									onValueChange={(text) => handleFormData("gender", text)}
									selectedValue={formData.gender}
								/>
							</View>
						</TextInputContainer>

						<TextInputContainer inputHint={"Country"} editable={false}>
							<View
								style={{
									width: "100%",
									justifyContent: "center",
								}}
							>
								<CustomPicker
									items={country}
									placeholder={{
										label: "Select your country",
										value: null,
									}}
									onValueChange={(text) => handleFormData("country", text)}
									selectedValue={formData.country}
								/>
							</View>
						</TextInputContainer>

						<TextInputContainer
							inputHint={"City"}
							placeholder={"Enter city"}
							onChangeText={(text) => handleFormData("city", text)}
							value={formData.city}
						/>

						<View style={{ height: 10 }} />

						<Btn text={"Next"} onPress={() => handleNext()} />
					</View>
				</ScrollView>
			</View>

			<Modal
				isVisible={countryModal}
				onBackdropPress={() => setCountryModal(false)}
				onBackButtonPress={() => setCountryModal(false)}
				animationIn="slideInUp"
				animationOut="slideOutDown"
				swipeDirection="down"
				onSwipeComplete={() => setCountryModal(false)}
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
							marginBottom: 20,
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
				</View>
			</Modal>
		</SafeAreaView>
	);
}

export default PersonalInfo;
