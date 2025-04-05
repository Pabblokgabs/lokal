import { Modal, View } from "react-native";
import React from "react";
import {
	BeatLoader,
	ClipLoader,
	DotLoader,
	HashLoader,
	PuffLoader,
	PulseLoader,
	SyncLoader,
} from "react-spinners";
import { useTheme } from "react-native-paper";
import reusableStyles from "../reusable/styles";

const PendingSpinner = ({ height, width }) => {
	const themeColor = useTheme().colors;

	return (
		<Modal visible={true} animationType="fade" transparent={true}>
			<View
				style={[
					reusableStyles.wrapper,
					{
						alignItems: "center",
						justifyContent: "center",
					},
				]}
			>
				<View
					style={{
						position: "absolute",
						backgroundColor: themeColor.secondBtn,
						opacity: 0.2,
						flex: 1,
						width: "100%",
						top: 0,
						left: 0,
						bottom: 0,
						right: 0
					}}
				/>
				<ClipLoader
					loading={true}
					color={themeColor.btn}
					height={height}
					width={width}
				/>
			</View>
		</Modal>
	);
};

export default PendingSpinner;
