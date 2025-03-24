import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../components/reusable/styles";
import TopBar from "../../components/topBar";
import UserView from "../../components/user.view.tile";

function Messages() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	return (
		<SafeAreaView style={{ felx: 1, backgroundColor: themeColor.bg }}>
			<View style={reusableStyles.wrapper}>
				<View style={{ paddingHorizontal: 15, marginBottom: 20 }}>
					<TopBar
						isArrow={true}
						title={"Messages"}
						arrowPress={() => navigation.goBack()}
						py={10}
					/>
				</View>

				<FlatList
					data={[1, 2, 3, 4, 5, 6, 7, 8, , 9]}
					keyExtractor={(item, index) => index}
					renderItem={({ item }) => (
						<View style={{ marginBottom: 20, paddingHorizontal: 15 }}>
							<UserView
								item={item}
								onPress={() => navigation.navigate("inbox")}
							/>
						</View>
					)}
				/>
			</View>
		</SafeAreaView>
	);
}

export default Messages;
