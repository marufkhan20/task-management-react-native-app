import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icons from "../../constants/icons";
import images from "../../constants/images";
import { COLORS } from "../../constants/theme";

const ProjectItem = ({ project, border }) => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push(`/project-details/1`)}>
      <View
        style={{
          width: "100%",
          backgroundColor: COLORS.white,
          // height: 300,
          borderRadius: 15,
          padding: 8,
          overflow: "hidden",
          borderWidth: border ? 1 : 0,
          borderColor: COLORS.gray2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#69CFCB",
              width: 30,
              height: 30,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image style={{ height: 16, width: 16 }} source={icons.games} />
          </View>
          <Text style={{ fontWeight: 700, fontSize: 17 }} numberOfLines={2}>
            {project?.title}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <Text
            style={{
              backgroundColor: COLORS.gray4,
              color: COLORS.gray,
              paddingVertical: 3,
              paddingHorizontal: 16,
              borderRadius: 20,
            }}
          >
            June 18, 2023
          </Text>
          <Text
            style={{
              backgroundColor: COLORS.gray4,
              color: COLORS.gray,
              paddingVertical: 3,
              paddingHorizontal: 16,
              borderRadius: 20,
            }}
          >
            16
          </Text>
          <Text
            style={{
              backgroundColor: COLORS.gray4,
              color: COLORS.gray,
              paddingVertical: 3,
              paddingHorizontal: 16,
              borderRadius: 20,
            }}
          >
            09
          </Text>
        </View>

        <Image
          source={images.project}
          style={{
            width: "100%",
            height: 150,
            borderRadius: 15,
            marginTop: 20,
          }}
        />

        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 5,
          }}
        >
          <View style={{ flexDirection: "row" }}>
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
          <View style={{ width: 140 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text>Progress</Text>
              <Text>78%</Text>
            </View>
            <View
              style={{
                height: 6,
                width: "100%",
                borderRadius: 3,
                marginTop: 5,
                backgroundColor: COLORS.gray2,
              }}
            >
              <View
                style={{
                  height: 6,
                  width: "78%",
                  borderRadius: 3,
                  backgroundColor: "#59B9F1",
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProjectItem;
