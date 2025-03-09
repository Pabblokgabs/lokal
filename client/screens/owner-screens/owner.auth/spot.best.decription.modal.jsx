import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import ReusableBtn from "../../../components/reausable/ReusableBtn";
import { activityOptions, socialOptions } from "../../../lib/options";
import { TEXT } from "../../../constance/sizes";
import ReusableStyles from "../../../components/reausable/reusableStyles";

function SpotBestDescription({
	visible,
	setVisible,
	setActivities,
	activities,
	social,
	setSocial,
}) {
	const themeColor = useTheme().colors;

	const handleActivityPress = (activity) => {
		if (!activities.includes(activity)) {
			setActivities([...activities, activity]);
		} else {
			setActivities(activities.filter((a) => a !== activity));
		}
	};

	const handleSocialPress = (socialOptions) => {
		if (!social.includes(socialOptions)) {
			setSocial([...social, socialOptions]);
		} else {
			setSocial(social.filter((s) => s !== socialOptions));
		}
	};

	const handleSave = () => {
		setVisible(false);
	};

	return (
		<Modal visible={visible} animationType="fade" transparent={true}>
			<View style={styles.wrapper}>
				<View
					style={[
						styles.backgroundShades,
						{ backgroundColor: themeColor.background },
					]}
				/>
				<View
					style={[
						styles.container,
						{
							backgroundColor: themeColor.secondaryBackground,
						},
					]}
				>
					<View
						style={{
							width: "100%",
							flexDirection: "row",
							justifyContent: "flex-end",
						}}
					>
						<TouchableOpacity onPress={() => setVisible(false)}>
							<Ionicons name={"close"} size={30} color={themeColor.btn} />
						</TouchableOpacity>
					</View>
					<View>
						<Text
							style={[ReusableStyles.secHeader,{
								color: themeColor.text,
							}]}
						>
							What best describe your spot.
						</Text>
						<View style={styles.optionsWrapper}>
							<View style={{ flexDirection: "column", gap: 15 }}>
								<Text
									style={{
										fontWeight: "500",
										color: themeColor.text,
										fontSize: TEXT.medium,
									}}
								>
									Activity
								</Text>
								<View style={styles.optionContainer}>
									{activityOptions.map((item) => (
										<TouchableOpacity
											key={item.value}
											onPress={() => handleActivityPress(item.value)}
											style={[
												styles.options,
												{
													borderColor: themeColor.link,
													backgroundColor: activities.includes(item.value)
														? themeColor.link
														: "transparent",
												},
											]}
										>
											<Text
												style={{
													color: activities.includes(item.value)
														? "#fff"
														: themeColor.text,
												}}
											>
												{item.label}
											</Text>
										</TouchableOpacity>
									))}
								</View>
							</View>
							<View style={styles.optionsWrapper}>
								<View style={{ flexDirection: "column", gap: 10 }}>
									<Text
										style={{
											fontWeight: "500",
											color: themeColor.text,
											fontSize: TEXT.medium,
										}}
									>
										Social
									</Text>
									<View style={styles.optionContainer}>
										{socialOptions.map((item) => (
											<TouchableOpacity
												key={item.value}
												onPress={() => handleSocialPress(item.value)}
												style={[
													styles.options,
													{
														borderColor: themeColor.link,
														backgroundColor: social.includes(item.value)
															? themeColor.link
															: "transparent",
													},
												]}
											>
												<Text
													style={{
														color: social.includes(item.value)
															? "#fff"
															: themeColor.text,
													}}
												>
													{item.label}
												</Text>
											</TouchableOpacity>
										))}
									</View>
								</View>
							</View>
						</View>
					</View>
					<View
						style={{
							marginTop: 20,
						}}
					>
						<ReusableBtn
							btnText={"Save"}
							width={"100%"}
							backgroundColor={themeColor.btn}
							onPress={() => handleSave()}
							borderColor={"transparent"}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

export default SpotBestDescription;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	backgroundShades: {
		opacity: 0.8,
		position: "absolute",
		width: "100%",
		height: "100%",
		left: 0,
		top: 0,
	},
	container: {
		padding: 20,
		borderRadius: 10,
		width: "80%",
		zIndex: 1,
	},
	optionContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 10,
	},
	options: {
		paddingHorizontal: 10,
		paddingTop: 3,
		paddingBottom: 6,
		borderWidth: 0.5,
		borderRadius: 5,
	},
	optionsWrapper: {
		marginTop: 10,
		flexDirection: "column",
		gap: 10,
	},
});
