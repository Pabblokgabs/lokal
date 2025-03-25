import { View, FlatList, Image } from "react-native";
import React from "react";

function ImageStack({ images, height = 40, width = 40 }) {
	return (
		<FlatList
			data={images.slice(0, 4)}
			horizontal
			keyExtractor={(item, index) => item.url || index}
			renderItem={({ item, index }) => (
				<View style={{ position: "absolute", left: index * 20 }}>
					<Image
						source={require("../assets/images/img2.jpg")}
						style={{
							width: width,
							height: height,
							borderRadius: "50%",
							resizeMode: "cover",
						}}
					/>
				</View>
			)}
		/>
	);
}

export default ImageStack;
