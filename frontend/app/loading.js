import { Stack, useRouter } from "expo-router";
import { Image, SafeAreaView, View } from "react-native";
import icons from "../constants/icons";

const Home = () => {
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
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
        <Image source={icons.logo} resizeMode="contain" />
        <Image
          source={icons.loading}
          resizeMode="contain"
          style={{ position: "absolute", bottom: 50, width: 70 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
