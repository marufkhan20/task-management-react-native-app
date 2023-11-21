import { Image, View } from "react-native";
import images from "../../constants/images";
import GetStartedDetails from "./GetStartedDetails";

const GetStartedTwo = ({ activeTab, setActiveTab }) => {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={images.getStarted2}
        style={{ marginTop: 90 }}
        resizeMode="contain"
      />

      <GetStartedDetails
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        title="Organize Your Task & Projects Easily"
        description="It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout."
      />
    </View>
  );
};

export default GetStartedTwo;
