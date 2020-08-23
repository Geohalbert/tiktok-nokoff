import React from "react";
import { Dimensions, Text, StyleSheet, View } from "react-native";
import { Colors } from "../styles/colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const FeedDetails = props => {
  const { video } = props;

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.user}>{video.user}</Text>
        <View style={styles.info}>
          <Text style={styles.title}>{video.title}</Text>
          <View style={styles.tags}>
            {video.tags.map((tag, index) => (
              <View key={"tag" + index}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>
        <Text style={styles.music}>{video.description}</Text>
      </View>
    </View>
  );
};

//styling is garbage, but it works for now
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: height,
    width: width,
    zIndex: 1
  },
  details: {
    width: width / (3 / 2),
    flex: 1,
    color: Colors.white,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "stretch",
    marginBottom: 100,
    marginHorizontal: 20
  },
  info: {
    color: Colors.white,
    marginVertical: 5
  },
  tags: {
    flexDirection: "row",
    color: Colors.white,
    marginVertical: 5
  },
  tagText: {
    color: Colors.white,
    marginVertical: 5,
    marginHorizontal: 5
  },
  title: {
    color: Colors.white
  },
  user: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.white,
    marginVertical: 5
  },
  music: {
    color: Colors.white
  }
});

export default FeedDetails;
