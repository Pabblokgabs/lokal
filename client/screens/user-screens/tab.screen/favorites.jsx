import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../../components/reusable/styles";
import TopBar from "../../../components/topBar";
import { event } from "../../../lib/dommyData";
import EventTile from "../../../components/user/event.tile";

function Favourites() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [input, setInput] = useState("");
	console.log(input);
	const handleSearch = (text) => {
		setInput(text);
	};

	return (
		<SafeAreaView>
			<View
				style={[reusableStyles.wrapper, { backgroundColor: themeColor.bg }]}
			>
				<View
					style={{
						paddingHorizontal: 15,
						borderBottomColor: themeColor.border,
						borderBottomWidth: 1,
					}}
				>
					<TopBar
						title={"Favourite"}
						py={20}
						textAlign={"center"}
						A_icon={"search1"}
						add_icon={"ellipsis-vertical"}
					/>
				</View>

				<View style={{height: 10}}/>

				<FlatList
					data={event}
					keyExtractor={(item) => item.spotId}
					showsVerticalScrollIndicator={false}
					renderItem={({item}) => (
						<View style={{ marginBottom: 15, paddingHorizontal: 15 }}>
							<EventTile item={item} />
						</View>
					)}
				/>
			</View>
		</SafeAreaView>
	);
}

export default Favourites;
