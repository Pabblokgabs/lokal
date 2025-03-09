import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ReusableTextInputContainer from "../../../../components/reausable/ReusableTextInputContainer";
import ReusableBtn from "../../../../components/reausable/ReusableBtn";
import ReusableStyles from "../../../../components/reausable/reusableStyles";
import TopBar from "../../../../components/topBar";

function Login() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleFormData = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		console.log(formData);
		navigation.navigate("bottom_tab_navigator");
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
					<Text style={[ReusableStyles.header, { color: themeColor.text }]}>
						Log into your account
					</Text>

					<ReusableTextInputContainer
						inputHint={"email"}
						backgroundColor={"transparent"}
						borderColor={themeColor.secondBorderColor}
						iconColor={themeColor.icon}
						iconName={"email-outline"}
						iconSize={24}
						placeholder={"Enter your email"}
						value={formData.email}
						onChangeText={(text) => handleFormData("email", text)}
						width={"100%"}
						secureTextEntry={false}
						color={themeColor.text}
					/>

					<ReusableTextInputContainer
						inputHint={"password"}
						backgroundColor={"transparent"}
						borderColor={themeColor.secondBorderColor}
						iconColor={themeColor.icon}
						iconName={"lock-outline"}
						iconSize={24}
						placeholder={"Enter your password"}
						value={formData.password}
						onChangeText={(text) => handleFormData("password", text)}
						width={"100%"}
						secureTextEntry={true}
						color={themeColor.text}
					/>

					<View style={{ height: 10 }} />

					<ReusableBtn
						backgroundColor={themeColor.btn}
						borderColor={themeColor.btn}
						btnText={"Submit"}
						width={"100%"}
						onPress={() => handleSubmit()}
					/>
					<TouchableOpacity
						onPress={() => navigation.navigate("email_verification")}
					>
						<Text
							style={{ textAlign: "center", color: themeColor.secondaryText }}
						>
							Forgot password?
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default Login;
