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
import CreateTask from "../components/createTask";
import icons from "../constants/icons";
import { COLORS } from "../constants/theme";

const CreateTaskPage = () => {
  const router = useRouter();
  const { height } = Dimensions.get("window");
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Create New Task
            </Text>
          ),
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerRight: () => (
            <View
              style={{ flexDirection: "row", gap: 20, alignItems: "center" }}
            >
              <TouchableOpacity>
                <Image
                  style={{ width: 15, height: 15, opacity: 0.5 }}
                  source={icons.tickBlack}
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
              backgroundColor: COLORS.white,
              borderTopWidth: 1,
              borderColor: COLORS.gray2,
            }}
          >
            <CreateTask />
          </View>
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default CreateTaskPage;
