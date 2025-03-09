import React, { useContext } from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "react-native-paper";

import { SIZES } from "../constance/sizes";
import { ThemeContext } from "../lib/ThemeContext";
import ReusableStyles from "./reausable/reusableStyles";

const themes = ["dark", "light"];

const ThemeChanger = ({ visible, setVisible }) => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const themeColor = useTheme().colors;

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
					ReusableStyles.wrapper,
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
						height: SIZES.height,
						width: SIZES.width,
						backgroundColor: themeColor.background,
						opacity: 0.5,
					}}
				/>
				<View
					style={{
						width: "80%",
						padding: 20,
						backgroundColor: themeColor.secondaryBackground,
					}}
				>
					<Text
						style={{
							textAlign: "center",
							color: themeColor.text,
							fontSize: 20,
						}}
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
									height: 15,
									width: 15,
									borderRadius: "50%",
									borderWidth: 0.5,
									borderColor: themeColor.borderColor,
									backgroundColor:
										theme === kgabs ? themeColor.btn : "transparent",
								}}
							/>
							<Text style={{ marginLeft: 10, color: themeColor.text }}>
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
