import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
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
import { ThemeContext } from "../lib/ThemeContext";
import { useTheme } from "react-native-paper";

const Stack = createStackNavigator();

function OwnerMainNavigator() {
	const { theme } = useContext(ThemeContext);
	const themeColor = useTheme().colors;

	return (
		<NavigationContainer>
			<StatusBar
				barStyle={theme === "dark" ? "light-content" : "dark-content"}
				backgroundColor={theme === "dark" ? themeColor.bg : themeColor.primary}
			/>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					animationEnabled: false,
					cardStyleInterpolator: () => ({
						cardStyle: { opacity: 1 },
					}),
				}}
			>
				<Stack.Screen name="tab" component={OwnerTabNavigator} />
				<Stack.Screen name="help-center" component={HelpCenter} />
				<Stack.Screen name="contact" component={ContactUs} />
				<Stack.Screen name="feedback" component={Feedback} />
				<Stack.Screen name="event-details" component={EventDetails} />
				<Stack.Screen name="profile" component={OwnerProfile} />
				<Stack.Screen name="messages" component={Messages} />
				<Stack.Screen name="inbox" component={Inbox} />
				<Stack.Screen name="notification" component={Notification} />
				<Stack.Screen name="create" component={CreateEvent} />
				<Stack.Screen name="list" component={ListSpot} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default OwnerMainNavigator;
