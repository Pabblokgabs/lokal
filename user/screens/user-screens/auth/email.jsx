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
import {
	getRegistrationProgress,
	saveRegistrationProgress,
} from "../../../lib/utils/registration.utils";
import { useMutation } from "@tanstack/react-query";
import PendingSpinner from "../../../components/spinners/pending.spinner";
import LoadingSpinner from "../../../components/spinners/loading.spinner";
import Toast from "react-native-toast-message";
import { emailRegex } from "../../../lib/regex";
import styles from "./style";

function Email() {
	const { colors } = useTheme();
	const navigation = useNavigation();

	const [active, setActive] = useState("email");
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const [code, setCode] = useState(null);
	const [token, setToken] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		emailRegex(email, setEmailError);
	}, [email]);

	useEffect(() => {
		getRegistrationProgress("Email").then((progressData) => {
			if (progressData && progressData.email) {
				setEmail(progressData.email);
			}
		});
	}, []);

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
				Toast.show({
					type: "error",
					text1: "Error",
					text2: error.message || "Something went wrong. Please try again.",
				});
			}
		},

		onSuccess: (data) => {
			if (email.trim() !== "") {
				saveRegistrationProgress("Email", { email });
			}

			setToken(data.token);
			setActive("otp");
			Toast.show({
				type: "success",
				text1: "Success",
				text2: "Verification email sent!",
			});
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
				Toast.show({
					type: "error",
					text1: "Verification Failed",
					text2: error.message || "Invalid code or error occurred.",
				});
			}
		},

		onSuccess: () => {
			navigation.navigate("personal-information");
			setActive("email");
			handlePersonal();
			Toast.show({
				type: "success",
				text1: "Verification Successful",
				text2: "You are successfully verified!",
			});
		},
	});

	const handleNext = () => {
		if (!email || emailError) {
			Toast.show({
				type: "error",
				text1: "Invalid Email",
				text2: "Please enter a valid email address.",
			});
			return;
		}
		mutate(email);
	};

	const handleVerify = () => {
		if (!token || !code || !email) {
			setEmailError("Please check your email and code.");
			Toast.show({
				type: "error",
				text1: "Verification Error",
				text2: "Please provide a valid email and code.",
			});
			return;
		}
		handleCode({ code, email, token });
	};

	return (
		<>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
					<View style={[reusableStyles.wrapper, { paddingHorizontal: 15 }]}>
						{active === "email" ? (
							<>
								<TopBar arrowPress={() => navigation.goBack()} />
								<View style={{ height: 50 }} />

								<Text
									style={[
										reusableStyles.lgHeader,
										styles.email_AD(colors.text),
									]}
								>
									Email address:
								</Text>

								<View style={{ height: 10 }} />

								<Text
									style={[
										reusableStyles.text,
										styles.email_AD(colors.secondText),
									]}
								>
									Verification code will be sent to this email. Please make sure
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
											{ color: colors.red },
										]}
									>
										{emailError}
									</Text>
								)}

								<View style={{ height: 20 }} />

								<Btn
									text={isPending ? "Loading..." : "Next"}
									onPress={() => setActive("code")}
								/>

								<View style={{ height: 20 }} />

								<Text
									style={[
										reusableStyles.text,
										styles.email_AD(colors.secondText),
									]}
								>
									By signing up, you agree to the terms of services and privacy
									policy.
								</Text>
							</>
						) : (
							<>
								<View style={{ height: 30 }} />

								<OTPVerificationComponent
									isBtn={true}
									email={email}
									setCode={(text) => setCode(text)}
									onBtnPress={() => navigation.navigate("personal-information")}
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
			<Toast />
		</>
	);
}

export default Email;
