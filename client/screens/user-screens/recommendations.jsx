import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ReusableStyles from "../../components/reausable/reusableStyles";
import TopBar from "../../components/topBar";
import ReusableTile from "../../components/reausable/Reusable.tile";
import { spot } from "../../lib/dommyData";

function Recommendations() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

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
					text={"Recommendations"}
					arrowOnPress={() => navigation.goBack()}
				/>

				<View style={{ marginTop: 20 }}>
					<FlatList
						data={spot}
						keyExtractor={(item) => item.ownerId}
						showsVerticalScrollIndicator={false}
						renderItem={(item) => (
							<View style={{ marginBottom: 15, width: "100%" }}>
								<ReusableTile data={item} onPress={() => navigation.navigate("spot-details", {item})} />
							</View>
						)}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default Recommendations;
