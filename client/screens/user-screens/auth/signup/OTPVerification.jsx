import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../../../components/topBar";
import ReusableStyles from "../../../../components/reausable/reusableStyles";
import { saveRegistrationProgress } from "../../../../lib/utils/registration.utils";
import OTPVerificationComponent from "../../../../components/OTP.verification";

function OTPVerification() {
	const navigation = useNavigation();
	const themeColor = useTheme().colors;

	const [code, setCode] = useState("");

	const handleVerify = () => {
		if (code.trim() !== "") {
			saveRegistrationProgress("Code", { code });
		}

		navigation.navigate("registration");
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
				<Text style={[ReusableStyles.header, { color: themeColor.text }]}>
					Email verification
				</Text>
				<Text
					style={{
						color: themeColor.secondaryText,
					}}
				>
					Check your email for the verification code.
				</Text>

				<View style={{ height: 20 }} />

				<OTPVerificationComponent setCode={setCode} onBtnPress={handleVerify} />
			</View>
		</SafeAreaView>
	);
}

export default OTPVerification;
