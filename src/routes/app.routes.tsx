import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Quiz } from "../screens/Quiz";
import { Finish } from "../screens/Finish";
import { History } from "../screens/History";
import { Credits } from "../screens/Credits";
import { Text } from "react-native";

const { Navigator, Screen, Group } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="home" component={Home} />

      <Group screenOptions={{ gestureEnabled: false }}>
        <Screen name="quiz" component={Quiz} />
        <Screen name="finish" component={Finish} />
      </Group>
      <Screen name="history" component={History} />
      <Screen name="credits" component={Credits} />
    </Navigator>
  );
}
