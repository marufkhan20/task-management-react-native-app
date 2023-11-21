import React from "react";
import { View } from "react-native";
import Heading from "../Heading";
import TaskItem from "./TaskItem";

const projects = [
  {
    id: 1,
    title: "Gaming Platform Web & Mobile App",
  },
  {
    id: 2,
    title: "Gaming Platform Web & Mobile App",
  },
  {
    id: 3,
    title: "Gaming Platform Web & Mobile App",
  },
];

const TodayTasks = () => {
  return (
    <View style={{ marginTop: 25 }}>
      <Heading title="Today Tasks" onPress={() => {}} />
      <View style={{ marginTop: 25, gap: 10 }}>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </View>
    </View>
  );
};

export default TodayTasks;
