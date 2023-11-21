import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/theme";

const Button = ({ type, children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        padding: 15,
        backgroundColor:
          type === "secondary" || type === "border"
            ? COLORS.white
            : COLORS.primary,
        borderRadius: 15,
        borderWidth: type === "border" ? 1 : 0,
        borderColor: COLORS.primary,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color:
            type === "secondary" || type === "border"
              ? COLORS.primary
              : COLORS.white,
          textAlign: "center",
          fontWeight: 700,
          fontSize: 17,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
