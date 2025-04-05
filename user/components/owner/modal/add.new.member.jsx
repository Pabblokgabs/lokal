import { View, Text, Image, PanResponder, Pressable } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import reusableStyles from "../../reusable/styles";
import TopBar from "../../topBar";
import Btn from "../../btn";

function AddNewMember({ visible, setVisible, email, emailModal, setWarning }) {
	const themeColor = useTheme().colors;

	const [role, setRole] = useState("");
	const [isRoleModal, setIsRoleModal] = useState(false);

	const handleNotOne = () => {
		setVisible(false);
		emailModal(true);
		setWarning("email");
	};

	const handleSubmit = () => {
		setWarning("add");
	};

	const panResponder = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onPanResponderMove: (evt, gestureState) => {
			if (gestureState.dy > 20) {
				setIsRoleModal(false);
			}
		},

		onPanResponderRelease: () => {
			setIsRoleModal(false);
		},
	});

	return (
		<Modal
			isVisible={visible}
			animationIn="zoomIn"
			animationOut="zoomOut"
			style={{ margin: 0 }}
		>
			<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
				<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
					<TopBar py={20} arrowPress={() => setVisible(false)} />

					<View style={{ height: 10 }} />

					<Text
						style={[
							reusableStyles.header,
							{ color: themeColor.text, textAlign: "center" },
						]}
					>
						1 user found for the email
					</Text>

					<View style={{ height: 10 }} />

					<Text
						style={[
							reusableStyles.header,
							{ color: themeColor.btn, textAlign: "center" },
						]}
					>
						{email}
					</Text>

					<View style={{ height: 20 }} />

					<View
						style={{
							backgroundColor: themeColor.secondBg,
							padding: 10,
							borderRadius: 10,
							gap: 15,
						}}
					>
						<View
							style={{ flexDirection: "row", gap: 10, alignItem: "center" }}
						>
							<Image
								source={require("../../../assets/images/img.jpg")}
								style={{
									height: 50,
									width: 50,
									resizeMode: "cover",
									borderRadius: "50%",
								}}
							/>

							<View style={{ justifyContent: "center", gap: 3 }}>
								<Text
									style={[reusableStyles.header, { color: themeColor.text }]}
								>
									Pabblo kgabs
								</Text>

								{role !== "" && (
									<Text
										style={[
											reusableStyles.text,
											{ color: themeColor.secondText },
										]}
									>
										{role}
									</Text>
								)}
							</View>
						</View>

						{role === "" ? (
							<View
								style={{ flexDirection: "row", alignItem: "center", gap: 10 }}
							>
								<View style={{ flex: 1 }}>
									<Btn
										text={"Not The One"}
										backgroundColor={themeColor.secondBtn}
										borderColor={themeColor.secondBtn}
										onPress={() => handleNotOne()}
									/>
								</View>

								<View style={{ flex: 1 }}>
									<Btn text={"Add"} onPress={() => setIsRoleModal(true)} />
								</View>
							</View>
						) : (
							<Btn text={"Submit new member"} />
						)}
					</View>
				</View>
			</SafeAreaView>

			<Modal
				isVisible={isRoleModal}
				onBackdropPress={() => setIsRoleModal(false)}
				onBackButtonPress={() => setIsRoleModal(false)}
				animationIn="slideInUp"
				animationOut="slideOutDown"
				swipeDirection="down"
				onSwipeComplete={() => setIsRoleModal(false)}
				backdropOpacity={0.5}
				style={{ justifyContent: "flex-end", margin: 0 }}
			>
				<View
					style={{
						height: "30%",
						bottom: 0,
						backgroundColor: themeColor.secondBg,
						borderTopRightRadius: 15,
						borderTopLeftRadius: 15,
					}}
				>
					<View
						style={{
							marginTop: 10,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Pressable
							{...panResponder.panHandlers}
							style={{
								height: 5,
								backgroundColor: themeColor.border,
								width: "40%",
							}}
						/>
					</View>
					<View
						style={{
							padding: 15,
							marginTop: 20,
							flex: 1,
							width: "100%",
						}}
					>
						<View style={{ flex: 1 }}></View>
						<Btn text={"Done"} />
					</View>
				</View>
			</Modal>
		</Modal>
	);
}

export default AddNewMember;
