import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	Image,
	Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import reusableStyles from "../../components/reusable/styles";
import TopBar from "../../components/topBar";
import LocationAccess from "../../components/modals/location.access";
import CreateTile from "../../components/owner/create";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import SelectImage from "../../components/select.image";
import TextInputContainer from "../../components/reusable/text.input";
import Modal from "react-native-modal";
import Btn from "../../components/btn";
import countries from "../../lib/countries";
import { genders, recommended } from "../../lib/options";
import CustomPicker from "../../components/customPicker";

function ListSpot() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [locationAccessModal, setLocationAccessModal] = useState(false);
	const [selectModal, setSelectModal] = useState(false);
	const [selected, setSelected] = useState([]);
	const [i, setI] = useState(null);
	

	const [formData, setFormData] = useState({
		name: "",
		description: "",
		entrance: "Free",
		photos: [],
		preferredGender: "Any",
		operationDayTime: [],
		address: "",
		location: { latitude: "", longitude: "" },
		spotType: [],
		country: "",
		city: "",
		links: [],
		preferredAge: 18,
	});
	console.log(formData);

	useEffect(() => {
		handleFormData("spotType", selected);
	}, [selected]);

	const handleFormData = (data, value) => {
		setFormData({ ...formData, [data]: value });
	};

	const handleSelect = (item) => {
		if (!selected.includes(item)) {
			setSelected([...selected, item]);
		} else {
			const newPref = selected.filter((x) => x !== item);
			setSelected([...newPref]);
		}
	};

	return (
		<>
			<LocationAccess
				visible={locationAccessModal}
				setVisible={setLocationAccessModal}
			/>
			<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
				<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
					<ScrollView showsVerticalScrollIndicator={false}>
						<TopBar arrowPress={() => navigation.goBack()} />

						<View style={{ height: 20 }} />

						<Text style={[reusableStyles.lgHeader, { color: themeColor.text }]}>
							Register Your Spot
						</Text>

						<View style={{ height: 10 }} />

						<Text
							style={[reusableStyles.text, { color: themeColor.secondText }]}
						>
							To successfully register your spot, fill the form with accurate
							information
						</Text>

						<View style={{ height: 30 }} />

						<SelectImage path={"images"}>
							<View
								style={{
									height: 200,
									width: "100%",
									alignItems: "center",
									justifyContent: "center",
									borderWidth: 1,
									borderColor: themeColor.btn,
									borderRadius: 10,
								}}
							>
								<Ionicons name="images" color={themeColor.btn} size={40} />
							</View>
						</SelectImage>

						{formData.photos.length > 0 && formData.photos.length <= 4 && (
							<>
								<View
									style={{
										flexDirection: "row",
										alignItems: "center",
										gap: 10,
										flexWrap: "wrap",
										marginTop: 15,
										flex: 1,
									}}
								>
									{formData.photos.map((item, index) => (
										<View key={index} style={{ width: "31.5%", height: 80 }}>
											<Image
												source={require("../../assets/images/img.jpg")}
												style={{
													width: "100%",
													height: "100%",
													resizeMode: "cover",
													borderRadius: 10,
												}}
											/>

											<TouchableOpacity
												style={{
													position: "absolute",
													right: 5,
													top: 5,
												}}
											>
												<AntDesign
													name="delete"
													size={18}
													color={themeColor.btn}
												/>
											</TouchableOpacity>
										</View>
									))}

									{formData.photos.length <= 4 && (
										<View style={{ width: "31.5%", height: 80 }}>
											<SelectImage path={"images"} size={40}>
												<View
													style={{
														height: 80,
														width: "100%",
														alignItems: "center",
														justifyContent: "center",
														borderWidth: 1,
														borderColor: themeColor.btn,
														borderRadius: 10,
													}}
												>
													<Ionicons
														name="images"
														color={themeColor.btn}
														size={40}
													/>
												</View>
											</SelectImage>
										</View>
									)}
								</View>
							</>
						)}

						<View style={{ height: 20 }} />

						<CreateTile
							isArrow={true}
							placeholder={"Enter here..."}
							title={"Name"}
							value={formData.name}
							onChangeText={(text) => handleFormData("name", text)}
						/>

						<CreateTile
							isArrow={true}
							placeholder={"Enter here..."}
							title={"Address"}
							value={formData.address}
							onChangeText={(text) => handleFormData("address", text)}
						/>

						<CreateTile
							isArrow={true}
							placeholder={"Enter here..."}
							title={"Country"}
							value={formData.country}
							onChangeText={(text) => handleFormData("country", text)}
						/>

						<CreateTile
							isArrow={true}
							placeholder={"Enter here..."}
							title={"City"}
							value={formData.city}
							onChangeText={(text) => handleFormData("city", text)}
						/>

						<CustomPicker
							items={countries}
							placeholder={{
								label: 'Select a Country',
								value: null,
							}}
							onValueChange={(text) => handleFormData('city', text)}
							selectedValue={formData.city}
						/>

						<Text
							style={[
								reusableStyles.header,
								{ color: themeColor.text, marginVertical: 15 },
							]}
						>
							Description
						</Text>

						<TextInputContainer
							multiline={true}
							height={100}
							placeholder={"Description"}
							value={formData.description}
						/>

						<View style={{ height: 20 }} />

						<Btn text={"Submit"} />

						<View style={{ height: 20 }} />
					</ScrollView>
				</View>

				<Modal
					isVisible={selectModal}
					onBackdropPress={() => setSelectModal(false)}
					onBackButtonPress={() => setSelectModal(false)}
					animationIn="zoomIn"
					animationOut="zoomOut"
					onSwipeComplete={() => setSelectModal(false)}
					backdropOpacity={0.5}
					style={{ justifyContent: "center", alignItems: "center" }}
				>
					<View
						style={{
							padding: 15,
							backgroundColor: themeColor.secondBg,
							width: "100%",
							gap: 10,
						}}
					>
						<Text
							style={[
								reusableStyles.lgHeader,
								{
									color: themeColor.text,
									textAlign: "center",
								},
							]}
						>
							What Best Descript You Spot
						</Text>

						<View style={{ flex: 1, marginVertical: 50 }}>
							<View
								style={{
									flexDirection: "row",
									flexWrap: "wrap",
									gap: 15,
								}}
							>
								{recommended.map((item) => (
									<Pressable
										key={item.value}
										onPress={() => handleSelect(item.value)}
										style={{
											flexDirection: "row",
											alignItems: "center",
											gap: 10,
											backgroundColor: themeColor.cont,
											borderRadius: 20,
											paddingHorizontal: 13,
											paddingVertical: 8,
											borderWidth: 1,
											borderColor: selected.includes(item.value)
												? themeColor.btn
												: themeColor.cont,
										}}
									>
										{item.icon}
										<Text
											style={[
												reusableStyles.text,
												{
													color: selected.includes(item.value)
														? themeColor.btn
														: themeColor.text,
												},
											]}
										>
											{item.label}
										</Text>
									</Pressable>
								))}
							</View>
						</View>

						<Btn
							text={"Done"}
							disabled={selected.length < 1}
							opacity={selected.length < 1 ? 0.5 : 1}
							onPress={() => setSelectModal(false)}
						/>
					</View>
				</Modal>
			</SafeAreaView>
		</>
	);
}

export default ListSpot;
