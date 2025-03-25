import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../components/reusable/styles";
import Btn from "../../components/btn";
import TextInputContainer from "../../components/reusable/text.input";
import { OnBoardingContext } from "../../lib/hooks/useSignIn";

function SignIn() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const { setRegisterOption } = useContext(OnBoardingContext);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
			<View
				style={[
					reusableStyles.wrapper,
					{ paddingHorizontal: 15, gap: 10, },
				]}
			>
      <View style={{height: 50}}/>
      
				<Text
					style={[
						reusableStyles.lgHeader,
						{ color: themeColor.text, textAlign: "center" },
					]}
				>
					Sign In
				</Text>

				<Text
					style={[
						reusableStyles.text,
						{ color: themeColor.secondText, textAlign: "center" },
					]}
				>
					Hi Welcome back, you've been missed
				</Text>

				<TextInputContainer
					inputHint={"Email"}
					placeholder={"example@gmail.com"}
					I_icon={"mail-outline"}
				/>

				<View style={{ height: 5 }} />

				<TextInputContainer
					inputHint={"Password"}
					placeholder={"********"}
					M_icon={"lock-outline"}
					secureTextEntry={true}
				/>

				<TouchableOpacity
					style={{ alignItems: "flex-end", marginTop: 5 }}
					onPress={() => navigation.navigate("forgot-password")}
				>
					<Text
						style={[
							reusableStyles.text,
							{
								color: themeColor.btn,
								borderBottomWidth: 1,
								borderBottomColor: themeColor.btn,
							},
						]}
					>
						Forgot Passsword
					</Text>
				</TouchableOpacity>

				<View style={{ height: 10 }} />

				<Btn text={"Sign In"} />

				<View style={{ height: 10 }} />

				<Text
					style={[
						reusableStyles.text,
						{ color: themeColor.text, textAlign: "center" },
					]}
				>
					Already have an account?{" "}
					<Text
						onPress={() => {
							navigation.goBack(), setRegisterOption(true);
						}}
						style={{
							color: themeColor.btn,
							borderBottomWidth: 1,
							borderBottomColor: themeColor.btn,
						}}
					>
						Sign Up
					</Text>
				</Text>
			</View>
		</SafeAreaView>
	);
}

export default SignIn;
