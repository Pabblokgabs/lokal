import { View, Text, Modal } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import TopBar from "../../components/topBar";
import ReusableStyles from "../../components/reausable/reusableStyles";
import SettingsTile from "../../components/tile/settings.tile";
import ThemeChanger from "../../components/ThemeChanger";
import ManageAccount from "../../components/modal/settings/manage.account/manage.account";
import About from "../../components/modal/settings/about";

function Settings({ visible, setVisible }) {
	const themeColor = useTheme().colors;

	const [theme, setTheme] = useState(false);
	const [manageAccount, setManageAccount] = useState(false);
	const [about, setAbout] = useState(false);

	return (
		<Modal animationType="slide" visible={visible} transparent={false}>
			<ManageAccount visible={manageAccount} setVisible={setManageAccount} />
			<ThemeChanger visible={theme} setVisible={setTheme} />
			<About visible={about} setVisible={setAbout} />

			<SafeAreaView>
				<View
					style={[
						ReusableStyles.wrapper,
						{ backgroundColor: themeColor.background },
					]}
				>
					<TopBar
						arrowName={"arrowleft"}
						arrowOnPress={() => setVisible(false)}
						text={"Settings"}
					/>
					<SettingsTile
						text={"Manage My Account"}
						bbw={0.5}
						right={"right"}
						onPress={() => setManageAccount(true)}
					/>
					<SettingsTile
						text={"Country"}
						value={"USA"}
						bbw={0.5}
						right={"right"}
						onPress={() => {}}
					/>
					<SettingsTile
						text={"Language"}
						value={"English"}
						bbw={0.5}
						right={"right"}
						onPress={() => {}}
					/>
					<SettingsTile
						text={"Notifications"}
						bbw={0.5}
						right={"right"}
						onPress={() => {}}
					/>
					<SettingsTile
						text={"Theme"}
						bbw={0.5}
						right={"right"}
						onPress={() => setTheme(true)}
					/>
					<Text
						style={[
							ReusableStyles.secHeader,
							{ color: themeColor.text, marginTop: 40, marginBottom: 25 },
						]}
					>
						Help and policy
					</Text>
					<SettingsTile iconName={"help-circle-outline"} text={"Help"} />
					<SettingsTile
						iconName={"document-text-outline"}
						text={"Privacy"}
					/>
					<SettingsTile
						iconName={"information-circle-outline"}
						text={"About"}
						onPress={() => setAbout(true)}
					/>
				</View>
			</SafeAreaView>
		</Modal>
	);
}

export default Settings;
