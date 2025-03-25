import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
	Email,
	ForgotPassword,
	OnBoarding,
	PersonalInfo,
	ResetPassword,
	SelectPreferences,
	SignIn,
	SetPassword,
	FinalStage,
} from "../screens";
import { OnBoardingProvider } from "../lib/hooks/useSignIn";

const Stack = createStackNavigator();

function AuthNavigator() {
	return (
		<OnBoardingProvider>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{ headerShown: false, animationEnabled: false }}
				>
					{/* Common screens auth routes */}
					{/* <Stack.Screen name="onboarding" component={OnBoarding} />
					<Stack.Screen name="signin" component={SignIn} />
					<Stack.Screen name="forgot-password" component={ForgotPassword} />
					<Stack.Screen name="reset-password" component={ResetPassword} /> */}

					{/* User screens auth routes */}
					{/* <Stack.Screen name="email" component={Email} />
					<Stack.Screen name="personal-information" component={PersonalInfo} /> */}
					<Stack.Screen name="preference" component={SelectPreferences} />
					<Stack.Screen name="set-password" component={SetPassword} />
					<Stack.Screen name="final-stage" component={FinalStage} />
				</Stack.Navigator>
			</NavigationContainer>
		</OnBoardingProvider>
	);
}

export default AuthNavigator;
