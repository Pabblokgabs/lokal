import { View, Text } from "react-native";
import React from "react";
import { SIZES } from "../../constance/sizes";

export default function OnScrollView({data}) {
	return (
		<View
    key={data.header}
			style={{
        width: SIZES.width,
				justifyContent: "center",
				alignItems: "center",
				padding:10,
        gap: 10
			}}
		>
			<Text style={{fontSize: 24, fontWeight: "700", color: 'white'}}>{data.header}</Text>
			<Text style={{fontSize: 18, color: 'white'}}>{data.text}</Text>
		</View>
	);
}
