import React, { useState, useEffect, useRef } from "react";
import {
	View,
	Text,
	Pressable,
	VirtualizedList,
	TouchableOpacity,
	Modal,
	ScrollView,
} from "react-native";
import { useTheme } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import TopBar from "../../components/topBar";
import reusableStyles from "../../components/reusable/styles";
import { recommended } from "../../lib/options";

function Preference() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();
	const route = useRoute();
	const item = route.params?.item;

	const [selected, setSelected] = useState("All");
	const [editModalVisible, setEditModalVisible] = useState(false);
	const [itemWidth, setItemWidth] = useState(0);

	const listRef = useRef(null);

	const pref = ["All", ...recommended.map((item) => item.label)];

	const handleLayout = (e) => {
		const width = e.nativeEvent.layout.width;
		const paddingHorizontal = 20;
		const borderWidth = 1;
		const totalWidth = width + 2 * paddingHorizontal + borderWidth;
		setItemWidth(totalWidth);
	};

	useEffect(() => {
		if (item) {
			setSelected(item.label);
		}
	}, [item]);

	useEffect(() => {
		if (selected && itemWidth > 0 && listRef.current) {
			const index = pref.findIndex((prefItem) => prefItem === selected);

			if (index !== -1) {
				listRef.current.scrollToIndex({
					index,
					animated: true,
					viewPosition: 0.5,
				});
			}
		}
	}, [selected, itemWidth]);

	return (
		<View style={{ flex: 1 }}>
			<View
				style={{ paddingHorizontal: 15, backgroundColor: themeColor.secondBg }}
			>
				<View style={{ height: 10 }} />
				<TopBar
					isArrow={true}
					title={"Preference"}
					I_icon={"ellipsis-vertical"}
					arrowPress={() => navigation.goBack()}
					I_press={() => setEditModalVisible(true)}
				/>

				<Modal
					animationType="fade"
					transparent={true}
					visible={editModalVisible}
					onRequestClose={() => setEditModalVisible(false)}
				>
					<TouchableOpacity
						style={{ flex: 1, width: "100%" }}
						onPress={() => setEditModalVisible(false)}
					/>
					<View
						style={[
							reusableStyles.modalView,
							{ backgroundColor: themeColor.bg, width: 180 },
						]}
					>
						<Text
							style={[
								reusableStyles.text,
								{ color: themeColor.text, fontWeight: "500" },
							]}
						>
							Edit My Preferences
						</Text>
					</View>
				</Modal>

				<View style={{ height: 20 }} />

				<VirtualizedList
					ref={listRef}
					data={pref}
					horizontal
					keyExtractor={(item) => item}
					showsHorizontalScrollIndicator={false}
					getItemCount={(data) => data.length}
					getItem={(data, index) => data[index]}
					getItemLayout={(data, index) => ({
						length: itemWidth,
						offset: itemWidth * index,
						index,
					})}
					renderItem={({ item }) => (
						<View style={{ marginRight: 15 }}>
							<Pressable
								onPress={() => setSelected(item)}
								style={{
									borderWidth: 1,
									borderBottomWidth: 1.5,
									height: 45,
									borderColor:
										item === selected ? themeColor.btn : themeColor.border,
									backgroundColor:
										item === selected ? themeColor.btn : "transparent",
									paddingHorizontal: 20,
									borderRadius: 10,
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "center",
								}}
								onLayout={handleLayout}
							>
								<Text
									style={{
										color: item === selected ? "white" : themeColor.text,
										fontWeight: "500",
									}}
								>
									{item}
								</Text>
							</Pressable>
						</View>
					)}
				/>

				<View style={{ height: 20 }} />
			</View>

			<ScrollView></ScrollView>
		</View>
	);
}

export default Preference;
