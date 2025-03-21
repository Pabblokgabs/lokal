import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import reusableStyles from "../reusable/styles";
import Btn from "../btn";

function LogoutCom({isVisible, onContinue}) {
	const themeColor = useTheme().colors;

	return (
		<View
			style={{
				padding: 15,
				marginTop: 20,
				flex: 1,
				width: "100%",
			}}
		>
			<View style={{ flex: 1 }}>
				<Text style={[reusableStyles.lgHeader, { color: themeColor.text, textAlign: 'center' }]}>
					Logout
				</Text>

				<View
					style={{
						height: 2,
						backgroundColor: themeColor.border,
						marginVertical: 20,
					}}
				/>

				<Text style={[reusableStyles.text, { color: themeColor.secondText, textAlign: 'center' }]}>
					Are you sure you want to log out?
				</Text>

				<View style={{height: 30}}/>

			</View>
			<View style={{ flexDirection: "row", gap: 10, alignItems: "center", justifyContent: 'space-between' }}>
				<Btn backgroundColor={themeColor.btn} text={"Cancel"} width={"49%"} onPress={() => isVisible(false)}/>
				<Btn backgroundColor={themeColor.btn} text={"Logout"} width={"49%"} onPress={onContinue} />
			</View>
		</View>
	);
}

export default LogoutCom;
