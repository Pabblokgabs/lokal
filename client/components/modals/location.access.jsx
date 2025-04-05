import { View, Text } from "react-native";
import React from "react";
import reusableStyles from "../reusable/styles";
import { useTheme } from "react-native-paper";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import Btn from "../btn";

const LocationAccess = ({ visible, setVisible }) => {
	const themeColor = useTheme().colors;
	

	return (
		<Modal
			isVisible={visible}
			animationIn="tada"
			animationOut="tada"
			style={{ margin: 0 }}
		>
			<View
				style={[
					reusableStyles.wrapper,
					{
						backgroundColor: themeColor.bg,
						paddingHorizontal: 15,
						alignItems: "center",
						justifyContent: "center",
					},
				]}
			>
				<View
					style={{
						padding: 20,
						borderRadius: "50%",
						backgroundColor: themeColor.cont,
					}}
				>
					<Ionicons name="location" size={80} color={themeColor.btn} />
				</View>

				<View style={{ height: 30 }} />

				<Text style={[reusableStyles.lgHeader, { color: themeColor.text }]}>
					What Is Your Location?
				</Text>

				<View style={{ height: 10 }} />

				<Text
					style={[
						reusableStyles.text,
						{ color: themeColor.secondText, textAlign: "center" },
					]}
				>
					For Directions and Verification. Share You Location with Us.
				</Text>

				<View style={{ height: 30 }} />

				<Btn text={"Allow Location Access"} width={"100%"} />
			</View>
		</Modal>
	);
};

export default LocationAccess;
