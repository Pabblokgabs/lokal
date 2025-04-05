import React from "react";
import Animated, {
	add,
	block,
	Clock,
	cond,
	Easing,
	eq,
	set,
	startClock,
	timing,
	useCode,
	Value,
} from "react-native-reanimated";
import {
	snapPoint,
	usePanGestureHandler,
	PanGestureHandler,
} from "react-native-redash";
import { State } from "react-native-gesture-handler";

const withSnapInterval = ({
	value,
	velocity,
	state: gestureState,
	snapPoints,
}) => {
	const clock = new Clock();
	const offset = new Value(0);
	const state = {
		position: new Value(0),
		finished: new Value(0),
		time: new Value(0),
		frameTime: new Value(0),
	};

	const config = {
		toValue: new Value(0),
		easing: Easing.bezier(0.25, 1, 0.5, 1),
		duration: 1000,
	};
	return block([
		startClock(clock),
		cond(eq(gestureState, State.BEGAN), [
			set(offset, state.position),
			set(state.finished, 0),
			set(state.time, 0),
			set(state.frameTime, 0),
		]),
		cond(eq(gestureState, State.ACTIVE), [
			set(state.position, add(offset, value)),
			set(config.toValue, snapPoint(state.position, velocity, snapPoint)),
		]),
		cond(eq(gestureState, State.END), [timing(clock, state, config)]),
		state.position,
	]);
};

function GestureHandler({ translateY, max }) {
	const { gestureHandler, translation, velocity, state } =
		usePanGestureHandler();

	const snapPoints = new Array(max)
		.fill(0)
		.map((_, i) => -i * ITEM_HEIGHT || 20);

	useCode(
		() =>
			set(
				translateY,
				withSnapInterval({
					value: translation.y,
					velocity: velocity.y,
					state,
					snapPoints,
				})
			),
		[]
	);
	return (
		<PanGestureHandler {...gestureHandler}>
			<Animated.View style />
		</PanGestureHandler>
	);
}

export default GestureHandler;
