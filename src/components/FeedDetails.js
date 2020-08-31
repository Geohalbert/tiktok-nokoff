import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Colors } from "../styles/colors";

const { height, width } = Dimensions.get("window");
const FeedDetails = ({ video }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.user}>{video.user}</Text>
      <Text style={styles.title}>{video.title}</Text>
      <Text style={styles.tags}>{video.tags}</Text>
      {/* <Text style={styles.music}>{video.description}</Text> */}
    </View>
  );
};

//styling is garbage, but it works for now
const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    bottom: 0,
    flexDirection: "column",
    paddingLeft: 10,
    paddingTop: 20,
    position: "absolute",
    width: "65%"
  },
  music: {
    color: Colors.white
  },
  tags: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 5,
    lineHeight: 20
  },
  title: {
    color: Colors.white
  },
  user: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 10
  }
});

export default FeedDetails;
