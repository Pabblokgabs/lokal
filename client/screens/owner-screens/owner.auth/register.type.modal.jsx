import { View, Text, Modal } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ReusableStyles from "../../../components/reausable/reusableStyles";
import TopBar from "../../../components/topBar";
import ReusableBtn from "../../../components/reausable/ReusableBtn";

function RegisterTypeModal({ visible, setVisible }) {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const handleContinue = () => {
		navigation.navigate("personal-information");
		setVisible(false);
	};

	return (
		<Modal animationType="fade" transparent={false} visible={visible}>
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<TopBar
					arrowName={"arrowleft"}
					arrowOnPress={() => setVisible(false)}
				/>

				<View style={ReusableStyles.container}>
					<Text style={[ReusableStyles.secHeader, { color: themeColor.text }]}>
						To successfully register a Spot:
					</Text>

					<View style={{ height: 10 }} />

					<Text
						style={[
							ReusableStyles.text,
							{
								color: themeColor.secondaryText,
								flexDirection: "row",
								alignItems: "center",
							},
						]}
					>
						<View
							style={[ReusableStyles.dot, { backgroundColor: themeColor.text }]}
						/>
						Ensure you are physically present at the location of your spot
					</Text>

					<Text
						style={[
							ReusableStyles.text,
							{
								color: themeColor.secondaryText,
								flexDirection: "row",
								alignItems: "center",
							},
						]}
					>
						<View
							style={[ReusableStyles.dot, { backgroundColor: themeColor.text }]}
						/>
						Allow the app to access your phone's location
					</Text>

					<Text
						style={[
							ReusableStyles.text,
							{
								color: themeColor.secondaryText,
								flexDirection: "row",
								alignItems: "center",
							},
						]}
					>
						<View
							style={[ReusableStyles.dot, { backgroundColor: themeColor.text }]}
						/>
						Make sure you have all required documents prepared
					</Text>

					<View style={{ height: 10 }} />

					<Text
						style={[ReusableStyles.text, { color: themeColor.secondaryText }]}
					>
						By following these steps, you will be able to complete the
						registration process smoothly.
					</Text>

					<View style={{ height: 10 }} />

					<Text
						style={[ReusableStyles.text, { color: themeColor.secondaryText }]}
					>
						Ror more information, please refer to our{" "}
						<Text style={{ color: themeColor.link }} onPress={() => {}}>
							terms of use
						</Text>
					</Text>
					<View style={{ height: 10 }} />
					<View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
						<ReusableBtn
							backgroundColor={themeColor.btn}
							borderColor={themeColor.btn}
							btnText={"Continue"}
							width={"100%"}
							onPress={handleContinue}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

export default RegisterTypeModal;
