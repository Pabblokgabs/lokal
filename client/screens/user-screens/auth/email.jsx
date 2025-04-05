import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import reusableStyles from "../../../components/reusable/styles";
import TopBar from "../../../components/topBar";
import TextInputContainer from "../../../components/reusable/text.input";
import Btn from "../../../components/btn";
import OTPVerificationComponent from "../../../components/OTP.verification";
import Constants from 'expo-constants';
import {
	getRegistrationProgress,
	saveRegistrationProgress,
} from "../../../lib/utils/registration.utils";
import { useMutation } from "@tanstack/react-query";
import PendingSpinner from "../../../components/spinners/pending.spinner";
import LoadingSpinner from "../../../components/spinners/loading.spinner";
import { emailRegex } from "../../../lib/regex";

function Email() {
	const themeColor = useTheme().colors;
	const navigation = useNavigation();

	const [active, setActive] = useState("email");
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState(null);
	const [code, setCode] = useState(null);
	const [token, setToken] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		emailRegex(email, setEmailError);
	});

	useEffect(() => {
		getRegistrationProgress("Email").then((progressData) => {
			if (progressData) {
				console.log(progressData);

				setEmail(progressData.email);
			}
		});
	}, [email]);

	console.log(Constants.manifest.extra.SERVER_URI);

	const handlePersonal = () => {
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	};

	const { data, error, isError, mutate, isPending } = useMutation({
		mutationFn: async (email) => {
			try {
				const res = await fetch(`${process.env.SERVER_URI}/auth/email`, {
					method: "POST",
					headers: {
						"content-Type": "application/json",
					},
					body: JSON.stringify({ email }),
				});

				const data = await res.json();
				if (!res.ok) throw new Error(data.error || "something went wrong");

				if (data.error) {
					throw new Error(data.error);
				}

				return data;
			} catch (error) {
				console.error(error);
			}
		},

		onSuccess: () => {
			if (email.trim() !== "") {
				saveRegistrationProgress("Email", { email });
			}

			setToken(data.token);

			setActive("otp");
		},
	});

	const {
		error: codeError,
		isError: isCodeError,
		mutate: handleCode,
		isPending: codePending,
	} = useMutation({
		mutationFn: async ({ code, email, token }) => {
			try {
				const res = await fetch(
					`${process.env.SERVER_URI}/auth/otp-verification`,
					{
						method: "POST",
						headers: {
							"content-Type": "application/json",
						},
						body: JSON.stringify({ email, code, token }),
					}
				);

				const data = await res.json();
				if (!res.ok) throw new Error(data.error || "something went wrong");

				if (data.error) {
					throw new Error(data.error);
				}

				return data;
			} catch (error) {
				console.error(error);
			}
		},

		onSuccess: () => {
			navigation.navigate("personal-information");

			setActive("email");
			handlePersonal();
		},
	});

	const handleNext = () => {
		mutate(email);
	};

	const handleVerify = () => {
		handleCode(code, email, token);
	};

	return (
		<>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
					<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
						{active === "email" ? (
							<>
								<TopBar arrowPress={() => navigation.goBack()} />

								<Text
									style={[
										reusableStyles.lgHeader,
										{
											color: themeColor.text,
											textAlign: "center",
											marginTop: 50,
										},
									]}
								>
									Email address:
								</Text>

								<View style={{ height: 10 }} />

								<Text
									style={[
										reusableStyles.text,
										{
											color: themeColor.secondText,
											textAlign: "center",
										},
									]}
								>
									Verification code will be sent to this email, Please make sure
									it is valid.
								</Text>

								<View style={{ height: 20 }} />

								<TextInputContainer
									I_icon={"mail-outline"}
									inputHint={"Email"}
									placeholder={"example@gmail.com"}
									onChangeText={(text) => setEmail(text)}
									value={email}
								/>

								{emailError && (
									<Text
										style={[
											reusableStyles.otherText,
											{ color: themeColor.red },
										]}
									>
										{emailError}
									</Text>
								)}

								<View style={{ height: 20 }} />

								<Btn
									text={isPending ? "Loading..." : "Next"}
									onPress={() => handleNext()}
								/>

								<View style={{ height: 20 }} />

								<Text
									style={{
										color: themeColor.secondText,
										textAlign: "center",
									}}
								>
									By signing Up, you agree to the terms of services and privacy
									and privacy policy.
								</Text>
							</>
						) : (
							<>
								<View style={{ height: 30 }} />

								<OTPVerificationComponent
									isBtn={true}
									email={email}
									setCode={(text) => setCode(text)}
									onBtnPress={() => handleVerify()}
									code={code}
								/>
							</>
						)}
					</View>

					{(isPending || codePending) && (
						<PendingSpinner width={150} height={150} />
					)}
				</SafeAreaView>
			)}
		</>
	);
}

export default Email;
