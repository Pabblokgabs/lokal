import { View, Text } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import reusableStyles from "../../../components/reusable/styles";
import TopBar from "../../../components/topBar";
import TextInputContainer from "../../../components/reusable/text.input";
import SelectImage from "../../../components/select.image";
import Btn from "../../../components/btn";
import PickerComponent from "../../../components/picker";

export function Report({ visible, setVisible }) {
	const themeColor = useTheme().colors;

	const [formData, setFormData] = useState({
		email: "",
		details: "",
		attachment: null,
	});

	const handleData = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		console.log(formData);
	};

	return (
		<Modal
			isVisible={visible}
			onBackdropPress={() => setVisible(false)}
			onBackButtonPress={() => setVisible(false)}
			animationIn="slideInUp"
			animationOut="slideOutDown"
			swipeDirection="down"
			onSwipeComplete={() => setVisible(false)}
			backdropOpacity={0.5}
			style={{ margin: 0 }}
		>
			<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
				<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
					<TopBar
						isArrow={true}
						arrowPress={() => setVisible(false)}
						title={"Report a problem"}
						py={10}
					/>
					<View style={{ height: 20 }} />

					<TextInputContainer
						inputHint={"Email *"}
						backgroundColor={themeColor.secondBg}
						onChangeText={(text) => handleData("email", text)}
					/>

					<View style={{ height: 20 }} />

					<TextInputContainer
						inputHint={"Write problem in details *"}
						backgroundColor={themeColor.secondBg}
						multiline={true}
						height={100}
						onChangeText={(text) => handleData("details", text)}
					/>

					<View style={{ height: 20 }} />

					<View style={{ alignItems: "flex-end" }}>
						<SelectImage
							text={"Add attachment"}
							size={30}
							setImageSource={formData.attachment}
						/>
					</View>

					<View style={{ height: 20 }} />

					<Btn text={"Submit"} onPress={() => handleSubmit()} />
				</View>
			</SafeAreaView>
		</Modal>
	);
}

export function Suggestion({ visible, setVisible }) {
	const themeColor = useTheme().colors;

	const [formData, setFormData] = useState({
		email: "",
		option: "",
		details: "",
		attachment: null,
	});

	const handleData = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		console.log(formData);
	};

	const suggestOptions = [
		{ label: "Choose one", value: "" },
		{ label: "Suggest new feature", value: "Suggest new feature" },
		{ label: "UX/Design", value: "UX/Design" },
		{ label: "Others", value: "Others" },
	];

	return (
		<Modal
			isVisible={visible}
			onBackdropPress={() => setVisible(false)}
			onBackButtonPress={() => setVisible(false)}
			animationIn="slideInUp"
			animationOut="slideOutDown"
			swipeDirection="down"
			onSwipeComplete={() => setVisible(false)}
			backdropOpacity={0.5}
			style={{ margin: 0 }}
		>
			<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
				<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
					<TopBar
						isArrow={true}
						arrowPress={() => setVisible(false)}
						title={"Report a problem"}
						py={10}
					/>
					<View style={{ height: 20 }} />

					<TextInputContainer
						inputHint={"Email *"}
						backgroundColor={themeColor.secondBg}
						onChangeText={(text) => handleData("email", text)}
					/>

					<View style={{ height: 20 }} />

					<TextInputContainer
						inputHint={"Choose a topic *"}
						backgroundColor={themeColor.secondBg}
					>
						<PickerComponent
							items={suggestOptions}
							onValueChange={(text) => handleData("option", text)}
						/>
					</TextInputContainer>

					<View style={{ height: 20 }} />

					<TextInputContainer
						inputHint={"Write problem in details *"}
						backgroundColor={themeColor.secondBg}
						multiline={true}
						height={100}
						onChangeText={(text) => handleData("details", text)}
					/>

					<View style={{ height: 20 }} />

					<View style={{ alignItems: "flex-end" }}>
						<SelectImage
							text={"Add attachment"}
							size={30}
							setImageSource={formData.attachment}
						/>
					</View>

					<View style={{ height: 20 }} />

					<Btn text={"Submit"} onPress={() => handleSubmit()} />
				</View>
			</SafeAreaView>
		</Modal>
	);
}
