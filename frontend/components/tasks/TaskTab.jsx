import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants/theme";

const TaskTab = ({ activeTasks, setActiveTasks }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: COLORS.gray5,
        padding: 3,
        borderRadius: 15,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          width: "33%",
          paddingVertical: 10,
          backgroundColor:
            activeTasks === "all-tasks" ? COLORS.white : COLORS.gray5,
          borderRadius: 15,
        }}
        onPress={() => setActiveTasks("all-tasks")}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 700,
            textAlign: "center",
            color: activeTasks === "all-tasks" ? COLORS.primary : COLORS.gray,
          }}
        >
          All Tasks
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "33%",
          paddingVertical: 10,
          backgroundColor:
            activeTasks === "in-progress" ? COLORS.white : COLORS.gray5,
          borderRadius: 15,
        }}
        onPress={() => setActiveTasks("in-progress")}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 700,
            textAlign: "center",
            color: activeTasks === "in-progress" ? COLORS.primary : COLORS.gray,
          }}
        >
          In Progress
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "33%",
          paddingVertical: 10,
          backgroundColor:
            activeTasks === "completed" ? COLORS.white : COLORS.gray5,
          borderRadius: 15,
        }}
        onPress={() => setActiveTasks("completed")}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 700,
            textAlign: "center",
            color: activeTasks === "completed" ? COLORS.primary : COLORS.gray,
          }}
        >
          Completed
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskTab;
