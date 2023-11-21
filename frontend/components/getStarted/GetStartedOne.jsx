import { Image, View } from "react-native";
import images from "../../constants/images";
import GetStartedDetails from "./GetStartedDetails";

const GetStartedOne = ({ activeTab, setActiveTab }) => {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={images.getStarted1}
        style={{ marginTop: 70 }}
        resizeMode="contain"
      />

      <GetStartedDetails
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        title="Project Planning App for Everyone"
        description="It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout."
      />
    </View>
  );
};

export default GetStartedOne;
