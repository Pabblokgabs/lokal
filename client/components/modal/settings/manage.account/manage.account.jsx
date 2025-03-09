import { View, Modal } from "react-native";
import React, { useState } from "react";
import ReusableStyles from "../../../reausable/reusableStyles";
import { useTheme } from "react-native-paper";
import TopBar from "../../../topBar";
import SettingsTile from "../../../tile/settings.tile";
import ChangePassword from "./change.password";
import DeleteAccountOwner from "./delete.owner.account";

function ManageAccount({ visible, setVisible }) {
	const themeColor = useTheme().colors;

	const [changePassword, setChangePassword] = useState(false);
	const [deleteAccount, setDeleteAccount] = useState(false);

	return (
		<Modal transparent={false} visible={visible} animationType="none">
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<ChangePassword
					visible={changePassword}
					setVisible={setChangePassword}
				/>
				<DeleteAccountOwner setVisible={setDeleteAccount} visible={deleteAccount} />
				<TopBar
					arrowName={"arrowleft"}
					text={"Manage My Account"}
					textAlign={"start"}
					arrowOnPress={() => setVisible(false)}
				/>
				<View style={ReusableStyles.container}>
					<SettingsTile
						text={"Change Password"}
						bbw={0.5}
						right={"right"}
						onPress={() => setChangePassword(true)}
					/>
					<SettingsTile
						text={"Delete Account"}
						bbw={0.5}
						right={"right"}
						onPress={() => setDeleteAccount(true)}
					/>
				</View>
			</View>
		</Modal>
	);
}

export default ManageAccount;
