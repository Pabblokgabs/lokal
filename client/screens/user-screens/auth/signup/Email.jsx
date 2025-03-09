import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "react-native-paper";
import ReusableBtn from "../../../../components/reausable/ReusableBtn";
import ReusableTextInputContainer from "../../../../components/reausable/ReusableTextInputContainer";
import TopBar from "../../../../components/topBar";
import ReusableStyles from "../../../../components/reausable/reusableStyles";
import {
	getRegistrationProgress,
	saveRegistrationProgress,
} from "../../../../lib/utils/registration.utils";

const Email = () => {
	const [email, setEmail] = useState("");
	let isLoading = false;
	const navigation = useNavigation();
	const themeColor = useTheme().colors;

	useEffect(() => {
		getRegistrationProgress("Email").then((progressData) => {
			if (progressData) {
				setEmail(progressData.email || "");
			}
		});
	}, []);

	const handleNext = () => {
		if (email.trim() !== "") {
			saveRegistrationProgress("Email", { email });
		}

		navigation.navigate("password", { email });
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
						Verification code will be sent to this email, Please make sure it is
						valid.
					</Text>
					<View style={{ height: 10 }} />
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
					<View style={{ height: 20 }} />
					<ReusableBtn
						width={"100%"}
						btnText={isLoading ? "Redirecting..." : "Next"}
						onPress={handleNext}
						backgroundColor={email?.length > 6 ? themeColor.btn : "gray"}
						borderColor={email?.length > 6 ? themeColor.btn : "gray"}
						disabled={email?.length < 6}
					/>
					<View style={{ height: 20 }} />
					<Text
						style={{
							color: themeColor.secondaryText,
							textAlign: "center",
						}}
					>
						By signing Up, you agree to the terms of services and privacy and
						privacy policy.
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Email;
