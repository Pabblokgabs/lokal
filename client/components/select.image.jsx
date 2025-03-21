import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ImagePicker from "react-native-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import reusableStyles from "./reusable/styles";

const SelectImage = ({
	setImageSource,
	color,
	size,
	children,
	text,
	textcolor,
}) => {
	const themeColor = useTheme().colors;

	const handleSelectImage = () => {
		const options = {
			title: "Select Image",
			storageOptions: {
				skipBackUp: true,
				path: "images",
			},
		};

		ImagePicker.launchImageLibrary(options, (response) => {
			if (response.didCancel) {
				console.log("User cancelled image picker");
			} else if (response.error) {
				console.log("ImagePicker Error", error);
			} else {
				const source = { uri: response.uri };
				setImageSource(source);
			}
		});
	};

	return (
		<TouchableOpacity
			style={text && { flexDirection: "row", alignItems: "center", gap: 5 }}
			onPress={handleSelectImage}
		>
			{children ? (
				children
			) : (
				<>
					<Ionicons
						name="camera-outline"
						size={size}
						color={color ? color : themeColor.btn}
					/>
					{text && (
						<Text
							style={[
								reusableStyles.text,
								{ color: textcolor ? textcolor : themeColor.btn },
							]}
						>
							{text}
						</Text>
					)}
				</>
			)}
		</TouchableOpacity>
	);
};

export default SelectImage;
