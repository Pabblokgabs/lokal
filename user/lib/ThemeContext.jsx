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
			bg: "#fafafa",
			secondBg: colors.white,
			text: colors.gray700,
			secondText: colors.gray700,
			btn: colors.orange,
			secondBtn: colors.black1,
			cont: colors.gray,
			icon: colors.black2,
			red: colors.red,
			tab: colors.white,
			border: colors.gray1,
			link: colors.blue,
			red: colors.red,
		},
	};

	const md3DarkTheme = {
		...MD3DarkTheme,
		colors: {
			...MD3DarkTheme.colors,
			bg: colors.gray900,
			secondBg: colors.gray800,
			text: colors.gray50,
			secondText: colors.gray300,
			btn: colors.orange,
			secondBtn: colors.black1,
			cont: colors.gray750,
			icon: colors.gray100,
			red: colors.red,
			tab: colors.gray900,
			tabBrd: colors.gray600,
			border: colors.gray600,
			link: colors.blue,
			red: colors.red,
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
		<ThemeContext.Provider
			value={{ theme, toggleTheme, systemTheme, setTheme }}
		>
			<PaperProvider theme={theme === "dark" ? md3DarkTheme : md3LightTheme}>
				{children}
			</PaperProvider>
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider };
