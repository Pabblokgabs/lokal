import { View, Modal } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import ReusableStyles from "../../reausable/reusableStyles";
import TopBar from "../../topBar";
import AboutTile from "../../tile/about.tile";

function About({ visible, setVisible }) {
	const themeColor = useTheme().colors;

	return (
		<Modal animationType="slide" transparent={false} visible={visible}>
			<View
				style={[
					ReusableStyles.wrapper,
					{ backgroundColor: themeColor.background },
				]}
			>
				<TopBar
					arrowName={"arrowleft"}
					text={"About"}
					textAlign={"start"}
					arrowOnPress={() => setVisible(false)}
				/>
				<View style={[ReusableStyles.container, {gap: 30, marginTop: 20}]}>
          <AboutTile title={"TheSpot Privacy Policy"} value={"Read TheSpot privacy policy"} />
          <AboutTile title={"Libraries"} value={"Read about libraries used to build the app"} />
          <AboutTile title={"App Vision"} value={"1.0.0"} />
        </View>
			</View>
		</Modal>
	);
}

export default About;
