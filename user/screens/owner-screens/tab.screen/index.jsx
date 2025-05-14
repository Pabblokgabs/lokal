import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import Home from "./home";
import Menu from "./menu";
import Manage from "./manage";
import { Image } from "react-native";

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
	height: 50,
	position: "absolute",
	bottom: 0,
	left: 0,
	right: 0,
	borderTopLeftRadius: 15,
	borderTopRightRadius: 15,
	shadowOffset: { width: 0, height: -2 },
	shadowOpacity: 0.1,
	shadowRadius: 5,
	elevation: 1,
	borderTopWidth: 1,
};

const OwnerTabNavigator = () => {
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
						backgroundColor: themecolor.tab,
						shadowColor: themecolor.tabBrd,
						borderTopColor: themecolor.tabBrd
					},
					tabBarShowLabel: false,
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name={focused ? "home" : "home-outline"}
							color={focused ? themecolor.btn : themecolor.icon}
							size={20}
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
						backgroundColor: themecolor.tab,
						shadowColor: themecolor.tabBrd,
						borderTopColor: themecolor.tabBrd
					},
					tabBarShowLabel: false,
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<Entypo
							name={'sound-mix'}
							color={focused ? themecolor.btn : themecolor.icon}
							size={20}
							style={{transform: [{ rotate: '90deg' }]}}
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
						backgroundColor: themecolor.tab,
						shadowColor: themecolor.tabBrd,
						borderTopColor: themecolor.tabBrd
					},
					tabBarShowLabel: false,
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name={focused ? "person" : "person-outline"}
							color={focused ? themecolor.btn : themecolor.icon}
							size={20}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default OwnerTabNavigator;
