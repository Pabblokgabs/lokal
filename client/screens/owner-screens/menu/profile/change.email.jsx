import { View, Text, Modal } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import ReusableStyles from "../../../../components/reausable/reusableStyles";
import TopBar from "../../../../components/topBar";
import ReusableBtn from "../../../../components/reausable/ReusableBtn";
import ReusableTextInputContainer from "../../../../components/reausable/ReusableTextInputContainer";
import OTPVerificationComponent from "../../../../components/OTP.verification";

function ChangeEmail({ visible, setVisible }) {
	const themeColor = useTheme().colors;

	const [isWarning, setIswarning] = useState(true);
	const [onDisplay, setOnDisplay] = useState("email");
	const [code, setCode] = useState("");

	const [emailData, setEmailData] = useState({
		current_Email: "",
		new_email: "",
	});

	const handleEmailData = (name, value) => {
		setEmailData({ ...emailData, [name]: value });
	};

	const handleSubmit = () => {
		if (onDisplay === "email") {
			console.log(emailData);
			setOnDisplay("code");
			return;
		} else {
			console.log(code);
			setVisible(false);
			setOnDisplay("email");
			console.log(emailData);
			return;
		}
	};

	return (
		<Modal transparent={false} animationType="none" visible={visible}>
			<SafeAreaView>
				<View
					style={[
						ReusableStyles.wrapper,
						{ backgroundColor: themeColor.background },
					]}
				>
					{isWarning ? (
						<View style={ReusableStyles.container}>
							<TopBar name3={"close"} onPress3={() => setVisible(false)} />

							<View style={{ flex: 1, paddingHorizontal: 20 }}>
								<View style={{ height: 10 }} />
								<Text
									style={[ReusableStyles.secHeader, { color: themeColor.text }]}
								>
									Important: To ensure the security of your account, please note
									that changing your your email address requires verification
								</Text>

								<Text
									style={[
										ReusableStyles.text,
										{ color: themeColor.secondaryText, marginVertical: 10 },
									]}
								>
									To proceed, you will need to provide:
								</Text>

								<Text
									style={[
										ReusableStyles.text,
										{
											color: themeColor.secondaryText,
											flexDirection: "row",
											alignItems: "center",
										},
									]}
								>
									<View
										style={[
											ReusableStyles.dot,
											{ backgroundColor: themeColor.text },
										]}
									/>
									Your current email address for verification purpose
								</Text>
								<Text
									style={[
										ReusableStyles.text,
										{
											color: themeColor.secondaryText,
											flexDirection: "row",
											alignItems: "center",
										},
									]}
								>
									<View
										style={[
											ReusableStyles.dot,
											{ backgroundColor: themeColor.text },
										]}
									/>
									Your new email address
								</Text>

								<Text
									style={[
										ReusableStyles.text,
										{ color: themeColor.secondaryText, marginVertical: 10 },
									]}
								>
									By providing both email address, you acknowledge that you are
									the legitimate owner of the account
								</Text>
							</View>
							<ReusableBtn
								btnText={"Next"}
								borderColor={themeColor.btn}
								backgroundColor={themeColor.btn}
								color={"white"}
								onPress={() => setIswarning(false)}
							/>
							<View style={{ height: 20 }} />
						</View>
					) : onDisplay === "email" ? (
						<>
							<TopBar
								arrowName={"arrowleft"}
								text={"Change Email"}
								arrowOnPress={() => setVisible(false)}
							/>

							<ReusableTextInputContainer
								inputHint={"Current Email"}
								backgroundColor={"transparent"}
								borderColor={themeColor.borderColor}
								placeholder={"Enter your email"}
								value={emailData.current_Email}
								onChangeText={(text) => handleEmailData("current_Email", text)}
							/>

							<View style={{ height: 10 }} />

							<ReusableTextInputContainer
								inputHint={"New Email"}
								backgroundColor={"transparent"}
								borderColor={themeColor.borderColor}
								placeholder={"Enter your email"}
								value={emailData.new_email}
								onChangeText={(text) => handleEmailData("new_email", text)}
							/>

							<View style={{ height: 20 }} />

							<ReusableBtn
								onPress={handleSubmit}
								btnText={"Next"}
								backgroundColor={themeColor.btn}
								borderColor={themeColor.btn}
								color={"white"}
								opacity={
									emailData.current_Email === "" || emailData.new_email === ""
										? 0.5
										: 1
								}
								disabled={
									emailData.current_Email === "" || emailData.new_email === ""
								}
							/>
						</>
					) : (
						<>
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

							<OTPVerificationComponent
								setCode={setCode}
								onBtnPress={handleSubmit}
								code={code}
							/>
						</>
					)}
				</View>
			</SafeAreaView>
		</Modal>
	);
}

export default ChangeEmail;
