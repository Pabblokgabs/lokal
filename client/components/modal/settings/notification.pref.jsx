import { View, Text, Modal } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import ReusableStyles from "../../reausable/reusableStyles";
import TopBar from "../../topBar";

function NotificationPreference({ visible, setVisible }) {
	const themeColor = useTheme().colors;

	return (
		<Modal animationType="fade" transparent={false} visible={visible}>
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<TopBar
					arrowName={"arrowleft"}
					arrowOnPress={() => setVisible(false)}
					text={"Notification"}
					textAlign={"start"}
				/>
        <View style={ReusableStyles.container} >

        </View>
			</View>
		</Modal>
	);
}

export default NotificationPreference;
