import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icons from "../../constants/icons";
import images from "../../constants/images";
import { COLORS } from "../../constants/theme";

const Header = () => {
  return (
    <View style={{ paddingHorizontal: 20, paddingTop: 50 }}>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", gap: 20 }}>
          <TouchableOpacity>
            <Image
              source={images.profile}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
          </TouchableOpacity>
          <View>
            <Text
              style={{ color: COLORS.white, fontWeight: 700, fontSize: 20 }}
            >
              Jennifer Lyine
            </Text>
            <Text style={{ color: COLORS.gray4 }}>
              Hi Jennifer, Good Morning!
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image source={icons.arrowUp} />
          <Image source={icons.arrowDown} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: COLORS.white,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={icons.bell} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>

      {/* search bar */}
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderRadius: 15,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 25,
          borderWidth: 1,
          borderColor: COLORS.gray4,
        }}
      >
        <Image source={icons.searchWhite} style={{ width: 20, height: 20 }} />
        <TextInput
          placeholder="Find your task"
          placeholderTextColor={COLORS.gray4}
          style={{ color: COLORS.gray4, width: "100%" }}
        />
      </View>
    </View>
  );
};

export default Header;
