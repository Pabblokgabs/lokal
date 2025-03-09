import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import styles from "../../styleSheet/welcome.style";
import ReusableBtn from "../../components/reausable/ReusableBtn";
import { useNavigation } from "@react-navigation/native";
import ReusableStyles from "../../components/reausable/reusableStyles";

const Welcome = () => {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	return (
		<SafeAreaView>
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<Image
					source={require("../../assets/images/img2.jpg")}
					style={styles.imgContainer}
				/>
				<View style={styles.infoContainer}>
					<Text style={[ReusableStyles.secHeader, { color: themeColor.text }]}>
						Never miss any event on your favorite "spot"
					</Text>
					<ReusableBtn
						backgroundColor={"tranparent"}
						borderColor={themeColor.btn}
						btnText={"Log in"}
						width={"100%"}
						color={themeColor.text}
						onPress={() => navigation.navigate("login")}
					/>
					<ReusableBtn
						backgroundColor={themeColor.btn}
						borderColor={themeColor.btn}
						btnText={"Register"}
						width={"100%"}
						onPress={() => navigation.navigate("personal-OR-spot-account")}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Welcome;
