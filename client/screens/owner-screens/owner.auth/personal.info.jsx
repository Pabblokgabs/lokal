import { View, Text } from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ReusableStyles from "../../../components/reausable/reusableStyles";
import TopBar from "../../../components/topBar";
import ReusableTextInputContainer from "../../../components/reausable/ReusableTextInputContainer";
import ReusableBtn from "../../../components/reausable/ReusableBtn";

function PersonalInfo() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		Id: "",
		phone_number: "",
		email: "",
	});

	const handleFormData = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		navigation.navigate("owner-otp-verification", {formData});
	};

	return (
		<View
			style={[
				ReusableStyles.wrapper,
				{ backgroundColor: themeColor.background },
			]}
		>
			<TopBar
				arrowName={"arrowleft"}
				arrowOnPress={() => navigation.navigate("personal-OR-spot-account")}
			/>
			<View style={ReusableStyles.container}>
				<Text style={[ReusableStyles.header, { color: themeColor.text }]}>
					Personal Information
				</Text>

				<View style={{ height: 5 }} />

				<Text
					style={[ReusableStyles.text, { color: themeColor.secondaryText }]}
				>
					Fill the form below to get started. Make sure the information you
					provide is valid.
				</Text>

				<View style={{ height: 15 }} />

				<ReusableTextInputContainer
					inputHint={"first name"}
					backgroundColor={"transparent"}
					borderColor={themeColor.borderColor}
					placeholder={"Enter first name"}
					value={formData.first_name}
					onChangeText={(text) => handleFormData("first_name", text)}
					width={"100%"}
					secureTextEntry={false}
					color={themeColor.text}
				/>

				<View style={{ height: 10 }} />

				<ReusableTextInputContainer
					inputHint={"last name"}
					backgroundColor={"transparent"}
					borderColor={themeColor.borderColor}
					placeholder={"Enter last name"}
					value={formData.last_name}
					onChangeText={(text) => handleFormData("last_name", text)}
					width={"100%"}
					secureTextEntry={false}
					color={themeColor.text}
				/>

				<View style={{ height: 10 }} />

				<ReusableTextInputContainer
					inputHint={"Goverment-issued ID"}
					backgroundColor={"transparent"}
					borderColor={themeColor.borderColor}
					placeholder={"Enter your ID number"}
					value={formData.Id}
					onChangeText={(text) => handleFormData("Id", text)}
					width={"100%"}
					secureTextEntry={false}
					color={themeColor.text}
				/>

				<View style={{ height: 10 }} />

				<ReusableTextInputContainer
					inputHint={"Phone number"}
					backgroundColor={"transparent"}
					borderColor={themeColor.borderColor}
					placeholder={"Enter phone number"}
					value={formData.phone_number}
					onChangeText={(text) => handleFormData("phone_number", text)}
					width={"100%"}
					secureTextEntry={false}
					color={themeColor.text}
				/>

				<View style={{ height: 10 }} />

				<ReusableTextInputContainer
					inputHint={"Email address"}
					backgroundColor={"transparent"}
					borderColor={themeColor.borderColor}
					placeholder={"Enter your email address"}
					value={formData.email}
					onChangeText={(text) => handleFormData("email", text)}
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
			</View>
		</View>
	);
}

export default PersonalInfo;
