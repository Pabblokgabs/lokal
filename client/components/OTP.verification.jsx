import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import OtpTextInput from "react-native-otp-textinput";
import ReusableBtn from "./reausable/ReusableBtn";

function OTPVerificationComponent({ onBtnPress, OnResent, setCode, code }) {
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
			<View style={{ marginBottom: 10 }}>
				<OtpTextInput
					handleTextChange={setCode}
					inputCount={4}
					keyboardType="numeric"
					textInputStyle={{
						borderColor: "transparent",
						borderWidth: 0,
						borderRadius: 6,
						height: 45,
						borderWidth: 0.5,
						borderBottomWidth: 0.2,
						textAligh: "center",
						outlineStyle: "none",
						shadowColor: "transparent",
						backgroundColor: themeColor.background,
						color: themeColor.secondaryText,
					}}
				/>
			</View>
			<ReusableBtn
				onPress={onBtnPress}
				width={"100%"}
				btnText={"verify"}
				backgroundColor={themeColor.btn}
				borderColor={themeColor.btn}
				disabled={code === ""}
				opacity={code === "" ? 0.5 : 1}
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
							color: themeColor.secondaryText,
							opacity: isDisabled ? 0.5 : 1,
						}}
					>
						Resent Code.
					</Text>
				</TouchableOpacity>
				{isDisabled && <Text style={{ color: themeColor.text }}>{time}s</Text>}
			</View>
		</View>
	);
}

export default OTPVerificationComponent;
