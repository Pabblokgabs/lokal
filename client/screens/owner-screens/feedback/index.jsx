import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ReusableStyles from "../../../components/reausable/reusableStyles";
import TopBar from "../../../components/topBar";
import AboutTile from "../../../components/tile/about.tile";
import ReportFeetback from "./report.modal";
import SuggestionFeetback from "./suggestion";

function SendFeedback() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [reportModal, setReportModal] = useState(false);
	const [suggestModal, setSuggestModal] = useState(false);

	return (
		<SafeAreaView>
			<ReportFeetback visible={reportModal} setVisible={setReportModal} />
			<SuggestionFeetback visible={suggestModal} setVisible={setSuggestModal} />
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<TopBar
					arrowName={"arrowleft"}
					text={"Feedback"}
					arrowOnPress={() => navigation.goBack()}
				/>
				<View style={{ height: 20 }} />
				<Text
					style={[
						ReusableStyles.header,
						{ color: themeColor.text, textAlign: "center" },
					]}
				>
					How can we help you?
				</Text>
				<Text
					style={[
						ReusableStyles.text,
						{ color: themeColor.text, textAlign: "center" },
					]}
				>
					Choose from the options below.
				</Text>
				<View style={{ height: 50 }} />
				<AboutTile
					backgroundColor={themeColor.secondaryBackground}
					iconname={"bug"}
					padding={15}
					title={"Report a problem"}
					value={"Encountered a problem? Found a bug? Let us know"}
					onPress={() => setReportModal(true)}
				/>

				<View style={{ height: 20 }} />

				<AboutTile
					backgroundColor={themeColor.secondaryBackground}
					iconname={"bulb"}
					padding={15}
					title={"Give a suggestion"}
					value={"Encountered a problem? Found a bug? Let us know,"}
					onPress={() => setSuggestModal(true)}
				/>
			</View>
		</SafeAreaView>
	);
}

export default SendFeedback;
