
import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";

const CustomPicker = ({ selectedValue, onValueChange, items, placeholder }) => {
  const themeColor = useTheme().colors;

  const inputStyle = {
    height: "100%",
		width: "100%",
		borderWidth: 0,
    backgroundColor: themeColor.bg,
    color: themeColor.secondText,
    fontSize: 16,
    paddingLeft: 10,
		underlineColorAndroid: "transparent",
		boxShadow: "none",
		outlineStyle: "none",
		shadowColor: "transparent",
  };

  return (
    <RNPickerSelect
      onValueChange={onValueChange}
      items={items}
      placeholder={placeholder}
      value={selectedValue}
      style={{
        inputAndroid: {
          ...inputStyle,
          underlineColorAndroid: "transparent",
        },
        inputIOS: {
          ...inputStyle,
        },
        inputWeb: {
          ...inputStyle,
          boxShadow: "none",
        },
        iconContainer: styles.iconContainer,
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

