import { Text, View, Modal, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import ReusableStyles from "../reausable/reusableStyles";
import AppBar from "../appBar";

function ViewFollowing({ visible, setVisible }) {
	const themeColor = useTheme().colors;

	return (
		<Modal visible={visible} animationType="slide" transparent={false}>
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<View>
					<AppBar
						title={"Following"}
						size={24}
						onPress1={() => setVisible(false)}
					/>
				</View>
				<ScrollView style={{ flex: 1 }}></ScrollView>
			</View>
		</Modal>
	);
}

export default ViewFollowing;
