import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../components/reusable/styles";
import TopBar from "../../components/topBar";
import TextInputContainer from "../../components/reusable/text.input";
import RenderItem from "../../components/help.center.render";

function HelpCenter() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [active, setActive] = useState("FAQ");

	const activeOptions = ["FAQ", "Contact Us"];

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
			<View style={[reusableStyles.wrapper]}>
				<View style={{ paddingHorizontal: 15 }}>
					<TopBar
						title={"Help Center"}
						arrowPress={() => navigation.goBack()}
						I_icon={"ellipsis-vertical"}
					/>
				</View>

				<ScrollView>
					<View style={{ height: 10 }} />

					<View style={{ paddingHorizontal: 15 }}>
						<TextInputContainer
							placeholder={"Search"}
							A_icon={"search1"}
							iconColor={themeColor.btn}
						/>
					</View>

					<View style={{ height: 30 }} />

					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							borderBottomWidth: 1,
							borderBlockColor: themeColor.border,
							paddingHorizontal: 15,
						}}
					>
						{activeOptions.map((item, index) => (
							<Pressable
								key={index}
								onPress={() => setActive(item)}
								style={{
									flex: 1,
									alignItems: "center",
									justifyContent: "center",
									paddingBottom: 10,
									borderBottomWidth: 3,
									borderBlockColor:
										item === active ? themeColor.btn : themeColor.bg,
								}}
							>
								<Text
									style={[
										reusableStyles.text,
										{
											color: item === active ? themeColor.btn : themeColor.text,
											fontSize: 20,
										},
									]}
								>
									{item}
								</Text>
							</Pressable>
						))}
					</View>

					<View style={{ height: 20 }} />

					<RenderItem active={active} />
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

export default HelpCenter;
