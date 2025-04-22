import { View, Text } from "react-native";
import React from "react";
import { Switch, useTheme } from "react-native-paper";
import reusableStyles from "./reusable/styles";

const NotificationTile = ({ isEnabled, toggleSwitch, title, text }) => {
	const { colors } = useTheme();

	return (
		<View style={{ gap: 10, flex: 1, width: "100%" }}>
			<Text style={[reusableStyles.header, { color: colors.text }]}>
				{title}
			</Text>
			<View style={{ flexDirection: "row", gap: 20, flex: 1, width: "100%" }}>
				<Text style={[reusableStyles.text, { color: colors.secondText }]}>
					{text}
				</Text>

				<Switch
					value={isEnabled}
					onValueChange={toggleSwitch}
					color={colors.link}
					thumbColor={"red"}
					trackColor={{ false: colors.cont, true: colors.link }}
				/>
			</View>
		</View>
	);
};

export default NotificationTile;
