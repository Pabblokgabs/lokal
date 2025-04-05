import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import { contact, faq } from "../lib/options";
import reusableStyles from "./reusable/styles";
import { AntDesign } from "@expo/vector-icons";

const Component = (data) => {
	const themeColor = useTheme().colors;

	const [open, setOpen] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	const handlePress = (label) => {
		setOpen(label);
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		setIsOpen(true);
	}, [open]);

	return data.map((item, index) => (
		<View
			key={index}
			style={{
				borderColor: themeColor.border,
				borderWidth: 1,
				borderRadius: 10,
				marginHorizontal: 15,
				marginBottom: 20,
			}}
		>
			<Pressable
				onPress={() => handlePress(item.label)}
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					paddingHorizontal: 10,
					paddingVertical: 12,
				}}
			>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						gap: 10,
					}}
				>
					{item?.icon && <>{item.icon}</>}
					<Text
						numberOfLines={1}
						lineBreakMode="tail"
						style={[
							reusableStyles.text,
							{ color: themeColor.text, fontWeight: "700" },
						]}
					>
						{item.label}
					</Text>
				</View>

				<AntDesign
					name={isOpen && open === item.label ? "up" : "down"}
					size={24}
					color={themeColor.btn}
				/>
			</Pressable>

			{isOpen && open === item.label && (
				<View
					style={{
						borderTopWidth: 1,
						borderTopColor: themeColor.border,
						paddingVertical: 20,
						marginHorizontal: 10,
					}}
				>
					<Text style={[reusableStyles.text, { color: themeColor.secondText }]}>
						{item.value}
					</Text>
				</View>
			)}
		</View>
	));
};

const FAQ = () => {
	return Component(faq);
};

const ContactUs = () => {
	return Component(contact);
};

export default RenderItem = ({ active }) => {
	switch (active) {
		case "FAQ":
			return <FAQ />;
		case "Contact Us":
			return <ContactUs />;
		default:
			return <FAQ />;
	}
};
