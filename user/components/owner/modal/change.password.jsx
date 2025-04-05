import { View, Text, Modal } from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import reusableStyles from "../../reusable/styles";
import TopBar from "../../topBar";
import TextInputContainer from "../../reusable/text.input";
import Btn from "../../btn";

function ChangePassword({ visible, setVisible }) {
	const themeColor = useTheme().colors;

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
			<SafeAreaView style={{ backgroundColor: themeColor.bg }}>
				<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
					<TopBar
						title={"Change Password"}
						arrowPress={() => setVisible(false)}
					/>

          <View style={{height: 20}} />

					<View style={{ flexDirection: "column", gap: 20 }}>
						<TextInputContainer
							inputHint={"Current password"}
							backgroundColor={"transparent"}
							borderColor={themeColor.borderColor}
							placeholder={"Enter your password"}
							value={formData.current_password}
							onChangeText={(text) =>
								handleCurrentPassword("current_password", text)
							}
              MC_icon={"lock-outline"}
						/>

						<View>
							<TextInputContainer
								inputHint={"New password"}
								backgroundColor={"transparent"}
								borderColor={themeColor.borderColor}
								placeholder={"Create new password"}
								value={formData.new_password}
								onChangeText={(text) => handlePasswordChange(text)}
                MC_icon={"lock-outline"}
							/>
							{passwordError !== null && (
								<Text style={{ color: themeColor.red }}>{passwordError}</Text>
							)}
						</View>

						<View>
							<TextInputContainer
								inputHint={"Confirm password"}
								backgroundColor={"transparent"}
								borderColor={themeColor.borderColor}
								placeholder={"Enter your confirm password"}
								value={confirmPassword}
								onChangeText={(text) => handleConfirmPasswordChange(text)}
								secureTextEntry={true}
                MC_icon={"lock-outline"}
							/>
							{confirmPasswordError !== null && (
								<Text style={{ color: themeColor.red }}>{confirmPasswordError}</Text>
							)}
						</View>

						<View style={{ height: 10 }} />

						<Btn
							text={"Change"}
							onPress={() => handleSubmit()}
							backgroundColor={themeColor.btn}
							borderColor={themeColor.btn}
						/>
					</View>
				</View>
			</SafeAreaView>
		</Modal>
	);
}

export default ChangePassword;
