import { View, Text } from "react-native";
import React from "react";
/* import MapView, { PROVIDER_GOOGLE } from "react-native-maps"; */
import reusableStyles from "../../../components/reusable/styles";
import { useTheme } from "react-native-paper";

export default function Explore() {
	const themeColor = useTheme().colors

	return (
		<View style={reusableStyles.wrapper}>
			<View style={{flex: 1, backgroundColor: themeColor.bg}}/>
			{/* <MapView
				provider={PROVIDER_GOOGLE}
				style={{ flex: 1 }}
				initialRegion={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			/> */}
		</View>
	);
}
