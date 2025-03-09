import { Text, View, Modal, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import ReusableStyles from "../reausable/reusableStyles";
import TopBar from "../topBar";
import { MaterialIcons } from "@expo/vector-icons";

function Notification({ visible, setVisible }) {
	const themeColor = useTheme().colors;

	/* sort modal logic */
	const [selectedSort, setSelectedSort] = useState("all");
	const [selectModalVisible, setSelectModalVisible] = useState(false);
	const sortOptions = ["All", "Read", "Unread"];
	const handleSortChange = (itemValue) => {
		setSelectedSort(itemValue.toLowerCase());
		console.log(`Sorted by: ${itemValue}`);
		setSelectModalVisible(false);
	};

	return (
		<Modal visible={visible} animationType="slide" transparent={false}>
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<TopBar
					arrowName={"arrowleft"}
					text={"Notifications"}
					name3={"sort"}
					onPress3={() => setSelectModalVisible(!selectModalVisible)}
					arrowOnPress={() => setVisible(false)}
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
							{ backgroundColor: themeColor.secondaryBackground, width: 130 },
						]}
					>
						<Text style={[ReusableStyles.modalTitle, { color: themeColor.text }]}>
							Sort by:
						</Text>
						{sortOptions.map((item, index) => (
							<TouchableOpacity
								key={index}
								onPress={() => handleSortChange(item)}
								style={{ alignItems: "center", flexDirection: "row", gap: 5 }}
							>
								<View
									style={{
										width: 10,
										alignItems: "center",
										justifyContent: "center",
										marginRight: 5,
									}}
								>
									{selectedSort === item.toLowerCase() && (
										<MaterialIcons
											name="check"
											size={20}
											color={themeColor.btn}
										/>
									)}
								</View>
								<Text
									style={[
										ReusableStyles.modalText,
										{ color: themeColor.secondaryText },
									]}
								>
									{item}
								</Text>
							</TouchableOpacity>
						))}
					</View>
				</Modal>

				<ScrollView style={ReusableStyles.container}>
					<Text>hey</Text>
				</ScrollView>
			</View>
		</Modal>
	);
}

export default Notification;
