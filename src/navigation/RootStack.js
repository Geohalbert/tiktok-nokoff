import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTabNavigator from "./HomeTabNavigator";
import CameraScreen from "../screens/Camera";

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Main"
        component={HomeTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Live"
        component={CameraScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
