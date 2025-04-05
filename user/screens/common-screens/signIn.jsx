import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../components/reusable/styles";
import Btn from "../../components/btn";
import TextInputContainer from "../../components/reusable/text.input";
import { AuthContext } from "../../lib/hooks/auth";
import { useMutation } from "@tanstack/react-query";
import LoadingSpinner from "../../components/spinners/loading.spinner";
import PendingSpinner from "../../components/spinners/pending.spinner";
import TopBar from "../../components/topBar";

function SignIn() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const { setRegisterOption } = useContext(AuthContext);

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [isLoading, setIsLoading] = useState(false);

	const handleFormData = (value, text) => {
		setFormData({ ...formData, [value]: text });
	};

	const handleLoading = () => {
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	};

	const { mutate, isPending, error, isError } = useMutation({
		mutationFn: async ({email, password}) => {
			try {
				const res = await fetch(`${process.env.SERVER_URI}/auth/signin`, {
					method: "POST",
					header: {
						"content-Type": "application/json",
					},
					body: JSON.stringify({ email, password }),
				});

				const data = await res.json();
				if (!res.ok) throw new Error(data.error || "something went wrong");

				if (data.error) {
					throw new Error(data.error);
				}

				return data;
			} catch (error) {
				console.error(error);
				throw new Error(error)
			}
		},
		onSuccess: () => {
			handleLoading();
		},
	});

	const handleSubmit = () => {
		mutate(formData);
	};

	return (
		<>
			{isLoading ? (
				<LoadingSpinner text={"Logging in..."} />
			) : (
				<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
					{isPending && <PendingSpinner />}
					<View
						style={[reusableStyles.wrapper, { paddingHorizontal: 15, gap: 10 }]}
					>
						<TopBar arrowPress={() => navigation.goBack()} />
						<View style={{ height: 50 }} />

						<Text
							style={[
								reusableStyles.lgHeader,
								{ color: themeColor.text, textAlign: "center" },
							]}
						>
							Sign In
						</Text>

						<Text
							style={[
								reusableStyles.text,
								{ color: themeColor.secondText, textAlign: "center" },
							]}
						>
							Hi Welcome back, you've been missed
						</Text>

						<TextInputContainer
							inputHint={"Email"}
							placeholder={"example@gmail.com"}
							I_icon={"mail-outline"}
							value={formData.email}
							onChangeText={(text) => handleFormData("email", text)}
						/>

						<View style={{ height: 5 }} />

						<TextInputContainer
							inputHint={"Password"}
							placeholder={"********"}
							M_icon={"lock-outline"}
							secureTextEntry={true}
							value={formData.password}
							onChangeText={(text) => handleFormData("password", text)}
						/>

						<TouchableOpacity
							style={{ alignItems: "flex-end", marginTop: 5 }}
							onPress={() => navigation.navigate("forgot-password")}
						>
							<Text
								style={[
									reusableStyles.text,
									{
										color: themeColor.btn,
										borderBottomWidth: 1,
										borderBottomColor: themeColor.btn,
									},
								]}
							>
								Forgot Passsword
							</Text>
						</TouchableOpacity>

						<View style={{ height: 10 }} />

						<Btn text={"Sign In"} onPress={() => handleSubmit} />

						<View style={{ height: 10 }} />

						<Text
							style={[
								reusableStyles.text,
								{ color: themeColor.text, textAlign: "center" },
							]}
						>
							Already have an account?{" "}
							<Text
								onPress={() => {
									navigation.goBack(), setRegisterOption(true);
								}}
								style={{
									color: themeColor.btn,
									borderBottomWidth: 1,
									borderBottomColor: themeColor.btn,
								}}
							>
								Sign Up
							</Text>
						</Text>
					</View>
				</SafeAreaView>
			)}
		</>
	);
}

export default SignIn;
