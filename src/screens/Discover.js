import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { screen } from "../styles/screen";

export default function Discover() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Discover</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    position: "absolute",
    height: height,
    width: width,
    zIndex: -1
  },
  text: {
    color: "blue",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    fontWeight: "bold"
  }
});
