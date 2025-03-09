import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../../../components/topBar";
import ReusableStyles from "../../../components/reausable/reusableStyles";
import styles from "../../../styleSheet/menu.styles";
import { AntDesign } from "@expo/vector-icons";
import Settings from "../../../components/modal/settings.model";
import Notification from "../../../components/modal/notification.model";
import SettingsTile from "../../../components/tile/settings.tile";
import Contact from "../../../components/contact";

function Menu() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [settingsVisible, setSettingsVisible] = useState(false);
	const [notificationVisible, setNotificationVisible] = useState(false);
	const [contact, setContact] = useState(false);

	return (
		<SafeAreaView>
			<Settings visible={settingsVisible} setVisible={setSettingsVisible} />
			<Contact visible={contact} setVisible={setContact} />

			<Notification
				visible={notificationVisible}
				setVisible={setNotificationVisible}
			/>
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<TopBar
					name1={"notifications-outline"}
					name3={"settings-outline"}
					onPress3={() => setSettingsVisible(true)}
					onPress1={() => setNotificationVisible(true)}
				/>
				<ScrollView style={styles.container}>
					<TouchableOpacity
						style={[
							styles.accountContainer,
							{ borderColor: themeColor.borderColor },
						]}
						onPress={() => navigation.navigate("profile-screen")}
					>
						<Image
							source={require("../../../assets/images/img.jpg")}
							style={styles.img}
						/>
						<View style={styles.accountContainerInfo}>
							<Text style={[ReusableStyles.header, { color: themeColor.text }]}>
								Pabblo Kgabs
							</Text>
							<View>
								<Text style={[ReusableStyles.text, { color: themeColor.text }]}>
									pabblo@kabs.com
								</Text>
								<View style={styles.edit}>
									<Text
										style={[
											ReusableStyles.secondText,
											{ color: themeColor.secondaryText },
										]}
									>
										Personal details
									</Text>
									<Text
										style={[styles.dot, { backgroundColor: themeColor.text }]}
									></Text>
									<Text
										style={[
											ReusableStyles.secondText,
											{ color: themeColor.secondaryText },
										]}
									>
										edit account
									</Text>
									<AntDesign name="right" size={14} color={themeColor.icon} />
								</View>
							</View>
						</View>
					</TouchableOpacity>

					<View style={{height:20}}/>

					<SettingsTile
						iconName={"information-circle-outline"}
						text={"Notifications"}
						right={"right"}
						value={10}
						onPress={() => {}}
					/>
					<SettingsTile
						iconName={"information-circle-outline"}
						text={"Manage history"}
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
