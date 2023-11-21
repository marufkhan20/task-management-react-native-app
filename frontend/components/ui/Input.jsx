import React from "react";
import { Image, TextInput, View } from "react-native";
import { COLORS } from "../../constants/theme";

const Input = ({ icon, placeholder, value, type, border, ...props }) => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: border ? "transparent " : COLORS.gray4,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        borderWidth: border ? 1 : 0,
        borderColor: COLORS.primary,
      }}
    >
      {icon && (
        <Image source={icon} style={{ width: 20, height: 20, opacity: 0.5 }} />
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray}
        style={{
          color: COLORS.gray,
          width: "100%",
          backgroundColor: "transparent",
        }}
        textContentType={type}
        value={value}
        {...props}
      />
    </View>
  );
};

export default Input;
