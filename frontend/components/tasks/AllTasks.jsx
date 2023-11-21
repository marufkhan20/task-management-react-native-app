import React, { useState } from "react";
import { View } from "react-native";
import TaskHeader from "./TaskHeader";
import TaskItem from "./TaskItem";
import TaskTab from "./TaskTab";

const AllTasks = () => {
  const [activeTasks, setActiveTasks] = useState("all-tasks");
  const [showTodayTasks, setShowTodayTasks] = useState(true);
  const [showNextTasks, setShowNextTasks] = useState(true);
  return (
    <View style={{ padding: 20 }}>
      <TaskTab activeTasks={activeTasks} setActiveTasks={setActiveTasks} />

      {/* today tasks */}
      <View style={{ marginTop: 30 }}>
        <TaskHeader
          showTasks={showTodayTasks}
          setShowTasks={setShowTodayTasks}
          title="Today Tasks"
          taskCount={3}
        />
        <View
          style={{
            gap: 10,
            height: showTodayTasks ? "auto" : 0,
            overflow: "hidden",
          }}
        >
          <TaskItem success />
          <TaskItem />
          <TaskItem />
        </View>
      </View>

      {/* next tasks */}
      <View style={{ marginTop: 30 }}>
        <TaskHeader
          showTasks={showNextTasks}
          setShowTasks={setShowNextTasks}
          title="Next Tasks"
          taskCount={5}
        />
        <View
          style={{
            gap: 10,
            height: showNextTasks ? "auto" : 0,
            overflow: "hidden",
          }}
        >
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </View>
      </View>
    </View>
  );
};

export default AllTasks;
