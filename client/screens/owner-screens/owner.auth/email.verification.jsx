import { View, Text } from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import ReusableStyles from "../../../components/reausable/reusableStyles";
import OTPVerificationComponent from "../../../components/OTP.verification";

function OwnerEmailVerification() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();
	const ownerData = useRoute().params?.formData;

	console.log(ownerData)

	const [code, setCode] = useState("");

	const handleSubmit = () => {
		console.log(code);
		navigation.navigate("spot-information");
	};

	return (
		<SafeAreaView
			style={[
				ReusableStyles.wrapper,
				{ backgroundColor: themeColor.background },
			]}
		>
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

			<View style={{ height: 20 }}></View>

			<OTPVerificationComponent setCode={setCode} onBtnPress={handleSubmit} />
		</SafeAreaView>
	);
}

export default OwnerEmailVerification;
