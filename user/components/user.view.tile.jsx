import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import reusableStyles from "./reusable/styles";

const UserView = ({ item, onPress, isBorder }) => {
	const themeColor = useTheme().colors;

	return (
		<Pressable
			onPress={onPress}
			style={[
				{
					paddingVertical: 10,
					flexDirection: "row",
					gap: 15,
				},
				isBorder && {
					paddingVertical: 20,
					borderBottomColor: themeColor.border,
					borderBottomWidth: 1,
				},
			]}
		>
			<Image
				source={require("../assets/images/img.jpg")}
				style={{
					width: 50,
					height: 50,
					resizeMode: "cover",
					borderRadius: 25,
				}}
			/>
			<View
				style={{
					gap: 5,
					flex: 1,
				}}
			>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<Text
						style={[reusableStyles.header, { color: themeColor.text, flex: 1 }]}
					>
						Pabblo kgabs
					</Text>
					<Text
						style={[
							reusableStyles.text,
							{ color: themeColor.text, marginLeft: 15 },
						]}
					>
						1min
					</Text>
				</View>
				<Text
					numberOfLines={1}
					lineBreakMode="tail"
					style={[reusableStyles.text, { color: themeColor.secondText }]}
				>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae
					deserunt cum quod porro voluptatibus sit, vitae placeat laborum in
					mollitia enim perferendis? Animi, nostrum hic? Placeat animi non
					totam!
				</Text>
			</View>
		</Pressable>
	);
};

export default UserView;
