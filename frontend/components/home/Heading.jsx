import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../constants/theme";

const Heading = ({ title, onPress }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: 700 }}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={{ color: COLORS.gray, fontWeight: 600, fontSize: 16 }}>
          View All
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Heading;
