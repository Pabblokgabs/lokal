/* import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";

const CustomPicker = ({ selectedValue, onValueChange, items, placeholder }) => {
	const themeColor = useTheme().colors;
	const backgroundColor = themeColor.secondBg;
	const color = themeColor.secondText;

	return (
		<View style={styles.container}>
			<RNPickerSelect
				onValueChange={onValueChange}
				items={items}
				placeholder={placeholder}
				value={selectedValue}
				style={[{backgroundColor: themeColor.bg},
					{
						inputAndroid: styles.input, // Android picker styles
						inputIOS: styles.input, // iOS picker styles
						iconContainer: styles.iconContainer,
						inputWeb: styles.input,
					},
				]}
				useNativeAndroidPickerStyle={false} // Prevent Android's native picker styles (force modal)
				doneText="Done"
				cancelText="Cancel"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 16,
	},
	input: {
		height: "100%",
		width: "100%",
		borderWidth: 1,
		borderColor: "transparent",
		borderRadius: 5,
		paddingLeft: 10,
		fontSize: 16, // Font size
	},
	iconContainer: {
		top: 10,
		right: 12,
	},
});

export default CustomPicker; */

import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";

const CustomPicker = ({ selectedValue, onValueChange, items, placeholder }) => {
	const themeColor = useTheme().colors;
	return (
		<RNPickerSelect
			onValueChange={onValueChange}
			items={items}
			placeholder={placeholder}
			value={selectedValue}
			style={{
				inputAndroid: {
					...styles.input(themeColor.secondBg, themeColor.secondText),
					underlineColorAndroid: "transparent",
				},
				inputIOS: styles.input,
				iconContainer: styles.iconContainer,
				inputWeb: {
					...styles.input(themeColor.bg, themeColor.secondText),
					boxShadow: "none",
				},
			}}
			useNativeAndroidPickerStyle={false}
			doneText="Done"
			cancelText="Cancel"
			modalViewStyle={styles.modal}
			modalProps={{ animationType: "slide" }}
		/>
	);
};

const styles = StyleSheet.create({
	input: (backgroundColor, color) => ({
		height: "100%",
		width: "100%",
		borderWidth: 1,
		borderColor: backgroundColor,
		backgroundColor: backgroundColor,
		color: color,
		fontSize: 16,
		underlineColorAndroid: "transparent",
		boxShadow: "none",
		outlineStyle: "none",
		shadowColor: "transparent",
	}),
	iconContainer: {
		top: 10,
		right: 12,
	},
	modal: {
		backgroundColor: "white",
		padding: 10,
		borderRadius: 10,
	},
});

export default CustomPicker;
