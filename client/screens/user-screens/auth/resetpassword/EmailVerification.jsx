import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "react-native-paper";
import ReusableBtn from "../../../../components/reausable/ReusableBtn";
import ReusableTextInputContainer from "../../../../components/reausable/ReusableTextInputContainer";
import TopBar from "../../../../components/topBar";
import ReusableStyles from "../../../../components/reausable/reusableStyles";

const EmailVerification = () => {
	const [email, setEmail] = useState("");
	let isLoading = false;
	const navigation = useNavigation();
	const themeColor = useTheme().colors;

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

				<View style={[ReusableStyles.container, { gap: 10 }]}>
					<Text
						style={[
							ReusableStyles.header,
							{
								color: themeColor.text,
							},
						]}
					>
						Email address:
					</Text>
					<Text
						style={{
							color: themeColor.secondaryText,
						}}
					>
						Enter your email address. Verification code will be sent to this
						email. make sure it is valid
					</Text>
					<ReusableTextInputContainer
						inputHint={"email"}
						iconName={"email-outline"}
						iconColor={themeColor.icon}
						iconSize={24}
						borderColor={themeColor.secondBorderColor}
						placeholder={"example@gmail.com"}
						value={email}
						onChangeText={setEmail}
						width={"100%"}
						secureTextEntry={false}
						color={themeColor.text}
					/>
					<ReusableBtn
						width={"100%"}
						btnText={isLoading ? "Loading..." : "Submit"}
						onPress={() =>
							navigation.navigate("reset_password_otp_verification")
						}
						backgroundColor={themeColor.btn}
						borderColor={themeColor.btn}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default EmailVerification;
