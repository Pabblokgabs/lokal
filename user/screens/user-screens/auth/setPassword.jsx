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
import { passwordRegex } from "../../../lib/regex";
import styles from "./style";

function SetPassword() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [passwordError, setPasswordError] = useState("");
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

		passwordRegex(text, setPasswordError);
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

				<View style={{ height: 50 }} />

				<Text style={[reusableStyles.lgHeader, styles.email_AD(colors.text)]}>
					Set Password
				</Text>

				<View style={{ height: 10 }} />

				<Text style={[reusableStyles.text, styles.email_AD(colors.secondText)]}>
					Password must container letters, number, and special characters and it
					must be at least 8 characters
				</Text>

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
