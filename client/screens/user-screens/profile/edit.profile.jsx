import { Text, View, Modal, ScrollView } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import ReusableStyles from "../../components/reausable/reusableStyles";
import TopBar from "../../components/topBar";
import ReusableTextInputContainer from "../../components/reausable/ReusableTextInputContainer";

function EditProfile({ visible, setVisible }) {
	const themeColor = useTheme().colors;

	return (
		<Modal visible={visible} animationType="fade" transparent={false}>
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<TopBar arrowName={"arrowleft"} arrowOnPress={() => setVisible(false)} />
				<View style={ReusableStyles.container}>
					<ReusableTextInputContainer />
				</View>
			</View>
		</Modal>
	);
}

export default EditProfile;
