import { Stack } from "expo-router";
import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";
import AddNumber from "../../components/authentication/AddNumber";
import { COLORS } from "../../constants/theme";

const AddNumberPage = () => {
  const { height } = Dimensions.get("window");
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Verification
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
          <AddNumber />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddNumberPage;
