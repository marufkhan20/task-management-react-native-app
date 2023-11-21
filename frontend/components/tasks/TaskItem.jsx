import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icons from "../../constants/icons";
import { COLORS } from "../../constants/theme";

const TaskItem = ({ success }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.gray5,
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderLeftWidth: 10,
        borderColor: success ? COLORS.success : COLORS.gray2,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text style={{ fontWeight: 600, fontSize: 17, marginBottom: 7 }}>
          Define Problem with Client
        </Text>
        <Text style={{ color: COLORS.gray }}>
          Saturday, 12:30 PM - 02:00 PM
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          backgroundColor: success ? COLORS.success : COLORS.gray2,
          borderRadius: 15,
          borderWidth: 5,
          borderColor: success ? "#C9F0D8" : "#D7DDE3",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {success && (
          <Image source={icons.tick} style={{ height: 10, width: 10 }} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;
