import {
	View,
	Text,
	ScrollView,
	Pressable,
	TouchableOpacity,
	Modal,
	FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../../components/topBar";
import { useTheme } from "react-native-paper";
import ReusableStyles from "../../components/reausable/reusableStyles";
import { spot } from "../../lib/dommyData";
import ReusableTile from "../../components/reausable/Reusable.tile";

function Filter() {
	const navigation = useNavigation();
	const themeColor = useTheme().colors;
	const x = useRoute().params?.label;

	const options = [
		"All",
		"Foodie",
		"Wellness",
		"Creative",
		"Bar",
		"Restaurant",
		"Clubs",
		"Religion",
		"Sport",
	];

	const [initOption, setInitOption] = useState("All");

	useEffect(() => {
		if (x) {
			setInitOption(x);
		}
	}, []);

	const [selectModalVisible, setSelectModalVisible] = useState(false);

	const handleFilter = (value) => {
		setInitOption(value);
	};

	return (
		<SafeAreaView>
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<TopBar
					arrowName={"arrowleft"}
					arrowOnPress={() => navigation.goBack()}
					name2={"ellipsis-vertical"}
					onPress2={() => setSelectModalVisible(!selectModalVisible)}
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
								Edit My Preference
							</Text>
						</TouchableOpacity>
					</View>
				</Modal>
				<View>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						{options.map((item) => (
							<Pressable
								onPress={() => handleFilter(item)}
								key={item}
								style={{
									paddingHorizontal: 15,
									paddingVertical: 10,
									borderWidth: 1,
									marginRight: 10,
									marginVertical: 15,
									borderRadius: 10,
									borderColor:
										item === initOption
											? themeColor.btn
											: themeColor.borderColor,
									flexDirection: "row",
									alignItems: "center",
									backgroundColor:
										item === initOption ? themeColor.btn : "transparent",
								}}
							>
								<Text
									style={{
										color: item === initOption ? "white" : themeColor.text,
										fontSize: 15,
									}}
								>
									{item}
								</Text>
							</Pressable>
						))}
					</ScrollView>
				</View>
				<View style={{ marginTop: 20 }}>
					<FlatList
						data={spot}
						keyExtractor={(item) => item.ownerId}
						showsVerticalScrollIndicator={false}
						renderItem={(item) => (
							<View style={{ marginBottom: 15, width: "100%" }}>
								<ReusableTile
									data={item}
									onPress={() => navigation.navigate("spot-details", { item })}
								/>
							</View>
						)}
					/>
				</View>
				<View style={{ height: 50 }} />
			</View>
		</SafeAreaView>
	);
}

export default Filter;
