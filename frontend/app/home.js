import { Stack, useRouter } from "expo-router";
import { SafeAreaView, ScrollView, View } from "react-native";
import Footer from "../components/common/Footer";
import Header from "../components/home/Header";
import RecentProjects from "../components/home/recentProjects";
import TodayTasks from "../components/home/todayTasks";
import { COLORS } from "../constants/theme";

const Home = () => {
  const router = useRouter();
  // const { height } = Dimensions.get("window");
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <>
        <ScrollView>
          <View
            style={{
              backgroundColor: COLORS.primary,
            }}
          >
            <Header />
            <View
              style={{
                marginTop: 25,
                backgroundColor: "#eee",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                paddingVertical: 30,
                paddingHorizontal: 20,
                height: "100%",
                marginBottom: 50,
              }}
            >
              <RecentProjects />
              <TodayTasks />
            </View>
          </View>
        </ScrollView>
        <Footer />
      </>
    </SafeAreaView>
  );
};

export default Home;
