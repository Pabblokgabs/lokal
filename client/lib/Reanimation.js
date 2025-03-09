import { Animated, Easing } from "react-native";
import { Value } from "react-native-reanimated";

const ModalAnimation = () => {
	const animation = new Value(0);

	const slideIn = () => {
		Animated.timing(animation, {
			toValue: 1,
			duration: 300,
			easing: Easing.inOut(Easing.ease),
		}).start();
	};

	const slideOut = () => {
		Animated.timing(animation, {
			toValue: 0,
			duration: 300,
			easing: Easing.inOut(Easing.ease),
		}).start();
	};

	return { animation, slideIn, slideOut };
};

export default ModalAnimation;
