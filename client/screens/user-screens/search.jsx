import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../components/reusable/styles";
import { AntDesign } from "@expo/vector-icons";
import TextInputContainer from "../../components/reusable/text.input";
import TopBar from "../../components/topBar";
import { event, spot } from "../../lib/dommyData";
import RecommendedSpot from "../../components/user/recommended.spot";
import EventTile from "../../components/user/event.tile";
import {
	retrieveSearchHistory,
	saveSearchHistory,
} from "../../lib/utils/search.history.util";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Search() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const data = [...spot, ...event];

	const [filterData, setFilterData] = useState([]);
	const [search, setSearch] = useState("");

	const handleSearch = (text) => {
		setSearch(text);
		const searhQuery = text.trim().toLowerCase();
		const searchWords = searhQuery.toLowerCase().split("");
		const filteredData = data.filter((item) => {
			const itemName = item.name.toLowerCase();
			return searchWords.every((word) => itemName.includes(word));
		});

		setFilterData(filteredData);
	};

	const renderItem = (item) => {
		if (item.modelType === "spot") {
			return (
				<RecommendedSpot item={item} onSpotPress={() => handleSpotClick()} />
			);
		} else if (item.modelType === "event") {
			return <EventTile item={item} onEventPress={() => handleEventClick()} />;
		}
	};

	const handleEventClick = () => {
		saveSearchHistory(search);
	};

	const handleSpotClick = () => {
		saveSearchHistory(search);
	};

	const header = () => {
		const [history, setHistory] = useState([]);

		useEffect(() => {
			retrieveSearchHistory(setHistory);
		}, []);

		const handleClose = () => {
			setSearch("");
			handleSearch("");
			setFilterData([]);
		};

		const deteleSearchHistory = async (item) => {
			const updatedHistory = history.filter(
				(historyItem) => historyItem !== item
			);
			setHistory(updatedHistory);
			await AsyncStorage.setItem(
				"searchHistory",
				JSON.stringify(updatedHistory)
			);
		};

		return (
			<View
				style={{
					paddingHorizontal: 15,
					paddingBottom: 20,
				}}
			>
				<TopBar isArrow={true} py={10} arrowPress={() => navigation.goBack()} />
				<TextInputContainer
					autoFocus={true}
					onClosePress={() => handleClose()}
					isClose={true}
					placeholder={"Search..."}
					A_icon={"search1"}
					iconColor={themeColor.btn}
					value={search}
					onChangeText={(text) => handleSearch(text)}
				/>
				{filterData.length !== 0 ? (
					<Text
						style={[
							reusableStyles.header,
							{ color: themeColor.text, marginTop: 15 },
						]}
					>
						{filterData.length} Result{filterData.length > 1 && "s"} found
					</Text>
				) : (
					<FlatList
						data={history}
						horizontal
						showsHorizontalScrollIndicator={false}
						keyExtractor={(item) => item}
						renderItem={({ item }) => (
							<TouchableOpacity
								onPress={() => {
									setSearch(item), handleSearch(item);
								}}
								style={{
									flexDirection: "row",
									marginRight: 10,
									alignItems: "center",
									marginTop: 20,
									paddingHorizontal: 10,
									paddingVertical: 6,
									gap: 10,
									backgroundColor: themeColor.cont,
									borderRadius: 10,
								}}
							>
								<Text
									style={[
										reusableStyles.text,
										{ color: themeColor.secondText },
									]}
								>
									{item}
								</Text>
								<TouchableOpacity onPress={() => deteleSearchHistory(item)}>
									<AntDesign name="close" size={20} color={themeColor.text} />
								</TouchableOpacity>
							</TouchableOpacity>
						)}
					/>
				)}
			</View>
		);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
			<View style={reusableStyles.wrapper}>
				<FlatList
					data={filterData}
					keyExtractor={(item) => item.reviewId}
					showsVerticalScrollIndicator={false}
					ListHeaderComponent={header}
					renderItem={({ item }) => (
						<View style={{ paddingHorizontal: 15, marginBottom: 20 }}>
							{renderItem(item)}
						</View>
					)}
				/>
			</View>
		</SafeAreaView>
	);
}

export default Search;
