import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import Home from "./home";
import Explore from "./explore";
import Favorites from "./favorites";
import { colors } from "../../../constance/theme";
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
	padding: 0,
	paddingBottom: 10,
	height: 80,
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

const BottomTabNavigator = () => {
	const themecolor = useTheme().colors;

	return (
		<Tab.Navigator
			initialRouteName="Home"
			activeColor={colors.red}
			tabBarHideKeyboard={true}
			headerShown={false}
			inactiveColor={themecolor.icon}
			barStyle={{ paddingBottom: 8 }}
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
							name={focused ? "grid" : "grid-outline"}
							color={focused ? themecolor.btn : themecolor.icon}
							size={24}
						/>
					),
				}}
			/>

			<Tab.Screen
				name="Explore"
				component={Explore}
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
							name={focused ? "location" : "location-outline"}
							color={focused ? themecolor.btn : themecolor.icon}
							size={24}
						/>
					),
				}}
			/>

			<Tab.Screen
				name="Favorites"
				component={Favorites}
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
							name={focused ? "heart" : "heart-outline"}
							color={focused ? themecolor.btn : themecolor.icon}
							size={24}
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
							size={24}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;
