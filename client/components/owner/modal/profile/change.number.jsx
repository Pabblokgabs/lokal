import { View, Text, Modal } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import TopBar from "../../../topBar";
import reusableStyles from "../../../reusable/styles";
import Btn from "../../../btn";
import TextInputContainer from "../../../reusable/text.input";

function ChangeNumber({ visible, setVisible }) {
	const themeColor = useTheme().colors;

	const [onDisplay, setDisplay] = useState("phone");

	const [formData, setFormData] = useState({
		new_number: "",
		password: "",
	});

	const handleFormData = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		if (onDisplay === "phone") {
			setDisplay("password");
			console.log(formData);
			return;
		} else {
			setVisible(false);
			setDisplay("phone");
			console.log(formData);
			return;
		}
	};

	return (
		<Modal visible={visible} transparent={false} animationType="none">
			<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
				<View
					style={[
						reusableStyles.wrapper,
						{ paddingHorizontal: 15 },
					]}
				>
					<TopBar
						py={10}
						title={"Change Email"}
						isArrow={true}
						arrowPress={() => setVisible(false)}
					/>

					<View style={{ height: 10 }} />

					{onDisplay === "phone" ? (
						<TextInputContainer
							M_icon={"phone"}
							placeholder={"+288 234567890"}
							inputHint={"Phone number"}
							onChangeText={(text) => handleFormData("new_number", text)}
							KeyboardType={"Numeric"}
						/>
					) : (
						<>
							<Text
								style={[reusableStyles.text, { color: themeColor.secondText }]}
							>
								To verify this is your account you have to provide your
								password.
							</Text>

							<View style={{ height: 20 }} />

							<TextInputContainer
								M_icon={"lock-outline"}
								placeholder={"Enter your password"}
								inputHint={"Password"}
								onChangeText={(text) => handleFormData("password", text)}
								secureTextEntry={true}
							/>
						</>
					)}

					<View style={{ flex: 1 }} />

					<Btn
						text={onDisplay === "phone" ? "Next" : "Submit"}
						onPress={() => handleSubmit()}
						backgroundColor={themeColor.btn}
						opacity={
							(onDisplay === "phone" && formData.new_number === "") ||
							(onDisplay === "password" && formData.password === "")
								? 0.5
								: 1
						}
						disabled={
							(onDisplay === "phone" && formData.new_number === "") ||
							(onDisplay === "password" && formData.password === "")
						}
					/>
					<View style={{ height: 20 }} />
				</View>
			</SafeAreaView>
		</Modal>
	);
}

export default ChangeNumber;
