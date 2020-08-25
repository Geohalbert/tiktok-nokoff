import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Colors } from "../styles/colors";

const { height, width } = Dimensions.get("window");
const FeedDetails = ({ video }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.user}>{video.user}</Text>
      <View style={styles.info}>
        <Text style={styles.title}>{video.title}</Text>
        <View style={styles.tags}>
          {video.tags.map((tag, index) => (
            <Text key={"tag" + index} style={styles.tagText}>
              {tag}
            </Text>
          ))}
        </View>
      </View>
      <Text style={styles.music}>{video.description}</Text>
    </View>
  );
};

//styling is garbage, but it works for now
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    padding: 10,
    width: "60%",
    flexDirection: "column",
    bottom: 90,
    zIndex: 11
  },
  info: {
    color: Colors.white,
    marginVertical: 5
  },
  music: {
    color: Colors.white
  },
  tags: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 5,
    color: Colors.white,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  tagText: {
    color: Colors.white,
    marginHorizontal: 5,
    marginVertical: 5
  },
  title: {
    color: Colors.white
  },
  user: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 10,
    color: Colors.white
  }
});

export default FeedDetails;
