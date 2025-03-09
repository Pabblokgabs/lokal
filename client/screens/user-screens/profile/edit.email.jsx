import { Text, View, Modal, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import OtpTextInput from "react-native-otp-textinput";

import ReusableStyles from "../../../components/reausable/reusableStyles";
import TopBar from "../../../components/topBar";
import ReusableTextInputContainer from "../../../components/reausable/ReusableTextInputContainer";
import ReusableBtn from "../../../components/reausable/ReusableBtn";
import styles from "../../../styleSheet/profile.styles";

function ChangeEmail({ visible, setVisible }) {
	const themeColor = useTheme().colors;

	const [onDisplay, setOnDisplay] = useState("email");

	const [emailData, setEmailData] = useState({
		current_Email: "",
		new_email: "",
	});

	const [time, setTime] = useState(30);
	const isDisabled = time > 0 ? true : false;
	useEffect(() => {
		const countDownInterval = setInterval(() => {
			if (onDisplay === "code") {
				if (time > 0) {
					setTime((prev) => prev - 1);
				} else {
					clearInterval(countDownInterval);
				}
			}
		}, 1000);

		return () => clearInterval(countDownInterval);
	}, [onDisplay]);

	const handleEmailData = (name, value) => {
		setEmailData({ ...emailData, [name]: value });
	};

	const handleSubmit = () => {
		if (onDisplay === "email") {
			return setOnDisplay("code");
		} else {
			setVisible(false);
			setOnDisplay("email")
			console.log(emailData);
		}
	};

	return (
		<Modal visible={visible} animationType="slide" transparent={false}>
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				{onDisplay === "email" && (
					<TopBar
						arrowName={"arrowleft"}
						text={"Change Email"}
						arrowOnPress={() => setVisible(false)}
					/>
				)}
				<View style={ReusableStyles.container}>
					<View>
						{onDisplay === "email" ? (
							<>
								<ReusableTextInputContainer
									inputHint={"Current Email"}
									backgroundColor={"transparent"}
									borderColor={themeColor.borderColor}
									placeholder={"Enter your email"}
									value={emailData.current_Email}
									onChangeText={(text) =>
										handleEmailData("current_Email", text)
									}
									width={"100%"}
									secureTextEntry={false}
									color={themeColor.text}
									editable={false}
								/>

								<View style={{ height: 10 }} />

								<ReusableTextInputContainer
									inputHint={"New Email"}
									backgroundColor={"transparent"}
									borderColor={themeColor.borderColor}
									placeholder={"Enter your email"}
									value={emailData.new_email}
									onChangeText={(text) => handleEmailData("new_email", text)}
									width={"100%"}
									secureTextEntry={false}
									color={themeColor.text}
									editable={false}
								/>
							</>
						) : (
							<>
								<Text
									style={[ReusableStyles.header, { color: themeColor.text }]}
								>
									Enter the code.
								</Text>
								<View style={{ height: 10 }} />
								<Text
									style={[
										ReusableStyles.text,
										{ color: themeColor.secondaryText },
									]}
								>
									Check your email for the verification code.
								</Text>
								<View style={{ height: 20 }} />
								<View style={styles.otpTextInputContainer}>
									<OtpTextInput
										handleTextChange={(code) => console.log(code)}
										inputCount={4}
										keyboardType="numeric"
										containerStyle={ReusableStyles.otpTextInputContainerStyle}
										textInputStyle={[
											ReusableStyles.otpTextInput,
											{
												backgroundColor: themeColor.background,
												color: themeColor.secondaryText,
											},
										]}
									/>
								</View>
							</>
						)}
					</View>
					<View style={{ height: 20 }} />
					<ReusableBtn
						onPress={handleSubmit}
						btnText={onDisplay === "email" ? "Next" : "Submit"}
						backgroundColor={themeColor.btn}
						borderColor={themeColor.btn}
						color={"white"}
					/>
					{onDisplay !== "email" && (
						<View style={styles.timeContainer}>
							<TouchableOpacity disabled={isDisabled}>
								<Text
									style={{
										color: themeColor.secondaryText,
										opacity: isDisabled ? 0.5 : 1,
									}}
								>
									Resent Code.
								</Text>
							</TouchableOpacity>
							{isDisabled && (
								<Text style={{ color: themeColor.text }}>{time}s</Text>
							)}
						</View>
					)}
				</View>
			</View>
		</Modal>
	);
}

export default ChangeEmail;
