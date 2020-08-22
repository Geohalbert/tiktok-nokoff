import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { screen } from "../styles/screen";

export default function Discover() {
  return (
    <View style={screen.container}>
      <Text style={screen.text}>Discover</Text>
    </View>
  );
}

StyleSheet.create(screen);
