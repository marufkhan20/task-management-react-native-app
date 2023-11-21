import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Column as Col, Row } from "react-native-flexbox-grid";
import icons from "../../constants/icons";
import { COLORS } from "../../constants/theme";
import Button from "../ui/Button";
import Input from "../ui/Input";

const CreateTask = () => {
  return (
    <View style={{ padding: 20, gap: 20 }}>
      <View style={{ gap: 15, marginTop: 10 }}>
        <Text style={{ fontWeight: 700, fontSize: 16 }}>Task Name</Text>
        <Input border placeholder="Enter Your Task Name" />
      </View>

      <View style={{ gap: 15, marginTop: 10 }}>
        <Text style={{ fontWeight: 700, fontSize: 16 }}>Write a Tag</Text>
        <Input border placeholder="Enter a Tag" />
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
        <Text style={{ fontWeight: 700, fontSize: 16 }}>Task Status</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
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
              To Do
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
              Ongoing
            </Text>
          </TouchableOpacity>
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

      <View style={{ gap: 15, marginTop: 10 }}>
        <Text style={{ fontWeight: 700, fontSize: 16 }}>Select Color</Text>
        <Row size={6} style={{ gap: 15 }}>
          <Col>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                backgroundColor: "#F9BE24",
                borderRadius: 8,
              }}
            />
          </Col>
          <Col>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                backgroundColor: "#976BEC",
                borderRadius: 8,
              }}
            />
          </Col>
          <Col>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                backgroundColor: "#F951B1",
                borderRadius: 8,
              }}
            />
          </Col>
          <Col>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                backgroundColor: "#59C3FF",
                borderRadius: 8,
              }}
            />
          </Col>
          <Col>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                backgroundColor: "#58FFA5",
                borderRadius: 8,
              }}
            />
          </Col>
          <Col>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                backgroundColor: "#25A1F9",
                borderRadius: 8,
              }}
            />
          </Col>
          <Col>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                backgroundColor: "#8BF1F7",
                borderRadius: 8,
              }}
            />
          </Col>
          <Col>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                backgroundColor: "#F96479",
                borderRadius: 8,
              }}
            />
          </Col>
          <Col>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                backgroundColor: "#FAEB66",
                borderRadius: 8,
              }}
            />
          </Col>
        </Row>
      </View>

      <Button>Create Task</Button>
    </View>
  );
};

export default CreateTask;
