import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
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

	const handleSelectImage = async () => {
		// Request permission to access the media library
		const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (!permissionResult.granted) {
			Alert.alert("Permission required", "Please grant access to your media library.");
			return;
		}

		// Launch the image picker
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		// If the user didn't cancel, use the image
		if (!result.canceled && result.assets && result.assets.length > 0) {
			const pickedImage = result.assets[0];
			setImageSource({ uri: pickedImage.uri });
		}
	};

	return (
		<TouchableOpacity
			style={text ? { flexDirection: "row", alignItems: "center", gap: 5 } : {}}
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
