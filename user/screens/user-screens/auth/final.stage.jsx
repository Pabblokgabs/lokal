import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import reusableStyles from "../../../components/reusable/styles";
import TopBar from "../../../components/topBar";
import Btn from "../../../components/btn";
import { getRegistrationProgress } from "../../../lib/utils/registration.utils";

export default function FinalStage() {
	const navigation = useNavigation();
	const themeColor = useTheme().colors;
	const [userData, setUserData] = useState([]);
	console.log(userData);

	const getAllScreenData = async () => {
		try {
			const screens = ["Email", "Password", "FormData", "Preference"];

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
	};

	useEffect(() => {
		getAllScreenData();
	}, []);

	const clearAllScreenData = async () => {
		try {
			const screens = ["Email", "Password", "FormData", "Preference"];

			for (const screenName of screens) {
				const key = `registration_progress_${screenName}`;
				await AsyncStorage.removeItem(key);
			}
		} catch (error) {
			console.log("Error", error);
		}
	};

	const handleSubmit = () => {};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
			<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
				<TopBar arrowPress={() => navigation.goBack()} />

				<View style={{ height: 30 }} />

				<Text
					style={[
						reusableStyles.lgHeader,
						{
							color: themeColor.text,
							marginBottom: 10,
							fontSize: 35,
						},
					]}
				>
					You are all set for registration!
				</Text>

				<Text
					style={[
						reusableStyles.lgHeader,
						{
							color: themeColor.text,
							fontSize: 35,
						},
					]}
				>
					Setting up your profile for you...
				</Text>

				<View style={{ height: 20 }} />

				<Text
					style={[
						reusableStyles.text,
						{
							color: themeColor.text,
							fontSize: 20,
						},
					]}
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

				<Btn text={"Submit"} onPress={() => handleSubmit()} />

				<View style={{ height: 20 }} />
			</View>
		</SafeAreaView>
	);
}
