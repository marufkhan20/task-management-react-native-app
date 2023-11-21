import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icons from "../../constants/icons";
import { COLORS } from "../../constants/theme";
import { useRegisterMutation } from "../../features/auth/authApi";
import Button from "../ui/Button";
import Input from "../ui/Input";

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const [register, { data: user, isLoading, isError, error }] =
    useRegisterMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      const { data } = error || {};
      setErrors(data.error);
    }

    if (!isLoading && !isError && user?._id) {
      router.push(`/authentication/add-number?id=${user?._id}`);
    }
  }, [user, isLoading, isError, error, email]);

  // submit handler
  const submitHandler = () => {
    // check validation
    const validationErrors = {};

    if (!name) {
      validationErrors.name = "Name is required!";
    }

    if (!email) {
      validationErrors.email = "Email is required!";
    }

    if (!password) {
      validationErrors.password = "Password is required!";
    }

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    register({
      name,
      email,
      password,
    });
  };
  return (
    <View>
      <Text style={{ color: COLORS.gray, fontWeight: "500" }}>
        Create account and enjoy all services
      </Text>

      <View style={{ marginTop: 25, gap: 15 }}>
        <Input
          icon={icons.user}
          placeholder="Type your username"
          type="text"
          value={name}
          onChangeText={(value) => setName(value)}
        />
        {errors?.name && (
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Image style={{ width: 16, height: 16 }} source={icons.close} />
            <Text style={{ color: COLORS.gray }}>{errors?.name}</Text>
          </View>
        )}
        <Input
          icon={icons.mail}
          placeholder="Type your email"
          type="email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        {errors?.email && (
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Image style={{ width: 16, height: 16 }} source={icons.close} />
            <Text style={{ color: COLORS.gray }}>{errors?.email}</Text>
          </View>
        )}
        <Input
          icon={icons.lock}
          placeholder="Type your password"
          type="password"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        {errors?.password && (
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Image style={{ width: 16, height: 16 }} source={icons.close} />
            <Text style={{ color: COLORS.gray }}>{errors?.password}</Text>
          </View>
        )}
        <View>
          <Text style={{ lineHeight: 24, fontSize: 16 }}>
            I agree to the company{" "}
            <Text style={{ color: COLORS.primary, fontWeight: 500 }}>
              Terms of Service
            </Text>{" "}
            and{" "}
            <Text style={{ color: COLORS.primary, fontWeight: 500 }}>
              Privacy Policy
            </Text>
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 30 }}>
        <Button onPress={submitHandler} loading={isLoading}>
          Sign Up
        </Button>
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 50,
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
            onPress={() => router.push("/authentication/sign-in")}
          >
            <Text style={{ color: COLORS.primary, fontWeight: 600 }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
