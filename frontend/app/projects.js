import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Footer from "../components/common/Footer";
import ProjectItem from "../components/common/ProjectItem";
import icons from "../constants/icons";
import images from "../constants/images";
import { COLORS } from "../constants/theme";

const projects = [
  {
    id: 1,
    title: "Gaming Platform Web & Mobile App",
  },
  {
    id: 2,
    title: "Gaming Platform Web & Mobile App",
  },
  {
    id: 3,
    title: "Gaming Platform Web & Mobile App",
  },
];

const Projects = () => {
  const { height } = Dimensions.get("window");
  const router = useRouter();
  const [filter, setFilter] = useState("");

  const options = [
    { label: "Backlog", value: "Backlog" },
    { label: "Ongoing", value: "Ongoing" },
    { label: "Completed", value: "Completed" },
  ];
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              My Projects
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
          {projects?.length > 0 ? (
            <View
              style={{
                backgroundColor: "#fff",
                borderTopWidth: 1,
                borderColor: COLORS.gray2,
                padding: 20,
                marginBottom: 60,
              }}
            >
              <View
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.gray2,
                  borderRadius: 15,
                  marginBottom: 30,
                  width: 180,
                  backgroundColor: COLORS.white,
                }}
              >
                <RNPickerSelect
                  placeholder={{
                    label: "Filter",
                    value: null,
                  }}
                  items={options}
                  onValueChange={(value) => setFilter(value)}
                  value={filter}
                />
              </View>

              <View style={{ gap: 20 }}>
                {projects?.map((project) => (
                  <ProjectItem border key={project?.id} project={project} />
                ))}
              </View>
            </View>
          ) : (
            <View
              style={{
                height: height - 55,
                backgroundColor: "#fff",
                borderTopWidth: 1,
                borderColor: COLORS.gray2,
                paddingVertical: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={images.projectsPlaceholder}
                style={{ marginTop: -70 }}
              />
              <Text style={{ marginTop: 30, fontWeight: 700, fontSize: 22 }}>
                Planning Your Task,
              </Text>
              <Text style={{ marginBottom: 20, fontWeight: 700, fontSize: 22 }}>
                Task Your Plan
              </Text>
              <Text style={{ color: COLORS.gray }}>
                Create task to manage and tracking
              </Text>
              <Text style={{ color: COLORS.gray }}>
                your project easily instantly
              </Text>
              <Text style={{ color: COLORS.gray }}>incredibly</Text>
            </View>
          )}
        </ScrollView>
        <Footer />
      </>
    </SafeAreaView>
  );
};

export default Projects;
