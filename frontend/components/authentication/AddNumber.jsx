import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { icons } from "../../constants";
import { COLORS } from "../../constants/theme";
import { useAddNumberMutation } from "../../features/auth/authApi";
import Button from "../ui/Button";
import Input from "../ui/Input";

const AddNumber = () => {
  const router = useRouter();
  const route = useRoute();
  const { id } = route?.params;

  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const [addPhone, { data: user, isLoading, isError, error }] =
    useAddNumberMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      const { data } = error || {};
      setErrors(data.error);
    }

    if (!isLoading && !isError && user?._id) {
      router.push(`/authentication/verify-account?id=${id}`);
    }
  }, [user, isLoading, isError, error]);

  // submit handler
  const submitHandler = () => {
    // check validation
    const validationErrors = {};

    if (!phone) {
      validationErrors.phone = "Phone number is required!";
    }

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    addPhone({
      id,
      phone,
    });
  };
  return (
    <View>
      <Text style={{ color: COLORS.gray, fontWeight: "500", lineHeight: 24 }}>
        Enter your phone number, we will send a authentication code
      </Text>

      <View
        style={{
          flexDirection: "row",
          gap: 15,
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <Input
          value={phone}
          onChangeText={(value) => setPhone(value)}
          placeholder="Type your phone number"
          keyboardType="number-pad"
        />
      </View>
      {errors?.phone && (
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Image style={{ width: 16, height: 16 }} source={icons.close} />
          <Text style={{ color: COLORS.gray }}>{errors?.phone}</Text>
        </View>
      )}

      <View style={{ marginTop: 60 }}>
        <Button onPress={submitHandler}>Continue</Button>
      </View>
    </View>
  );
};

export default AddNumber;
