import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icons from "../../constants/icons";

const TaskHeader = ({ title, taskCount, showTasks, setShowTasks }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: showTasks ? 25 : 0,
      }}
    >
      <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
        <TouchableOpacity onPress={() => setShowTasks(!showTasks)}>
          {showTasks ? (
            <Image source={icons.upBlack} style={{ opacity: 0.5 }} />
          ) : (
            <Image source={icons.bottomBlack} style={{ opacity: 0.5 }} />
          )}
        </TouchableOpacity>
        <Text style={{ fontWeight: 700, fontSize: 18, marginLeft: 5 }}>
          {title}
        </Text>
        <View
          style={{
            color: "red",
            width: 22,
            height: 22,
            borderWidth: 1,
            borderColor: "red",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "red" }}>{taskCount}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Image
          source={icons.more}
          style={{ width: 20, height: 8, opacity: 0.5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TaskHeader;
