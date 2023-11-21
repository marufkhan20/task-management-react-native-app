import { Image, View } from "react-native";
import images from "../../constants/images";
import GetStartedDetails from "./GetStartedDetails";

const GetStartedThree = ({ activeTab, setActiveTab }) => {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={images.getStarted3}
        style={{ marginTop: 120, alignSelf: "center" }}
        resizeMode="contain"
      />

      <GetStartedDetails
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        title="Everything you Can Do in this App"
        description="It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout."
      />
    </View>
  );
};

export default GetStartedThree;
