import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {} from "../screens";

const Stack = createStackNavigator();

function AuthNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false, animationEnabled: false }}
			></Stack.Navigator>
		</NavigationContainer>
	);
}

export default AuthNavigator;
