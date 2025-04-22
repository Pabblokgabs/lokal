import React, { useContext } from "react";
import { Modal, Pressable, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { useTheme } from "react-native-paper";

import { ThemeContext } from "../lib/ThemeContext";
import reusableStyles from "./reusable/styles";

const themes = ["dark", "light"];

const ThemeChanger = ({ visible, setVisible }) => {
	const { theme, toggleTheme } = useContext(ThemeContext);	
	const themeColor = useTheme().colors;
	const {height, width} = Dimensions.get('window')

	const handleThemeChange = (newTheme) => {
		if (newTheme !== theme) {
			toggleTheme();
			setVisible(false);
		}
	};

	return (
		<Modal animationType="fade" transparent={true} visible={visible}>
			<View
				style={[
					reusableStyles.wrapper,
					{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
					},
				]}
			>
				<Pressable
				onPress={() => setVisible(false)}
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						height: height,
						width: width,
						backgroundColor: themeColor.bg,
						opacity: 0.7,
					}}
				/>
				<View
					style={{
						width: "80%",
						padding: 20,
						backgroundColor: themeColor.secondBg,
						borderRadius: 10
					}}
				>
					<Text
						style={[reusableStyles.header,{
							textAlign: "center",
							color: themeColor.text,
						}]}
					>
						Change theme
					</Text>
					{themes.map((kgabs) => (
						<TouchableOpacity
							key={kgabs}
							onPress={() => handleThemeChange(kgabs)}
							style={{
								flexDirection: "row",
								alignItems: "center",
								paddingVertical: 20,
							}}
						>
							<View
								style={{
									height: 20,
									width: 20,
									borderRadius: 10,
									borderWidth: 0.5,
									borderColor: themeColor.border,
									backgroundColor:
										theme === kgabs ? themeColor.btn : "transparent",
								}}
							/>
							<Text style={[reusableStyles.text,{ marginLeft: 10, color: themeColor.text }]}>
								{kgabs}
							</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>
		</Modal>
	);
};

export default ThemeChanger;
