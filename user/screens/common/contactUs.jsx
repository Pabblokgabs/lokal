import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../components/reusable/styles";
import TopBar from "../../components/topBar";
import TextInputContainer from "../../components/reusable/text.input";
import Btn from "../../components/btn";

export default function ContactUs() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [formData, setFormData] = useState({
		email: "",
		name: "",
		message: "",
	});

	const handleForm = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		console.log(formData);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
			<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
				<TopBar
					arrowPress={() => navigation.goBack()}
					title={"Contact us"}
				/>

				<ScrollView>
					<View style={{ height: 20 }} />

					<Text
						style={[
							reusableStyles.header,
							{ color: themeColor.text, textAlign: "center", marginBottom: 5 },
						]}
					>
						We'd love to hear from you!
					</Text>

					<Text
						style={[
							reusableStyles.text,
							{ color: themeColor.secondText, textAlign: "center" },
						]}
					>
						Send us a message and our team will respond shortly.
					</Text>

					<View style={{ height: 30 }} />

					<TextInputContainer
						inputHint={"Email"}
						placeholder={"example@gmail.com"}
						onChangeText={(text) => handleForm("email", text)}
					/>

					<View style={{ height: 20 }} />

					<TextInputContainer
						inputHint={"Name"}
						placeholder={"John Doe"}
						onChangeText={(text) => handleForm("name", text)}
					/>

					<View style={{ height: 20 }} />

					<TextInputContainer
						inputHint={"Message"}
						placeholder={"Enter your message in details!"}
						onChangeText={(text) => handleForm("message", text)}
						multiline={true}
						height={250}
					/>

					<View style={{ height: 30 }} />

					<Btn text={"Submit"} onPress={() => handleSubmit()} />

				</ScrollView>
			</View>
		</SafeAreaView>
	);
}
