import React, { useEffect, useState } from "react";
import AuthNavigator from "./auth.navigation";
/* import UserMainNavigator from "./user.main.navigation";
import OwnerMainNavigator from "./owner.main";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../components/spinners/loading.spinner"; */

function AppNavigator() {
	const [isAuth, setIsAuth] = useState(false);

	/* const { data, isLoading } = useQuery({
		queryKey: ["authUser"],
		queryFn: async () => {
			try {
				const res = await fetch(`${process.env.SERVER_URI}/common/auth/me`);

				const data = await res.json();

				if (!res.ok) throw new Error(data.error || "something went wrong");
			} catch (error) {
				throw new Error(error);
			}
		},
	});

	if (data) setIsAuth(true);

	if (isLoading) return <LoadingSpinner />;

	if (!isAuth) return <AuthNavigator />;

	if (data.role === "owner") {
		return <OwnerMainNavigator />;
	} else {
		return <UserMainNavigator />;
	} */

	return <AuthNavigator />;
}

export default AppNavigator;
