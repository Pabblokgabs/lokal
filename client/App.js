import React from "react";
import { ThemeProvider } from "./lib/ThemeContext";
import AppNavigator from "./navigation/appNavigator";

export default function App() {
	return (
		<ThemeProvider>
			<AppNavigator />
		</ThemeProvider>
	);
}
