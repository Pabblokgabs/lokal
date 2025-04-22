import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { useTheme } from "react-native-paper";
import reusableStyles from "../reusable/styles";

const ConfirmExitModal = ({ isVisible, onConfirm, modalText }) => {
  const { colors } = useTheme(); 

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={handleCancel}
      backdropColor={colors.bg}
      backdropOpacity={0.7} 
      style={[reusableStyles.wrapper, {backgroundColor: colors.bg}]}
    >
      <View
        style={{
          backgroundColor: colors.card,
          padding: 20,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: colors.text, fontSize: 18, marginBottom: 20 }}>
          {modalText}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <TouchableOpacity
            onPress={handleCancel} 
            style={{
              backgroundColor: colors.secondBtn,
              padding: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white" }}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onConfirm}
            style={{
              backgroundColor: colors.error,
              padding: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white" }}>Exit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmExitModal;
