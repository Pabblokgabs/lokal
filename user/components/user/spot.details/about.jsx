import {
	View,
	Text,
	Image,
	TouchableOpacity,
	Pressable,
	Linking,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import reusableStyles from "../../reusable/styles";
import { spot } from "../../../lib/dommyData";
import Btn from "../../btn";
import { platformIcon } from "./render";

function About() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();
	const data = spot[0];

	return (
		<>
			<Text style={[reusableStyles.header, { color: themeColor.text }]}>
				About Spot
			</Text>

			<Text style={[reusableStyles.text, { color: themeColor.secondText }]}>
				{data.description}
			</Text>

			<View style={{ height: 10 }} />

			<Text style={[reusableStyles.header, { color: themeColor.text }]}>
				Country:
			</Text>

			<Text style={[reusableStyles.text, { color: themeColor.secondText }]}>
				{data.city}
			</Text>

			<Text style={[reusableStyles.header, { color: themeColor.text }]}>
				Oparation time:
			</Text>

			{data.operationTime === "24/7" ? (
				<Text style={[reusableStyles.text, { color: themeColor.secondText }]}>
					{data.operationTime}
				</Text>
			) : (
				<View
					style={{
						gap: 10,
					}}
				>
					{data.operationTime.map((item, index) => (
						<View
							key={index}
							style={{
								flexDirection: "row",
								alignItems: "center",
								gap: 10,
							}}
						>
							<Text style={[reusableStyles.text, { color: themeColor.text }]}>
								{item.days}:
							</Text>

							<Text
								style={[reusableStyles.text, { color: themeColor.secondText }]}
							>
								{item.time}
							</Text>
						</View>
					))}
				</View>
			)}

			<Text style={[reusableStyles.header, { color: themeColor.text }]}>
				Allowed gender:
			</Text>

			<Text style={[reusableStyles.text, { color: themeColor.secondText }]}>
				{data.gender}
			</Text>

			<Text style={[reusableStyles.header, { color: themeColor.text }]}>
				Allowed age:
			</Text>

			<Text style={[reusableStyles.text, { color: themeColor.secondText }]}>
				{data.preferredAge}
			</Text>

			<Text style={[reusableStyles.header, { color: themeColor.text }]}>
				Spot type:
			</Text>

			<View style={{ flexDirection: "row", gap: 10 }}>
				{data.spotType.map((item) => (
					<View
						key={item}
						style={{
							paddingHorizontal: 10,
							paddingVertical: 6,
							borderRadius: 10,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<View
							style={{
								position: "absolute",
								width: "100%",
								height: "100%",
								backgroundColor: themeColor.btn,
								opacity: 0.1,
								borderRadius: 10,
							}}
						/>
						<Text style={[reusableStyles.text, { color: themeColor.btn }]}>
							{item}
						</Text>
					</View>
				))}
			</View>

			{data.links.length !== 0 && (
				<>
					<Text style={[reusableStyles.header, { color: themeColor.text }]}>
						Social media:
					</Text>

					<View
						style={{
							gap: 10,
						}}
					>
						{data.links.map((item) => (
							<TouchableOpacity
								onPress={() => Linking.openURL(item.url)}
								style={{
									flexDirection: "row",
									alignItems: "center",
									gap: 10,
								}}
							>
								<Ionicons
									name={platformIcon(item.platform)}
									size={24}
									color={themeColor.btn}
								/>

								<Text
									numberOfLines={1}
									lineBreakMode="tail"
									style={[reusableStyles.text, { color: themeColor.link }]}
								>
									{item.url}
								</Text>
							</TouchableOpacity>
						))}
					</View>
				</>
			)}

			<View style={{ height: 10 }} />

			<Text style={[reusableStyles.header, { color: themeColor.text }]}>
				Manager:
			</Text>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					backgroundColor: themeColor.secondBg,
					padding: 10,
					borderRadius: 10,
				}}
			>
				<View style={{ flexDirection: "row", gap: 10, alignItem: "center" }}>
					<Image
						source={require("../../../assets/images/img.jpg")}
						style={{
							height: 50,
							width: 50,
							resizeMode: "cover",
							borderRadius: "50%",
						}}
					/>

					<View style={{ justifyContent: "center", gap: 3 }}>
						<Text style={[reusableStyles.header, { color: themeColor.text }]}>
							Pabblo kgabs
						</Text>

						<Text
							style={[reusableStyles.text, { color: themeColor.secondText }]}
						>
							Owner
						</Text>
					</View>
				</View>
				<View style={{ flexDirection: "row", gap: 10, alignItem: "center" }}>
					<TouchableOpacity
						style={{
							padding: 10,
							backgroundColor: themeColor.cont,
							borderRadius: "50%",
						}}
					>
						<MaterialIcons name="phone" size={24} color={themeColor.btn} />
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							padding: 10,
							backgroundColor: themeColor.cont,
							borderRadius: "50%",
						}}
					>
						<MaterialIcons name="message" size={24} color={themeColor.btn} />
					</TouchableOpacity>
				</View>
			</View>

			<View style={{ height: 10 }} />

			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					borderBottomColor: themeColor.border,
					borderBottomWidth: 1,
					paddingBottom: 10,
				}}
			>
				<Text style={[reusableStyles.header, { color: themeColor.text }]}>
					Address
				</Text>

				<Pressable>
					<Text style={[reusableStyles.text, { color: themeColor.btn }]}>
						View On Map
					</Text>
				</Pressable>
			</View>

			<View style={{ height: 20 }} />

			<Btn
				text={"Rate us"}
				backgroundColor={themeColor.secondBtn}
				borderColor={themeColor.secondBtn}
				onPress={() => navigation.navigate("rating", { data })}
			/>
		</>
	);
}

export default About;
