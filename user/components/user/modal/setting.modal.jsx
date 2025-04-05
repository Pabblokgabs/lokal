import { View, Text, Modal, ScrollView } from "react-native";
import React, { useState } from "react";
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
		<Modal animationType="slide" transparent={false} visible={visible}>
			<ThemeChanger visible={theme} setVisible={setTheme} />
			<ManageAccount visible={manageAccount} setVisible={setManageAccount} />
			<SafeAreaView
				style={{
					flex: 1,
					backgroundColor: themeColor.bg,
				}}
			>
				<View style={[reusableStyles.wrapper, {paddingHorizontal: 15}]}>
					<TopBar
						isArrow={true}
						arrowPress={() => setVisible(false)}
						title={"Settings"}
						py={10}
					/>

					<ScrollView showsVerticalScrollIndicator={false}>
						<View style={{ height: 20 }} />

						<LinkTile title={"Manage My Account"} onPress={() => setManageAccount(true)}/>
						<LinkTile title={"Location"} value={"RSA"}/>
						<LinkTile title={"Language"} value={"English"}/>
						<LinkTile title={"Notification Preference"} />
						<LinkTile title={"Clear cache"} value={"37.00KB"}/>
						<LinkTile title={"Theme"} onPress={() => setTheme(true)} />
					</ScrollView>
				</View>
			</SafeAreaView>
		</Modal>
	);
}

export default SettingModal;
