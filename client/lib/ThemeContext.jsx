import React, { createContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	MD3DarkTheme,
	MD3LightTheme,
	Provider as PaperProvider,
} from "react-native-paper";
import { colors } from "../constance/theme";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const systemTheme = useColorScheme();
	/* const [theme, setTheme] = useState(systemTheme === "dark" ? "dark" : "light"); */
	const [theme, setTheme] = useState(systemTheme);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadTheme = async () => {
			try {
				const storedTheme = await AsyncStorage.getItem("theme");
				if (storedTheme) {
					setTheme(storedTheme);
				}
			} catch (error) {
				console.error("Failed to load theme from AsyncStorage", error);
			} finally {
				setLoading(false);
			}
		};
		loadTheme();
	}, []);

	const md3LightTheme = {
		...MD3LightTheme,
		colors: {
			...MD3LightTheme.colors,
			background: colors.gray150,
			secondaryBackground: colors.white,
			text: colors.gray800,
			secondaryText: colors.gray600,
			btn: colors.lightGreen,
			link: colors.lightBlue,
			container: colors.gray50,
			icon: colors.gray750,
			red: colors.lightRed,
			secondaryIcon: colors.black,
			borderColor: colors.gray400,
			secondBorderColor: colors.gray600,
		},
	};

	const md3DarkTheme = {
		...MD3DarkTheme,
		colors: {
			...MD3DarkTheme.colors,
			background: colors.gray800,
			secondaryBackground: colors.gray700,
			text: colors.gray100,
			secondaryText: colors.gray300,
			btn: colors.green,
			link: colors.darkBlue,
			container: colors.gray750,
			icon: colors.gray200,
			red: colors.red,
			secondaryIcon: colors.black,
			borderColor: colors.gray600,
			secondBorderColor: colors.gray300,
		},
	};

	const toggleTheme = async () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);

		try {
			await AsyncStorage.setItem("theme", newTheme);
		} catch (error) {
			console.error("Failed to save theme to AsyncStorage", error);
		}
	};

	if (loading) return null;

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, systemTheme, setTheme }}>
			<PaperProvider theme={theme === "dark" ? md3DarkTheme : md3LightTheme}>
				{children}
			</PaperProvider>
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider };
