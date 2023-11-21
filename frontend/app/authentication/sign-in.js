import { Stack } from "expo-router";
import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";
import SignIn from "../../components/authentication/SignIn";
import { COLORS } from "../../constants/theme";

const SignInPage = () => {
  const { height } = Dimensions.get("window");
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Sign In</Text>
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
          <SignIn />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInPage;
