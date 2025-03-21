import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AirbnbRating } from "react-native-ratings";
import { useTheme } from "react-native-paper";
import reusableStyles from "../reusable/styles";

export default ReviewTile = ({ data }) => {
	const themeColor = useTheme().colors;

	return (
		<View style={{ paddingHorizontal: 15, gap: 10 }}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					marginBottom: 5,
				}}
			>
				<View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
					<Image
						source={require("../../assets/images/img.jpg")}
						style={{
							height: 40,
							width: 40,
							borderRadius: "50%",
							resizeMode: "cover",
						}}
					/>

					<Text style={[reusableStyles.header, { color: themeColor.text }]}>
						{data.userName}
					</Text>
				</View>

				<Text style={[reusableStyles.text, { color: themeColor.secondText }]}>
					{data.createdAt}
				</Text>
			</View>

			<Text style={[reusableStyles.text, { color: themeColor.secondText }]}>
				{data.message}
			</Text>
			<View
				style={{
					flexDirection: "row",
					alignItems: "flex-end",
					gap: 10,
					marginTop: -10,
				}}
			>
				<AirbnbRating
					size={20}
					defaultRating={data.ratings}
					count={5}
					isDisabled={true}
					reviews={false}
				/>
				<Text style={[reusableStyles.header, { color: themeColor.text }]}>
					({data.ratings.toString()})
				</Text>
			</View>

			{data?.reviewImages.length !== 0 && (
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						gap: 15,
						marginTop: 10,
					}}
				>
					{data?.reviewImages.map((item) => (
						<TouchableOpacity style={{ flex: 1 }}>
							<Image
								source={require("../../assets/images/img.jpg")}
								style={{
									width: data?.reviewImages.length === 1 ? "50%" : "100%",
									height: 150,
									resizeMode: "cover",
									borderRadius: 10,
								}}
							/>
						</TouchableOpacity>
					))}
				</View>
			)}
		</View>
	);
};
