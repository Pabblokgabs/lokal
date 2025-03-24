import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AirbnbRating } from "react-native-ratings";
import reusableStyles from "../../components/reusable/styles";
import TopBar from "../../components/topBar";
import EventTile from "../../components/user/event.tile";
import RecommendedSpot from "../../components/user/recommended.spot";
import { spot, event } from "../../lib/dommyData";
import TextInputContainer from "../../components/reusable/text.input";
import SelectImage from "../../components/select.image";
import Btn from "../../components/btn";

function Review() {
	const data = useRoute().params?.data;


	const themeColor = useTheme().colors;
	const navigation = useNavigation();
	const [type, setType] = useState(data?.modelType);
	const [image, setImage] = useState(null);

	const [formData, setFormData] = useState({
		rating: 1,
		details: "",
		photo: image,
	});

	const handleData = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		console.log(formData);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
			<View style={[reusableStyles.wrapper]}>
				<View style={{ paddingHorizontal: 15 }}>
					<TopBar
						isArrow={true}
						title={"Leave Review"}
						py={10}
						arrowPress={() => navigation.goBack()}
					/>
				</View>

				<ScrollView>
					<View style={{ height: 30 }} />

					{type === "event" ? (
						<EventTile isLikeIcon={false} item={event[0]} />
					) : type === "spot" ? (
						<View style={{ paddingHorizontal: 15 }}>
							<RecommendedSpot item={spot[0]} />
						</View>
					) : (
						<></>
					)}

					<Text
						style={[
							reusableStyles.header,
							{
								color: themeColor.text,
								marginVertical: 30,
								paddingHorizontal: 15,
								textAlign: "center",
								fontSize: 22,
							},
						]}
					>
						How was your experience?
					</Text>

					<View
						style={{
							height: 1,
							backgroundColor: themeColor.border,
							marginHorizontal: 15,
						}}
					/>

					<View style={{ paddingHorizontal: 15 }}>
						<AirbnbRating
							size={40}
							defaultRating={formData.rating}
							count={5}
							ratingContainerStyle={{ paddingHorizontal: 20 }}
							onFinishRating={(value) => handleData("rating", value)}
						/>
					</View>

					<View style={{ height: 20 }} />

					<View style={{ paddingHorizontal: 15, gap: 15, marginVertical: 20 }}>
						<Text
							style={[
								reusableStyles.text,
								{
									color: themeColor.text,
								},
							]}
						>
							Add detailed review
						</Text>

						<TextInputContainer
							multiline={true}
							height={200}
							placeholder={"Enter here"}
							onChangeText={(text) => handleData("details", text)}
						/>

						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "flex-end",
							}}
						>
							<SelectImage
								setImageSource={setImage}
								size={24}
								text={"Add photo"}
							/>
						</View>
					</View>

					<View style={{ paddingHorizontal: 15 }}>
						<Btn text={"Submit"} onPress={() => handleSubmit()} />
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

export default Review;
