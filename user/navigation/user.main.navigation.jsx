import React, { useContext } from "react";
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
	Inbox,
	Notification,
	Popular,
	Recommended,
	Messages,
} from "../screens";
import { StatusBar } from "react-native";
import { ThemeContext } from "../lib/ThemeContext";
import { useTheme } from "react-native-paper";

const Stack = createStackNavigator();

function UserMainNavigator() {
  const { theme } = useContext(ThemeContext);
		const themeColor = useTheme().colors; 
	


	return (
		<NavigationContainer>
			<StatusBar
				barStyle={theme === "dark" ? "light-content" : "dark-content"}
				backgroundColor={theme === "dark" ? themeColor.bg : themeColor.secondBg}
				translucent={false}
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
				<Stack.Screen name="messages" component={Messages} />
				<Stack.Screen name="inbox" component={Inbox} />
				<Stack.Screen name="notification" component={Notification} />
				<Stack.Screen name="popular" component={Popular} />
				<Stack.Screen name="recommended" component={Recommended} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default UserMainNavigator;
