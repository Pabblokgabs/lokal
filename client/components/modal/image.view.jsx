import {
	View,
	Text,
	Modal,
	ScrollView,
	Image,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import ReusableStyles from "../reausable/reusableStyles";

const ImageModal = ({ visible, setVisible, data }) => {
	const themeColor = useTheme().colors;
	const { height } = Dimensions.get("window");

	return (
		<Modal animationType="fade" visible={visible} transparent={true}>
			<SafeAreaView>
				<View
					style={{
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						height: height,
					}}
				>
					<View
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							height: "100%",
							width: "100%",
							backgroundColor: themeColor.secondaryBackground,
							opacity: 0.9,
						}}
					/>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "flex-end",
							width: "90%",
              marginBottom: 20
						}}
					>
						<TouchableOpacity
							onPress={() => setVisible(false)}
							style={{
								padding: 10,
								flexDirection: "row",
								alignItems: "center",
								gap: 5,
								backgroundColor: themeColor.background,
								borderRadius: 10,
							}}
						>
							<AntDesign name="close" size={20} color={themeColor.text} />
							<Text
								style={[ReusableStyles.secHeader, { color: themeColor.text }]}
							>
								close
							</Text>
						</TouchableOpacity>
					</View>
					<View style={{ width: "90%", height: height / 1.2 }}>
						<Image
							source={require("../../assets/images/img2.jpg")}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
						/>
					</View>
				</View>
			</SafeAreaView>
		</Modal>
	);
};

export default ImageModal;
