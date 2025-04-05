import { View, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../components/reusable/styles";
import TopBar from "../../components/topBar";
import { event } from "../../lib/dommyData";
import PopularTile from "../../components/user/popular.tile";

function Popular() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
			<View style={reusableStyles.wrapper}>
				<View style={{ paddingHorizontal: 15, marginBottom: 20 }}>
					<TopBar
						isArrow={true}
						title={"Popular Events"}
						arrowPress={() => navigation.goBack()}
						py={10}
					/>
				</View>
				<FlatList
					data={event}
					keyExtractor={(item) => item.eventId}
					renderItem={({ item }) => (
						<View style={{ marginBottom: 20, paddingHorizontal: 15 }}>
							<PopularTile item={item} />
						</View>
					)}
				/>
			</View>
		</SafeAreaView>
	);
}

export default Popular;
