import React from "react";
import { StyleSheet, View } from "react-native";
import FeedContainer from "../Containers/FeedContainer";
export default function Home() {
  return (
    <View style={styles.container}>
      <FeedContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1
  }
});
