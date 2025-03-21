import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../../components/reusable/styles";
import TopBar from "../../../components/topBar";
import AboutTile from "../../../components/about.tile";
import { Report, Suggestion } from "./feetback.type";

function Feedback() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [suggestModal, setSuggestModal] = useState(false)
	const [reportModal, setReportModal] = useState(false)

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
			<Report visible={reportModal} setVisible={setReportModal} />
			<Suggestion visible={suggestModal} setVisible={setSuggestModal} />

			<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
				<TopBar
					title={"Send Feedback"}
					isArrow={true}
					arrowPress={() => navigation.goBack()}
					py={10}
				/>
				<ScrollView>
					<View style={{ height: 20 }} />

					<Text
						style={[
							reusableStyles.lgHeader,
							{ color: themeColor.text, textAlign: "center" },
						]}
					>
						How can we help you?
					</Text>

					<View style={{ height: 20 }} />

					<AboutTile
						backgroundColor={themeColor.secondBg}
						iconname={"bug"}
						padding={15}
						title={"Report a problem"}
						value={"Encountered a problem? Found a bug? Let us know"}
						onPress={() => setReportModal(true)}
					/>

					<View style={{ height: 20 }} />

					<AboutTile
						backgroundColor={themeColor.secondBg}
						iconname={"bulb"}
						padding={15}
						title={"Give a suggestion"}
						value={"Encountered a problem? Found a bug? Let us know,"}
						onPress={() => setSuggestModal(true)}
					/>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

export default Feedback;
