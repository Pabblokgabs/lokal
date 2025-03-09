import { View, Text, Modal } from "react-native";
import React, { useState } from "react";
import ReusableStyles from "../../../reausable/reusableStyles";
import { useTheme } from "react-native-paper";
import TopBar from "../../../topBar";
import { Ionicons } from "@expo/vector-icons";
import ReusableTextInputContainer from "../../../reausable/ReusableTextInputContainer";
import ReusableBtn from "../../../reausable/ReusableBtn";

function DeleteAccountOwner({ visible, setVisible }) {
	const themeColor = useTheme().colors;

	const [password, setPassword] = useState("");

	const handleSubmit = () => {
		console.log(password);
		setPassword("");
		setVisible(false);
	};

	return (
		<Modal animationType="slide" transparent={false} visible={visible}>
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<TopBar
					arrowName={"arrowleft"}
					arrowOnPress={() => {setVisible(false); setPassword("")}}
					text={"Delete my account"}
					textAlign={"start"}
				/>
				<View style={ReusableStyles.container}>
					<View style={{ flexDirection: "column", gap: 20 }}>
						<View style={{ flexDirection: "column", gap: 10 }}>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 15,
								}}
							>
								<Ionicons
									name="warning-outline"
									size={24}
									color={themeColor.red}
									style={{ marginRight: 20 }}
								/>
								<Text
									style={[ReusableStyles.secHeader, { color: themeColor.red }]}
								>
									If you delete your account:
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}
							>
								<View
									style={[
										ReusableStyles.dot,
										{ backgroundColor: themeColor.secondaryText },
									]}
								/>
								<Text
									style={[
										ReusableStyles.text,
										{ color: themeColor.secondaryText },
									]}
								>
									The account will be deleted from Lokal
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									gap: 10,
									alignItems: "center",
								}}
							>
								<View
									style={[
										ReusableStyles.dot,
										{ backgroundColor: themeColor.secondaryText },
									]}
								/>
								<Text
									style={[
										ReusableStyles.text,
										{ color: themeColor.secondaryText },
									]}
								>
									Your registered spot will be deleted
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									gap: 10,
									alignItems: "center",
								}}
							>
								<View
									style={[
										ReusableStyles.dot,
										{ backgroundColor: themeColor.secondaryText },
									]}
								/>
								<Text
									style={[
										ReusableStyles.text,
										{ color: themeColor.secondaryText },
									]}
								>
									You will loss all your followers and any data related to your registered spot
								</Text>
							</View>
						</View>
						<View style={{ flexDirection: "column", gap: 10 }}>
							<Text
								style={[ReusableStyles.secHeader, { color: themeColor.text }]}
							>
								To delete your account, confirm your password.
							</Text>
							<ReusableTextInputContainer
								/* inputHint={"Password"} */
								backgroundColor={"transparent"}
								borderColor={themeColor.borderColor}
								placeholder={"Enter your password"}
								value={password}
								onChangeText={setPassword}
								width={"100%"}
								secureTextEntry={true}
								color={themeColor.text}
							/>
							<View style={{ height: 10 }} />
							<ReusableBtn
								width={"50%"}
								btnText={"Delete account"}
								onPress={handleSubmit}
								backgroundColor={themeColor.red}
								borderColor={themeColor.red}
								color={"white"}
							/>
						</View>
					</View>
				</View>
			</View>
		</Modal>
	);
}

export default DeleteAccountOwner;
