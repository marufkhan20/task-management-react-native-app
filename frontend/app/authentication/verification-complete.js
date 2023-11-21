import { Stack, useRouter } from "expo-router";
import { Image, SafeAreaView, Text, View } from "react-native";
import Button from "../../components/ui/Button";
import icons from "../../constants/icons";
import { COLORS } from "../../constants/theme";

const VerificationComplete = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.primary,
          position: "relative",
        }}
      >
        <View
          style={{
            width: 170,
            height: 170,
            borderRadius: 85,
            backgroundColor: "#868DFF",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 120,
              width: 120,
              borderRadius: 60,
              backgroundColor: COLORS.primary,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={icons.tick} style={{ width: 50, height: 50 }} />
          </View>
        </View>

        <Text
          style={{
            marginTop: 48,
            marginBottom: 28,
            color: COLORS.white,
            fontWeight: 700,
            fontSize: 28,
          }}
        >
          Account Verified
        </Text>
        <Text style={{ color: COLORS.white }}>
          Your account has been verified successfully,
        </Text>
        <Text style={{ color: COLORS.white }}>
          now let's enjoy our features
        </Text>

        <View
          style={{
            position: "absolute",
            bottom: 50,
            left: 20,
            right: 20,
          }}
        >
          <Button type="secondary" onPress={() => router.push("/")}>
            Get Started
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerificationComplete;
