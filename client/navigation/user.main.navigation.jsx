import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
	BottomTabNavigator,
	Filter,
	PostDetails,
	Recommendations,
	Search,
	SendFeedback,
	SpotDetails,
	UserProfile,
} from "../screens";

const Stack = createStackNavigator();

function UserMainNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false, animationEnabled: false }}
			>
				<Stack.Screen name="main" component={BottomTabNavigator} />
				<Stack.Screen name="profile-screen" component={UserProfile} />
				<Stack.Screen name="search" component={Search} />
				<Stack.Screen name="filter" component={Filter} />
				<Stack.Screen name="recommendations" component={Recommendations} />
				<Stack.Screen name="spot-details" component={SpotDetails} />
				<Stack.Screen name="post-details" component={PostDetails} />
				<Stack.Screen name="feedback" component={SendFeedback} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default UserMainNavigator;
