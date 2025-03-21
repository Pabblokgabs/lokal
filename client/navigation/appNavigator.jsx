import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthNavigator from "./auth.navigation";
import UserMainNavigator from "./user.main.navigation";
import OwnerMainNavigator from "./owner.main";

function AppNavigator() {
	const [isAuth, setIsAAuth] = useState(false);
	const [userRole, setUserRole] = useState(null);

	/* useEffect(() => {
		const checkAuth = async () => {
			const token = AsyncStorage.getItem("accessToken");

      if (token) {
        setIsAAuth(true)
      }

      const role = await AsyncStorage.getItem('role')
      setUserRole(role)
		};
    checkAuth()
	},[]); 

  if (!isAuth) return <AuthNavigator />

  if (userRole === 'owner') {
    return <OwnerMainNavigator />
  } else {
    return <UserMainNavigator />
  } */

    return <UserMainNavigator />
}

export default AppNavigator;
