import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ReusableStyles from "../../components/reausable/reusableStyles";
import TopBar from "../../components/topBar";
import ReusableBtn from "../../components/reausable/ReusableBtn";
import RegisterTypeModal from "../owner-screens/owner.auth/register.type.modal";

function RegisterType() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [modal, setModal] = useState(false);

	return (
		<SafeAreaView
			style={[
				ReusableStyles.wrapper,
				{ backgroundColor: themeColor.background },
			]}
		>
			<RegisterTypeModal setVisible={setModal} visible={modal} />
			<TopBar
				arrowName={"arrowleft"}
				arrowOnPress={() => navigation.goBack()}
			/>
			<View style={ReusableStyles.container}>
				<Text
					style={[
						ReusableStyles.header,
						{
							color: themeColor.text,
							paddingBottom: 10,
						},
					]}
				>
					Let's get you started.
				</Text>
				<ReusableBtn
					backgroundColor={"transparent"}
					borderColor={themeColor.btn}
					color={themeColor.text}
					btnText={"Personal Account"}
					onPress={() => navigation.navigate("email")}
				/>

				<View style={{ height: 15 }} />

				<ReusableBtn
					backgroundColor={themeColor.btn}
					borderColor={themeColor.btn}
					btnText={"Register Spot"}
					onPress={() => setModal(true)}
				/>
			</View>
		</SafeAreaView>
	);
}

export default RegisterType;
