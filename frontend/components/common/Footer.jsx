import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import icons from "../../constants/icons";
import { COLORS } from "../../constants/theme";

const Footer = () => {
  const router = useRouter();
  const route = useRoute();
  return (
    <View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: COLORS.white,
          paddingVertical: 20,
          paddingHorizontal: 25,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 1,
          shadowRadius: 10.65,
          elevation: 7,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => router.push("/home")}>
          {route.name === "home" ? (
            <Image
              source={icons.homeActive}
              style={{ width: 24, height: 24 }}
            />
          ) : (
            <Image source={icons.home} style={{ width: 24, height: 24 }} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/tasks")}>
          {route.name === "tasks" ? (
            <Image
              source={icons.listActive}
              style={{ width: 24, height: 24 }}
            />
          ) : (
            <Image source={icons.list} style={{ width: 24, height: 24 }} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            width: 64,
            height: 64,
            borderRadius: 32,
            justifyContent: "center",
            alignItems: "center",
            marginTop: -60,
          }}
          onPress={() => router.push("/create-task")}
        >
          <Image style={{ width: 40, height: 40 }} source={icons.add} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/messages")}>
          {route.name === "messages" ? (
            <Image source={icons.msgactive} style={{ width: 24, height: 24 }} />
          ) : (
            <Image source={icons.msg} style={{ width: 24, height: 24 }} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/profile")}>
          {route.name === "profile" ? (
            <Image
              source={icons.userActive}
              style={{ width: 24, height: 24 }}
            />
          ) : (
            <Image source={icons.user} style={{ width: 24, height: 24 }} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
