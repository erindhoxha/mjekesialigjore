import { StatusBar } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Prata_400Regular } from "@expo-google-fonts/prata";
import { Cardo_700Bold } from "@expo-google-fonts/cardo";
import { Routes } from "./src/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Prata_400Regular,
    Cardo_700Bold,
  });

  if (!fontsLoaded) {
    return null; // Keep the splash screen visible
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Routes />
    </GestureHandlerRootView>
  );
}
