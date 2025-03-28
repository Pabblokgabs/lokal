import { View, Text } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import reusableStyles from "../../reusable/styles";
import { Ionicons } from "@expo/vector-icons";
import TopBar from "../../topBar";
import Btn from "../../btn";
import TextInputContainer from "../../reusable/text.input";
import AddNewMember from "./add.new.member";

function SearchUsers({ visible, setVisible }) {
	const themeColor = useTheme().colors;

	const [warning, setWarning] = useState("warning");
	const [addUserModal, setAddUserModal] = useState(false);
	const [email, setEmail] = useState("");

	const handleNext = () => {
		setVisible(false);
		setAddUserModal(true);
	};

	return (
		<>
			<AddNewMember
				visible={addUserModal}
				setVisible={setAddUserModal}
				email={email}
				emailModal={setVisible}
				setWarning={setWarning}
			/>
			<Modal
				isVisible={visible}
				animationIn="slideInUp"
				animationOut="slideOutDown"
				style={{ margin: 0 }}
			>
				<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
					<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
						<TopBar py={20} arrowPress={() => setVisible(false)} />
						{warning === "warning" && (
							<>
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
										Warning
									</Text>
								</View>

								<Text
									style={[reusableStyles.header, { color: themeColor.text }]}
								>
									Lokal will not be eligible for any damage done to your spot by
									the person added as a member of your spot
								</Text>

								<View style={{ height: 20 }} />

								<Text
									style={[reusableStyles.header, { color: themeColor.text }]}
								>
									By continueing you agreee to our terms of service
								</Text>

								<View style={{ flex: 1 }} />

								<Btn text={"Continue"} onPress={() => setWarning("email")} />

								<View style={{ height: 20 }} />
							</>
						)}

						{warning === "email" && (
							<>
								<Text
									style={[reusableStyles.lgHeader, { color: themeColor.text }]}
								>
									Add a new member
								</Text>

								<View style={{ height: 10 }} />

								<Text style={[reusableStyles.text, { color: themeColor.text }]}>
									To processed enter the email address of the person you want to
									add
								</Text>

								<View style={{ height: 20 }} />

								<TextInputContainer
									I_icon={"mail-outline"}
									placeholder={"Enter here"}
									value={email}
									onChangeText={setEmail}
								/>

								<View style={{ flex: 1 }} />

								<Btn text={"Next"} onPress={() => handleNext()} />

								<View style={{ height: 20 }} />
							</>
						)}
					</View>
				</SafeAreaView>
			</Modal>
		</>
	);
}

export default SearchUsers;
