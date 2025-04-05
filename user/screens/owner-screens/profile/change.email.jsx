import { View, Text, Modal } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import TopBar from "../../../components/topBar";
import reusableStyles from "../../../components/reusable/styles";
import Btn from "../../../components/btn";
import TextInputContainer from "../../../components/reusable/text.input";
import OTPVerificationComponent from "../../../components/OTP.verification";

function ChangeEmail({ visible, setVisible }) {
	const themeColor = useTheme().colors;

	const [onDisplay, setOnDisplay] = useState("email");
	const [code, setCode] = useState("");

	const [emailData, setEmailData] = useState({
		current_email: "",
		new_email: "",
	});

	const handleEmailData = (name, value) => {
		setEmailData({ ...emailData, [name]: value });
	};

	const handleSubmit = () => {
		if (onDisplay === "email") {
			return setOnDisplay("code");
		} else {
			setVisible(false);
			setOnDisplay("email");
			console.log("data", emailData);
			console.log("code", code);
		}
	};

	return (
		<Modal animationType="slide" transparent={false} visible={visible}>
			<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
				<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
					<View style={{ flex: 1 }}>
						{onDisplay === "email" ? (
							<>
								<TopBar
									title={"Change Email"}
									arrowPress={() => setVisible(false)}
								/>
								<View style={{ gap: 10 }}>
									<View style={{ height: 10 }} />
									<Text
										style={[reusableStyles.header, { color: themeColor.text }]}
									>
										Important: To ensure the security of your account, please
										note that changing your your email address requires
										verification
									</Text>

									<Text
										style={[
											reusableStyles.text,
											{ color: themeColor.secondText, marginVertical: 10 },
										]}
									>
										To proceed, you will need to provide:
									</Text>

									<Text
										style={[
											reusableStyles.text,
											{
												color: themeColor.secondText,
												flexDirection: "row",
												alignItems: "center",
											},
										]}
									>
										<View
											style={[
												reusableStyles.dot,
												{ backgroundColor: themeColor.text },
											]}
										/>
										Your current email address for verification purpose
									</Text>
									<Text
										style={[
											reusableStyles.text,
											{
												color: themeColor.secondText,
												flexDirection: "row",
												alignItems: "center",
											},
										]}
									>
										<View
											style={[
												reusableStyles.dot,
												{ backgroundColor: themeColor.text },
											]}
										/>
										Your new email address
									</Text>

									<Text
										style={[
											reusableStyles.text,
											{ color: themeColor.secondText, marginVertical: 10 },
										]}
									>
										By providing both email address, you acknowledge that you
										are the legitimate owner of the account
									</Text>
								</View>

								<View style={{ height: 20 }} />

								<TextInputContainer
									M_icon={"mail-outline"}
									placeholder={"example@gmail.com"}
									inputHint={"Current email"}
									onChangeText={(text) =>
										handleEmailData("current_email", text)
									}
								/>

								<View style={{ height: 15 }} />

								<TextInputContainer
									M_icon={"mail-outline"}
									placeholder={"example@gmail.com"}
									inputHint={"New email"}
									onChangeText={(text) => handleEmailData("new_email", text)}
								/>
							</>
						) : (
							<>
								<View style={{ height: 20 }} />
								<OTPVerificationComponent setCode={setCode} isBtn={false} />
							</>
						)}
					</View>
					<Btn
						text={onDisplay === "email" ? "Next" : "Submit"}
						backgroundColor={themeColor.btn}
						onPress={() => handleSubmit()}
					/>

					<View style={{ height: 15 }} />
				</View>
			</SafeAreaView>
		</Modal>
	);
}

export default ChangeEmail;
