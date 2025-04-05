import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import Modal from "react-native-modal";
import reusableStyles from "../reusable/styles";
import TopBar from "../topBar";
import UserView from "../user.view.tile";

export default function ViewAllGoing({ visible, setVisible }) {
	const themeColor = useTheme().colors;

	return (
		<Modal
			isVisible={visible}
			onBackdropPress={() => setVisible(false)}
			onBackButtonPress={() => setVisible(false)}
			animationIn="slideInUp"
			animationOut="slideOutDown"
			swipeDirection="down"
			onSwipeComplete={() => setVisible(false)}
			backdropOpacity={0.5}
			style={{ margin: 0 }}
		>
			<SafeAreaView style={{ felx: 1, backgroundColor: themeColor.bg }}>
				<View style={reusableStyles.wrapper}>
					<View style={{ paddingHorizontal: 15 }}>
						<TopBar isArrow={true} arrowPress={() => setVisible(false)} />
					</View>

					<FlatList
						data={[1, 2, 3, 4, 5, 6, 7, 8, , 9]}
						keyExtractor={(item, index) => index}
						renderItem={({ item }) => (
							<View style={{ marginBottom: 20, paddingHorizontal: 15 }}>
								<UserView item={item} isBorder={true} />
							</View>
						)}
					/>
				</View>
			</SafeAreaView>
		</Modal>
	);
}
