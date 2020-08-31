import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import FeedDetails from "../components/FeedDetails";
import Sidebar from "../components/Sidebar";
// import BottomModal from "../modals/BottomModal";
import { Video } from "expo-av";
// import useModal from "../utils/useModal";
const { height, width } = Dimensions.get("window");
function FeedScreen({ video, play }) {
  return (
    <View>
      <View style={styles.topBuffer} />
      <View style={styles.screenContainer}>
        <Video
          source={{ uri: video.uri }}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={play}
          style={styles.video}
        />
      </View>
      <FeedDetails video={video} />
      <Sidebar video={video} />
      <View style={styles.botBuffer} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "black",
    height,
    width,
    position: "absolute",
    zIndex: -1
  },
  video: {
    height: "100%",
    width: "100%"
  },
  topBuffer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "70%"
  },
  botBuffer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "50%"
  }
});

export default FeedScreen;
