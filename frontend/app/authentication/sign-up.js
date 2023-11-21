import { Stack } from "expo-router";
import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";
import SignUp from "../../components/authentication/SignUp";
import { COLORS } from "../../constants/theme";

const SignUpPage = () => {
  const { height } = Dimensions.get("window");
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Create Account
            </Text>
          ),
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <ScrollView>
        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: COLORS.gray2,
            backgroundColor: "white",
            height,
            paddingHorizontal: 20,
            paddingVertical: 30,
          }}
        >
          <SignUp />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpPage;
