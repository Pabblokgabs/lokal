import { View, Text, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import ReusableStyles from "./reausable/reusableStyles";
import TopBar from "./topBar";

export default function Contact({ setVisible, visible }) {
	const themeColor = useTheme().colors;

	const [selectModalVisible, setSelectModalVisible] = useState(false);

	return (
		<Modal visible={visible} animationType="none" transparent={false}>
			<SafeAreaView>
				<View
					style={[
						ReusableStyles.wrapper,
						{ backgroundColor: themeColor.background },
					]}
				>
					<TopBar
						arrowName={"arrowleft"}
						arrowOnPress={() => setVisible(false)}
						text={"Contact us"}
						name3={"ellipsis-vertical"}
						onPress3={() => setSelectModalVisible(!selectModalVisible)}
					/>

					<Modal
						animationType="fade"
						transparent={true}
						visible={selectModalVisible}
						onRequestClose={() => selectModalVisible(false)}
					>
						<TouchableOpacity
							style={{ flex: 1, width: "100%" }}
							onPress={() => setSelectModalVisible(false)}
						/>
						<View
							style={[
								ReusableStyles.modalView,
								{ backgroundColor: themeColor.secondaryBackground, width: 200 },
							]}
						>
							<TouchableOpacity>
								<Text
									style={[ReusableStyles.modalText, { color: themeColor.text }]}
								>
									Send by Email
								</Text>
							</TouchableOpacity>
						</View>
					</Modal>
				</View>
			</SafeAreaView>
		</Modal>
	);
}
