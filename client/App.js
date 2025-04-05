import React from "react";
import { ThemeProvider } from "./lib/ThemeContext";
import AppNavigator from "./navigation/appNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({

});

export default function App() {
	return (
		<ThemeProvider>
			<QueryClientProvider client={queryClient}>
				<AppNavigator />
			</QueryClientProvider>
		</ThemeProvider>
	);
}
