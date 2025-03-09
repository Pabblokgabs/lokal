import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import Home from "./home";
import Manage from "./manage";
import Menu from "./menu";

const Tab = createBottomTabNavigator();

/* const tabBarStyles = {
	padding: 20,
	borderRadius: 20,
	height: 80,
	position: "absolute",
	bottom: 15,
	left: 15,
	right: 15,
	borderWidth: 0,
}; */

const tabBarStyles = {
	padding: 20,
	height: 80,
	position: "absolute",
	bottom: 0,
	left: 0,
	right: 0,
	borderTopWidth: 0.5,
};

const OwnerBottomTabNavigator = () => {
	const themecolor = useTheme().colors;

	return (
		<Tab.Navigator
			initialRouteName="Home"
			tabBarHideKeyboard={true}
			headerShown={false}
			inactiveColor={themecolor.icon}
			barStyle={{ paddingBottom: 48 }}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarStyle: {
						...tabBarStyles,
						/* backgroundColor: themecolor.secondaryBackground, */
						backgroundColor: themecolor.background,
						borderTopColor: themecolor.borderColor,
					},
					tabBarShowLabel: false,
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name={focused ? "grid" : "grid-outline"}
							color={focused ? themecolor.btn : themecolor.icon}
							size={22}
						/>
					),
				}}
			/>

			<Tab.Screen
				name="Manage"
				component={Manage}
				options={{
					tabBarStyle: {
						...tabBarStyles,
						/* backgroundColor: themecolor.secondaryBackground, */
						backgroundColor: themecolor.background,
						borderTopColor: themecolor.borderColor,
					},
					tabBarShowLabel: false,
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name={focused ? "compass" : "compass-outline"}
							color={focused ? themecolor.btn : themecolor.icon}
							size={26}
						/>
					),
				}}
			/>

			<Tab.Screen
				name="menu"
				component={Menu}
				options={{
					tabBarStyle: {
						...tabBarStyles,
						/* backgroundColor: themecolor.secondaryBackground, */
						backgroundColor: themecolor.background,
						borderTopColor: themecolor.borderColor,
					},
					tabBarShowLabel: false,
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name={focused ? "menu" : "menu"}
							color={focused ? themecolor.btn : themecolor.icon}
							size={26}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default OwnerBottomTabNavigator;
