import {
	PanResponder,
	Pressable,
	ScrollView,
	Text,
	View,
	Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import Modal from "react-native-modal";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../../components/reusable/styles";
import TopBar from "../../../components/topBar";
import TextInputContainer from "../../../components/reusable/text.input";
import Btn from "../../../components/btn";
import {
	getRegistrationProgress,
	saveRegistrationProgress,
} from "../../../lib/utils/registration.utils";

function PersonalInfo() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [countryModal, setCountryModal] = useState(false);

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

	const [formData, setFormData] = useState({
		user_name: "",
		phone_number: "",
		date_of_birth: "",
		gender: "",
		country: "",
		city: "",
	});

	const handleFormData = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	useEffect(() => {
		getRegistrationProgress("FormData").then((progressData) => {
			if (progressData) {
				console.log(progressData.formData);

				setFormData({
					user_name: progressData.formData.user_name,
					phone_number: progressData.formData.phone_number,
					gender: progressData.formData.gender,
					date_of_birth: progressData.formData.date_of_birth,
					country: progressData.formData.country,
					city: progressData.formData.city,
				});
			}
		});
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

						<TextInputContainer
							inputHint={"User name"}
							placeholder={"Enter here"}
							onChangeText={(text) => handleFormData("user_name", text)}
							value={formData.user_name}
						/>

						<TextInputContainer
							inputHint={"Phone number (optional)"}
							placeholder={"(+12) 345 67890"}
							onChangeText={(text) => handleFormData("phone_number", text)}
							value={formData.phone_number}
						/>

						<TextInputContainer
							inputHint={"Date of birth"}
							isHint={true}
							justifyContent={"space-between"}
							hintValue={"This helps us to find age specific spot and event"}
							placeholder={"YYYY/MM/DD"}
							KeyboardType={"numeric"}
							onChangeText={(text) => handleFormData("date_of_birth", text)}
							value={formData.date_of_birth}
						/>

						<TextInputContainer
							inputHint={"Gender"}
							isHint={true}
							justifyContent={"space-between"}
							hintValue={"This helps us to find gender specific spot and event"}
							placeholder={"Choose one"}
							onChangeText={(text) => handleFormData("gender", text)}
							value={formData.gender}
						/>

						<TextInputContainer inputHint={"Country"}>
							<Pressable onPress={() => setCountryModal(true)}>
								<Text
									style={[
										reusableStyles.text,
										{ color: themeColor.secondText },
									]}
								>
									Choose country
								</Text>
							</Pressable>
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

					<View style={{ height: 300, justifyContent: "center" }}></View>
				</View>
			</Modal>
		</SafeAreaView>
	);
}

export default PersonalInfo;
