import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
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
    height: height,
    position: "absolute",
    width: width,
    zIndex: 1
  },
  details: {
    alignItems: "stretch",
    color: Colors.white,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    marginBottom: 100,
    marginHorizontal: 20,
    width: width / (3 / 2)
  },
  info: {
    color: Colors.white,
    marginVertical: 5
  },
  music: {
    color: Colors.white
  },
  tags: {
    color: Colors.white,
    flexDirection: "row",
    marginVertical: 5
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
    color: Colors.white,
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 5
  }
});

export default FeedDetails;
