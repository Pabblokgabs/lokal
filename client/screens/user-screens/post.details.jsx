import {
	View,
	Text,
	ScrollView,
	Image,
	Dimensions,
	Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import ReusableStyles from "../../components/reausable/reusableStyles";
import TopBar from "../../components/topBar";
import ImageModal from "../../components/modal/image.view";

function PostDetails() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();
	const route = useRoute();
	const { width } = Dimensions.get("window");

	const [post, setPost] = useState("");

	const [imageModal, setImageModal] = useState(true);

	useEffect(() => {
		if (route.params?.post !== undefined) return setPost(route.params?.post);
		if (route.params?.display !== undefined)
			return setPost(route.params?.display);
	}, []);

	return (
		<SafeAreaView>
			<ImageModal visible={imageModal} setVisible={setImageModal} />
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<TopBar
					arrowName={"arrowleft"}
					arrowOnPress={() => navigation.goBack()}
					text={post.title}
				/>
				<ScrollView>
					<Pressable onPress={() => setImageModal(true)}>
						<Image
							source={require("../../assets/images/img2.jpg")}
							style={{
								height: 400,
								width: "100%",
								objectFit: "cover",
								borderRadius: 20,
							}}
						/>
					</Pressable>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

export default PostDetails;
