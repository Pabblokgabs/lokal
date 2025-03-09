import { View, Text, Modal } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import ReusableStyles from "../../../components/reausable/reusableStyles";
import ReusableTextInputContainer from "../../../components/reausable/ReusableTextInputContainer";
import TopBar from "../../../components/topBar";
import ReusableBtn from "../../../components/reausable/ReusableBtn";

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
			<SafeAreaView>
				<View
					style={[
						ReusableStyles.wrapper,
						{ backgroundColor: themeColor.background },
					]}
				>
					<TopBar
						arrowName={"arrowleft"}
						arrowOnPress={() =>
							onDisplay === "phone" ? setVisible(false) : setDisplay("phone")
						}
					/>

					<View style={{ height: 10 }} />

					{onDisplay === "phone" ? (
						<ReusableTextInputContainer
							inputHint={"Enter the number you want to change to."}
							borderColor={themeColor.borderColor}
							placeholder={"Enter here"}
							value={formData.new_number}
							onChangeText={(text) => handleFormData("new_number", text)}
							KeyboardType={"numeric"}
						/>
					) : (
						<>
							<Text
								style={[
									ReusableStyles.modalText,
									{ color: themeColor.secondaryText },
								]}
							>
								To verify this is your account you have to provide your
								password.
							</Text>

							<View style={{ height: 20 }} />

							<ReusableTextInputContainer
								borderColor={themeColor.borderColor}
								placeholder={"Enter your password"}
								value={formData.password}
								onChangeText={(text) => handleFormData("password", text)}
								secureTextEntry={true}
								iconName={"lock-outline"}
							/>
						</>
					)}

					<View style={{ flex: 1 }} />

					<ReusableBtn
						btnText={onDisplay === "phone" ? "Next" : "Submit"}
						onPress={() => handleSubmit()}
						backgroundColor={themeColor.btn}
						borderColor={themeColor.btn}
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
