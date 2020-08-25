import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    height,
    position: "absolute",
    width,
    zIndex: -1
  },
  text: {
    alignItems: "center",
    color: "blue",
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "center"
  }
});
