import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icons from "../../constants/icons";
import { COLORS } from "../../constants/theme";
import Button from "../ui/Button";
import Input from "../ui/Input";

const SignIn = () => {
  const router = useRouter();
  return (
    <View>
      <Text style={{ color: COLORS.gray, fontWeight: "500" }}>
        Give creadential to sign in your account
      </Text>

      <View style={{ marginTop: 25, gap: 15 }}>
        <Input icon={icons.mail} placeholder="Type your email" type="email" />
        <View>
          <Input
            icon={icons.lock}
            placeholder="Type your password"
            type="password"
          />
          <TouchableOpacity>
            <Text
              style={{
                textAlign: "right",
                fontWeight: 600,
                color: COLORS.primary,
                fontSize: 16,
                marginTop: 10,
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop: 50 }}>
        <Button>Sign In</Button>
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 100,
          }}
        >
          <View
            style={{ width: "30%", height: 1, backgroundColor: COLORS.gray2 }}
          />
          <Text style={{ color: COLORS.gray, fontWeight: 500 }}>
            or continue with
          </Text>
          <View
            style={{ width: "30%", height: 1, backgroundColor: COLORS.gray2 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 15,
            alignContent: "center",
            justifyContent: "center",
            marginTop: 60,
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                paddingVertical: 12,
                paddingHorizontal: 25,
                borderWidth: 1,
                borderColor: COLORS.gray2,
                borderRadius: 15,
              }}
            >
              <Image style={{ width: 25, height: 30 }} source={icons.google} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                paddingVertical: 12,
                paddingHorizontal: 25,
                borderWidth: 1,
                borderColor: COLORS.gray2,
                borderRadius: 15,
              }}
            >
              <Image style={{ width: 25, height: 30 }} source={icons.apple} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                paddingVertical: 12,
                paddingHorizontal: 25,
                borderWidth: 1,
                borderColor: COLORS.gray2,
                borderRadius: 15,
              }}
            >
              <Image
                style={{ width: 25, height: 30 }}
                source={icons.linkedin}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 70,
            paddingBottom: 20,
          }}
        >
          <Text style={{ color: COLORS.gray }}>Don't have account? </Text>
          <TouchableOpacity
            onPress={() => router.push("/authentication/sign-up")}
          >
            <Text style={{ color: COLORS.primary, fontWeight: 600 }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
