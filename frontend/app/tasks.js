import { Stack, useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Footer from "../components/common/Footer";
import AllTasks from "../components/tasks/AllTasks";
import icons from "../constants/icons";
import { COLORS } from "../constants/theme";

const Tasks = () => {
  const router = useRouter();
  const { height } = Dimensions.get("window");
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>My Tasks</Text>
          ),
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerRight: () => (
            <View
              style={{ flexDirection: "row", gap: 20, alignItems: "center" }}
            >
              <TouchableOpacity>
                <Image
                  style={{ width: 25, height: 25, opacity: 0.5 }}
                  source={icons.search}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{ width: 20, height: 20, opacity: 0.5 }}
                  source={icons.more}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <>
        <ScrollView>
          <View
            style={{
              height: height + 50,
              backgroundColor: COLORS.white,
              borderTopWidth: 1,
              borderColor: COLORS.gray2,
            }}
          >
            <AllTasks />
          </View>
        </ScrollView>
        <Footer />
      </>
    </SafeAreaView>
  );
};

export default Tasks;
