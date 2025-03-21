import { View, Text, Modal, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../reusable/styles";
import TopBar from "../../topBar";
import LinkTile from "../../reusable/link.tile";
import DeleteAccount from "./delete.account";
import ChangePassword from "./change.password";

function ManageAccount({ visible, setVisible }) {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [deleteAccount, setDeleteAccount] = useState(false);
	const [changePassword, setChangePassword] = useState(false);

	return (
		<Modal animationType="none" transparent={false} visible={visible}>
			<DeleteAccount visible={deleteAccount} setVisible={setDeleteAccount} />
			<ChangePassword visible={changePassword} setVisible={setChangePassword} />
			<SafeAreaView
				style={{
					flex: 1,
					backgroundColor: themeColor.bg,
				}}
			>
				<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
					<TopBar
						isArrow={true}
						arrowPress={() => setVisible(false)}
						title={"Manage Account"}
						py={10}
					/>

					<ScrollView showsVerticalScrollIndicator={false}>
						<View style={{ height: 20 }} />

						<LinkTile title={"Change Password"} onPress={() => setChangePassword(true)} />
						<LinkTile
							title={"Delete Account"}
							onPress={() => setDeleteAccount(true)}
						/>
					</ScrollView>
				</View>
			</SafeAreaView>
		</Modal>
	);
}

export default ManageAccount;
