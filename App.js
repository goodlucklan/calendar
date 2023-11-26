import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import FirstCalendar from "./screens/FirstCalendar";
import SecondCalendar from "./screens/SecondCalendar";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{
        uri: "https://main--remarkable-moonbeam-050b7c.netlify.app",
      }}
      originWhitelist={["*"]}
      androidLayerType={"hardware"}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      allowsLinkPreview
      useWebView2
      scalesPageToFit={true}
      scrollEnabled={false}
      automaticallyAdjustContentInsets={false}
      startInLoadingState={true}
      mixedContentMode={"always"}
      overScrollMode={"never"}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
});
