import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { useTheme } from "react-native-paper";
import ReviewsTile from "../reviews.tile";
import { reviews } from "../../../lib/dommyData";

export default function Reviews() {
	const themeColor = useTheme().colors;

	return (
		<FlatList
			data={reviews}
			keyExtractor={(item) => item.reviewId}
			showsVerticalScrollIndicator={false}
			renderItem={(item) => (
				<View>
					<ReviewsTile data={item.item} />
					<View
						style={{
							height: 1,
							backgroundColor: themeColor.border,
							marginVertical: 15,
						}}
					/>
				</View>
			)}
		/>
	);
}
