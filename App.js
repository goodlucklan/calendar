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
    <NavigationContainer>
      <Tab.Navigator screenOptions={{

      }}>
        <Tab.Screen
          name="Calendar1"
          component={FirstCalendar}
          options={{
            tabBarIcon: () => <FontAwesome5 name="calendar" size={24} color="black" />
          }}
        />
        <Tab.Screen name="Calendar2" component={SecondCalendar} options={{
          tabBarIcon: () => <FontAwesome5 name="calendar-alt" size={24} color="black" />
        }} />
        {/* <WebView
        style={styles.container}
        source={{ uri: "https://portalestudiante.utp.edu.pe" }}
        originWhitelist={['*']}
        androidLayerType={'hardware'}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scalesPageToFit={true}
        scrollEnabled={false}
        automaticallyAdjustContentInsets={false}
        startInLoadingState={true}
        mixedContentMode={'always'}
        overScrollMode={'never'}
      /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
});
