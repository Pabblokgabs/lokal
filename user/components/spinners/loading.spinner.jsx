import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import reusableStyles from "../reusable/styles";  // Make sure this path is correct

const LoadingSpinner = ({ text }) => {
  const themeColor = useTheme().colors;

  return (
    <View
      style={[
        reusableStyles.wrapper,
        {
          backgroundColor: themeColor.background,
          alignItems: "center",
          justifyContent: "center",
          flex: 1, // Ensures full-screen loading
        },
      ]}
    >
      
      <View style={{ height: 20 }} />
      
      {text && (
        <Text style={[reusableStyles.text, { color: themeColor.text }]}>
          {text}
        </Text>
      )}
    </View>
  );
};

export default LoadingSpinner;
