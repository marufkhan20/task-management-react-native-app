import { Stack } from "expo-router";
import { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import GetStartedOne from "../components/getStarted/GetStartedOne";
import GetStartedThree from "../components/getStarted/GetStartedThree";
import GetStartedTwo from "../components/getStarted/GetStartedTwo";

const tabs = {
  1: GetStartedOne,
  2: GetStartedTwo,
  3: GetStartedThree,
};

const GetStarted = () => {
  const [activeTab, setActiveTab] = useState(1);

  const Tab = tabs[activeTab];
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default GetStarted;
