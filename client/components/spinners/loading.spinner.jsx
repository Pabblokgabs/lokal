import { Text, View } from "react-native";
import React from "react";
import { HashLoader } from "react-spinners";
import reusableStyles from "../reusable/styles";
import { useTheme } from "react-native-paper";

const LoadingSpinner = ({ height, width, text }) => {
	const themeColor = useTheme().colors;

	return (
		<View
			style={[
				reusableStyles.wrapper,
				{
					backgroundColor: themeColor.background,
					alignItems: "center",
					justifyContent: "center",
				},
			]}
		>
			<HashLoader
				loading={true}
				color={themeColor.btn}
				height={height || 150}
				width={width || 150}
			/>

			<View style={{ height: 20 }} />

			<Text style={[reusableStyles.text, { color: themeColor.text }]}>
				{text}
			</Text>
		</View>
	);
};

export default LoadingSpinner;
