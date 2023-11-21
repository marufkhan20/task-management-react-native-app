import { useRouter } from "expo-router";
import React from "react";
import { FlatList, View } from "react-native";
import ProjectItem from "../../common/ProjectItem";
import Heading from "../Heading";

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

const RecentProjects = () => {
  const router = useRouter();
  return (
    <View>
      <Heading
        title="Recent Projects"
        onPress={() => router.push("/projects")}
      />
      <View style={{ marginTop: 25 }}>
        <FlatList
          data={projects}
          renderItem={({ item }) => (
            <View
              style={{
                width: 250,
              }}
            >
              <ProjectItem project={item} />
            </View>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ columnGap: 20 }}
          horizontal
        />
      </View>
    </View>
  );
};

export default RecentProjects;
