import { View, Text, Modal } from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import ReusableStyles from "../../../reausable/reusableStyles";
import TopBar from "../../../topBar";
import ReusableTextInputContainer from "../../../reausable/ReusableTextInputContainer";
import ReusableBtn from "../../../reausable/ReusableBtn";

function ChangePassword({ visible, setVisible }) {
	const themeColor = useTheme().colors;

	/* Checking password strength */
	const [formData, setFormData] = useState({
		current_password: "",
		new_password: "",
	});
	console.log(formData.new_password, formData.current_password);
	const [passwordError, setPasswordError] = useState(null);
	const [confirmPassword, setConfirmPassword] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState(null);

	const handleCurrentPassword = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	const handlePasswordChange = (text) => {
		setFormData({ ...formData, new_password: text });
		validatePassword(text);
	};

	const validatePassword = (password) => {
		const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

		if (passwordRegex.test(password)) {
			setPasswordError(null);
		} else {
			setPasswordError(
				"Password must container letters, number, and special characters and at least 8 characters long"
			);
		}
	};

	const handleConfirmPasswordChange = (text) => {
		setConfirmPassword(text);
		if (text !== formData.new_password) {
			setConfirmPasswordError("Passwords do not match");
		} else {
			setConfirmPasswordError(null);
			setFormData({ ...formData, new_password: text });
		}
	};

	const handleSubmit = () => {
		console.log(formData);
		setVisible(false);
		setConfirmPassword("");
		setFormData({
			current_password: "",
			new_password: "",
		});
	};

	return (
		<Modal animationType="none" visible={visible} transparent={false}>
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<TopBar
					arrowName={"arrowleft"}
					text={"Change password"}
					textAlign={"start"}
					arrowOnPress={() => setVisible(false)}
				/>
				<View
					style={[
						ReusableStyles.container,
						{ flexDirection: "column", gap: 10 },
					]}
				>
					<ReusableTextInputContainer
						inputHint={"Current password"}
						backgroundColor={"transparent"}
						borderColor={themeColor.borderColor}
						placeholder={"Enter your password"}
						value={formData.current_password}
						onChangeText={(text) =>
							handleCurrentPassword("current_password", text)
						}
						width={"100%"}
						secureTextEntry={false}
						color={themeColor.text}
					/>

					<View>
						<ReusableTextInputContainer
							inputHint={"New password"}
							backgroundColor={"transparent"}
							borderColor={themeColor.borderColor}
							placeholder={"Create naw password"}
							value={formData.new_password}
							onChangeText={(text) => handlePasswordChange(text)}
							width={"100%"}
							secureTextEntry={false}
							color={themeColor.text}
						/>
						{passwordError !== null && (
							<Text style={{ color: "red" }}>{passwordError}</Text>
						)}
					</View>

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

					<View style={{ height: 10 }} />

					<ReusableBtn
						width={"100%"}
						btnText={"Submit"}
						onPress={() => handleSubmit()}
						backgroundColor={themeColor.btn}
						borderColor={themeColor.btn}
					/>
				</View>
			</View>
		</Modal>
	);
}

export default ChangePassword;
