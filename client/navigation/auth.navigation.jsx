import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
	Email,
	FinalStage,
	Login,
	OTPVerification,
	OwnerEmailVerification,
	PersonalInfo,
	Photos,
	ProfilePhoto,
	RegisterType,
	Registration,
	SetPassword,
	SpotInformation,
	Welcome,
	SettingUpProfile
} from "../screens";

const Stack = createStackNavigator();

function AuthNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false, animationEnabled: false }}
			>
				<Stack.Screen name="welcome" component={Welcome} />
				<Stack.Screen name="login" component={Login} />
				<Stack.Screen
					name="personal-OR-spot-account"
					component={RegisterType}
				/>

				 {/* Sign up route for the user */}
				<Stack.Screen name="email" component={Email} />
				<Stack.Screen name="password" component={SetPassword} />
				<Stack.Screen name="verify-email" component={OTPVerification} />
				<Stack.Screen name="registration" component={Registration} />
				<Stack.Screen name="profile-photo" component={ProfilePhoto} />
				<Stack.Screen name="setting-profile" component={SettingUpProfile} />

				{/* Registration process for the owner of the spot */}
				<Stack.Screen name="personal-information" component={PersonalInfo} />
				<Stack.Screen
					name="owner-otp-verification"
					component={OwnerEmailVerification}
				/>
				<Stack.Screen name="spot-information" component={SpotInformation} />
				<Stack.Screen name="spot-photos" component={Photos} />
				<Stack.Screen name="final-stage" component={FinalStage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default AuthNavigator;
