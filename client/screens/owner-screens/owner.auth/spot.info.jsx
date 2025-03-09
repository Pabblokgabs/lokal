import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ReusableStyles from "../../../components/reausable/reusableStyles";
import TopBar from "../../../components/topBar";
import ReusableTextInputContainer from "../../../components/reausable/ReusableTextInputContainer";
import ReusableBtn from "../../../components/reausable/ReusableBtn";

function SpotInformation() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const handleNext = () => {
		navigation.navigate("spot-photos")
	}
	return (
		<View
			style={[
				ReusableStyles.wrapper,
				{ backgroundColor: themeColor.background },
			]}
		>
			<TopBar
				arrowName={"arrowleft"}
				arrowOnPress={() => navigation.navigate("personal-information")}
			/>
			<ScrollView style={ReusableStyles.container}>
				<Text style={[ReusableStyles.header, { color: themeColor.text }]}>
					Spot Information
				</Text>

				<View style={{ height: 5 }} />

				<Text
					style={[ReusableStyles.text, { color: themeColor.secondaryText }]}
				>
					Fill the form with the information about your spot. Make sure the
					information you provide is valid and accurate.
				</Text>

				<View style={{ height: 15 }} />

        <ReusableTextInputContainer
					inputHint={"Spot name"}
					borderColor={themeColor.borderColor}
					placeholder={"Enter the spot name"}
					backgroundColor={themeColor.secondaryBackground}
					value={""}
					onChangeText={(text) => {}}
					width={"100%"}
					secureTextEntry={false}
					color={themeColor.text}
				/>

				<View style={{ height: 10 }} />

        <ReusableTextInputContainer
					inputHint={"Country"}
					borderColor={themeColor.borderColor}
					placeholder={"Enter the coutry"}
					backgroundColor={themeColor.secondaryBackground}
					value={""}
					onChangeText={(text) => {}}
					width={"100%"}
					secureTextEntry={false}
					color={themeColor.text}
				/>

				<View style={{ height: 10 }} />

        <ReusableTextInputContainer
					inputHint={"City"}
					borderColor={themeColor.borderColor}
					placeholder={"Enter the city"}
					backgroundColor={themeColor.secondaryBackground}
					value={""}
					onChangeText={(text) => {}}
					width={"100%"}
					secureTextEntry={false}
					color={themeColor.text}
				/>

				<View style={{ height: 10 }} />

        <ReusableTextInputContainer
					inputHint={"Address"}
					borderColor={themeColor.borderColor}
					placeholder={"Enter the spot's address"}
					backgroundColor={themeColor.secondaryBackground}
					value={""}
					onChangeText={(text) => {}}
					width={"100%"}
					secureTextEntry={false}
					color={themeColor.text}
				/>

				<View style={{ height: 10 }} />

        <ReusableTextInputContainer
					inputHint={"Spot name"}
					borderColor={themeColor.borderColor}
					placeholder={"Enter the spot name"}
					backgroundColor={themeColor.secondaryBackground}
					value={""}
					onChangeText={(text) => {}}
					width={"100%"}
					secureTextEntry={false}
					color={themeColor.text}
				/>

				<View style={{ height: 20 }} />

					<ReusableBtn
						width={"100%"}
						btnText={"Next"}
						onPress={() => handleNext()}
						backgroundColor={themeColor.btn}
						borderColor={themeColor.btn}
					/>
			</ScrollView>
		</View>
	);
}

export default SpotInformation;
