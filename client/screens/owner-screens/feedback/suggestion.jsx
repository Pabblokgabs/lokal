import { View, Text, Modal } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import ReusableStyles from "../../../components/reausable/reusableStyles";
import TopBar from "../../../components/topBar";
import ReusableBtn from "../../../components/reausable/ReusableBtn";
import ReusableTextInputContainer from "../../../components/reausable/ReusableTextInputContainer";
import PickerComponent from "../../../components/picker";

function SuggestionFeetback({ visible, setVisible }) {
	const themeColor = useTheme().colors;

	const [formData, setFormData] = useState({
		email: "",
		topic: "",
		description: "",
	});

	const handleFormData = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		console.log(formData);
		setVisible(false);
	};

	const [topic, setTopic] = useState([
		{ label: "New feature", value: "New feature" },
		{ label: "UX/design", value: "UX/design" },
		{ label: "Others", value: "Others" },
	]);

	return (
		<Modal transparent={false} animationType="none" visible={visible}>
			<SafeAreaView>
				<View
					style={[
						ReusableStyles.wrapper,
						{ backgroundColor: themeColor.background },
					]}
				>
					<TopBar
						text={"Report a problem"}
						arrowName={"arrowleft"}
						arrowOnPress={() => setVisible(false)}
					/>

					<ReusableTextInputContainer
						inputHint={"Email*"}
						borderColor={"transparent"}
						backgroundColor={themeColor.secondaryBackground}
						placeholder={"Enter your email"}
						value={formData.email}
						onChangeText={(text) => handleFormData("email", text)}
					/>

					<View style={{ height: 10 }} />

					<ReusableTextInputContainer
						inputHint={"Choose a topic: *"}
						borderColor={"transparent"}
						backgroundColor={themeColor.secondaryBackground}
					>
						<PickerComponent
							items={topic}
							selectedValue={formData.topic}
							onValueChange={(text) => handleFormData("topic", text)}
						/>
					</ReusableTextInputContainer>

					<View style={{ height: 10 }} />

					<ReusableTextInputContainer
						inputHint={"Description*"}
						borderColor={"transparent"}
						backgroundColor={themeColor.secondaryBackground}
						placeholder={"Descripe the problem in fully."}
						value={formData.description}
						onChangeText={(text) => handleFormData("description", text)}
					/>

					<View style={{ height: 30 }} />

					<ReusableBtn
						btnText={"Submit"}
						onPress={() => handleSubmit()}
						backgroundColor={themeColor.btn}
						borderColor={themeColor.btn}
						opacity={
							formData.email === "" ||
							formData.topic === "" ||
							formData.description === ""
								? 0.5
								: 1
						}
						disabled={
							formData.email === "" ||
							formData.topic === "" ||
							formData.description === ""
						}
					/>
				</View>
			</SafeAreaView>
		</Modal>
	);
}

export default SuggestionFeetback;
