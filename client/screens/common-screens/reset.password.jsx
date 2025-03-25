import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../components/reusable/styles";
import TopBar from "../../components/topBar";
import TextInputContainer from "../../components/reusable/text.input";
import Btn from "../../components/btn";

function ResetPassword() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [formData, setFormData] = useState({
		new_password: "",
		confirm_password: "",
	});

	const handleFormData = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleReset = () => {
		console.log(formData);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
			<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
				<TopBar arrowPress={() => navigation.goBack()} />

				<Text
					style={[
						reusableStyles.lgHeader,
						{
							color: themeColor.text,
							textAlign: "center",
							marginTop: 50,
						},
					]}
				>
					New Password
				</Text>

				<View style={{ height: 10 }} />

				<Text
					style={[
						reusableStyles.text,
						{
							color: themeColor.secondText,
							textAlign: "center",
						},
					]}
				>
					Your new password must be different
				</Text>

				<Text
					style={[
						reusableStyles.text,
						{
							color: themeColor.secondText,
							textAlign: "center",
						},
					]}
				>
					from previously used password
				</Text>

				<View style={{ height: 20 }} />

				<TextInputContainer
					inputHint={"Password"}
					placeholder={"********"}
					M_icon={"lock-outline"}
					onChangeText={(text) => handleFormData("new_password", text)}
				/>

				<View style={{ height: 15 }} />

				<TextInputContainer
					inputHint={"Confirm Password"}
					placeholder={"********"}
					M_icon={"lock-outline"}
					secureTextEntry={true}
					onChangeText={(text) => handleFormData("confirm_password", text)}
				/>

				<View style={{ height: 30 }} />

				<Btn text={"Reset Password"} onPress={() => handleReset()} />
			</View>
		</SafeAreaView>
	);
}

export default ResetPassword;
