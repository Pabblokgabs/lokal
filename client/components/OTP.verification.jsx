import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import OtpTextInput from "react-native-otp-textinput";
import Btn from "./btn";
import reusableStyles from "./reusable/styles";

function OTPVerificationComponent({ onBtnPress, OnResent, setCode, isBtn }) {
	const themeColor = useTheme().colors;

	const [time, setTime] = useState(30);
	const isDisabled = time > 0 ? true : false;
	useEffect(() => {
		const countDownInterval = setInterval(() => {
			if (time > 0) {
				setTime((prev) => prev - 1);
			} else {
				clearInterval(countDownInterval);
			}
		}, 1000);

		return () => clearInterval(countDownInterval);
	}, [time]);

	return (
		<View style={{ flexDirection: "column", gap: 10 }}>
			<View style={{ alignItems: "center", justifyContent: "center", gap: 10, marginVertical: 20 }}>
				<Text style={[reusableStyles.lgHeader, { color: themeColor.text }]}>
					Verify Email
				</Text>
				<Text style={[reusableStyles.text, { color: themeColor.text }]}>
					Please enter the Code sent to the following email:
				</Text>
				<Text style={[reusableStyles.header, { color: themeColor.btn }]}>
					example@gmail.com
				</Text>
			</View>
			<View style={{ marginBottom: 10 }}>
				<OtpTextInput
				i={(index, isFocused) => ({borderColor: isFocused && themeColor.btn})}
					handleTextChange={setCode}
					inputCount={4}
					keyboardType="numeric"
					textInputStyle={{
						borderColor: "transparent",
						borderWidth: 0,
						borderRadius: 15,
						height: 60,
						width: "20%",
						borderWidth: 0.5,
						borderBottomWidth: 0.2,
						textAligh: "center",
						outlineStyle: "none",
						shadowColor: "transparent",
						backgroundColor: themeColor.bg,
						color: themeColor.secondText,
					}}
				/>
			</View>

			<View style={{ height: 20 }} />

			{isBtn && (
				<>
					<Btn
						text={"Submit"}
						backgroundColor={themeColor.btn}
						onPress={onBtnPress}
					/>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							gap: 5,
							marginTop: 10,
						}}
					>
						<TouchableOpacity disabled={isDisabled} onPress={OnResent}>
							<Text
								style={{
									color: themeColor.secondText,
									opacity: isDisabled ? 0.5 : 1,
								}}
							>
								Resent Code.
							</Text>
						</TouchableOpacity>
						{isDisabled && (
							<Text style={{ color: themeColor.text }}>{time}s</Text>
						)}
					</View>
				</>
			)}
		</View>
	);
}

export default OTPVerificationComponent;
