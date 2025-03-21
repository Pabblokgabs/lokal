import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
	BottomTabNavigator,
	HelpCenter,
	Preference,
	Profile,
	Review,
	Feedback,
	ContactUs,
	SpotDetails,
	Search,
	EventView,
	Message,
	Notification,
} from "../screens";

const Stack = createStackNavigator();

function UserMainNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false, animationEnabled: false }}
			>
				<Stack.Screen name="main" component={BottomTabNavigator} />
				<Stack.Screen name="preference" component={Preference} />
				<Stack.Screen name="profile" component={Profile} />
				<Stack.Screen name="help-center" component={HelpCenter} />
				<Stack.Screen name="rating" component={Review} />
				<Stack.Screen name="feedback" component={Feedback} />
				<Stack.Screen name="contact-us" component={ContactUs} />
				<Stack.Screen name="spot-details" component={SpotDetails} />
				<Stack.Screen name="event-view" component={EventView} />
				<Stack.Screen name="search" component={Search} />
				<Stack.Screen name="message" component={Message} />
				<Stack.Screen name="notification" component={Notification} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default UserMainNavigator;
