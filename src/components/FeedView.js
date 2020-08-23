import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import { Video } from "expo-av";
import FeedDetails from "./FeedDetails";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const FeedView = props => {
  const { play, video } = props;

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: video.uri }}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={play}
        style={{
          width: "100%",
          height: "100%"
        }}
      />
      <FeedDetails video={video} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    position: "absolute",
    height: height,
    width: width,
    zIndex: -1
  }
});

export default FeedView;
