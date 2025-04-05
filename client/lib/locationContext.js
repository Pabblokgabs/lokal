/* 




// LocationPermissionContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import * as Location from "expo-location";

// Create a Context for the location permissions
const LocationPermissionContext = createContext();

export const useLocationPermission = () => {
  return useContext(LocationPermissionContext);
};

export const LocationPermissionProvider = ({ children }) => {
  const [permissionStatus, setPermissionStatus] = useState(null);

  useEffect(() => {
    const checkLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setPermissionStatus(status);
    };

    checkLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    setPermissionStatus(status);
    return status;
  };

  return (
    <LocationPermissionContext.Provider
      value={{ permissionStatus, requestLocationPermission }}
    >
      {children}
    </LocationPermissionContext.Provider>
  );
};





// LocationPermissionContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import * as Location from "expo-location";

// Create a Context for the location permissions
const LocationPermissionContext = createContext();

export const useLocationPermission = () => {
  return useContext(LocationPermissionContext);
};

export const LocationPermissionProvider = ({ children }) => {
  const [permissionStatus, setPermissionStatus] = useState(null);

  useEffect(() => {
    const checkLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setPermissionStatus(status);
    };

    checkLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    setPermissionStatus(status);
    return status;
  };

  return (
    <LocationPermissionContext.Provider
      value={{ permissionStatus, requestLocationPermission }}
    >
      {children}
    </LocationPermissionContext.Provider>
  );
};







// LocationAccessModal.js
import React from "react";
import { View, Text, Alert } from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import Btn from "../btn"; // Assuming your button component
import { useLocationPermission } from "../contexts/LocationPermissionContext"; // Import the context

const LocationAccessModal = ({ visible, setVisible }) => {
  const { permissionStatus, requestLocationPermission } = useLocationPermission();

  const handleAllowPermission = async () => {
    const status = await requestLocationPermission();
    if (status === "granted") {
      Alert.alert("Location Access Granted", "You can now share your location.");
      setVisible(false); // Close the modal after granting permission
    } else {
      Alert.alert("Permission Denied", "Location access is required for directions.");
    }
  };

  return (
    <Modal
      isVisible={visible}
      animationIn="tada"
      animationOut="tada"
      style={{ margin: 0 }}
    >
      <View style={{ padding: 20, alignItems: "center", justifyContent: "center" }}>
        <Ionicons name="location" size={80} color="#00aaff" />
        <Text style={{ fontSize: 20, marginVertical: 20 }}>What Is Your Location?</Text>
        <Text style={{ textAlign: "center", marginBottom: 30 }}>
          For Directions and Verification, please allow access to your location.
        </Text>
        <Btn
          text="Allow Location Access"
          width="100%"
          onPress={handleAllowPermission}
        />
      </View>
    </Modal>
  );
};

export default LocationAccessModal;






// SomePage.js
import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useLocationPermission } from "../contexts/LocationPermissionContext";
import LocationAccessModal from "../components/LocationAccessModal"; // The modal component

const SomePage = () => {
  const { permissionStatus } = useLocationPermission();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Check permission on mount
    if (permissionStatus !== "granted") {
      setModalVisible(true); // Show modal if location permission is not granted
    }
  }, [permissionStatus]); // Re-run the effect when permission status changes

  if (permissionStatus === null) {
    return <Text>Checking location permission...</Text>;
  }

  return (
    <View>
      {permissionStatus === "granted" ? (
        <Text>Location permission granted! You can use location-based features here.</Text>
      ) : (
        <Text>Location permission is required to use this feature.</Text>
      )}
      <LocationAccessModal visible={modalVisible} setVisible={setModalVisible} />
    </View>
  );
};

export default SomePage;



*/