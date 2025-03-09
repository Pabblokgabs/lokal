import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import ReusableStyles from "../../../../components/reausable/reusableStyles";
import ReusableBtn from "../../../../components/reausable/ReusableBtn";
import ReusableTextInputContainer from "../../../../components/reausable/ReusableTextInputContainer";
import TopBar from "../../../../components/topBar";
import {
	getRegistrationProgress,
	saveRegistrationProgress,
} from "../../../../lib/utils/registration.utils";

function SetPassword() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();
	const email = useRoute().params?.email;

	/* validate password */
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
		validatePassword(text);
	};

	const validatePassword = (password) => {
		const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

		if (passwordRegex.test(password)) {
			return setPasswordError(null);
		} else {
			return setPasswordError(
				"Password must container letters, number, and special characters and it must be at least 8 characters"
			);
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
		if (password.trim() !== "") {
			saveRegistrationProgress("Password", { password });
		}

		console.log(password);
		console.log(email);
		navigation.navigate("verify-email");
	};
	return (
		<SafeAreaView>
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<TopBar
					arrowName={"arrowleft"}
					arrowOnPress={() => navigation.goBack()}
				/>
				<View style={ReusableStyles.container}>
					<Text
						style={[
							ReusableStyles.header,
							{
								color: themeColor.text,
								paddingBottom: 10,
							},
						]}
					>
						Choose Your Password
					</Text>
					<Text style={{ color: themeColor.secondaryText }}>
						Make sure your password is at least 8 characters and contain
						letters, numbers, and special characters.
					</Text>
					<View style={{ height: 20 }} />
					<View>
						<ReusableTextInputContainer
							inputHint={"Password"}
							backgroundColor={"transparent"}
							borderColor={themeColor.borderColor}
							placeholder={"Create password"}
							value={password}
							onChangeText={handlePasswordChange}
							width={"100%"}
							secureTextEntry={false}
							color={themeColor.text}
						/>
						{passwordError !== null && (
							<Text style={{ color: "red" }}>{passwordError}</Text>
						)}
					</View>

					<View style={{ height: 10 }} />

					<View>
						<ReusableTextInputContainer
							inputHint={"Confirm password"}
							backgroundColor={"transparent"}
							borderColor={themeColor.borderColor}
							placeholder={"Enter your confirm password"}
							value={confirmPassword}
							onChangeText={(text) => handleConfirmPasswordChange(text)}
							width={"100%"}
							secureTextEntry={true}
							color={themeColor.text}
						/>
						{confirmPasswordError !== null && (
							<Text style={{ color: "red" }}>{confirmPasswordError}</Text>
						)}
					</View>

					<View style={{ height: 30 }} />

					<ReusableBtn
						width={"100%"}
						btnText={"Next"}
						onPress={() => handleNext()}
						backgroundColor={themeColor.btn}
						borderColor={themeColor.btn}
						disabled={password !== confirmPassword}
						opacity={password !== confirmPassword ? 0.5 : 1}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default SetPassword;
