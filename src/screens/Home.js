import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { screen } from "../styles/screen";

export default function Home() {
  return (
    <View style={screen.container}>
      <Text style={screen.text}>Home</Text>
    </View>
  );
}

StyleSheet.create(screen);
