import {
	View,
	Text,
	ScrollView,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ReusableStyles from "../../components/reausable/reusableStyles";
import styles from "../../styleSheet/search";

function Search() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [options, setOptions] = useState("spot");
	const [value, setValue] = useState("");
	console.log(value);
	const [placeholder, setPlaceholder] = useState("Enter the spot name.");
	const option = ["spot", "event", "location"];

	const handlePlaceholder = (type) => {
		setOptions(type);
		switch (type) {
			case "spot":
				setPlaceholder("Enter the spot name.");
				break;
			case "event":
				setPlaceholder("Enter the event name.");
				break;
			case "location":
				setPlaceholder("Enter the location.");
				break;

			default:
				setPlaceholder("Enter the spot name.");
		}
	};

	return (
		<ScrollView
			style={[
				ReusableStyles.wrapper,
				{ backgroundColor: themeColor.background },
			]}
		>
			<View style={styles.searchWrapper}>
				<View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
					<AntDesign
						name="arrowleft"
						size={24}
						color={themeColor.icon}
						onPress={() => navigation.goBack()}
					/>
					<View
						style={[
							styles.searchContainer,
							{ backgroundColor: themeColor.secondaryBackground },
						]}
					>
						<TextInput
							placeholder={placeholder}
							style={[styles.textInput, { color: themeColor.text }]}
							value={value}
							onChangeText={setValue}
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
				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						gap: 20,
					}}
				>
					{option.map((item) => (
						<TouchableOpacity
							key={item}
							onPress={() => handlePlaceholder(item)}
							style={{
								paddingHorizontal: 10,
								paddingBottom: 10,
								borderBottomWidth: 0.5,
								flex: 1,
								flexDirection: "row",
								justifyContent: "center",
								borderBottomColor:
									options === item ? themeColor.btn : "transparent",
							}}
						>
							<Text style={{ color: themeColor.text }}>{item}</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>
		</ScrollView>
	);
}

export default Search;
