import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ReusableStyles from "../../../../components/reausable/reusableStyles";
import TopBar from "../../../../components/topBar";
import ProfileTile from "../../../../components/tile/profile.tile";
import ChangeEmail from "./change.email";
import ChangeNumber from "./change.number";

function OwnerProfile() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [changeEmail, setChangeEmail] = useState(false);
	const [changeNumber, setChangeNumber] = useState(false);

	return (
		<SafeAreaView>
			<ChangeEmail visible={changeEmail} setVisible={setChangeEmail} />
			<ChangeNumber visible={changeNumber} setVisible={setChangeNumber} />
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<TopBar
					arrowName={"arrowleft"}
					arrowOnPress={() => navigation.goBack()}
					text={"Profile"}
				/>

				<View style={{ height: 20 }} />

				<ProfileTile
					iconName={"person-outline"}
					title={"First name"}
					value={"Pabblo"}
				/>

				<View style={{ height: 20 }} />

				<ProfileTile
					iconName={"person-outline"}
					title={"Last name"}
					value={"Kgabs"}
				/>

				<View style={{ height: 20 }} />

				<ProfileTile
					iconName={"mail-outline"}
					title={"Email"}
					value={"pabblo@kgabs.com"}
					edit={"edit"}
					onPress={() => setChangeEmail(true)}
				/>

				<View style={{ height: 20 }} />

				<ProfileTile
					iconName={"call-outline"}
					title={"Phone"}
					value={"+27 123456789"}
					edit={"edit"}
					onPress={() => setChangeNumber(true)}
				/>
			</View>
		</SafeAreaView>
	);
}

export default OwnerProfile;
