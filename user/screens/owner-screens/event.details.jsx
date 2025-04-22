import {
	View,
	Text,
	ScrollView,
	Pressable,
	TouchableOpacity,
	Image,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
	AntDesign,
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import Modal from "react-native-modal";
import reusableStyles from "../../components/reusable/styles";
import Btn from "../../components/btn";

function EventDetails() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [stuck, setStuck] = useState(false);
	const [viewAll, setViewAll] = useState(false);
	const [ellipsisModal, setEllipsisModal] = useState(false);
	const [isDeleteModal, setIsDeleteModal] = useState(false);

	const handleScroll = (event) => {
		const scrollY = event.nativeEvent.contentOffset.y;

		if (scrollY > 15 && !stuck) {
			setStuck(true);
		} else if (scrollY <= 10 && stuck) {
			setStuck(false);
		}
	};

	const type = ["Music", "Dance", "Foodie"];
	const going = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	return (
		<>
			<View style={reusableStyles.wrapper}>
				{stuck && (
					<View
						style={{
							position: "absolute",
							top: 0,
							width: "100%",
							padding: 15,
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							backgroundColor: themeColor.bg,
							zIndex: 1000000,
							borderBottomWidth: 0.5,
							borderBottomColor: themeColor.border,
						}}
					>
						<TouchableOpacity
							onPress={() => navigation.goBack()}
							style={{
								padding: 10,
								alignItems: "center",
								justifyContent: "center",
								backgroundColor: themeColor.cont,
								borderRadius: "50%",
							}}
						>
							<AntDesign name="arrowleft" size={24} color={themeColor.text} />
						</TouchableOpacity>

						<View
							style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
						>
							<TouchableOpacity
								style={{
									padding: 7,
									alignItems: "center",
									justifyContent: "center",
									backgroundColor: themeColor.cont,
									borderRadius: "50%",
								}}
							>
								<MaterialCommunityIcons
									name="share-variant"
									size={24}
									color={themeColor.text}
								/>
							</TouchableOpacity>

							<TouchableOpacity
								style={{
									padding: 7,
									alignItems: "center",
									justifyContent: "center",
									backgroundColor: themeColor.cont,
									borderRadius: "50%",
								}}
							>
								<Ionicons
									name="ellipsis-vertical"
									size={24}
									color={themeColor.text}
								/>
							</TouchableOpacity>
						</View>
					</View>
				)}

				<ScrollView
					onScroll={handleScroll}
					scrollEventThrottle={16}
					showsVerticalScrollIndicator={false}
					style={{ flex: 1, backgroundColor: themeColor.bg }}
				>
					<Image
						source={require("../../assets/images/img2.jpg")}
						style={{ resizeMode: "cover", height: 300, width: "100%" }}
					/>

					<View
						style={{
							position: "absolute",
							top: 30,
							left: 0,
							paddingHorizontal: 15,
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							width: "100%",
							zIndex: 10,
						}}
					>
						<TouchableOpacity
							onPress={() => navigation.goBack()}
							style={{
								padding: 10,
								alignItems: "center",
								justifyContent: "center",
								backgroundColor: themeColor.secondBg,
								borderRadius: "50%",
							}}
						>
							<AntDesign name="arrowleft" size={24} color={themeColor.text} />
						</TouchableOpacity>

						<View
							style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
						>
							<TouchableOpacity
								style={{
									padding: 7,
									alignItems: "center",
									justifyContent: "center",
									backgroundColor: themeColor.secondBg,
									borderRadius: "50%",
								}}
							>
								<MaterialCommunityIcons
									name="share-variant"
									size={24}
									color={themeColor.text}
								/>
							</TouchableOpacity>

							<TouchableOpacity
								onPress={() => setEllipsisModal(true)}
								style={{
									padding: 7,
									alignItems: "center",
									justifyContent: "center",
									backgroundColor: themeColor.secondBg,
									borderRadius: "50%",
								}}
							>
								<Ionicons
									name="ellipsis-vertical"
									size={24}
									color={themeColor.text}
								/>
							</TouchableOpacity>

							{ellipsisModal && (
								<Modal
									onBackdropPress={() => setEllipsisModal(false)}
									onBackButtonPress={() => setEllipsisModal(false)}
									animationIn="fadeIn"
									animationOut="fadeOut"
									onSwipeComplete={() => setEllipsisModal(false)}
									backdropOpacity={0}
									visible={ellipsisModal}
									onRequestClose={() => setEllipsisModal(false)}
                  style={{margin: 0}}
								>
									<View
										style={[
											reusableStyles.modalView,
											{
												backgroundColor: themeColor.secondBg,
												width: 200,
												top: 80,
											},
										]}
									>
										<TouchableOpacity onPress={() => setEllipsisModal(false)}>
											<Text
												style={[
													reusableStyles.text,
													{ color: themeColor.text, fontSize: 22 },
												]}
											>
												Edit
											</Text>
										</TouchableOpacity>

										<View
											style={{ height: 1, backgroundColor: themeColor.border }}
										/>

										<TouchableOpacity
											onPress={() => {
												setEllipsisModal(false), setIsDeleteModal(true);
											}}
										>
											<Text
												style={[
													reusableStyles.text,
													{ color: themeColor.text, fontSize: 22 },
												]}
											>
												Delete
											</Text>
										</TouchableOpacity>
									</View>
								</Modal>
							)}
						</View>
					</View>

					<View
						style={{
							position: "absolute",
							top: 140,
							left: 0,
							paddingHorizontal: 15,
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
							width: "100%",
						}}
					>
						<TouchableOpacity
							style={{
								paddingHorizontal: 20,
								paddingVertical: 10,
								flexDirection: "row",
								gap: 10,
								backgroundColor: "white",
								borderRadius: 10,
							}}
						>
							<AntDesign
								name="picture"
								size={24}
								color={themeColor.secondBtn}
							/>
							<Text
								style={[
									reusableStyles.text,
									{ color: themeColor.secondBtn, fontSize: 22 },
								]}
							>
								View All
							</Text>
						</TouchableOpacity>
					</View>

					<View
						style={{
							top: -20,
							backgroundColor: themeColor.bg,
							borderTopRightRadius: 20,
							borderTopLeftRadius: 20,
							paddingHorizontal: 15,
							paddingVertical: 20,
							gap: 20,
						}}
					>
						<View
							style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
						>
							{type.map((item) => (
								<View
									key={item}
									style={{
										paddingHorizontal: 10,
										paddingVertical: 6,
										borderRadius: 10,
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<View
										style={{
											position: "absolute",
											width: "100%",
											height: "100%",
											backgroundColor: themeColor.btn,
											opacity: 0.1,
											borderRadius: 10,
										}}
									/>
									<Text
										style={[reusableStyles.text, { color: themeColor.btn }]}
									>
										{item}
									</Text>
								</View>
							))}
						</View>

						<Text style={[reusableStyles.lgHeader, { color: themeColor.text }]}>
							Dijong Life Style
						</Text>

						<View
							style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
						>
							<View
								style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
							>
								<Ionicons name="location" size={20} color={themeColor.btn} />

								<Text
									style={[
										reusableStyles.text,
										{ color: themeColor.secondText },
									]}
								>
									Polokwane, SA
								</Text>
							</View>

							<View
								style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
							>
								<Ionicons name="time" size={20} color={themeColor.btn} />

								<Text
									style={[
										reusableStyles.text,
										{ color: themeColor.secondText },
									]}
								>
									Sep 29 - 10:00PM
								</Text>
							</View>
						</View>

						{going.length !== 0 && (
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<View
									style={{
										flexDirection: "row",
										alignItems: "center",
										height: 40,
									}}
								>
									<View
										style={{
											flex: 1,
											height: "100%",
											width:
												going.length === 4
													? 80
													: going.length === 3
													? 60
													: going.length === 2
													? 40
													: going.length === 1
													? 20
													: going.length === 0
													? 0
													: 80,
										}}
									>
										{going.slice(0, 4).map((item, index) => (
											<View
												key={item}
												style={{ position: "absolute", left: index * 20 }}
											>
												<Image
													source={require("../../assets/images/img2.jpg")}
													style={{
														width: 40,
														height: 40,
														borderRadius: 20,
														resizeMode: "cover",
													}}
												/>
											</View>
										))}
									</View>

									<Text
										style={[
											reusableStyles.header,
											{
												color: themeColor.text,
												marginLeft: going.length !== 0 && 30,
											},
										]}
									>
										{going.length}
									</Text>
								</View>

								<Pressable onPress={() => setViewAll(true)}>
									<Text
										style={[
											reusableStyles.text,
											{ color: themeColor.btn, fontSize: 20 },
										]}
									>
										View All
									</Text>
								</Pressable>
							</View>
						)}

						<Text style={[reusableStyles.header, { color: themeColor.text }]}>
							About Event
						</Text>

						<Text
							style={[reusableStyles.text, { color: themeColor.secondText }]}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium repellat aspernatur reprehenderit sapiente placeat
							culpa facere assumenda perspiciatis facilis, rem, obcaecati neque
							et illo voluptatem modi delectus distinctio corrupti commodi.
						</Text>

						<Text style={[reusableStyles.header, { color: themeColor.text }]}>
							Organiser:
						</Text>

						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
								backgroundColor: themeColor.secondBg,
								padding: 10,
								borderRadius: 10,
							}}
						>
							<View
								style={{ flexDirection: "row", gap: 10, alignItem: "center" }}
							>
								<Image
									source={require("../../assets/images/img.jpg")}
									style={{
										height: 50,
										width: 50,
										resizeMode: "cover",
										borderRadius: 25,
									}}
								/>

								<View style={{ justifyContent: "center", gap: 3 }}>
									<Text
										style={[reusableStyles.header, { color: themeColor.text }]}
									>
										Pabblo kgabs
									</Text>

									<Text
										style={[
											reusableStyles.text,
											{ color: themeColor.secondText },
										]}
									>
										Manager
									</Text>
								</View>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>

			<Modal
				isVisible={isDeleteModal}
				onBackdropPress={() => setIsDeleteModal(false)}
				onBackButtonPress={() => setIsDeleteModal(false)}
				animationIn="zoomIn"
				animationOut="zoomOut"
				onSwipeComplete={() => setIsDeleteModal(false)}
				backdropOpacity={0.7}
				style={{ justifyContent: "center", alignItems: "center" }}
			>
				<View
					style={{
						padding: 15,
						backgroundColor: themeColor.secondBg,
						width: "85%",
						gap: 10,
						borderRadius: 10,
					}}
				>
					<Text
						style={[
							reusableStyles.header,
							{ color: themeColor.text, textAlign: "center", flex: 1 },
						]}
					>
						This action can not be undone!
					</Text>

					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							gap: 10,
							marginTop: 10,
						}}
					>
						<View style={{ flex: 1 }}>
							<Btn
								text={"Cancel"}
								backgroundColor={themeColor.secondBtn}
								borderColor={themeColor.secondBtn}
								onPress={() => setIsDeleteModal(false)}
							/>
						</View>

						<View style={{ flex: 1 }}>
							<Btn text={"Continue"} />
						</View>
					</View>
				</View>
			</Modal>
		</>
	);
}

export default EventDetails;
