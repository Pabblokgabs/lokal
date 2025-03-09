import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../../components/topBar";
import ReusableStyles from "../../../components/reausable/reusableStyles";
import styles from "../../../styleSheet/menu.styles";
import Settings from "../setting";
import SettingsTile from "../../../components/tile/settings.tile";
import Contact from "../../../components/contact";

function Menu() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [settings, setSettings] = useState(false);
	const [contact, setContact] = useState(false);

	return (
		<SafeAreaView>
			<Settings setVisible={setSettings} visible={settings} />
			<Contact visible={contact} setVisible={setContact} />
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<TopBar
					name1={"notifications-outline"}
					name3={"settings-outline"}
					onPress3={() => setSettings(true)}
				/>
				<ScrollView showsVerticalScrollIndicator={false}>
					<SettingsTile
						iconName={"person-outline"}
						text={"Pablo kgabs"}
						right={"right"}
						onPress={() => navigation.navigate("profile")}
					/>
					<View
						style={{
							backgroundColor: themeColor.btn,
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							padding: 10,
							marginVertical: 10,
						}}
					>
						<Text
							style={[
								ReusableStyles.secondText,
								{ color: themeColor.text, fontSize: 40, fontWeight: "bold" },
							]}
						>
							PREMIUM
						</Text>
						<TouchableOpacity
							style={{
								paddingVertical: 10,
								paddingHorizontal: 20,
								borderWidth: 1,
								borderColor: "white",
								shadowOffset: {
									width: 0,
									height: 2,
								},
								shadowOpacity: 0.25,
								shadowRadius: 4,
								elevation: 5,
							}}
						>
							<Text style={[ReusableStyles.modalText, { color: "white" }]}>
								Subscribe
							</Text>
						</TouchableOpacity>
					</View>
					<SettingsTile
						iconName={"information-circle-outline"}
						text={"Notifications"}
						right={"right"}
						value={10}
						onPress={() => {}}
					/>
					<SettingsTile
						iconName={"information-circle-outline"}
						text={"Subscriptions"}
						onPress={() => {}}
					/>
					<SettingsTile
						iconName={"information-circle-outline"}
						text={"Billing & payments"}
						onPress={() => {}}
					/>
					<Text
						style={[
							ReusableStyles.secHeader,
							{ color: themeColor.text, marginTop: 40, marginBottom: 25 },
						]}
					>
						More
					</Text>
					<SettingsTile
						iconName={"help-circle-outline"}
						text={"Help center"}
						onPress={() => {}}
					/>
					<SettingsTile
						iconName={"document-text-outline"}
						text={"Terms of service"}
						onPress={() => {}}
					/>
					<SettingsTile
						iconName={"information-circle-outline"}
						text={"Send Feedback"}
						onPress={() => navigation.navigate("feedback")}
					/>
					<SettingsTile
						iconName={"chatbox-ellipses-outline"}
						text={"Contact Us"}
						size={20}
						onPress={() => setContact(true)}
					/>
					<SettingsTile
						iconName={"share-outline"}
						text={"Invite Friends"}
						onPress={() => {}}
					/>
					<SettingsTile
						iconName={"log-out-outline"}
						text={"Sign out"}
						onPress={() => {}}
					/>
					<View style={{ height: 100 }} />
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

export default Menu;
