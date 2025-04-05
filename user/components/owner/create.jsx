import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import reusableStyles from "../reusable/styles";

const CreateTile = ({
	title,
	isArrow,
	placeholder,
	value,
	onChangeText,
	secureTextEntry,
	keyboardType,
	editable,
}) => {
	const themeColor = useTheme().colors;

	return (
		<View
			style={{
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				gap: 20,
				borderBottomWidth: 1,
				borderBottomColor: themeColor.border,
				paddingVertical: 15,
			}}
		>
			<View
				style={{
					gap: 5,
				}}
			>
				<Text style={[reusableStyles.header, { color: themeColor.text }]}>
					{title}
				</Text>

				<TextInput
					placeholder={placeholder}
					value={value}
					onChangeText={onChangeText}
					secureTextEntry={secureTextEntry}
					keyboardType={keyboardType ? keyboardType : "default"}
					style={[
						styles.textInput,
						{
							flex: 1,
							color: themeColor.secondText,
						},
					]}
					underlineColorAndroid="transparent"
					editable={editable}
				/>
			</View>
			{isArrow && (
				<AntDesign name="arrowright" size={24} color={themeColor.icon} />
			)}
		</View>
	);
};

export default CreateTile;

const styles = StyleSheet.create({
	textInput: {
		borderColor: "transparent",
		borderWidth: 0,
		outlineStyle: "none",
		shadowColor: "transparent",
		fontSize: 14,
		width: "100%",
		backgroundColor: "transparent",
		alignItems: "center",
	},
});
