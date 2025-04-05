import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveSearchHistory = async (searchText) => {
	console.log(searchText);

	try {
		const storedHistory = await AsyncStorage.getItem("searchHistory");

		const parsedHistory = storedHistory ? JSON.parse(storedHistory) : [];

		if (!parsedHistory.includes(searchText.toLowerCase())) {
			parsedHistory.push(searchText.toLowerCase());
			await AsyncStorage.setItem(
				"searchHistory",
				JSON.stringify(parsedHistory)
			);

			console.log("saved search history");
		}
	} catch (error) {
		console.log("Error is saving search history", error);
	}
};

export const retrieveSearchHistory = async (setValue) => {
	try {
		const storedHistory = await AsyncStorage.getItem("searchHistory");

		const parsedHistory = storedHistory ? JSON.parse(storedHistory) : [];
		console.log("search history retrieved", parsedHistory);
		setValue(parsedHistory);
	} catch (error) {
		console.log("Error is geting search history", error);
	}
};
