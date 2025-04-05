import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import reusableStyles from "../../../components/reusable/styles";
import Modal from "react-native-modal";
import Btn from "../../../components/btn";
import { recommended } from "../../../lib/options";

function SelectPreferences({ visible, setVisible, data, setData }) {
	const themeColor = useTheme().colors;

	const handleSelect = (item) => {
		if (!data.includes(item)) {
			setData([...data, item]);
		} else {
			const newPref = data.filter((x) => x !== item);
			setData([...newPref]);
		}
	};

	return (
		<Modal
			isVisible={visible}
			animationIn="zoomIn"
			animationOut="zoomOut"
			backdropOpacity={0.5}
			style={{ justifyContent: "center", alignItems: "center" }}
		>
			<SafeAreaView style={{ flex: 1 }}>
				<View
					style={[
						reusableStyles.wrapper,
						{ justifyContent: "center", alignItems: "center" },
					]}
				>
					<Pressable
						style={{
							flex: 1,
							width: "100%",
						}}
						onPress={() => setVisible(false)}
					/>
					<View style={{ paddingHorizontal: 15, backgroundColor: themeColor.secondbg }}>
						<Text
							style={[
								reusableStyles.lgHeader,
								{
									color: themeColor.text,
									textAlign: "center",
									marginTop: 30,
								},
							]}
						>
							What Best Descript You Spot
						</Text>

						<View style={{ height: 10 }} />

						<Text
							style={[
								reusableStyles.text,
								{
									color: themeColor.secondText,
									textAlign: "center",
								},
							]}
						>
							Personalize Your Event Journey and Spot Discovery by Chossing Your
							Preferences
						</Text>

						<View style={{ flex: 1, marginVertical: 50 }}>
							<View
								style={{
									flexDirection: "row",
									flexWrap: "wrap",
									gap: 15,
								}}
							>
								{recommended.map((item) => (
									<Pressable
										key={item.value}
										onPress={() => handleSelect(item.value)}
										style={{
											flexDirection: "row",
											alignItems: "center",
											gap: 10,
											backgroundColor: themeColor.cont,
											borderRadius: 20,
											paddingHorizontal: 13,
											paddingVertical: 8,
											borderWidth: 1,
											borderColor: data.includes(item.value)
												? themeColor.btn
												: themeColor.cont,
										}}
									>
										{item.icon}
										<Text
											style={[
												reusableStyles.text,
												{
													color: data.includes(item.value)
														? themeColor.btn
														: themeColor.text,
												},
											]}
										>
											{item.label}
										</Text>
									</Pressable>
								))}
							</View>
						</View>

						<Btn text={"Done"} onPress={() => setVisible(false)} />

						<View style={{ height: 20 }} />
					</View>
				</View>
			</SafeAreaView>
		</Modal>
	);
}

export default SelectPreferences;
