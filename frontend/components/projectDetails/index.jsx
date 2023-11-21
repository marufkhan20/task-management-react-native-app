import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import images from "../../constants/images";
import { COLORS } from "../../constants/theme";
import TaskItem from "../tasks/TaskItem";

const ProjectDetails = () => {
  const [subTasks, setSubTasks] = useState([
    {
      id: 1,
      name: "Task One",
      status: "completed",
    },
    {
      id: 2,
      name: "Task Two",
      status: "ongoing",
    },
    {
      id: 3,
      name: "Task Three",
      status: "backlog",
    },
    {
      id: 4,
      name: "Task Four",
      status: "backlog",
    },
  ]);
  return (
    <View style={{ padding: 20, gap: 20 }}>
      <View style={{ position: "relative" }}>
        <Image
          source={images.project}
          style={{
            width: "100%",
            height: 200,
            borderWidth: 1,
            borderColor: COLORS.primary,
            borderRadius: 10,
          }}
        />
      </View>

      <View style={{ gap: 15, marginTop: 10 }}>
        <Text style={{ fontWeight: 700, fontSize: 18 }}>Description</Text>
        <Text style={{ color: COLORS.gray }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of.
        </Text>
      </View>

      <View>
        <View
          style={{
            gap: 15,
            marginTop: 10,
            flexDirection: "row",
            gap: 30,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: 700, fontSize: 16, width: "40%" }}>
            Hourly Rate
          </Text>
          <Text
            style={{
              color: COLORS.gray,
              fontSize: 15,
              fontWeight: 500,
              width: "60%",
            }}
          >
            10 $
          </Text>
        </View>

        <View
          style={{
            gap: 15,
            marginTop: 10,
            flexDirection: "row",
            gap: 30,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: 700, fontSize: 16, width: "40%" }}>
            Total Hours
          </Text>
          <Text
            style={{
              color: COLORS.gray,
              fontSize: 15,
              fontWeight: 500,
              width: "60%",
            }}
          >
            5h 20m
          </Text>
        </View>

        <View
          style={{
            gap: 15,
            marginTop: 10,
            flexDirection: "row",
            gap: 30,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: 700, fontSize: 16, width: "40%" }}>
            Project Price
          </Text>
          <Text
            style={{
              color: COLORS.gray,
              fontSize: 15,
              fontWeight: 500,
              width: "60%",
            }}
          >
            500 $
          </Text>
        </View>

        <View
          style={{
            gap: 15,
            marginTop: 10,
            flexDirection: "row",
            gap: 30,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: 700, fontSize: 16, width: "40%" }}>
            Status
          </Text>
          <View>
            <TouchableOpacity
              style={{
                paddingHorizontal: 8,
                paddingVertical: 3,
                backgroundColor: "#F9781D",
                borderRadius: 5,
              }}
            >
              <Text
                style={{ color: COLORS.white, fontSize: 13, fontWeight: 500 }}
              >
                Backlog
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            gap: 15,
            marginTop: 10,
            flexDirection: "row",
            gap: 30,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: 700, fontSize: 16, width: "40%" }}>
            Start Date
          </Text>
          <Text
            style={{
              color: COLORS.gray,
              fontSize: 15,
              fontWeight: 500,
              width: "60%",
            }}
          >
            Dec 27, 2023
          </Text>
        </View>

        <View
          style={{
            gap: 15,
            marginTop: 10,
            flexDirection: "row",
            gap: 30,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: 700, fontSize: 16, width: "40%" }}>
            End Date
          </Text>
          <Text
            style={{
              color: COLORS.gray,
              fontSize: 15,
              fontWeight: 500,
              width: "60%",
            }}
          >
            Dec 31, 2023
          </Text>
        </View>

        <View
          style={{
            gap: 15,
            marginTop: 10,
            flexDirection: "row",
            gap: 30,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: 700, fontSize: 16, width: "40%" }}>
            Live Link
          </Text>
          <View>
            <TouchableOpacity
              style={{
                paddingHorizontal: 8,
                paddingVertical: 3,
                backgroundColor: COLORS.primary,
                borderRadius: 5,
              }}
            >
              <Text
                style={{ color: COLORS.white, fontSize: 13, fontWeight: 500 }}
              >
                Preview Project
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {subTasks?.length > 0 && (
        <View
          style={{
            gap: 30,
            marginTop: 10,
          }}
        >
          <Text style={{ fontWeight: 700, fontSize: 18 }}>
            Sub Task ({subTasks?.length})
          </Text>

          <View style={{ gap: 15 }}>
            {subTasks?.map((subTask) => (
              <View key={subTask?.id}>
                <TaskItem success={subTask?.status === "completed"} />
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default ProjectDetails;
