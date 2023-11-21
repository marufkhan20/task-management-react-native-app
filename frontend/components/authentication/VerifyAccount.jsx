import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { icons } from "../../constants";
import { COLORS } from "../../constants/theme";
import { useAccountVerifyMutation } from "../../features/auth/authApi";
import Button from "../ui/Button";

const VerifyAccount = () => {
  const router = useRouter();
  const route = useRoute();
  const { id } = route?.params;

  const [code, setCode] = useState("");
  const [errors, setErrors] = useState({});

  // update code
  const updateCode = (singleCode) => {
    setCode(`${code}${singleCode}`);
  };

  const [accountVerify, { data: user, isLoading, isError, error }] =
    useAccountVerifyMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      const { data } = error || {};
      setErrors(data.error);
    }

    if (!isLoading && !isError && user?._id) {
      router.push(`/authentication/verification-complete`);
    }
  }, [user, isLoading, isError, error]);

  // submit handler
  const submitHandler = () => {
    // check validation
    const validationErrors = {};

    if (!code) {
      validationErrors.code = "Verify Code is required!";
    }

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    accountVerify({
      id,
      code: Number(code),
    });
  };
  return (
    <View>
      <Text style={{ color: COLORS.gray, fontWeight: "500" }}>
        Please enter the code we just sent to email
      </Text>
      <Text style={{ fontWeight: 500, marginTop: 5 }}>mdm326040@gmail.com</Text>

      <View
        style={{
          flexDirection: "row",
          gap: 15,
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <View
          style={{
            height: 55,
            width: 55,
            backgroundColor: COLORS.gray4,
            borderRadius: 10,
          }}
        >
          <TextInput
            style={{
              height: "100%",
              width: "100%",
              textAlign: "center",
              fontSize: 22,
            }}
            keyboardType="number-pad"
            onChangeText={(value) => updateCode(value)}
          />
        </View>
        <View
          style={{
            height: 55,
            width: 55,
            backgroundColor: COLORS.gray4,
            borderRadius: 10,
          }}
        >
          <TextInput
            style={{
              height: "100%",
              width: "100%",
              textAlign: "center",
              fontSize: 22,
            }}
            keyboardType="number-pad"
            onChangeText={(value) => updateCode(value)}
          />
        </View>
        <View
          style={{
            height: 55,
            width: 55,
            backgroundColor: COLORS.gray4,
            borderRadius: 10,
          }}
        >
          <TextInput
            style={{
              height: "100%",
              width: "100%",
              textAlign: "center",
              fontSize: 22,
            }}
            keyboardType="number-pad"
            onChangeText={(value) => updateCode(value)}
          />
        </View>
        <View
          style={{
            height: 55,
            width: 55,
            backgroundColor: COLORS.gray4,
            borderRadius: 10,
          }}
        >
          <TextInput
            style={{
              height: "100%",
              width: "100%",
              textAlign: "center",
              fontSize: 22,
            }}
            keyboardType="number-pad"
            onChangeText={(value) => updateCode(value)}
          />
        </View>
        <View
          style={{
            height: 55,
            width: 55,
            backgroundColor: COLORS.gray4,
            borderRadius: 10,
          }}
        >
          <TextInput
            style={{
              height: "100%",
              width: "100%",
              textAlign: "center",
              fontSize: 22,
            }}
            keyboardType="number-pad"
            onChangeText={(value) => updateCode(value)}
          />
        </View>
        <View
          style={{
            height: 55,
            width: 55,
            backgroundColor: COLORS.gray4,
            borderRadius: 10,
          }}
        >
          <TextInput
            style={{
              height: "100%",
              width: "100%",
              textAlign: "center",
              fontSize: 22,
            }}
            keyboardType="number-pad"
            onChangeText={(value) => updateCode(value)}
          />
        </View>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text
          style={{ textAlign: "center", color: COLORS.gray, fontWeight: 700 }}
        >
          Resend code in <Text style={{ color: COLORS.primary }}>00:53</Text>
        </Text>
      </View>

      {errors?.code && (
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Image style={{ width: 16, height: 16 }} source={icons.close} />
          <Text style={{ color: COLORS.gray }}>{errors?.code}</Text>
        </View>
      )}

      <View style={{ marginTop: 60 }}>
        <Button onPress={submitHandler}>Continue</Button>
      </View>
    </View>
  );
};

export default VerifyAccount;
