import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import ReusableStyles from "../../../components/reausable/reusableStyles";

function Manage() {
	const themeColor = useTheme().colors;

	return (
		<SafeAreaView>
			<ScrollView
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
			</ScrollView>
		</SafeAreaView>
	);
}

export default Manage;
