import { Text, View, Modal, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import ReusableStyles from "../reausable/reusableStyles";
import TopBar from "../topBar";
import SettingsTile from "../tile/settings.tile";
import ManageAccount from "./settings/manage.account/manage.account";
import NotificationPreference from "./settings/notification.pref";
import ThemeChanger from "../ThemeChanger";
import About from "./settings/about";
import { SafeAreaView } from "react-native-safe-area-context";

function Settings({ visible, setVisible }) {
	const themeColor = useTheme().colors;

	/* Models */
	const [manageAccount, setManageAccount] = useState(false);
	const [notification, setNotification] = useState(false);
	const [theme, setTheme] = useState(false);
	const [about, setAbout] = useState(false);

	return (
		<Modal visible={visible} animationType="slide" transparent={false}>
			<SafeAreaView>
				<View
					style={[
						ReusableStyles.wrapper,
						{ backgroundColor: themeColor.background },
					]}
				>
					<ManageAccount
						visible={manageAccount}
						setVisible={setManageAccount}
					/>
					<NotificationPreference
						visible={notification}
						setVisible={setNotification}
					/>
					<ThemeChanger visible={theme} setVisible={setTheme} />
					<About visible={about} setVisible={setAbout} />
					<TopBar
						arrowName={"arrowleft"}
						text={"Settings"}
						arrowOnPress={() => setVisible(false)}
					/>
					<ScrollView style={ReusableStyles.container}>
						<Text
							style={[
								ReusableStyles.secHeader,
								{ color: themeColor.text, marginBottom: 20, paddingTop: 20 },
							]}
						>
							Account
						</Text>
						<SettingsTile
							text={"Manage My Account"}
							bbw={0.5}
							right={"right"}
							onPress={() => setManageAccount(true)}
						/>
						<SettingsTile
							text={"Location"}
							bbw={0.5}
							value={"USA"}
							right={"right"}
						/>
						<SettingsTile
							text={"Language"}
							bbw={0.5}
							value={"ENGLISH"}
							right={"right"}
						/>
						<SettingsTile
							text={"Notification Preference"}
							bbw={0.5}
							right={"right"}
							onPress={() => setNotification(true)}
						/>
						<SettingsTile
							text={"Clear cache"}
							bbw={0.5}
							right={"right"}
							value={"37.00KB"}
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
						{/* <View style={{ paddingVertical: 20 }}>
							<TouchableOpacity
								style={{
									backgroundColor: themeColor.secondaryBackground,
									padding: 10,
									borderRadius: 5,
								}}
							>
								<Text
									style={{
										color: themeColor.btn,
										textAlign: "center",
										fontSize: 15,
									}}
								>
									Sign out
								</Text>
							</TouchableOpacity>
						</View> */}
					</ScrollView>
				</View>
			</SafeAreaView>
		</Modal>
	);
}

export default Settings;
