import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Pressable,
	Modal,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
	AntDesign,
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
} from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import reusableStyles from "./styles";

const TextInputContainer = ({
	children,
	iconSize,
	inputHint,
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
	A_icon,
	I_icon,
	MC_icon,
	M_icon,
	height,
	multiline,
	inputHintColor,
	isClose,
	onClosePress,
	autoFocus,
	fontSize,
	isHint,
	hintValue,
}) => {
	const theme = useTheme();
	const themeColor = theme.colors;

	const textInputRef = useRef(null);

	useEffect(() => {
		if (autoFocus && textInputRef.current) {
			textInputRef.current.focus();
		}
	}, [autoFocus]);

	const [hintModal, setHintModal] = useState(false);

	return (
		<View
			style={{ width: "100%", flexDirection: "column", gap: inputHint && 10 }}
		>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: justifyContent ? justifyContent : "flex-start",
					width: "100%",
					alignItems: "center",
				}}
			>
				<Text
					style={[
						reusableStyles.text,
						{
							color: inputHintColor ? inputHintColor : themeColor.text,
							fontWeight: "500",
						},
					]}
				>
					{inputHint}
				</Text>

				{isHint && (
					<TouchableOpacity onPress={() => setHintModal(!hintModal)}>
						<Ionicons
							size={18}
							color={themeColor.secondText}
							name="help-circle-outline"
						/>
					</TouchableOpacity>
				)}

				{hintModal && (
					<>
						<Modal
							animationType="fade"
							transparent={true}
							visible={hintModal}
							onRequestClose={() => setHintModal(false)}
						>
							<Pressable
								style={[
									reusableStyles.screenHeight,
									reusableStyles.screenWidth,
									{
										flex: 1,
										width: "100%",
									},
								]}
								onPress={() => setHintModal(!hintModal)}
							/>
						</Modal>
						<View
							style={{
								position: "absolute",
								right: 25,
								bottom: 20,
							}}
						>
							<View
								style={{
									backgroundColor: themeColor.secondBg,
									width: 180,
									padding: 15,
									borderRadius: 10,
									shadowOffset: {
										width: 0,
										height: 2,
									},
									shadowOpacity: 0.25,
									shadowRadius: 4,
									elevation: 5,
								}}
							>
								<Text
									style={[
										reusableStyles.text,
										{ color: themeColor.text, fontWeight: "500" },
									]}
								>
									{hintValue}
								</Text>
							</View>
						</View>
					</>
				)}
			</View>
			<View
				style={{
					backgroundColor: backgroundColor ? backgroundColor : "transparent",
					padding: multiline ? 10 : 0,
					paddingHorizontal: 10,
					height: height ? height : 50,
					borderWidth: 1,
					borderColor: borderColor ? borderColor : themeColor.border,
					borderRadius: 10,
					flexDirection: "row",
					alignItems: multiline ? "flex-start" : "center",
					gap: 10,
				}}
			>
				{A_icon ? (
					<AntDesign
						name={A_icon}
						size={iconSize ? iconSize : 24}
						color={iconColor ? iconColor : themeColor.icon}
					/>
				) : I_icon ? (
					<Ionicons
						name={I_icon}
						size={iconSize ? iconSize : 24}
						color={iconColor ? iconColor : themeColor.icon}
					/>
				) : M_icon ? (
					<MaterialIcons
						name={M_icon}
						size={iconSize ? iconSize : 24}
						color={iconColor ? iconColor : themeColor.icon}
					/>
				) : MC_icon ? (
					<MaterialCommunityIcons
						name={MC_icon}
						size={iconSize ? iconSize : 24}
						color={iconColor ? iconColor : themeColor.icon}
					/>
				) : (
					<></>
				)}

				{children ? (
					children
				) : (
					<TextInput
						ref={textInputRef}
						autoFocus={autoFocus}
						multiline={multiline}
						placeholder={placeholder}
						value={value}
						onChangeText={onChangeText}
						secureTextEntry={secureTextEntry}
						keyboardType={KeyboardType ? KeyboardType : "default"}
						style={[
							styles.textInput(
								width,
								opacity,
								color ? color : themeColor.secondText,
								fontSize
							),
							{
								height: multiline && "100%",
								flex: 1,
							},
						]}
						underlineColorAndroid="transparent"
						editable={editable}
					/>
				)}

				{isClose && (
					<TouchableOpacity
						onPress={onClosePress}
						style={{
							marginLeft: 15,
							padding: 2,
							borderRadius: "50%",
							borderWidth: 1,
							borderColor: themeColor.btn,
						}}
					>
						<AntDesign name="close" size={18} color={themeColor.btn} />
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default TextInputContainer;

const styles = StyleSheet.create({
	textInput: (width, opacity, color, fontSize) => ({
		borderColor: "transparent",
		borderWidth: 0,
		outlineStyle: "none",
		shadowColor: "transparent",
		fontSize: fontSize ? fontSize : 16,
		marginBottom: fontSize ? 0 : 5,
		width: width ? width : "100%",
		color: color,
		backgroundColor: "transparent",
		alignItems: "center",
		opacity: opacity ? opacity : 1,
	}),
});
