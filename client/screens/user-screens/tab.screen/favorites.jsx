import {
	View,
	Text,
	SafeAreaView,
	TextInput,
	ScrollView,
	FlatList,
	Modal,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "react-native-paper";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import styles from "../../../styleSheet/favorites.styles";
import TopBar from "../../../components/topBar";
import Notification from "../../../components/modal/notification.model";
import ReusableStyles from "../../../components/reausable/reusableStyles";
import { event } from "../../../lib/dommyData";
import SpotPostTile from "../../../components/reausable/spot.post.tile";

const Favorites = () => {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [notificationVisible, setNotificationVisible] = useState(false);

	const [input, setInput] = useState("");
	console.log(input);
	const handleSearch = (text) => {
		setInput(text);
	};

	/* sort modal logic */
	const [selectedSort, setSelectedSort] = useState("all");
	const [selectModalVisible, setSelectModalVisible] = useState(false);
	const sortOptions = ["All", "Upcoming", "Expired"];
	const handleSortChange = (itemValue) => {
		setSelectedSort(itemValue.toLowerCase());
		console.log(`Sorted by: ${itemValue}`);
		setSelectModalVisible(false);
	};
	return (
		<SafeAreaView>
			<Notification
				visible={notificationVisible}
				setVisible={setNotificationVisible}
			/>
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<TopBar
					name1={"notifications-outline"}
					name3={"ellipsis-vertical"}
					onPress3={() => setSelectModalVisible(!selectModalVisible)}
					onPress1={() => setNotificationVisible(true)}
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
							styles.modalView,
							{ backgroundColor: themeColor.secondaryBackground },
						]}
					>
						<Text style={[styles.modalTitle, { color: themeColor.text }]}>
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
										styles.modalText,
										{ color: themeColor.secondaryText },
									]}
								>
									{item}
								</Text>
							</TouchableOpacity>
						))}
					</View>
				</Modal>

				<View
					style={{
						backgroundColor: themeColor.secondaryBackground,
						paddingHorizontal: 10,
						paddingVertical: 15,
						borderRadius: 40,
						flexDirection: "row",
						alignItems: "center",
						gap: 10,
					}}
				>
					<TextInput
						value={input}
						onChangeText={(text) => handleSearch(text)}
						placeholder="Search By Name."
						underlineColorAndroid="transparent"
						style={{
							borderColor: "transparent",
							borderWidth: 0,
							outlineStyle: "none",
							shadowColor: "transparent",
							fontSize: 15,
							width: "100%",
							color: themeColor.secondaryText,
							backgroundColor: "transparent",
							alignItems: "center",
						}}
					/>
					<AntDesign name="search1" size={30} color={themeColor.icon} />
				</View>
				<View style={{ height: 20 }} />
				<ScrollView showsVerticalScrollIndicator={false}>
					<FlatList
						data={event}
						keyExtractor={(item) => item.spotId}
						showsVerticalScrollIndicator={false}
						renderItem={(item) => (
							<View style={{ marginBottom: 15 }}>
								<SpotPostTile data={item} />
							</View>
						)}
					/>
					<View style={{ height: 100 }} />
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default Favorites;
