import {
	View,
	Text,
	ScrollView,
	Pressable,
	TouchableOpacity,
	FlatList,
	Animated,
	Image,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import reusableStyles from "../../components/reusable/styles";
import CreateTile from "../../components/owner/create";
import TopBar from "../../components/topBar";
import SelectImage from "../../components/select.image";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import TextInputContainer from "../../components/reusable/text.input";
import Btn from "../../components/btn";
import moment from "moment";
import BouncyChecbox from "react-native-bouncy-checkbox";
import { gender } from "../../lib/options";

function CreateEvent() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const entranceEg = ["Free", "Ticket"];

	const [formData, setFormData] = useState({
		name: "",
		description: "",
		date: "",
		time: "",
		entrance: "Free",
		media: [],
		instructions: [],
		isAgeRestricted: false,
		gender: "Any",
	});

	const [instructionValue, setInstructionValue] = useState("");
	const [substringCount, setSubstringCount] = useState(40);
	const [dateModal, setDateModal] = useState(false);
	const [timeModal, setTimeModal] = useState(false);

	const handleFormData = (data, value) => {
		setFormData({ ...formData, [data]: value });
	};

	const handleInstData = (text) => {
		setInstructionValue(text);

		if (substringCount <= 40) {
			setSubstringCount(40 - text.substring().length);
		}
	};

	const handleAddInstruction = (item) => {
		!formData.instructions.includes(item.trim())
			? formData.instructions.push(item.trim())
			: setInstructionValue("");

		setInstructionValue("");
	};

	const handleRemoveInstructions = (item) => {
		const updatedInstruction = formData.instructions.filter(
			(instruction) => instruction !== item
		);

		setFormData({ ...formData, instructions: updatedInstruction });
	};

	const generateDates = () => {
		const dates = [];

		for (let i = 0; i < 6; i++) {
			const date = moment().add(i, "days");

			let displayDate;

			if (i === 0) {
				displayDate = "Today";
			} else if (i === 1) {
				displayDate = "Tommorow";
			} else if (i === 2) {
				displayDate = "Day after";
			} else {
				displayDate = date.format("Do MMMM");
			}

			dates.push({
				id: i.toString(),
				displayDate,
				dayOfWeek: date.format("ddd"),
				actualDate: date.format("Do MMMM"),
			});
		}

		return dates;
	};

	const dates = generateDates();

	const [animations, setAnimations] = useState({
		Any: new Animated.Value(1),
		Male: new Animated.Value(0),
		Female: new Animated.Value(0),
	});

	const handleGenderPress = (item) => {
		setFormData({ ...formData, gender: item });

		const newAnimations = { ...animations };

		Object.keys(newAnimations).forEach((key) => {
			Animated.timing(newAnimations[key], {
				toValue: 0,
				duration: 200,
			}).start();
		});

		const animation = new Animated.Value(0);

		Animated.timing(animation, {
			toValue: 1,
			duration: 200,
		}).start();

		newAnimations[item] = animation;
		setAnimations(newAnimations);
	};

	const getAnimation = (item) => {
		if (!animations[item]) {
			animations[item] = new Animated.Value(0);
		}

		return animations[item];
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
			<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<TopBar arrowPress={() => navigation.goBack()} />

					<View style={{ height: 20 }} />

					<Text style={[reusableStyles.lgHeader, { color: themeColor.text }]}>
						Create Event
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

					{formData.media.length > 0 && formData.media.length <= 4 && (
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
								{formData.media.map((item, index) => (
									<View key={index} style={{ width: "31.5%", height: 80 }}>
										<Image
											source={require("../../assets/images/img2.jpg")}
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

								{formData.media.length <= 4 && (
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
					/>

					<CreateTile
						isArrow={true}
						placeholder={"Enter here..."}
						title={"Vanue"}
						editable={false}
						value={"Shipping lifestyle"}
					/>

					<Pressable onPress={() => setDateModal(true)}>
						<CreateTile
							isArrow={true}
							placeholder={"Pick Exact Date"}
							title={"Date"}
							editable={false}
							value={formData.date}
						/>
					</Pressable>

					<Pressable onPress={() => setTimeModal(true)}>
						<CreateTile
							isArrow={true}
							placeholder={"Pick Exact Time"}
							title={"Time"}
							editable={false}
							value={formData.time}
						/>
					</Pressable>

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

					<View
						style={{
							gap: 20,
							borderBottomWidth: 1,
							borderBottomColor: themeColor.border,
							paddingVertical: 15,
						}}
					>
						<Text style={[reusableStyles.header, { color: themeColor.text }]}>
							Entrance
						</Text>

						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
								gap: 20,
							}}
						>
							{entranceEg.map((item) => (
								<Pressable
									onPress={() => handleFormData("entrance", item)}
									key={item}
									style={{
										flex: 1,
										paddingVertical: 15,
										backgroundColor:
											item === formData.entrance
												? themeColor.btn
												: themeColor.cont,
										flexDirection: "row",
										alignItems: "center",
										gap: 10,
										borderRadius: 10,
										justifyContent: "center",
									}}
								>
									<Ionicons
										name="ticket"
										size={24}
										color={
											item === formData.entrance ? "white" : themeColor.icon
										}
									/>
									<Text
										style={[
											reusableStyles.text,
											{
												color:
													item === formData.entrance
														? "white"
														: themeColor.text,
												fontSize: 20,
											},
										]}
									>
										{item}
									</Text>
								</Pressable>
							))}
						</View>
					</View>

					<Text
						style={[
							reusableStyles.header,
							{ color: themeColor.text, marginVertical: 15 },
						]}
					>
						Add instructions
					</Text>

					<View
						style={{
							paddingHorizontal: 10,
							paddingVertical: 15,
							borderRadius: 10,
							backgroundColor: themeColor.cont,
							gap: 10,
						}}
					>
						{formData.instructions.length === 0 ? (
							<>
								<Text
									style={[reusableStyles.header, { color: themeColor.text }]}
								>
									Example:
								</Text>
								<View
									style={{
										flexDirection: "row",
										alignItems: "center",
										gap: 10,
										justifyContent: "space-between",
									}}
								>
									<Text
										style={[
											reusableStyles.header,
											{ color: themeColor.text, fontSize: 16 },
										]}
									>
										Don't be late
									</Text>
									<AntDesign name="delete" size={20} color={themeColor.btn} />
								</View>
							</>
						) : (
							formData.instructions.map((item, index) => (
								<View
									key={index}
									style={{
										flexDirection: "row",
										alignItems: "center",
										gap: 10,
										justifyContent: "space-between",
									}}
								>
									<Text
										style={[
											reusableStyles.header,
											{ color: themeColor.text, fontSize: 17 },
										]}
									>
										{item}
									</Text>
									<TouchableOpacity
										onPress={() => handleRemoveInstructions(item)}
									>
										<AntDesign name="delete" size={20} color={themeColor.btn} />
									</TouchableOpacity>
								</View>
							))
						)}

						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								gap: 5,
								marginTop: 15,
							}}
						>
							<View style={{ flex: 1 }}>
								<TextInputContainer
									height={50}
									backgroundColor={themeColor.bg}
									borderColor={themeColor.bg}
									onChangeText={(text) => handleInstData(text)}
									value={instructionValue}
								/>
							</View>

							<TouchableOpacity
								onPress={() => handleAddInstruction(instructionValue)}
								disabled={substringCount < 0}
								style={{
									paddingHorizontal: 15,
									height: "100%",
									backgroundColor: themeColor.btn,
									borderRadius: 10,
									justifyContent: "center",
									alignItems: "center",
									marginBottom: 5,
									opacity: substringCount < 0 ? 0.5 : 1,
								}}
							>
								<Ionicons name="add" size={20} color={"white"} />
							</TouchableOpacity>
						</View>
						<Text
							style={[
								reusableStyles.otherText,
								{
									color:
										substringCount < 0 ? themeColor.red : themeColor.secondText,
								},
							]}
						>
							{substringCount < 0
								? "Your instruction is too long"
								: `${substringCount} charaters left`}
						</Text>
					</View>

					<View style={{ height: 20 }} />

					<Text style={[reusableStyles.header, { color: themeColor.text }]}>
						Gender
					</Text>

					<View style={{ height: 10 }} />

					<View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
						{gender.map((item) => (
							<TouchableOpacity
								onPress={() => handleGenderPress(item)}
								key={item}
								style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
							>
								<Animated.View
									style={{
										width: 20,
										height: 20,
										borderRadius: "50%",
										borderColor: themeColor.border,
										borderWidth: 1,
										justifyContent: "center",
										alignItems: "center",
										backgroundColor: getAnimation(item).interpolate({
											inputRange: [0, 1],
											outputRange: ["transparent", themeColor.btn],
										}),

										transform: [
											{
												scale: getAnimation(item).interpolate({
													inputRange: [0, 1],
													outputRange: [1, 1],
												}),
											},
										],
									}}
								></Animated.View>
								<Text style={[reusableStyles.text, { color: themeColor.text }]}>
									{item}
								</Text>
							</TouchableOpacity>
						))}
					</View>

					<View style={{ height: 20 }} />

					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<BouncyChecbox
							size={20}
							fillColor={themeColor.btn}
							unfillColor="transparent"
							onPress={() =>
								handleFormData("isAgeRestricted", !formData.isAgeRestricted)
							}
							iconStyle={{ borderColor: themeColor.border }}
							isChecked={formData.isAgeRestricted}
						/>

						<Text style={[reusableStyles.text, { color: themeColor.text }]}>
							Only 18+ allowed
						</Text>
					</View>

					<View style={{ height: 30 }} />

					<Btn text={"Submit"} />

					<View style={{ height: 20 }} />
				</ScrollView>
			</View>

			<Modal
				isVisible={dateModal}
				onBackdropPress={() => setDateModal(false)}
				onBackButtonPress={() => setDateModal(false)}
				animationIn="slideInUp"
				animationOut="slideOutDown"
				swipeDirection="down"
				onSwipeComplete={() => setDateModal(false)}
				backdropOpacity={0.5}
				style={{ justifyContent: "flex-end", margin: 0 }}
			>
				<View
					style={{
						bottom: 0,
						backgroundColor: themeColor.secondBg,
						borderTopRightRadius: 15,
						borderTopLeftRadius: 15,
						height: "40%",
						paddingHorizontal: 15,
						paddingVertical: 20,
					}}
				>
					<Text style={[reusableStyles.text, { color: themeColor.text }]}>
						Choose date for the event
					</Text>

					<View style={{ height: 20 }} />

					<ScrollView>
						<FlatList
							data={dates}
							keyExtractor={(item) => item.actualDate}
							showsVerticalScrollIndicator={false}
							numColumns={3}
							contentContainerStyle={{ gap: 15 }}
							renderItem={({ item }) => (
								<TouchableOpacity
									onPress={() => {
										handleFormData("date", item.actualDate),
											setDateModal(false);
									}}
									style={{
										flex: 1,
										borderWidth: 1,
										marginHorizontal: 5,
										borderColor: themeColor.border,
										borderRadius: 10,
										alignItems: "center",
										paddingVertical: 15,
									}}
								>
									<Text
										style={[reusableStyles.text, { color: themeColor.text }]}
									>
										{item.displayDate}
									</Text>
									<Text
										style={[
											reusableStyles.text,
											{ color: themeColor.secondText },
										]}
									>
										{item.dayOfWeek}
									</Text>
								</TouchableOpacity>
							)}
						/>
					</ScrollView>
				</View>
			</Modal>

			<Modal
				isVisible={timeModal}
				onBackdropPress={() => setTimeModal(false)}
				onBackButtonPress={() => setTimeModal(false)}
				animationIn="slideInUp"
				animationOut="slideOutDown"
				swipeDirection="down"
				onSwipeComplete={() => setTimeModal(false)}
				backdropOpacity={0.5}
				style={{ justifyContent: "flex-end", margin: 0 }}
			>
				<View
					style={{
						bottom: 0,
						backgroundColor: themeColor.secondBg,
						borderTopRightRadius: 15,
						borderTopLeftRadius: 15,
						height: "40%",
						paddingHorizontal: 15,
						paddingVertical: 20,
					}}
				>
					<Text style={[reusableStyles.header, { color: themeColor.text }]}>
						Choose the duration of your event
					</Text>

					<View style={{ height: 20 }} />

					<View
						style={{
							alignItems: "center",
							justifyContent: "center",
							flex: 1,
							gap: 10,
						}}
					>
						<Text
							style={[
								reusableStyles.header,
								{ color: themeColor.text, textAlign: "center", fontSize: 22 },
							]}
						>
							Start Time
						</Text>

						<TouchableOpacity style={{ alignItems: "center" }}>
							<Text
								style={[
									reusableStyles.text,
									{ color: themeColor.link, fontSize: 20 },
								]}
							>
								Select Time
							</Text>
						</TouchableOpacity>

						<View style={{ height: 10 }} />

						<Text
							style={[
								reusableStyles.header,
								{ color: themeColor.text, textAlign: "center", fontSize: 22 },
							]}
						>
							End Time
						</Text>

						<TouchableOpacity style={{ alignItems: "center" }}>
							<Text
								style={[
									reusableStyles.text,
									{ color: themeColor.link, fontSize: 20 },
								]}
							>
								Select Time
							</Text>
						</TouchableOpacity>
					</View>

					<View style={{ height: 20 }} />
				</View>
			</Modal>
		</SafeAreaView>
	);
}

export default CreateEvent;
