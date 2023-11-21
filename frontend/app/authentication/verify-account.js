import { Stack } from "expo-router";
import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";
import VerifyAccount from "../../components/authentication/VerifyAccount";
import { COLORS } from "../../constants/theme";

const VerifyAccountPage = () => {
  const { height } = Dimensions.get("window");
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Verify Code
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
            height: height,
            paddingHorizontal: 20,
            paddingVertical: 30,
          }}
        >
          <VerifyAccount />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerifyAccountPage;
