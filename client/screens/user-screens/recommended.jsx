import { FlatList, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../components/reusable/styles";
import TopBar from "../../components/topBar";
import { spot } from "../../lib/dommyData";
import RecommendedSpot from "../../components/user/recommended.spot";

function Recommended() {
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
					data={spot}
					keyExtractor={(item) => item.ownerId}
					renderItem={({ item }) => (
						<View style={{ marginBottom: 20, paddingHorizontal: 15 }}>
							<RecommendedSpot item={item} />
						</View>
					)}
				/>
			</View>
		</SafeAreaView>
	);
}

export default Recommended;
