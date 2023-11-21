import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import icons from "../../../constants/icons";
import images from "../../../constants/images";
import { COLORS } from "../../../constants/theme";

const TaskItem = () => {
  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: COLORS.white,
          padding: 16,
          borderRadius: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
          <View
            style={{
              width: 55,
              height: 50,
              borderRadius: 10,
              backgroundColor: "#E6E7FB",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image source={icons.task} />
          </View>

          <View>
            <Text style={{ fontWeight: 700, fontSize: 16 }}>Fintech Task</Text>

            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Image
                source={images.profile}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: COLORS.white,
                }}
              />
              <Image
                source={images.profile}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: COLORS.white,
                  marginLeft: -10,
                }}
              />
              <Image
                source={images.profile}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: COLORS.white,
                  marginLeft: -10,
                }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            width: 55,
            height: 55,
            borderRadius: 55,
            backgroundColor: "#64BEF2",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 48,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: COLORS.gray }}>85%</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskItem;
