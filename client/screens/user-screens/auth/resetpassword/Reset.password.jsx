import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ReusableBtn from "../../../../components/reausable/ReusableBtn";
import styles from "../../../../styleSheet/reset.password.styles";
import ReusableTextInputContainer from "../../../../components/reausable/ReusableTextInputContainer";

function ResetPassword() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [formData, setFormData] = useState({
		password: "",
		confirm_password: "",
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
				style={[styles.container, { backgroundColor: themeColor.background }]}
			>
				<Ionicons
					name="arrow-back"
					color={themeColor.btn}
					size={24}
					onPress={() => navigation.goBack()}
				/>
				<Text style={[styles.text, { color: themeColor.text }]}>
					Reset password.
				</Text>

				<ReusableTextInputContainer
					inputHint={"New password"}
					iconName={"lock-outline"}
					iconColor={themeColor.icon}
					iconSize={24}
					borderColor={themeColor.secondBorderColor}
					placeholder={"Enter a new password"}
					value={formData.password}
					onChangeText={(text) => handleFormData("password", text)}
					width={"100%"}
					secureTextEntry={false}
					backgroundColor={"transparent"}
					color={themeColor.text}
				/>

				<ReusableTextInputContainer
					inputHint={"Confirm password"}
					iconName={"lock-outline"}
					iconColor={themeColor.icon}
					iconSize={24}
					borderColor={themeColor.secondBorderColor}
					placeholder={"Enter confirm password"}
					value={formData.confirm_password}
					onChangeText={(text) => handleFormData("confirm_password", text)}
					width={"100%"}
					secureTextEntry={true}
					backgroundColor={"transparent"}
					color={themeColor.text}
				/>

				<ReusableBtn
					backgroundColor={themeColor.btn}
					borderColor={themeColor.btn}
					btnText={"Submit"}
					width={"100%"}
					onPress={() => handleSubmit()}
				/>
			</View>
		</SafeAreaView>
	);
}

export default ResetPassword;
