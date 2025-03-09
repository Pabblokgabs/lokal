import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ReusableStyles from "../../../components/reausable/reusableStyles";
import TopBar from "../../../components/topBar";
import ReusableBtn from "../../../components/reausable/ReusableBtn";
import SpotBestDescription from "./spot.best.decription.modal";

function Photos() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	/* handle the spot's best decription from the modal */
	const [modalVisible, setModalVisible] = useState(false);
	const [activities, setActivities] = useState([]);
	const [social, setSocial] = useState([]);

	console.log("activities", activities);
	console.log("social", social);

	const [photos, setPhotos] = useState(["hey"]);

	const handleSubmit = () => {
		
	};

	return (
		<View
			style={[
				ReusableStyles.wrapper,
				{ backgroundColor: themeColor.background },
			]}
		>
			<SpotBestDescription
				visible={modalVisible}
				setVisible={setModalVisible}
				activities={activities}
				setActivities={setActivities}
				setSocial={setSocial}
				social={social}
			/>
			<TopBar
				arrowName={"arrowleft"}
				arrowOnPress={() => navigation.goBack()}
			/>
			<ScrollView style={ReusableStyles.container}>
				<Text style={[ReusableStyles.header, { color: themeColor.text }]}>
					Photos
				</Text>

				<View style={{ height: 5 }} />

				<Text
					style={[ReusableStyles.text, { color: themeColor.secondaryText }]}
				>
					You can upload up to five photos. The photos will be used for viewing
					when your Spot discovered.
				</Text>

				<View style={{ height: 20 }} />

				{/* {photos.map((item) => (
					<Image
						source={require(item)}
						key={item}
						style={{
							width: "100%",
							height: 250,
							objectFit: "cover",
							marginBottom: 10,
						}}
					/>
				))} */}

				<View style={{ height: 80 }} />
			</ScrollView>
			<View
				style={{
					position: "absolute",
					bottom: 20,
					width: "100%",
					left: 0,
					right: 0,
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{activities.length === 0 || social.length === 0 ? (
					<ReusableBtn
						width={"95%"}
						btnText={"Next"}
						onPress={()=>setModalVisible(true)}
						disabled={photos.length === 0 ? true : false}
						backgroundColor={"transparent"}
						borderColor={themeColor.btn}
						color={themeColor.btn}
						opacity={photos.length === 0 ? 0.5 : 1}
					/>
				) : (
					<ReusableBtn
						width={"95%"}
						btnText={"Submit"}
						onPress={() => handleSubmit()}
						backgroundColor={themeColor.btn}
						borderColor={themeColor.btn}
					/>
				)}
			</View>
		</View>
	);
}

export default Photos;
