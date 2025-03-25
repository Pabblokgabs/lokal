import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../../components/reusable/styles";
import {
	getRegistrationProgress,
	saveRegistrationProgress,
} from "../../../lib/utils/registration.utils";
import Btn from "../../../components/btn";
import TopBar from "../../../components/topBar";
import TextInputContainer from "../../../components/reusable/text.input";

function SetPassword() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [passwordError, setPasswordError] = useState(null);
	const [confirmPasswordError, setConfirmPasswordError] = useState(null);

	useEffect(() => {
		getRegistrationProgress("Password").then((progressData) => {
			if (progressData) {
				setPassword(progressData.password || "");
			}
		});
	}, []);

	const handlePasswordChange = (text) => {
		setPassword(text);

		const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

		if (!passwordRegex.test(password)) {
			return setPasswordError(
				"Password must container letters, number, and special characters and it must be at least 8 characters"
			);
		} else {
			setPasswordError(null);
			setPassword(text);
		}
	};

	const handleConfirmPasswordChange = (text) => {
		setConfirmPassword(text);

		if (text !== password) {
			setConfirmPasswordError("Passwords do not match");
		} else {
			setConfirmPasswordError(null);
			setPassword(text);
		}
	};

	const handleNext = () => {
		console.log(password);

		if (password.trim() !== "") {
			saveRegistrationProgress("Password", { password });
		}

		navigation.navigate("final-stage");
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
			<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
				<TopBar arrowPress={() => navigation.goBack()} py={10} />

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
					Set Password
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
					Password must container letters, number, and special characters and it
					must be at least 8 characters
				</Text>

				<Text
					style={[
						reusableStyles.text,
						{
							color: themeColor.secondText,
							textAlign: "center",
						},
					]}
				></Text>

				<View style={{ height: 20 }} />

				<TextInputContainer
					inputHint={"Password"}
					placeholder={"********"}
					M_icon={"lock-outline"}
					onChangeText={(text) => handlePasswordChange(text)}
					value={password}
				/>
				{passwordError && <Text style={{ color: "red" }}>{passwordError}</Text>}

				<View style={{ height: 15 }} />

				<TextInputContainer
					value={confirmPassword}
					inputHint={"Confirm Password"}
					placeholder={"********"}
					M_icon={"lock-outline"}
					secureTextEntry={true}
					onChangeText={(text) => handleConfirmPasswordChange(text)}
				/>
				{confirmPasswordError && (
					<Text style={{ color: "red" }}>{confirmPasswordError}</Text>
				)}

				<View style={{ height: 30 }} />

				<Btn text={"Next"} onPress={() => handleNext()} />
			</View>
		</SafeAreaView>
	);
}

export default SetPassword;
