import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../store";

const Layout = () => {
  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  );
};

export default Layout;
