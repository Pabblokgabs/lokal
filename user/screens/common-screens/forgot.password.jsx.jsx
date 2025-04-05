import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../components/reusable/styles";
import TopBar from "../../components/topBar";
import TextInputContainer from "../../components/reusable/text.input";
import Btn from "../../components/btn";
import OTPVerificationComponent from "../../components/OTP.verification";

function ForgotPassword() {
	const [email, setEmail] = useState("");
	const navigation = useNavigation();
	const themeColor = useTheme().colors;

	const [active, setActive] = useState("email");
	const [code, setCode] = useState("");

	const handleNext = () => {
		setActive("otp");
	};

	const handleSubmit = () => {
		navigation.navigate("reset-password");
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
			<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
				{active === "email" ? (
					<>
						<TopBar
							arrowPress={() => navigation.goBack()}
						/>

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
							Email address:
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
							Enter your current email. Verification code will be sent to this
							email, Please make sure it is valid.
						</Text>

						<View style={{ height: 20 }} />

						<TextInputContainer
							inputHint={"Email"}
							placeholder={"example@gmail.com"}
							onChangeText={(text) => setEmail(text)}
						/>

						<View style={{ height: 20 }} />

						<Btn text={"Next"} onPress={() => handleNext()} />
					</>
				) : (
					<>
						<View style={{ height: 30 }} />

						<OTPVerificationComponent
							isBtn={true}
							email={email}
							setCode={(text) => setCode(text)}
							onBtnPress={() => handleSubmit()}
							code={code}
						/>
					</>
				)}
			</View>
		</SafeAreaView>
	);
}

export default ForgotPassword;
