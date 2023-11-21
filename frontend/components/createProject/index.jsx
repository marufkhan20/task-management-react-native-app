import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import icons from "../../constants/icons";
import images from "../../constants/images";
import { COLORS } from "../../constants/theme";
import Button from "../ui/Button";
import Input from "../ui/Input";

const CreateProject = () => {
  const [subTasks, setSubTasks] = useState([]);

  const options = [
    { label: "Backlog", value: "Backlog" },
    { label: "Ongoing", value: "Ongoing" },
    { label: "Completed", value: "Completed" },
  ];

  // create new sub task
  const createNewSubTask = () => {
    const id =
      subTasks?.length === 0 ? 1 : subTasks[subTasks?.length - 1]?.id + 1;
    const subTask = {
      id,
      name: "",
      status: "",
    };
    setSubTasks([...subTasks, subTask]);
  };

  // update sub task values
  const updateSubTask = (id, name, value) => {
    const updatedTasks = subTasks?.map((subTask) => {
      if (subTask?.id === id) {
        subTask[name] = value;
        return subTask;
      } else {
        return subTask;
      }
    });

    setSubTasks(updatedTasks);
  };

  // delete sub task
  const deleteSubTask = (id) => {
    const deletedTasks = subTasks?.filter((subTask) => subTask?.id !== id);
    setSubTasks(deletedTasks);
  };
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
        <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            backgroundColor: COLORS.primary,
            borderRadius: 18,
            position: "absolute",
            bottom: 10,
            right: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image style={{ width: 16, height: 16 }} source={icons.edit} />
        </TouchableOpacity>
      </View>
      <View style={{ gap: 15, marginTop: 10 }}>
        <Text style={{ fontWeight: 700, fontSize: 16 }}>Project Name</Text>
        <Input border placeholder="Enter Your Project Name" />
      </View>

      <View style={{ gap: 15, marginTop: 10 }}>
        <Text style={{ fontWeight: 700, fontSize: 16 }}>Project Live Link</Text>
        <Input border placeholder="Enter Your Project Live Link" />
      </View>

      <View style={{ gap: 15, marginTop: 10 }}>
        <Text style={{ fontWeight: 700, fontSize: 16 }}>Hourly Rate</Text>
        <Input border placeholder="10 $" />
      </View>

      <View style={{ gap: 15, marginTop: 10 }}>
        <Text style={{ fontWeight: 700, fontSize: 16 }}>
          Project Description
        </Text>
        <Input
          numberOfLines={4}
          border
          placeholder="Enter Your Project Description"
          multiline
        />
      </View>

      <View style={{ gap: 15, marginTop: 10 }}>
        <Text style={{ fontWeight: 700, fontSize: 16 }}>Timeline</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 30,
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: COLORS.gray4,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 18, height: 18 }}
                source={icons.calendar}
              />
            </View>
            <View>
              <Text style={{ color: COLORS.gray }}>Start Date</Text>
              <Text style={{ fontWeight: 600, color: "#444" }}>
                December 25
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: COLORS.gray4,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 18, height: 18 }}
                source={icons.calendar}
              />
            </View>
            <View>
              <Text style={{ color: COLORS.gray }}>End Date</Text>
              <Text style={{ fontWeight: 600, color: "#444" }}>
                December 31
              </Text>
            </View>
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
        <Text style={{ fontWeight: 700, fontSize: 16 }}>Description</Text>
        <TouchableOpacity>
          <Text style={{ color: COLORS.gray, fontSize: 15, fontWeight: 500 }}>
            Add task description
          </Text>
        </TouchableOpacity>
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
        <Text style={{ fontWeight: 700, fontSize: 16 }}>Status</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
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
          <TouchableOpacity
            style={{
              paddingHorizontal: 8,
              paddingVertical: 3,
              backgroundColor: "#EB4899",
              borderRadius: 5,
            }}
          >
            <Text
              style={{ color: COLORS.white, fontSize: 13, fontWeight: 500 }}
            >
              Ongoing
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 8,
              paddingVertical: 3,
              backgroundColor: COLORS.success,
              borderRadius: 5,
            }}
          >
            <Text
              style={{ color: COLORS.white, fontSize: 13, fontWeight: 500 }}
            >
              Completed
            </Text>
          </TouchableOpacity>
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

          {subTasks?.map((subTask, idx) => (
            <View key={subTask?.id}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontWeight: 700, fontSize: 16 }}>
                  Task {idx?.toString().length === 1 ? `0${idx + 1}` : idx + 1}
                </Text>
                <TouchableOpacity onPress={() => deleteSubTask(subTask?.id)}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={icons.close}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.gray2,
                  padding: 10,
                  borderRadius: 15,
                  gap: 10,
                }}
              >
                <Input
                  border
                  value={subTask?.name}
                  placeholder="Enter Your Task Name"
                  onChangeText={(value) =>
                    updateSubTask(subTask?.id, "name", value)
                  }
                />
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: COLORS.primary,
                    borderRadius: 15,
                  }}
                >
                  <RNPickerSelect
                    placeholder={{
                      label: "Select Task Status...",
                      value: null,
                    }}
                    items={options}
                    onValueChange={(value) =>
                      updateSubTask(subTask?.id, "status", value)
                    }
                    value={subTask?.status}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
      )}

      <Button type="border" onPress={createNewSubTask}>
        + Add Sub Task
      </Button>
      <Button>Create New Project</Button>
    </View>
  );
};

export default CreateProject;
