import {
	View,
	Text,
	SafeAreaView,
	Image,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ReusableStyles from "../../../components/reausable/reusableStyles";
import TopBar from "../../../components/topBar";
import styles from "../../../styleSheet/profile.styles";
import ProfileTile from "../../../components/tile/profile.tile";
import EmailModal from "./email.modal";
import ChangeEmail from "./edit.email";
import ChangeImgModel from "./change.img.mode";
import ChangeNumber from "./change.number";

function UserProfile() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [editProfile, setEditProfile] = useState(false);
	const [emailModal, setEmailModal] = useState(false);
	const [editEmailModal, setEditEmailModal] = useState(false);
	const [changeImgModal, setChangeImgModal] = useState(false);
	const [changeNumberModal, setChangeNumberModal] = useState(false);

	return (
		<SafeAreaView>
			<EmailModal
				visible={emailModal}
				setVisible={setEmailModal}
				setEmailEdit={setEditEmailModal}
			/>
			<ChangeEmail visible={editEmailModal} setVisible={setEditEmailModal} />
			<ChangeImgModel visible={changeImgModal} setVisible={setChangeImgModal} />
			<ChangeNumber
				visible={changeNumberModal}
				setVisible={setChangeNumberModal}
			/>
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<TopBar
					arrowOnPress={() => navigation.goBack()}
					arrowName={"arrowleft"}
					text={"Profile"}
					textAlign={"start"}
				/>
				<View style={ReusableStyles.container}>
					<View style={styles.topContainer}>
						<Image
							source={require("../../../assets/images/img.jpg")}
							style={styles.img}
						/>
						<TouchableOpacity
							onPress={() => setChangeImgModal(true)}
							style={[styles.editIcon, { backgroundColor: themeColor.btn }]}
						>
							<MaterialIcons name="edit" size={20} color={"white"} />
						</TouchableOpacity>
						<View style={styles.topContainerRight}>
							<Text
								style={[ReusableStyles.secHeader, { color: themeColor.text }]}
							>
								Pabblo kgabs
							</Text>
							<View style={styles.tokenFollowContainer}>
								<View>
									<Text
										style={[ReusableStyles.header, { color: themeColor.text }]}
									>
										10
									</Text>
									<Text
										style={[ReusableStyles.text, { color: themeColor.text }]}
									>
										followings
									</Text>
								</View>
								<View>
									<Text
										style={[ReusableStyles.header, { color: themeColor.text }]}
									>
										0
									</Text>
									<Text
										style={[ReusableStyles.text, { color: themeColor.text }]}
									>
										Token
									</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.bottomContainer}>
						<ProfileTile
							iconName={"person-outline"}
							title={"username"}
							value={"Pabblo Kgabs"}
						/>
						<ProfileTile
							iconName={"mail-outline"}
							title={"Email"}
							value={"pabblo@kgabs.com"}
							edit={"edit"}
							onPress={() => setEmailModal(true)}
						/>
						<ProfileTile
							iconName={"call-outline"}
							title={"Phone"}
							value={"+27 123456789"}
							edit={"edit"}
							onPress={() => setChangeNumberModal(true)}
						/>
						<ProfileTile iconName={"male"} title={"Gender"} value={"male"} />
						<ProfileTile
							iconName={"calendar-outline"}
							title={"Age"}
							value={"47"}
						/>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default UserProfile;
