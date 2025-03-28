import { View, Text, Pressable, PanResponder } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import Btn from "../../../btn";

const EditImage = ({ visible, setVisible }) => {
	const themeColor = useTheme().colors;

	const panResponder = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onPanResponderMove: (evt, gestureState) => {
			if (gestureState.dy > 20) {
				setIsPicModal(false);
			}
		},

		onPanResponderRelease: () => {
			setIsPicModal(false);
		},
	});

	return (
		<Modal
			isVisible={visible}
			onBackdropPress={() => setVisible(!visible)}
			onBackButtonPress={() => setVisible(!visible)}
			animationIn="slideInUp"
			animationOut="slideOutDown"
			swipeDirection="down"
			onSwipeComplete={() => setVisible(!visible)}
			backdropOpacity={0.5}
			style={{ justifyContent: "flex-end", margin: 0 }}
		>
			<SafeAreaView>
				<View
					style={{
						height: "50%",
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
						<Btn backgroundColor={themeColor.btn} text={"Update"} />
					</View>
				</View>
			</SafeAreaView>
		</Modal>
	);
};

export default EditImage;
