import { View, Text } from "react-native";
import React from "react";
import reusableStyles from "../../reusable/styles";
import ThemeChanger from "../../ThemeChanger";
import Animated, {
	asin,
	cos,
	divide,
	Extrapolate,
	interpolate,
	multiply,
	sub,
	useValue,
} from "react-native-reanimated";
import GestureHandler from "./GestureHandler";
import { translateZ, } from "react-native-redash";

function Picker({ value, defauldValue }) {
	const translateY = useValue(0);
	const perspective = 20;
	const RADIUS_REL = 2.5;
	const RADIUS = 2.5 * 20;
	const ITEM_HIEGHT = 20;

	return (
		<View style={{ height: 200 }}>
			<Animated.Value style={{ transform: [{ translateY }] }}>
				{value.map((item, index) => {
					const y = interpolate(
						divide(sub(translateY, ITEM_HIEGHT * 2), -ITEM_HIEGHT),
						{
							inputRange: [index - RADIUS_REL, index, index + RADIUS_REL],
							outputRange: [-1, 1, 1],
							extrapolate: Extrapolate.CLAMP,
						}
					);

					const rotateX = asin(y);
					const z = sub(multiply(RADIUS, cos(rotateX)), RADIUS);
					return (
						<Animated.View
							key={item.code}
							style={[
								{ height: 60 },
								{
									transform: [
										{ perspective },
										{ rotateX },
										translateZ(perspective, z),
									],
								},
							]}
						>
							<Text style={[reusableStyles.text, { color: ThemeChanger.text }]}>
								{item.country}
							</Text>
						</Animated.View>
					);
				})}
			</Animated.Value>

			<GestureHandler max={value.length} {...{ translateY }} />
		</View>
	);
}

export default Picker;
