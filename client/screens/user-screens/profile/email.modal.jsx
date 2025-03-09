import { Text, View, Modal } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import ReusableStyles from "../../../components/reausable/reusableStyles";
import TopBar from "../../../components/topBar";
import ReusableBtn from "../../../components/reausable/ReusableBtn";
import styles from "../../../styleSheet/profile.styles";

function EmailModal({ visible, setVisible, setEmailEdit }) {
	const themeColor = useTheme().colors;

	const handleChanges = () => {
		setEmailEdit(true);

		setTimeout(() => {
			setVisible(false);
		}, 1000);
	};

	return (
		<Modal visible={visible} animationType="slide" transparent={false}>
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<TopBar
					arrowName={"arrowleft"}
					text={"Change Email"}
					arrowOnPress={() => setVisible(false)}
				/>
				<View style={ReusableStyles.container}>
					<View style={styles.emailModalContainer}>
						<View style={{ height: 10 }} />
						<Text
							style={[ReusableStyles.secHeader, { color: themeColor.text }]}
						>
							Important: To ensure the security of your account, please note
							that changing your your email address requires verification
						</Text>

						<Text
							style={[
								ReusableStyles.text,
								{ color: themeColor.secondaryText, marginVertical: 10 },
							]}
						>
							To proceed, you will need to provide:
						</Text>

						<Text
							style={[
								ReusableStyles.text,
								{
									color: themeColor.secondaryText,
									flexDirection: "row",
									alignItems: "center",
								},
							]}
						>
							<View
								style={[
									ReusableStyles.dot,
									{ backgroundColor: themeColor.text },
								]}
							/>
							Your current email address for verification purpose
						</Text>
						<Text
							style={[
								ReusableStyles.text,
								{
									color: themeColor.secondaryText,
									flexDirection: "row",
									alignItems: "center",
								},
							]}
						>
							<View
								style={[
									ReusableStyles.dot,
									{ backgroundColor: themeColor.text },
								]}
							/>
							Your new email address
						</Text>

						<Text
							style={[
								ReusableStyles.text,
								{ color: themeColor.secondaryText, marginVertical: 10 },
							]}
						>
							By providing both email address, you acknowledge that you are the
							legitimate owner of the account
						</Text>
					</View>
					<ReusableBtn
						btnText={"Next"}
						borderColor={themeColor.btn}
						backgroundColor={themeColor.btn}
						color={"white"}
						onPress={handleChanges}
					/>
					<View style={{ height: 20 }} />
				</View>
			</View>
		</Modal>
	);
}

export default EmailModal;
