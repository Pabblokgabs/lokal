import React from "react";
import { Picker } from "@react-native-picker/picker";
import { useTheme } from "react-native-paper";
import { TEXT } from "../constance/sizes";

const PickerComponent = ({ items, selectedValue, onValueChange }) => {
	const themeColor = useTheme().colors;

	return (
		<Picker
			selectedValue={selectedValue}
			onValueChange={onValueChange}
			style={{
				width: "100%",
				height: "100%",
				backgroundColor: "transparent",
				color: themeColor.secondaryText,
				borderColor: "transparent",
				borderRadius: 0,
				borderWidth: 0,
				fontSize: TEXT.medium / 1.1,
				outlineStyle: "none",
				shadowColor: "transparent",
			}}
		>
			{items.map((item, index) => (
				<Picker.Item label={item.label} value={item.value} key={index} />
			))}
		</Picker>
	);
};

export default PickerComponent;
