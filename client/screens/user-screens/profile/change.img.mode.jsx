import { View, Text, Modal, Pressable } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import styles from "../../../styleSheet/profile.styles";
import TopBar from "../../../components/topBar";

function ChangeImgModel({ visible, setVisible }) {
	const themeColor = useTheme().colors;

	return (
		<Modal visible={visible} animationType="fade" transparent={true}>
			<View style={styles.changeProfileWrapper}>
				<Pressable
					onPress={() => setVisible(false)}
					style={[
						styles.changeProfileContainerPressable,
						{ backgroundColor: themeColor.background },
					]}
				/>
				<View
					style={[
						styles.changeProfileContainer,
						{ backgroundColor: themeColor.secondaryBackground },
					]}
				>
					<TopBar
						text={"Change Profile Photo"}
						arrowName={"close"}
						textAlign={"center"}
						backgroundColor={themeColor.secondaryBackground}
						arrowOnPress={() => setVisible(false)}
					/>
				</View>
			</View>
		</Modal>
	);
}

export default ChangeImgModel;
