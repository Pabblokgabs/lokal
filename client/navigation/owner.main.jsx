import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
	ContactUs,
	CreateEvent,
	EventDetails,
	Feedback,
	HelpCenter,
	Inbox,
	ListSpot,
	Messages,
	Notification,
	OwnerProfile,
	OwnerTabNavigator,
} from "../screens";

const Stack = createStackNavigator();

function OwnerMainNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false, animationEnabled: false }}
			>
				{/* <Stack.Screen name="tab" component={OwnerTabNavigator} />
				<Stack.Screen name="help-center" component={HelpCenter} />
				<Stack.Screen name="contact" component={ContactUs} />
				<Stack.Screen name="feedback" component={Feedback} />
				<Stack.Screen name="event-details" component={EventDetails} />
				<Stack.Screen name="profile" component={OwnerProfile} />
				<Stack.Screen name="messages" component={Messages} />
				<Stack.Screen name="inbox" component={Inbox} />
				<Stack.Screen name="notification" component={Notification} />
				<Stack.Screen name="create" component={CreateEvent} /> */}
				<Stack.Screen name="list" component={ListSpot} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default OwnerMainNavigator;
