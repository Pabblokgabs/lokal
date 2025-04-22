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
import { useMutation } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

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

	const { mutate, isError, isPending, error } = useMutation({
		mutationFn: async ({}) => {
			try {
				const res = await fetch(`${process.env.SERVER_URI}/auth/register`, {
					method: "POST",
					headers: {
						"content-Type": "application/json",
					},
					body: JSON.stringify({}),
				});

				if (!res.ok) throw new Error(data.error || "something went wrong");

				if (data.error) {
					throw new Error(data.error);
				}

				return data;
			} catch (error) {
				console.error(error);
				Toast.show({
					type: "error",
					text1: "Error",
					text2: error.message || "Something went wrong. Please try again.",
				});
			}
		},
		onSuccess: () => {
			clearAllScreenData();
		},
	});

	const handleSubmit = () => {
		mutate(userData);
	};

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

				{/* <Text
					style={[
						reusableStyles.lgHeader,
						{
							color: themeColor.text,
							fontSize: 35,
						},
					]}
				>
					Setting up your profile for you...
				</Text> */}

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
					By pressing 'Submit', you agree to create an account and to our{" "}
					<Text onPress={() => {}} style={{ color: themeColor.link }}>
						Terms of Service
					</Text>{" "}
					and{" "}
					<Text onPress={() => {}} style={{ color: themeColor.link }}>
						Privacy Policy
					</Text>
					, which include our commitment to protect your data
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
					The{" "}
					<Text onPress={() => {}} style={{ color: themeColor.link }}>
						Privacy Policy
					</Text>
					describes the ways we use the information we collecte when you you
					create an account
				</Text>

				<View style={{ flex: 1 }} />

				<Btn text={"Submit"} onPress={() => handleSubmit()} />

				<View style={{ height: 20 }} />
			</View>
		</SafeAreaView>
	);
}
