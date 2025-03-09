import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import { TEXT } from "../../constance/sizes";

const ReusableTextInputContainer = ({
	children,
	iconSize,
	inputHint,
	iconName,
	iconColor,
	backgroundColor,
	borderColor,
	justifyContent,
	placeholder,
	value,
	onChangeText,
	secureTextEntry,
	KeyboardType,
	width,
	color,
	editable,
	opacity,
}) => {
	const theme = useTheme();
	const themeColor = theme.colors;

	return (
		<View style={{ width: "100%", flexDirection: "column", gap: 10 }}>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: justifyContent ? justifyContent : "flex-start",
					width: "100%",
				}}
			>
				<Text
					style={{
						color: themeColor.text,
						fontWeight: "500",
						fontSize: TEXT.medium,
					}}
				>
					{inputHint}
				</Text>
			</View>
			<View
				style={{
					backgroundColor: backgroundColor ? backgroundColor : "transparent",
					padding: 10,
					borderWidth: 1,
					borderColor: borderColor,
					borderRadius: 5,
					flexDirection: "row",
				}}
			>
				<MaterialCommunityIcons
					name={iconName}
					size={iconSize ? iconSize : 24}
					color={iconColor ? iconColor : themeColor.icon}
					style={{ marginRight: 10 }}
				/>
				{children ? (
					children
				) : (
					<TextInput
						placeholder={placeholder}
						value={value}
						onChangeText={onChangeText}
						secureTextEntry={secureTextEntry}
						keyboardType={KeyboardType ? KeyboardType : "default"}
						style={styles.textInput(
							width,
							opacity,
							color ? color : themeColor.secondaryText
						)}
						underlineColorAndroid="transparent"
						editable={editable}
					/>
				)}
			</View>
		</View>
	);
};

export default ReusableTextInputContainer;

const styles = StyleSheet.create({
	textInput: (width, opacity, color) => ({
		borderColor: "transparent",
		borderWidth: 0,
		outlineStyle: "none",
		shadowColor: "transparent",
		fontSize: TEXT.medium,
		width: width ? width : "100%",
		color: color,
		backgroundColor: "transparent",
		alignItems: "center",
		opacity: opacity ? opacity : 1,
	}),
});
