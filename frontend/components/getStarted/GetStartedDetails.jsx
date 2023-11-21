import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants/theme";

const GetStartedDetails = ({ activeTab, setActiveTab, title, description }) => {
  const router = useRouter();
  return (
    <View style={{ marginTop: 40, padding: 15 }}>
      <View
        style={{
          backgroundColor: COLORS.primary,
          padding: 35,
          borderRadius: 30,
          // borderTopLeftRadius: 30,
          // borderTopRightRadius: 30,
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 27,
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            {title}
          </Text>
        </View>

        <Text
          style={{
            color: COLORS.lightWhite,
            textAlign: "center",
            marginTop: 20,
            lineHeight: 20,
          }}
        >
          {description}
        </Text>

        <View style={{ marginTop: 40, flexDirection: "row", gap: 10 }}>
          <TouchableOpacity onPress={() => setActiveTab(1)}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: activeTab === 1 ? COLORS.white : COLORS.gray3,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab(2)}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: activeTab === 2 ? COLORS.white : COLORS.gray3,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab(3)}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: activeTab === 3 ? COLORS.white : COLORS.gray3,
              }}
            />
          </TouchableOpacity>
        </View>

        {activeTab !== 3 ? (
          <TouchableOpacity
            style={{
              marginTop: 30,
              paddingHorizontal: 35,
              paddingVertical: 16,
              backgroundColor: COLORS.white,
              borderRadius: 15,
            }}
            onPress={() => router.push("/authentication/sign-in")}
          >
            <Text
              style={{
                fontWeight: 800,
                color: COLORS.primary,
                fontSize: 17,
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={{ marginTop: 30, gap: 20, width: "100%" }}>
            <TouchableOpacity
              style={{
                paddingHorizontal: 35,
                paddingVertical: 16,
                backgroundColor: COLORS.white,
                borderRadius: 15,
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontWeight: 800,
                  color: COLORS.primary,
                  fontSize: 17,
                  textAlign: "center",
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingHorizontal: 35,
                paddingVertical: 16,
                backgroundColor: COLORS.secondary,
                borderRadius: 15,
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontWeight: 800,
                  color: COLORS.white,
                  fontSize: 17,
                  textAlign: "center",
                }}
              >
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default GetStartedDetails;
