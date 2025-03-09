import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "react-native-paper";
import ReusableTextInputContainer from "../../../../components/reausable/ReusableTextInputContainer";
import ReusableBtn from "../../../../components/reausable/ReusableBtn";
import PickerComponent from "../../../../components/picker";
import ReusableStyles from "../../../../components/reausable/reusableStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	getRegistrationProgress,
	saveRegistrationProgress,
} from "../../../../lib/utils/registration.utils";

function Registration() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	useEffect(() => {
		getRegistrationProgress("Email").then((progressData) => {
			if (progressData) {
				console.log(progressData.email);
				setFormData({ ...formData, email: progressData.email });
			}
		});
	}, []);

	useEffect(() => {
		getRegistrationProgress("FormData").then((progressData) => {
			if (progressData) {
				setFormData({
					...formData,
					email: progressData.formData.email,
					user_name: progressData.formData.user_name || "",
					phone_number: progressData.formData.phone_number || "",
					gender: progressData.formData.gender || "",
					age: progressData.formData.age || "",
					country: progressData.formData.country || "",
					city: progressData.formData.city || "",
				});
			}
		});
	}, []);

	const [formData, setFormData] = useState({
		email: "",
		user_name: "",
		phone_number: "",
		gender: "",
		age: "",
		country: "",
		city: "",
	});

	console.log(formData);

	const handleFormData = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		saveRegistrationProgress("FormData", { formData });

		console.log(formData);
		navigation.navigate("profile-photo");
	};

	const [gender, setGender] = useState([
		{ label: "Choose your gender", value: "" },
		{ label: "Male", value: "male" },
		{ label: "Female", value: "female" },
	]);

	return (
		<SafeAreaView>
			<ScrollView
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<Text style={[ReusableStyles.header, { color: themeColor.text }]}>
					Your are almost there!
				</Text>

				<Text style={{ color: themeColor.secondaryText }}>
					Tell us more about yourself
				</Text>

				<View style={{ height: 20 }} />

				<ReusableTextInputContainer
					inputHint={"user name"}
					borderColor={themeColor.borderColor}
					placeholder={"Enter your name"}
					value={formData.user_name}
					onChangeText={(text) => handleFormData("user_name", text)}
					width={"100%"}
					secureTextEntry={false}
					color={themeColor.text}
				/>

				<View style={{ height: 10 }} />

				<ReusableTextInputContainer
					inputHint={"Phone *"}
					borderColor={themeColor.borderColor}
					placeholder={"Enter your phone number"}
					value={formData.phone_number}
					onChangeText={(text) => handleFormData("phone_number", text)}
					width={"100%"}
					secureTextEntry={false}
					color={themeColor.text}
					KeyboardType={"numeric"}
				/>

				<View style={{ height: 10 }} />

				<ReusableTextInputContainer
					inputHint={"Age"}
					borderColor={themeColor.borderColor}
					placeholder={"Enter your age"}
					value={formData.age}
					onChangeText={(text) => handleFormData("age", text)}
					width={"100%"}
					secureTextEntry={false}
					color={themeColor.text}
					KeyboardType={"numeric"}
				/>

				<View style={{ height: 10 }} />

				<ReusableTextInputContainer
					inputHint={"Gender"}
					borderColor={themeColor.borderColor}
				>
					<PickerComponent
						items={gender}
						selectedValue={formData.gender}
						onValueChange={(text) => handleFormData("gender", text)}
					/>
				</ReusableTextInputContainer>

				<View style={{ height: 10 }} />

				<ReusableTextInputContainer
					inputHint={"Country"}
					borderColor={themeColor.borderColor}
					placeholder={"Enter your country"}
					value={formData.country}
					onChangeText={(text) => handleFormData("country", text)}
					width={"100%"}
					secureTextEntry={false}
					color={themeColor.text}
				/>

				<View style={{ height: 10 }} />

				<ReusableTextInputContainer
					inputHint={"City"}
					borderColor={themeColor.borderColor}
					placeholder={"Enter your city"}
					value={formData.city}
					onChangeText={(text) => handleFormData("city", text)}
					width={"100%"}
					secureTextEntry={false}
					color={themeColor.text}
				/>

				<View style={{ height: 20 }} />

				<ReusableBtn
					width={"100%"}
					btnText={"Next"}
					onPress={() => handleSubmit()}
					backgroundColor={themeColor.btn}
					borderColor={themeColor.btn}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}

export default Registration;
