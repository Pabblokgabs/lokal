import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import ReusableStyles from "../../../../components/reausable/reusableStyles";
import TopBar from "../../../../components/topBar";
import ReusableBtn from "../../../../components/reausable/ReusableBtn";

function ProfilePhoto() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();
	const [photo, setPhoto] = useState("")

	useEffect(() => {
			getRegistrationProgress("Photo").then((progressData) => {
				if (progressData) {
					setEmail(progressData.photo || "");
				}
			});
		}, []);

	const handleSetImage = () => {

		if (email.trim() !== "") {
			saveRegistrationProgress("Photo", { photo });
		}

		navigation.navigate("setting-profile");
	};

	return (
		<SafeAreaView>
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<TopBar
					arrowName={"arrowleft"}
					arrowOnPress={() => navigation.goBack()}
				/>
				<Text style={[ReusableStyles.header, { color: themeColor.text }]}>
					Set Your Profile Photo
				</Text>

				<Text style={{ color: themeColor.secondaryText }}>
					Choose from the Avatars below or upload your photo
				</Text>
				<ReusableBtn
					width={"100%"}
					btnText={"Next"}
					onPress={handleSetImage}
					backgroundColor={themeColor.btn}
					borderColor={themeColor.btn}
				/>
				<View style={{ height: 20 }} />
			</View>
		</SafeAreaView>
	);
}

export default ProfilePhoto;
