import { View, Text, Modal, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../reusable/styles";
import TopBar from "../../topBar";
import Btn from "../../btn";
import TextInputContainer from "../../reusable/text.input";
import { Ionicons } from "@expo/vector-icons";

function DeleteAccount({ visible, setVisible }) {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [password, setPassword] = useState("");

  const handleDelete = () => {
    console.log(password);
    
  }

	return (
		<Modal animationType="none" transparent={false} visible={visible}>
			<SafeAreaView
				style={{
					flex: 1,
					backgroundColor: themeColor.bg,
				}}
			>
				<View
					style={[
						reusableStyles.wrapper,
						{
							paddingHorizontal: 15,
							flexDirection: "column",
						},
					]}
				>
					<TopBar
						arrowPress={() => setVisible(false)}
						title={"Delete Account"}
					/>
					<View style={{ flex: 1 }}>
						<View style={{ height: 20 }} />

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
									style={[reusableStyles.header, { color: themeColor.red }]}
								>
									If you delete your account:
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									gap: 10,
								}}
							>
								<View
									style={[
										reusableStyles.dot,
										{ backgroundColor: themeColor.secondText },
									]}
								/>
								<Text
									style={[
										reusableStyles.text,
										{ color: themeColor.secondText },
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
										reusableStyles.dot,
										{ backgroundColor: themeColor.secondText },
									]}
								/>
								<Text
									style={[
										reusableStyles.text,
										{ color: themeColor.secondText },
									]}
								>
									Your SPOT will be deleted
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
										reusableStyles.dot,
										{ backgroundColor: themeColor.secondText },
									]}
								/>
								<Text
									style={[
										reusableStyles.text,
										{ color: themeColor.secondText },
									]}
								>
									All the followers of your spot will be lossed
								</Text>
							</View>
						</View>

						<View style={{ height: 20 }} />

						<Text style={[reusableStyles.header, { color: themeColor.text }]}>
							To delete your account, confirm your password.
						</Text>

						<View style={{ height: 20 }} />

						<TextInputContainer
							placeholder={"Enter your password"}
							MC_icon={"lock-outline"}
							inputHint={"Password"}
							secureTextEntry={true}
              onChangeText={setPassword}
						/>
					</View>

					<Btn
						text={"Delete"}
						backgroundColor={"transparent"}
						borderColor={themeColor.red}
						borderWidth={1}
						color={themeColor.red}
            onPress={() => handleDelete()}
					/>
					<View style={{ height: 20 }} />
				</View>
			</SafeAreaView>
		</Modal>
	);
}

export default DeleteAccount;
