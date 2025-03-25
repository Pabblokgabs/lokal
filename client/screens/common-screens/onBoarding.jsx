import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import reusableStyles from "../../components/reusable/styles";
import Btn from "../../components/btn";
import { OnBoardingContext } from "../../lib/hooks/useSignIn";

const OnBoarding = () => {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const { registerOption, setRegisterOption } = useContext(OnBoardingContext);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
			<View style={reusableStyles.wrapper}>
				<View style={{ flex: 1 }} />
				<View style={{ marginBottom: 20, gap: 10, paddingHorizontal: 15 }}>
					<Text
						style={[
							reusableStyles.lgHeader,
							{ color: themeColor.text, textAlign: "center" },
						]}
					>
						Unlock the Future of
					</Text>
					<Text
						style={[
							reusableStyles.lgHeader,
							{ color: themeColor.btn, textAlign: "center" },
						]}
					>
						Spot Recommendation App
					</Text>

					<Text
						style={[
							reusableStyles.text,
							{ color: themeColor.secondText, textAlign: "center" },
						]}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
						eaque voluptatibus dicta odit vitae ipsum at consectetur suscipit
						temporibus delectus.
					</Text>

					<View style={{ height: 5 }} />

					<Btn text={"Get Started"} onPress={() => setRegisterOption(true)} />

					<Text
						style={[
							reusableStyles.header,
							{ color: themeColor.text, textAlign: "center" },
						]}
					>
						Already have an account?{" "}
						<Text
							onPress={() => navigation.navigate("signin")}
							style={{
								color: themeColor.btn,
								borderBottomWidth: 1,
								borderBottomColor: themeColor.btn,
							}}
						>
							Sign in
						</Text>
					</Text>
				</View>
			</View>

			<Modal
				isVisible={registerOption}
				onBackdropPress={() => setRegisterOption(false)}
				onBackButtonPress={() => setRegisterOption(false)}
				animationIn="zoomIn"
				animationOut="zoomOut"
				onSwipeComplete={() => setRegisterOption(false)}
				backdropOpacity={0.5}
				style={{ justifyContent: "center", alignItems: "center" }}
			>
				<View
					style={{
						padding: 15,
						backgroundColor: themeColor.secondBg,
						width: "85%",
						gap: 10,
					}}
				>
					<Text
						style={[
							reusableStyles.header,
							{ color: themeColor.text, textAlign: "center" },
						]}
					>
						Let's get you started
					</Text>

					<View style={{ height: 10 }} />

					<Btn
						text={"Personal Account"}
						onPress={() => {
							setRegisterOption(false);
							navigation.navigate("email");
						}}
					/>
					<Btn
						text={"Register Spot"}
						backgroundColor={"transparent"}
						color={themeColor.text}
						onPress={() => {
							setRegisterOption(false);
							navigation.navigate("Owner-email");
						}}
					/>
				</View>
			</Modal>
		</SafeAreaView>
	);
};

export default OnBoarding;
