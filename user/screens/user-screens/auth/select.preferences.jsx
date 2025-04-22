import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../../components/reusable/styles";
import {
	getRegistrationProgress,
	saveRegistrationProgress,
} from "../../../lib/utils/registration.utils";
import Btn from "../../../components/btn";
import TopBar from "../../../components/topBar";
import { recommended } from "../../../lib/options";
import styles from "./style";

function SelectPreferences() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [preference, setPreference] = useState([]);
	console.log(preference);

	useEffect(() => {
		getRegistrationProgress("Preference").then((progressData) => {
			if (progressData) {
				setPreference(progressData.preference);
			}
		});
	}, []);

	const handleSelect = (item) => {
		if (!preference.includes(item)) {
			setPreference([...preference, item]);
		} else {
			const newPref = preference.filter((x) => x !== item);
			setPreference([...newPref]);
		}

		console.log(preference);
	};

	const handleNext = () => {
		if (preference.length !== 0) {
			saveRegistrationProgress("Preference", { preference });
		}

		navigation.navigate("set-password");
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
			<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
				<TopBar arrowPress={() => navigation.goBack()} />

				<View style={{ height: 30 }} />

				<Text style={[reusableStyles.lgHeader, styles.email_AD(colors.text)]}>
					Select up to 3 Preferences
				</Text>

				<View style={{ height: 10 }} />

				<Text style={[reusableStyles.text, styles.email_AD(colors.secondText)]}>
					Personalize Your Event Journey and Spot Discovery by Chossing Your
					Preferences
				</Text>

				<View style={{ flex: 1, marginVertical: 50 }}>
					<View style={styles.SP_Container}>
						{recommended.map((item) => (
							<Pressable
								key={item.value}
								onPress={() => handleSelect(item.value)}
								style={[
									styles.select_Pressable,
									{
										backgroundColor: themeColor.cont,
										borderColor: preference.includes(item.value)
											? themeColor.btn
											: themeColor.cont,
									},
								]}
							>
								{item.icon}
								<Text
									style={[
										reusableStyles.text,
										{
											color: preference.includes(item.value)
												? themeColor.btn
												: themeColor.text,
										},
									]}
								>
									{item.label}
								</Text>
							</Pressable>
						))}
					</View>
				</View>

				<Btn text={"Next"} onPress={() => handleNext()} />

				<View style={{ height: 20 }} />
			</View>
		</SafeAreaView>
	);
}

export default SelectPreferences;
