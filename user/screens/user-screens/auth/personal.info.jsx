import {
	Alert,
	BackHandler,
	Image,
	PanResponder,
	Pressable,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
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
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./style";

function PersonalInfo() {
	const { colors } = useTheme();
	const navigation = useNavigation();

	const { formData, setFormData, country } = useContext(AuthContext);

	const [countryModal, setCountryModal] = useState(false);
	const [dateOfBirth, setDateOfBirth] = useState(formData.date_of_birth || ""); // Initialize with value from formData
	const [isDatePickerVisible, setDatePickerVisible] = useState(false);

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

	const handleDateConfirm = (date) => {
		const formattedDate = moment(date).format("MMM DD, YYYY");
		setDateOfBirth(formattedDate);
		handleFormData("date_of_birth", formattedDate);
		setDatePickerVisible(false);
	};

	const handleDateCancel = () => {
		setDatePickerVisible(false);
	};

	const [backPressCount, setBackPressCount] = useState(0);

	useEffect(() => {
		const backHandler = BackHandler.addEventListener(
			"hardwareBackPress",
			() => {
				if (backPressCount === 0) {
					setBackPressCount(1);
					Alert.alert("Hold on!", "Press back again to exit.", [
						{
							text: "Cancel",
							onPress: () => setBackPressCount(0),
							style: "cancel",
						},
						{
							text: "Exit",
							onPress: () => BackHandler.exitApp(),
						},
					]);
					return true;
				} else if (backPressCount === 1) {
					BackHandler.exitApp();
				}
				return false;
			}
		);

		return () => {
			backHandler.remove();
		};
	}, [backPressCount]);

	const handleArrowPress = () => {
		if (backPressCount === 0) {
			setBackPressCount(1);
			Alert.alert("Hold on!", "Press back again to exit.", [
				{
					text: "Cancel",
					onPress: () => setBackPressCount(0),
					style: "cancel",
				},
				{
					text: "Exit",
					onPress: () => BackHandler.exitApp(),
				},
			]);
		} else if (backPressCount === 1) {
			BackHandler.exitApp();
		}
	};

	return (
		<KeyboardAwareScrollView
			style={{ flex: 1, backgroundColor: colors.bg }}
			enableOnAndroid={true}
			extraHeight={100}
			resetScrollToCoords={{ x: 0, y: 0 }}
			scrollEnabled={true}
			keyboardShouldPersistTaps="handled"
		>
			<SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
				<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
					<TopBar arrowPress={handleArrowPress} />

					<ScrollView showsVerticalScrollIndicator={false}>
						<View style={{ marginVertical: 30, gap: 10 }}>
							<Text
								style={[reusableStyles.lgHeader, styles.email_AD(colors.text)]}
							>
								Tell us about yourself!
							</Text>

							<Text
								style={[
									reusableStyles.text,
									styles.email_AD(colors.secondText),
								]}
							>
								To Enhance You Experience. Please Share The Below Information
							</Text>

							<View style={{ height: 20 }} />

							<View style={{ justifyContent: "center", alignItems: "center" }}>
								<View>
									<Image
										source={require("../../../assets/images/img.jpg")}
										style={styles.image}
									/>
									<View style={styles.sdit(colors.bg)}>
										<TouchableOpacity
											onPress={() => setIsPicModal(true)}
											style={styles.edit_TO(colors.btn)}
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

							<Pressable onPress={() => setDatePickerVisible(true)}>
								<TextInputContainer
									inputHint={"Date of birth"}
									isHint={true}
									justifyContent={"space-between"}
									hintValue={
										"This helps us to find age specific spots and events"
									}
									placeholder={"Jan 01, 2001"}
									value={dateOfBirth}
									editable={false}
								/>
							</Pressable>

							<DateTimePickerModal
								isVisible={isDatePickerVisible}
								mode="date"
								onConfirm={handleDateConfirm}
								onCancel={handleDateCancel}
								date={new Date()}
								headerTextIOS="Select your Date of Birth"
								cancelTextIOS="Cancel"
								confirmTextIOS="Confirm"
								style={{ zIndex: 9999 }}
							/>

							<TextInputContainer
								inputHint={"Gender"}
								isHint={true}
								justifyContent={"space-between"}
								hintValue={
									"This helps us to find gender specific spots and events"
								}
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
							backgroundColor: colors.secondBg,
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
									backgroundColor: colors.border,
									width: "40%",
								}}
							/>
						</View>
					</View>
				</Modal>
			</SafeAreaView>
		</KeyboardAwareScrollView>
	);
}

export default PersonalInfo;
