import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../../components/topBar";
import ReusableBtn from "../../../components/reausable/ReusableBtn";
import ReusableStyles from "../../../components/reausable/reusableStyles";

function FinalStage() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const handleSubmit = () => {};

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
						fontSize: 25,
						fontWeight: 400,
						color: themeColor.text,
						fontFamily: "Roboto",
						marginBottom: 30,
					}}
				>
					You are all set for registration!
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

export default FinalStage;
