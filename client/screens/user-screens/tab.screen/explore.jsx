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
import { Ionicons } from "@expo/vector-icons";
import styles from "../../../styleSheet/explore.styles";
import ReusableStyles from "../../../components/reausable/reusableStyles";

function Explore() {
	const themeColor = useTheme().colors;

	const [searchValue, setSearchValue] = useState("");

	return (
		<SafeAreaView>
			<ScrollView
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<View
					style={[
						styles.searchContainer,
						{ backgroundColor: themeColor.secondaryBackground },
					]}
				>
					<TextInput
						placeholder="Search by event or spot name..."
						style={[styles.textInput, { color: themeColor.text }]}
						value={searchValue}
						onChangeText={setSearchValue}
					/>
					<TouchableOpacity
						style={[
							styles.btn,
							{
								backgroundColor: themeColor.btn,
							},
						]}
					>
						<Ionicons name="search-outline" size={20} color={"white"} />
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default Explore;
