import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../../components/reusable/styles";
import TopBar from "../../../components/topBar";
import TextInputContainer from "../../../components/reusable/text.input";
import Btn from "../../../components/btn";
import OTPVerificationComponent from "../../../components/OTP.verification";
import {
	getRegistrationProgress,
	saveRegistrationProgress,
} from "../../../lib/utils/registration.utils";

function OwnerEmail() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [active, setActive] = useState("email");
	const [email, setEmail] = useState("");
	const [code, setCode] = useState("");

	useEffect(() => {
		getRegistrationProgress("ownerEmail").then((progressData) => {
			if (progressData) {
				setEmail(progressData.email || "");
			}
		});
	}, []);

	const handleNext = () => {
		if (email.trim() !== "") {
			saveRegistrationProgress("ownerEmail", { email });
		}

		setActive("otp");
	};

	const handleVerify = () => {
		navigation.navigate("Owner-password");
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
			<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
				{active === "email" ? (
					<>
						<TopBar arrowPress={() => navigation.goBack()} />

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
							Verification code will be sent to this email, Please make sure it
							is valid.
						</Text>

						<View style={{ height: 20 }} />

						<TextInputContainer
							I_icon={"mail-outline"}
							inputHint={"Email"}
							placeholder={"example@gmail.com"}
							onChangeText={(text) => setEmail(text)}
						/>

						<View style={{ height: 20 }} />

						<Btn text={"Next"} onPress={() => handleNext()} />

						<View style={{ height: 20 }} />

						<Text
							style={{
								color: themeColor.secondText,
								textAlign: "center",
							}}
						>
							By signing Up, you agree to the terms of services and privacy and
							privacy policy.
						</Text>
					</>
				) : (
					<>
						<View style={{ height: 30 }} />

						<OTPVerificationComponent
							isBtn={true}
							email={email}
							setCode={(text) => setCode(text)}
							onBtnPress={() => handleVerify()}
							code={code}
						/>
					</>
				)}
			</View>
		</SafeAreaView>
	);
}

export default OwnerEmail;
