import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../reusable/styles";
import TopBar from "../../topBar";
import LinkTile from "../../reusable/link.tile";
import ThemeChanger from "../../ThemeChanger";
import ManageAccount from "./manage.account";

function SettingModal({ visible, setVisible }) {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [theme, setTheme] = useState(false);
	const [manageAccount, setManageAccount] = useState(false);

	return (
		<Modal
			isVisible={visible}
			onBackdropPress={() => setVisible(false)}
			onBackButtonPress={() => setVisible(false)}
			animationIn="slideInUp"
			animationOut="slideOutDown"
			onSwipeComplete={() => setVisible(false)}
			backdropOpacity={0.5}
			style={{margin: 0 }}
		>
			<ThemeChanger visible={theme} setVisible={setTheme} />
			<ManageAccount visible={manageAccount} setVisible={setManageAccount} />

			<SafeAreaView
				style={{
					flex: 1,
					backgroundColor: themeColor.bg,
				}}
			>
				<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
					<TopBar
						arrowPress={() => setVisible(false)}
						title={"Settings"}
						py={10}
					/>

					<ScrollView showsVerticalScrollIndicator={false}>
						<View style={{ height: 20 }} />

						<LinkTile
							title={"Manage My Account"}
							onPress={() => setManageAccount(true)}
						/>
						<LinkTile title={"Location"} value={"RSA"} />
						<LinkTile title={"Language"} value={"English"} />
						<LinkTile title={"Notification Preference"} />
						<LinkTile title={"Theme"} onPress={() => setTheme(true)} />
					</ScrollView>
				</View>
			</SafeAreaView>
		</Modal>
	);
}

export default SettingModal;
