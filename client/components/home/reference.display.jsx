import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import ReusableStyles from "../reausable/reusableStyles";
import { useNavigation } from "@react-navigation/native";

const RefDisplay = ({ data,color }) => {
	const navigation = useNavigation();
	const label = data.label

	return (
		<TouchableOpacity onPress={() => navigation.navigate("filter", {label})}>
			<View style={{ flexDirection: "column", gap: 8 }}>
				{/* <Image
				source={{uri: data.img}}
				style={{ height: 85, width: 85, resizeMode: "cover", borderRadius: 12, borderWidth: 0.5 }}
			/> */}
				<Image
					source={require("../../assets/images/img2.jpg")}
					style={{
						height: 85,
						width: 85,
						resizeMode: "cover",
						borderRadius: 12,
					}}
				/>
				<Text style={[ReusableStyles.secondText,{color: color}]}>{data.label}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default RefDisplay;
