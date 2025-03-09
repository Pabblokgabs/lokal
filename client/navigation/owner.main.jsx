import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { OwnerBottomTabNavigator, OwnerProfile, SendFeedback } from "../screens";

const Stack = createStackNavigator();

function OwnerMainNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown: false, animationEnabled: false}}>
        <Stack.Screen name="owner-main" component={OwnerBottomTabNavigator}/>
        <Stack.Screen name="feedback" component={SendFeedback}/>
        <Stack.Screen name="profile" component={OwnerProfile}/>
      </Stack.Navigator>
		</NavigationContainer>
	);
}

export default OwnerMainNavigator;
