import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "react-native-paper";
import OtpTextInput from "react-native-otp-textinput";
import styles from "../../../../styleSheet/OTPVerification.styles";
import ReusableBtn from "../../../../components/reausable/ReusableBtn";
import TopBar from "../../../../components/topBar";
import ReusableStyles from "../../../../components/reausable/reusableStyles";

function ResetPasswordOTPVerification() {
	const navigation = useNavigation();
	const themeColor = useTheme().colors;

	const [time, setTime] = useState(30);
	const isDisabled = time > 0 ? true : false;
	useEffect(() => {
		const countDownInterval = setInterval(() => {
			if (time > 0) {
				setTime((prev) => prev - 1);
			} else {
				clearInterval(countDownInterval);
			}
		}, 1000);

		return () => clearInterval(countDownInterval);
	}, [time]);

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
					<Text style={[ReusableStyles.header, { color: themeColor.text }]}>
						Enter the code.
					</Text>
					<Text
						style={{
							color: themeColor.secondaryText,
							marginBottom: 10,
						}}
					>
						Check your email for the verification code.
					</Text>
					<View style={styles.otpTextInputContainer}>
						<OtpTextInput
							handleTextChange={(code) => console.log(code)}
							inputCount={4}
							keyboardType="numeric"
							textInputStyle={[
								styles.otpTextInput,
								{
									backgroundColor: themeColor.background,
									color: themeColor.secondaryText,
								},
							]}
						/>
					</View>
					<ReusableBtn
						onPress={() => navigation.navigate("reset_password")}
						width={"100%"}
						btnText={"verify"}
						backgroundColor={themeColor.btn}
						borderColor={themeColor.btn}
					/>
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
				</View>
			</View>
		</SafeAreaView>
	);
}

export default ResetPasswordOTPVerification;
