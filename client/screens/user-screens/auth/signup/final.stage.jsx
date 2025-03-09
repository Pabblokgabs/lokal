import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ReusableBtn from "../../../../components/reausable/ReusableBtn";
import ReusableTextInputContainer from "../../../../components/reausable/ReusableTextInputContainer";
import TopBar from "../../../../components/topBar";
import ReusableStyles from "../../../../components/reausable/reusableStyles";
import {
	getRegistrationProgress,
	saveRegistrationProgress,
} from "../../../../lib/utils/registration.utils";

function SettingUpProfile() {
	const navigation = useNavigation();
	const themeColor = useTheme().colors;
	const [userData, setUserData] = useState("");

	/* const getAllScreenData = async () => {
		try {
			const screens = ["Email", "Password", "FormData", "Photo"];

			let userData = {};

			for (const screenName of screens) {
				const screenData = await getRegistrationProgress(screenName);

				if (screenData) {
					userData = { ...userData, ...screenData };
				}
			}

			setUserData(userData);
		} catch (error) {
			console.log("Error", error);
		}
	}; */

	const handleSubmit = () => {};

	/* const clearAllScreenData = async () => {
		try {
			const screens = ["Email", "Password", "FormData", "Photo"];

			for(const screenName of screens) {
				const key = `registration_progress_${screenName}`
				await AsyncStorage.removeItem(key)
			}
		} catch (error) {
			console.log("Error", error);
		}
	}; */

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
				<Text
					style={{
						fontSize: 35,
						fontWeight: "bold",
						color: themeColor.text,
						fontFamily: "Roboto",
						marginBottom: 10,
					}}
				>
					You are all set for registration!
				</Text>

				<Text
					style={{
						fontSize: 35,
						fontWeight: "bold",
						color: themeColor.text,
						fontFamily: "Roboto",
						marginBottom: 30,
					}}
				>
					Setting up your profile for you
				</Text>

				<Text
					style={{
						fontSize: 20,
						color: themeColor.text,
						fontFamily: "Roboto",
					}}
				>
					By pressing 'Submit', you acknoledge that you have read and agree to
					our{" "}
					<Text onPress={() => {}} style={{ color: themeColor.link }}>
						Terms of Service
					</Text>{" "}
					and{" "}
					<Text onPress={() => {}} style={{ color: themeColor.link }}>
						Privacy Policy
					</Text>
					, which include our commitment to protect your data
				</Text>

				<View style={{ flex: 1 }} />

				<ReusableBtn
					width={"100%"}
					btnText={"Submit"}
					onPress={handleSubmit}
					backgroundColor={themeColor.btn}
					borderColor={themeColor.btn}
				/>

				<View style={{ height: 20 }} />
			</View>
		</SafeAreaView>
	);
}

export default SettingUpProfile;
