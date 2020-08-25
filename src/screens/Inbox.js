import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
export default function Inbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Inbox</Text>
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
